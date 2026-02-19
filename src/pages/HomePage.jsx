import Header from '../components/Header';
import Hero from '../components/Hero';
import Catalog from '../components/Catalog';
import About from '../components/About';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Catalog />
            <About />
            <Contacts />
            <Footer />
        </>
    );
}
