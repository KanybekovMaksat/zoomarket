import './Hero.css';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-bg-shapes">
                <div className="shape shape-1" />
                <div className="shape shape-2" />
                <div className="shape shape-3" />
            </div>
            <div className="hero-content">
                <div className="hero-badge">🐶 🐱 🐰 🐦 Добро пожаловать!</div>
                <h1 className="hero-title">
                    Всё для ваших <span className="gradient-text">любимых питомцев</span>
                </h1>
                <p className="hero-subtitle">
                    Лучшие аксессуары, одежда, лекарства и витамины для здоровья и счастья ваших четвероногих друзей
                </p>
                <div className="hero-actions">
                    <a href="#catalog" className="btn-hero">Перейти в каталог</a>
                    <a href="#about" className="btn-hero-outline">Узнать больше</a>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Товаров</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10K+</span>
                        <span className="stat-label">Клиентов</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Поддержка</span>
                    </div>
                </div>
            </div>
            <div className="hero-visual">
                <div className="hero-card card-1">🐕</div>
                <div className="hero-card card-2">🐈</div>
                <div className="hero-card card-3">🐰</div>
            </div>
        </section>
    );
}
