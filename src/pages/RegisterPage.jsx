import { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPage.css';

export default function RegisterPage() {
    const { register, showToast } = useStore();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password || !password2) {
            showToast('⚠️ Заполните все обязательные поля');
            return;
        }
        if (password.length < 6) {
            showToast('⚠️ Пароль должен быть минимум 6 символов');
            return;
        }
        if (password !== password2) {
            showToast('⚠️ Пароли не совпадают');
            return;
        }
        setLoading(true);
        await register({ name, email, password });
        setLoading(false);
        navigate('/');
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <Link to="/" className="auth-logo">
                    <span>🐾</span>
                    <span>Zoo<span className="logo-accent">Market</span></span>
                </Link>
                <h1 className="auth-title">Создать аккаунт</h1>
                <p className="auth-subtitle">Зарегистрируйтесь, чтобы делать заказы</p>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Имя</label>
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="example@mail.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Телефон <span className="optional">(необязательно)</span></label>
                        <input
                            type="tel"
                            placeholder="+996 (___) ___-___"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Пароль</label>
                        <input
                            type="password"
                            placeholder="Минимум 6 символов"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Повторите пароль</label>
                        <input
                            type="password"
                            placeholder="Повторите пароль"
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-auth" disabled={loading}>
                        {loading ? 'Регистрация...' : 'Зарегистрироваться'}
                    </button>
                </form>

                <p className="auth-switch">
                    Уже есть аккаунт? <Link to="/login">Войти</Link>
                </p>
            </div>
        </div>
    );
}
