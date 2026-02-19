import { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { categoryNames } from '../data/products';
import './ProductCard.css';

export default function ProductCard({ product, index }) {
    const { addToCart } = useStore();
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1200);
    };

    return (
        <div className="product-card" style={{ animationDelay: `${index * 0.06}s` }}>
            <div className="product-img">
                <span className="product-category-tag">{categoryNames[product.category]}</span>
                {product.image ? (
                    <img src={product.image} alt={product.name} className="product-photo" loading="lazy" />
                ) : (
                    <span className="product-emoji">{product.emoji}</span>
                )}
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <div className="product-bottom">
                    <span className="product-price">{product.price.toLocaleString()} сом</span>
                    <button
                        className={`btn-add-cart ${added ? 'added' : ''}`}
                        onClick={handleAdd}
                    >
                        {added ? '✓ Добавлено' : (
                            <>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                                Купить
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
