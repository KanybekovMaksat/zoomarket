import './Contacts.css';

export default function Contacts() {
    const contacts = [
        { icon: '📍', title: 'Адрес', text: 'г. Бишкек, ул. Абдрахманова 150' },
        { icon: '📞', title: 'Телефон', text: '+996 (555) 123-456' },
        { icon: '✉️', title: 'Email', text: 'info@zoomarket.kg' },
        { icon: '🕐', title: 'Режим работы', text: 'Пн–Вс: 09:00 – 21:00' },
    ];

    return (
        <section className="contacts-section" id="contacts">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Контакты</span>
                    <h2 className="section-title">Свяжитесь с нами</h2>
                </div>
                <div className="contacts-grid">
                    {contacts.map((c, i) => (
                        <div className="contact-card" key={i}>
                            <div className="contact-icon">{c.icon}</div>
                            <h4>{c.title}</h4>
                            <p>{c.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
