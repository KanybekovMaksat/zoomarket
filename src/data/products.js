export const categoryNames = {
    accessories: 'Аксессуары',
    clothing: 'Одежда',
    medicine: 'Лекарства',
    collars: 'Ошейники',
};

export const categories = [
    { id: 'all', label: 'Все товары', icon: '🏪' },
    { id: 'accessories', label: 'Аксессуары', icon: '🎾' },
    { id: 'clothing', label: 'Одежда', icon: '👕' },
    { id: 'medicine', label: 'Лекарства и витамины', icon: '💊' },
    { id: 'collars', label: 'Ошейники', icon: '🦮' },
];

const products = [
    // Аксессуары
    { id: 1, name: 'Миска керамическая', desc: 'Стильная керамическая миска для еды и воды, 500 мл', price: 650, category: 'accessories', emoji: '🥣' },
    { id: 2, name: 'Лежанка для собаки', desc: 'Мягкая ортопедическая лежанка, размер M', price: 3200, category: 'accessories', emoji: '🛏️' },
    { id: 3, name: 'Игрушка-мяч', desc: 'Прочный резиновый мяч для активных игр', price: 450, category: 'accessories', emoji: '🎾' },
    { id: 4, name: 'Когтеточка столбик', desc: 'Когтеточка из натурального сизаля, высота 70 см', price: 2800, category: 'accessories', emoji: '🐱' },
    { id: 5, name: 'Автоматическая поилка', desc: 'Фонтанчик для воды с фильтром, 2.5 л', price: 4500, category: 'accessories', emoji: '💧' },
    { id: 6, name: 'Переноска для животных', desc: 'Удобная переноска с вентиляцией, до 8 кг', price: 3800, category: 'accessories', emoji: '🧳' },

    // Одежда
    { id: 7, name: 'Тёплый комбинезон', desc: 'Зимний комбинезон для собаки, водоотталкивающий', price: 2900, category: 'clothing', emoji: '🧥' },
    { id: 8, name: 'Дождевик для собаки', desc: 'Лёгкий дождевик с капюшоном, размер S-XL', price: 1800, category: 'clothing', emoji: '🌧️' },
    { id: 9, name: 'Свитер вязаный', desc: 'Уютный вязаный свитер для маленьких пород', price: 1200, category: 'clothing', emoji: '🧶' },
    { id: 10, name: 'Ботинки для собаки', desc: 'Защитные ботинки с нескользящей подошвой, 4 шт', price: 2400, category: 'clothing', emoji: '👟' },
    { id: 11, name: 'Бандана стильная', desc: 'Хлопковая бандана с модным принтом', price: 550, category: 'clothing', emoji: '🎀' },
    { id: 12, name: 'Футболка летняя', desc: 'Лёгкая дышащая футболка для жаркой погоды', price: 900, category: 'clothing', emoji: '👕' },

    // Лекарства и витамины
    { id: 13, name: 'Мультивитамины', desc: 'Комплекс витаминов для ежедневного здоровья, 60 таб', price: 1500, category: 'medicine', emoji: '💊' },
    { id: 14, name: 'Витамины для шерсти', desc: 'Биотин и Омега-3 для блестящей шерсти, 90 таб', price: 1800, category: 'medicine', emoji: '✨' },
    { id: 15, name: 'Средство от блох', desc: 'Капли на холку, защита на 30 дней', price: 850, category: 'medicine', emoji: '🛡️' },
    { id: 16, name: 'Глюкозамин для суставов', desc: 'Хондропротектор для активных и пожилых собак', price: 2200, category: 'medicine', emoji: '🦴' },
    { id: 17, name: 'Пробиотик для пищеварения', desc: 'Нормализует микрофлору кишечника, 30 пакетиков', price: 1350, category: 'medicine', emoji: '🧬' },
    { id: 18, name: 'Антигельминтные таблетки', desc: 'Таблетки от глистов, для собак и кошек', price: 700, category: 'medicine', emoji: '💉' },

    // Ошейники
    { id: 19, name: 'Кожаный ошейник Premium', desc: 'Натуральная кожа, регулируемый, с гравировкой', price: 2500, category: 'collars', emoji: '🐕' },
    { id: 20, name: 'Светящийся ошейник LED', desc: 'Безопасность на прогулке ночью, USB зарядка', price: 1600, category: 'collars', emoji: '💡' },
    { id: 21, name: 'Шлейка анатомическая', desc: 'Мягкая шлейка с распределением нагрузки', price: 2100, category: 'collars', emoji: '🦮' },
    { id: 22, name: 'Ошейник антиблошиный', desc: 'Защита от блох и клещей на 6 месяцев', price: 1100, category: 'collars', emoji: '🔒' },
    { id: 23, name: 'Поводок рулетка 5м', desc: 'Автоматический поводок-рулетка, до 25 кг', price: 1900, category: 'collars', emoji: '📏' },
    { id: 24, name: 'Ошейник с GPS', desc: 'Умный ошейник с GPS-трекером и приложением', price: 5800, category: 'collars', emoji: '📡' },
];

export default products;
