import './About.css';

export default function About() {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <span className="section-badge">О нас</span>
                        <h2 className="section-title">Почему выбирают <span className="gradient-text">ZooMarket?</span></h2>
                        <p className="about-text">
                            Мы — команда любителей животных, которые знают, что ваши питомцы заслуживают только лучшего.
                            Мы тщательно отбираем товары от проверенных производителей.
                        </p>
                        <div className="features-list">
                            {[
                                { icon: '🚚', title: 'Быстрая доставка', desc: 'Доставка по всему городу за 1-2 дня' },
                                { icon: '✅', title: 'Гарантия качества', desc: 'Только сертифицированные товары' },
                                { icon: '💰', title: 'Лучшие цены', desc: 'Скидки постоянным клиентам до 20%' },
                                { icon: '🎁', title: 'Бонусная программа', desc: 'Накапливайте бонусы с каждой покупки' },
                            ].map((f, i) => (
                                <div className="feature-item" key={i}>
                                    <div className="feature-icon">{f.icon}</div>
                                    <div>
                                        <h4>{f.title}</h4>
                                        <p>{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about-visual">
                        <div className="about-card-stack">
                            <div className="about-emoji-card ac-1">🐕‍🦺</div>
                            <div className="about-emoji-card ac-2">🐈‍⬛</div>
                            <div className="about-emoji-card ac-3">🦜</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
