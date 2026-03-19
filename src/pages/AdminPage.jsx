import { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import './AdminPage.css';

export default function AdminPage() {
    const { API_URL, showToast } = useStore();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '', desc: '', price: '', category: 'food', emoji: '📦', image: ''
    });

    const categories = [
        { id: 'food', label: 'Корма', icon: '🥫' },
        { id: 'toys', label: 'Игрушки', icon: '🎾' },
        { id: 'health', label: 'Здоровье', icon: '💊' },
        { id: 'accessories', label: 'Аксессуары', icon: '🦮' },
        { id: 'hygiene', label: 'Гигиена', icon: '🧼' }
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginData.username === 'aman' && loginData.password === 'maksatbest') {
            setIsLoggedIn(true);
            showToast('✅ Вход выполнен!');
            fetchProducts();
        } else {
            showToast('❌ Неверный логин или пароль');
        }
    };

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/products`);
            const data = await res.json();
            setProducts(data);
        } catch (err) {
            showToast('❌ Ошибка загрузки товаров');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editingProduct ? 'PUT' : 'POST';
        const url = editingProduct ? `${API_URL}/products/${editingProduct._id}` : `${API_URL}/products`;

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (!res.ok) throw new Error('Ошибка');
            
            showToast(editingProduct ? '✅ Товар обновлен' : '✅ Товар добавлен');
            setEditingProduct(null);
            setFormData({ name: '', desc: '', price: '', category: 'food', emoji: '📦', image: '' });
            fetchProducts();
        } catch (err) {
            showToast('❌ Ошибка при сохранении');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Удалить этот товар?')) return;
        try {
            await fetch(`${API_URL}/products/${id}`, { method: 'DELETE' });
            showToast('✅ Товар удален');
            fetchProducts();
        } catch (err) {
            showToast('❌ Ошибка удаления');
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setFormData({
            name: product.name,
            desc: product.desc,
            price: product.price,
            category: product.category,
            emoji: product.emoji,
            image: product.image || ''
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isLoggedIn) {
        return (
            <div className="admin-login-overlay">
                <form className="admin-login-card" onSubmit={handleLogin}>
                    <h2>Вход в админ-панель</h2>
                    <div className="input-group">
                        <label>Логин</label>
                        <input 
                            type="text" 
                            value={loginData.username}
                            onChange={e => setLoginData({...loginData, username: e.target.value})}
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label>Пароль</label>
                        <input 
                            type="password" 
                            value={loginData.password}
                            onChange={e => setLoginData({...loginData, password: e.target.value})}
                            required 
                        />
                    </div>
                    <button type="submit" className="login-btn">Войти</button>
                </form>
            </div>
        );
    }

    return (
        <div className="admin-container">
            <div className="admin-header">
                <h1>Админ-панель</h1>
                <button onClick={() => setIsLoggedIn(false)} className="logout-btn">Выйти</button>
            </div>

            <div className="admin-content">
                <section className="admin-form-section">
                    <h2>{editingProduct ? 'Редактировать товар' : 'Добавить новый товар'}</h2>
                    <form onSubmit={handleSubmit} className="product-form">
                        <div className="form-grid">
                            <div className="input-group">
                                <label>Название</label>
                                <input 
                                    type="text" 
                                    value={formData.name}
                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <label>Цена</label>
                                <input 
                                    type="number" 
                                    value={formData.price}
                                    onChange={e => setFormData({...formData, price: e.target.value})}
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <label>Категория</label>
                                <select 
                                    value={formData.category}
                                    onChange={e => setFormData({...formData, category: e.target.value})}
                                >
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-group">
                                <label>Эмодзи или Иконка</label>
                                <input 
                                    type="text" 
                                    value={formData.emoji}
                                    onChange={e => setFormData({...formData, emoji: e.target.value})}
                                    required 
                                />
                            </div>
                        </div>
                        <div className="input-group full-width">
                            <label>Описание</label>
                            <textarea 
                                value={formData.desc}
                                onChange={e => setFormData({...formData, desc: e.target.value})}
                                required 
                            />
                        </div>
                        <div className="input-group full-width">
                            <label>Ссылка на изображение (опционально)</label>
                            <input 
                                type="text" 
                                value={formData.image}
                                onChange={e => setFormData({...formData, image: e.target.value})}
                            />
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="save-btn">
                                {editingProduct ? 'Сохранить изменения' : 'Добавить товар'}
                            </button>
                            {editingProduct && (
                                <button type="button" className="cancel-btn" onClick={() => {
                                    setEditingProduct(null);
                                    setFormData({ name: '', desc: '', price: '', category: 'food', emoji: '📦', image: '' });
                                }}>Отмена</button>
                            )}
                        </div>
                    </form>
                </section>

                <section className="admin-list-section">
                    <h2>Список товаров ({products.length})</h2>
                    {loading ? <p>Загрузка...</p> : (
                        <div className="admin-products-table">
                            <div className="table-header">
                                <span>Товар</span>
                                <span>Категория</span>
                                <span>Цена</span>
                                <span>Действия</span>
                            </div>
                            {products.map(p => (
                                <div key={p._id} className="table-row">
                                    <div className="p-info">
                                        <span className="p-emoji">{p.emoji}</span>
                                        <span className="p-name">{p.name}</span>
                                    </div>
                                    <span className="p-cat">{categories.find(c => c.id === p.category)?.label || p.category}</span>
                                    <span className="p-price">{p.price} сом</span>
                                    <div className="p-actions">
                                        <button onClick={() => handleEdit(p)} className="edit-btn">✏️</button>
                                        <button onClick={() => handleDelete(p._id)} className="delete-btn">🗑️</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
