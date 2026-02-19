import { useState } from 'react';
import { useStore } from '../context/StoreContext';
import './AuthModal.css';

export default function AuthModal() {
    const { authOpen, setAuthOpen, authTab, setAuthTab, login, register, showToast } = useStore();
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPass, setLoginPass] = useState('');
    const [regName, setRegName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPhone, setRegPhone] = useState('');
    const [regPass, setRegPass] = useState('');
    const [regPass2, setRegPass2] = useState('');

    if (!authOpen) return null;

    const handleLogin = (e) => {
        e.preventDefault();
        if (!loginEmail || !loginPass) { showToast('⚠️ Заполните все поля'); return; }
        login({ email: loginEmail, password: loginPass });
        setLoginEmail(''); setLoginPass('');
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (!regName || !regEmail || !regPass || !regPass2) { showToast('⚠️ Заполните все обязательные поля'); return; }
        if (regPass.length < 6) { showToast('⚠️ Пароль должен быть минимум 6 символов'); return; }
        if (regPass !== regPass2) { showToast('⚠️ Пароли не совпадают'); return; }
        register({ name: regName, email: regEmail, password: regPass });
        setRegName(''); setRegEmail(''); setRegPhone(''); setRegPass(''); setRegPass2('');
    };

    return (
        <div className="modal-overlay open" onClick={(e) => e.target.className.includes('modal-overlay') && setAuthOpen(false)}>
            <div className="modal">
                <button className="modal-close" onClick={() => setAuthOpen(false)}>&times;</button>
                <div className="modal-tabs">
                    <button className={`modal-tab ${authTab === 'login' ? 'active' : ''}`} onClick={() => setAuthTab('login')}>Вход</button>
                    <button className={`modal-tab ${authTab === 'register' ? 'active' : ''}`} onClick={() => setAuthTab('register')}>Регистрация</button>
                </div>

                {authTab === 'login' ? (
                    <form className="auth-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="example@mail.com" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Пароль</label>
                            <input type="password" placeholder="Введите пароль" value={loginPass} onChange={e => setLoginPass(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn-submit">Войти</button>
                    </form>
                ) : (
                    <form className="auth-form" onSubmit={handleRegister}>
                        <div className="form-group">
                            <label>Имя</label>
                            <input type="text" placeholder="Ваше имя" value={regName} onChange={e => setRegName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="example@mail.com" value={regEmail} onChange={e => setRegEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Телефон</label>
                            <input type="tel" placeholder="+996 (___) ___-___" value={regPhone} onChange={e => setRegPhone(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Пароль</label>
                            <input type="password" placeholder="Минимум 6 символов" value={regPass} onChange={e => setRegPass(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Повторите пароль</label>
                            <input type="password" placeholder="Повторите пароль" value={regPass2} onChange={e => setRegPass2(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn-submit">Зарегистрироваться</button>
                    </form>
                )}
            </div>
        </div>
    );
}
