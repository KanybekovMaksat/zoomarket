import { useStore } from '../context/StoreContext';
import './OrderModal.css';

export default function OrderModal() {
    const { orderOpen, setOrderOpen } = useStore();

    if (!orderOpen) return null;

    return (
        <div className="modal-overlay open" onClick={(e) => e.target.className.includes('modal-overlay') && setOrderOpen(false)}>
            <div className="modal order-modal">
                <button className="modal-close" onClick={() => setOrderOpen(false)}>&times;</button>
                <div className="order-success">
                    <span className="order-icon">✅</span>
                    <h3>Заказ оформлен!</h3>
                    <p>Спасибо за покупку. Мы свяжемся с вами для подтверждения заказа.</p>
                    <button className="btn-submit" onClick={() => setOrderOpen(false)}>Отлично!</button>
                </div>
            </div>
        </div>
    );
}
