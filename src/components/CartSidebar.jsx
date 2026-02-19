import { useStore } from '../context/StoreContext';
import './CartSidebar.css';

export default function CartSidebar() {
    const { cart, cartOpen, setCartOpen, removeFromCart, changeQty, checkout } = useStore();

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <>
            <div className={`cart-overlay ${cartOpen ? 'open' : ''}`} onClick={() => setCartOpen(false)} />
            <aside className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h3>🛒 Корзина</h3>
                    <button className="cart-close" onClick={() => setCartOpen(false)}>&times;</button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="cart-empty">
                            <span className="cart-empty-icon">🛒</span>
                            <p>Корзина пуста</p>
                            <span className="cart-empty-hint">Добавьте товары из каталога</span>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div className="cart-item" key={item._id}>
                                {item.image ? (
                                    <img src={item.image} alt={item.name} className="cart-item-img" />
                                ) : (
                                    <div className="cart-item-emoji">{item.emoji}</div>
                                )}
                                <div className="cart-item-info">
                                    <div className="cart-item-name">{item.name}</div>
                                    <div className="cart-item-price">{(item.price * item.qty).toLocaleString()} сом</div>
                                    <div className="cart-item-controls">
                                        <button className="qty-btn" onClick={() => changeQty(item._id, -1)}>−</button>
                                        <span className="qty-value">{item.qty}</span>
                                        <button className="qty-btn" onClick={() => changeQty(item._id, 1)}>+</button>
                                    </div>
                                </div>
                                <button className="cart-item-remove" onClick={() => removeFromCart(item._id)} title="Удалить">✕</button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Итого:</span>
                            <span className="cart-total-price">{totalPrice.toLocaleString()} сом</span>
                        </div>
                        <button className="btn-checkout" onClick={checkout}>Оформить заказ</button>
                    </div>
                )}
            </aside>
        </>
    );
}
