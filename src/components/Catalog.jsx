import { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { categories } from '../data/products';
import ProductCard from './ProductCard';
import './Catalog.css';

export default function Catalog() {
    const { API_URL } = useStore();
    const [activeCategory, setActiveCategory] = useState('all');
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams();
                if (activeCategory !== 'all') params.append('category', activeCategory);
                if (search.trim()) params.append('search', search);

                const res = await fetch(`${API_URL}/products?${params.toString()}`);
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error('Failed to fetch products:', err);
            } finally {
                setLoading(false);
            }
        };

        const timeoutId = setTimeout(fetchProducts, 300);
        return () => clearTimeout(timeoutId);
    }, [activeCategory, search, API_URL]);

    return (
        <section className="categories-section" id="catalog">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Каталог</span>
                    <h2 className="section-title">Категории товаров</h2>
                    <p className="section-desc">Выберите категорию или просмотрите все товары</p>
                </div>

                {/* Search Bar */}
                <div className="catalog-search">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Поиск товаров..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="catalog-search-input"
                    />
                </div>

                {/* Category Tabs */}
                <div className="category-tabs">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`cat-tab ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            <span className="cat-icon">{cat.icon}</span>
                            <span>{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="products-grid">
                    {loading ? (
                        <div className="empty-results">
                            <p className="empty-title">Загрузка...</p>
                        </div>
                    ) : products.length === 0 ? (
                        <div className="empty-results">
                            <div className="empty-icon">🔍</div>
                            <p className="empty-title">Ничего не найдено</p>
                            <p className="empty-hint">Попробуйте изменить запрос</p>
                        </div>
                    ) : (
                        products.map((product, i) => (
                            <ProductCard key={product._id} product={product} index={i} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
