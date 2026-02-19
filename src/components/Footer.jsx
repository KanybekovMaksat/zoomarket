import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <span className="logo-icon">🐾</span>
                            <span className="logo-text">Zoo<span className="logo-accent">Market</span></span>
                        </a>
                        <p>Ваш надёжный интернет-магазин товаров для животных.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Быстрые ссылки</h4>
                        <a href="#catalog">Каталог</a>
                        <a href="#about">О нас</a>
                        <a href="#contacts">Контакты</a>
                    </div>
                    <div className="footer-links">
                        <h4>Категории</h4>
                        <a href="#catalog">Аксессуары</a>
                        <a href="#catalog">Одежда</a>
                        <a href="#catalog">Лекарства</a>
                        <a href="#catalog">Ошейники</a>
                    </div>
                    <div className="footer-links">
                        <h4>Мы в соцсетях</h4>
                        <a href="#">Instagram</a>
                        <a href="#">Telegram</a>
                        <a href="#">WhatsApp</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 ZooMarket. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}
