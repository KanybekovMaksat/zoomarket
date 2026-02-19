import mongoose from 'mongoose';
import Product from './models/Product.js';

const MONGODB_URI = 'mongodb+srv://makss:fKmkpiKDz06d80oy@cluster0.ne5oyfn.mongodb.net/?appName=Cluster0';

const products = [
    { name: "Миска керамическая", desc: "Стильная керамическая миска для еды и воды, 500 мл", price: 650, category: "accessories", emoji: "🥣", image: "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?w=400&h=400&fit=crop" },
    { name: "Мячик-пищалка", desc: "Резиновый мячик с пищалкой для активных игр", price: 280, category: "accessories", emoji: "🎾", image: "https://images.unsplash.com/photo-1535294435445-d7249b8f0e40?w=400&h=400&fit=crop" },
    { name: "Когтеточка настольная", desc: "Компактная когтеточка из натурального сизаля", price: 1200, category: "accessories", emoji: "🐱", image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop" },
    { name: "Поилка-фонтан", desc: "Автоматическая поилка-фонтан, 2 литра, с фильтром", price: 2400, category: "accessories", emoji: "⛲", image: "https://images.unsplash.com/photo-1583337130417-13104dec14a3?w=400&h=400&fit=crop" },
    { name: "Лежанка мягкая", desc: "Уютная лежанка из плюша с бортиками, размер M", price: 1800, category: "accessories", emoji: "🛏️", image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=400&fit=crop" },
    { name: "Игрушка-дразнилка", desc: "Палочка с перьями и колокольчиком для кошек", price: 350, category: "accessories", emoji: "🪶", image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&h=400&fit=crop" },
    { name: "Свитер для собаки", desc: "Вязаный тёплый свитер, размеры S–XL, разные цвета", price: 1100, category: "clothing", emoji: "🧶", image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=400&h=400&fit=crop" },
    { name: "Дождевик прозрачный", desc: "Водонепроницаемый дождевик с капюшоном для собак", price: 900, category: "clothing", emoji: "🌧️", image: "https://images.unsplash.com/photo-1537151608828-ea2b11305ee2?w=400&h=400&fit=crop" },
    { name: "Ботинки зимние (4 шт)", desc: "Набор из 4 ботинок с нескользящей подошвой", price: 1600, category: "clothing", emoji: "👢", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop" },
    { name: "Бандана стильная", desc: "Хлопковая бандана с модным принтом, завязки", price: 320, category: "clothing", emoji: "🎀", image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=400&h=400&fit=crop" },
    { name: "Комбинезон зимний", desc: "Утеплённый комбинезон для прогулок в мороз", price: 2800, category: "clothing", emoji: "🧥", image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&h=400&fit=crop" },
    { name: "Футболка летняя", desc: "Лёгкая хлопковая футболка для собак, разные цвета", price: 480, category: "clothing", emoji: "👕", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop" },
    { name: "Витамины для шерсти", desc: "Комплекс витаминов для здоровой и блестящей шерсти", price: 750, category: "medicine", emoji: "💊", image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=400&fit=crop" },
    { name: "Капли от блох", desc: "Эффективные капли на холку, защита на 30 дней", price: 420, category: "medicine", emoji: "💧", image: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=400&h=400&fit=crop" },
    { name: "Пробиотик для ЖКТ", desc: "Пробиотик для нормализации пищеварения и кишечной флоры", price: 680, category: "medicine", emoji: "🦠", image: "https://images.unsplash.com/photo-1550003757-62f5df41e126?w=400&h=400&fit=crop" },
    { name: "Мазь для подушечек лап", desc: "Заживляющая мазь для потрескавшихся подушечек лап", price: 390, category: "medicine", emoji: "🐾", image: "https://images.unsplash.com/photo-1587764379073-30e00ee705ff?w=400&h=400&fit=crop" },
    { name: "Мультивитамины", desc: "Ежедневный витаминный комплекс для собак и кошек", price: 540, category: "medicine", emoji: "🌿", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop" },
    { name: "Суспензия от глистов", desc: "Антигельминтная суспензия широкого спектра действия", price: 310, category: "medicine", emoji: "🧪", image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=400&h=400&fit=crop" },
    { name: "Ошейник кожаный", desc: "Натуральная кожа, регулируемый размер, классика", price: 850, category: "collars", emoji: "📿", image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=400&h=400&fit=crop" },
    { name: "Ошейник светящийся", desc: "LED-ошейник с USB-зарядкой для безопасных прогулок ночью", price: 620, category: "collars", emoji: "💡", image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop" },
    { name: "Шлейка анатомическая", desc: "Мягкая шлейка, не давит на горло, размеры S–L", price: 1050, category: "collars", emoji: "🦺", image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop" },
    { name: "Поводок-рулетка 5м", desc: "Автоматический поводок-рулетка длиной 5 метров", price: 980, category: "collars", emoji: "🔗", image: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?w=400&h=400&fit=crop" },
    { name: "Ошейник антиблошиный", desc: "Ошейник от блох и клещей, действие до 6 месяцев", price: 470, category: "collars", emoji: "🛡️", image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400&h=400&fit=crop" },
    { name: "Бирка-адресник", desc: "Металлическая бирка с гравировкой имени и телефона", price: 250, category: "collars", emoji: "🏷️", image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=400&fit=crop" }
];

const seedUI = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('🌱 Seeding database...');

        await Product.deleteMany({});
        await Product.insertMany(products);

        console.log('✅ Database seeded with images!');
        process.exit();
    } catch (err) {
        console.error('❌ Error seeding:', err.message);
        process.exit(1);
    }
};

seedUI();
