import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const StoreContext = createContext();
const API_URL = 'https://amantur-back.onrender.com/api';

export function useStore() {
    return useContext(StoreContext);
}

export function StoreProvider({ children }) {
    // Cart
    const [cart, setCart] = useState(() => {
        try { return JSON.parse(localStorage.getItem('zoo_cart') || '[]'); }
        catch { return []; }
    });

    // Auth
    const [user, setUser] = useState(() => {
        try { return JSON.parse(localStorage.getItem('zoo_user') || 'null'); }
        catch { return null; }
    });
    const [token, setToken] = useState(() => localStorage.getItem('zoo_token') || null);

    // UI
    const [cartOpen, setCartOpen] = useState(false);
    const [authOpen, setAuthOpen] = useState(false);
    const [authTab, setAuthTab] = useState('login');
    const [orderOpen, setOrderOpen] = useState(false);
    const [toasts, setToasts] = useState([]);

    // Toast
    const showToast = useCallback((message) => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message }]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
    }, []);

    // Cart actions
    const addToCart = useCallback((product) => {
        setCart(prev => {
            const existing = prev.find(item => item._id === product._id);
            let next;
            if (existing) {
                next = prev.map(item => item._id === product._id ? { ...item, qty: item.qty + 1 } : item);
            } else {
                next = [...prev, { ...product, qty: 1 }];
            }
            localStorage.setItem('zoo_cart', JSON.stringify(next));
            return next;
        });
        showToast(`${product.emoji} ${product.name} добавлен в корзину`);
    }, [showToast]);

    const removeFromCart = useCallback((productId) => {
        setCart(prev => {
            const next = prev.filter(item => item._id !== productId);
            localStorage.setItem('zoo_cart', JSON.stringify(next));
            return next;
        });
    }, []);

    const changeQty = useCallback((productId, delta) => {
        setCart(prev => {
            let next = prev.map(item =>
                item._id === productId ? { ...item, qty: item.qty + delta } : item
            ).filter(item => item.qty > 0);
            localStorage.setItem('zoo_cart', JSON.stringify(next));
            return next;
        });
    }, []);

    const clearCart = useCallback(() => {
        setCart([]);
        localStorage.setItem('zoo_cart', '[]');
    }, []);

    // Auth actions
    const login = useCallback(async (credentials) => {
        try {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            setUser(data.user);
            setToken(data.token);
            localStorage.setItem('zoo_user', JSON.stringify(data.user));
            localStorage.setItem('zoo_token', data.token);
            setAuthOpen(false);
            showToast(`👋 Добро пожаловать, ${data.user.name}!`);
        } catch (err) {
            showToast(`❌ Ошибка: ${err.message}`);
        }
    }, [showToast]);

    const register = useCallback(async (userData) => {
        try {
            const res = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            setUser(data.user);
            setToken(data.token);
            localStorage.setItem('zoo_user', JSON.stringify(data.user));
            localStorage.setItem('zoo_token', data.token);
            setAuthOpen(false);
            showToast(`🎉 Регистрация успешна! Добро пожаловать, ${data.user.name}!`);
        } catch (err) {
            showToast(`❌ Ошибка: ${err.message}`);
        }
    }, [showToast]);

    const logout = useCallback(() => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('zoo_user');
        localStorage.removeItem('zoo_token');
        showToast('👋 Вы вышли из аккаунта');
    }, [showToast]);

    // Checkout
    const checkout = useCallback(async () => {
        if (!user) {
            showToast('🔒 Пожалуйста, войдите, чтобы оформить заказ');
            return;
        }

        try {
            const res = await fetch(`${API_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    items: cart.map(item => ({
                        product: item._id,
                        name: item.name,
                        price: item.price,
                        qty: item.qty,
                        emoji: item.emoji
                    })),
                    total: cart.reduce((sum, item) => sum + item.price * item.qty, 0)
                })
            });

            if (!res.ok) throw new Error('Failed to create order');

            clearCart();
            setCartOpen(false);
            setOrderOpen(true);
        } catch (err) {
            showToast(`❌ Ошибка оформления: ${err.message}`);
        }
    }, [user, token, cart, clearCart, showToast]);

    const value = {
        cart, addToCart, removeFromCart, changeQty, clearCart, checkout,
        user, login, register, logout,
        cartOpen, setCartOpen,
        authOpen, setAuthOpen, authTab, setAuthTab,
        orderOpen, setOrderOpen,
        toasts, showToast,
        API_URL
    };

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
