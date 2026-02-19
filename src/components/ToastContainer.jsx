import { useStore } from '../context/StoreContext';
import './Toast.css';

export default function ToastContainer() {
    const { toasts } = useStore();

    return (
        <div className="toast-container">
            {toasts.map(t => (
                <div className="toast" key={t.id}>
                    {t.message}
                </div>
            ))}
        </div>
    );
}
