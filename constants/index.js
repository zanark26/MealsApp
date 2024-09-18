export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/icons8-pizza-96.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/icons8-hamburger-96.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/images/icons8-spaghetti-96.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/icons8-tropical-fish-96.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/icons8-takeout-box-96.png'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/images/icons8-pizza-96.png'),
    },

]          
export const featured ={
    id: 1,
    title: 'Miền Bắc',
    description: 'Khai vị và ăn nhẹ',
    restaurants: [
        {
            id:1,
            name: 'Minh Giang',
            image: require('../assets/images/chahaisan.jpg'),
            description: 'Best Seller',
            lng: 10.98063001328373, 
            lat: 106.67549032424718,
            address: '35 Lê Văn Thiêm',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name:'Gà nướng và xôi',
                    description:'Set SotTam truyền thống',
                    price: 10,
                    image: require('../assets/images/58e136e9fa965cc80587.jpg')
                },
                {
                    id: 2,
                    name:'Heo nướng Mooping và xôi',
                    description:'Set SotTam',
                    price: 10,
                    image: require('../assets/images/68d6790bce74682a3165.jpg')
                },
                {
                    id: 3,
                    name:'Gỏi cá hồi và tôm xốt Som Tam',
                    description:'Set SotTam',
                    price: 10,
                    image: require('../assets/images/cf93151aa165073b5e74.jpg')
                },
            ]

        },

        {
            id:2,
            name: 'Trần Quý',
            image: require('../assets/images/cf8e3bfd98823edc6793.jpg'),
            description: 'Best Seller',
            lng: 10.98063001328373, 
            lat: 106.67549032424718,
            address: '35 Lê Văn Thiêm',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name:'Xương khủng long',
                    description:'Hot & Spicy',
                    price: 10,
                    image: require('../assets/images/bc983940933f35616c2e.jpg')
                },
                {
                    id: 2,
                    name:'Mực hấp xốt chanh',
                    description:'Stemmed Squid',
                    price: 10,
                    image: require('../assets/images/43e2146abb151d4b4404.jpg')
                },
                {
                    id: 3,
                    name:'Cá diêu hồng hấp xốt chanh',
                    description:'Stemmed Red',
                    price: 10,
                    image: require('../assets/images/3b98cd4a5e35f86ba124.jpg')
                },
            ]

        },
        {
            id:3,
            name: 'Lê Lộc',
            image: require('../assets/images/7c729725005aa604ff4b.jpg'),
            description: 'Best Seller',
            lng: 10.98063001328373, 
            lat: 106.67549032424718,
            address: '35 Lê Văn Thiêm',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name:'Pad Thái cá hồi',
                    description:'Salmon Pad Thai',
                    price: 10,
                    image: require('../assets/images/5ff1217bbb041d5a4415.jpg')
                },
                {
                    id: 2,
                    name:'Cơm chiên hải sản trái thơm',
                    description:'Pincapple Fried',
                    price: 10,
                    image: require('../assets/images/36620bf9948632d86b97.jpg')
                },
                {
                    id: 3,
                    name:'Tôm Yum hải sản',
                    description:'TomYum',
                    price: 10,
                    image: require('../assets/images/6a2d858419fbbfa5e6ea.jpg')
                },
            ]

        }
    
    ]
}