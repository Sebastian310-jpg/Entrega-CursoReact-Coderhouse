import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore";

const products = [
    {
        id: 1,
        name: "Camiseta Premium",
        description: "Camiseta 100% algodón orgánico de alta calidad. Confeccionada con tejido transpirable y suave al tacto. Corte clásico y costuras reforzadas para mayor durabilidad. Disponible en varios colores",
        price: 19.99,
        stock: 25,
        category: "Ropa",
        image: "/img/camiseta.avif"
    },
    {
        id: 2,
        name: "Laptop Ultradelgada",
        description: "Potente laptop con procesador Intel Core i5, 8GB RAM y almacenamiento SSD de 512GB. Pantalla Full HD de 15.6 con bisel fino. Batería de larga duración (hasta 10 horas) y diseño ultradelgado de solo 1.7kg. Ideal para trabajo y estudio",
        price: 799.99,
        stock: 10,
        category: "Electronica",
        image: "/img/laptop.avif"
    },
    {
        id: 3,
        name: "Auriculares",
        description: "Auriculares inalámbricos con cancelación activa de ruido de última generación. Sonido envolvente HD, batería de 30 horas de duración y micrófono incorporado para llamadas claras. Almohadillas ergonómicas para máxima comodidad",
        price: 59.99,
        stock: 30,
        category: "Electronica",
        image: "/img/auriculares.avif"
    },
    {
        id: 4,
        name: "Café",
        description: "Paquete de café tostado 500g",
        price: 8.50,
        stock: 50,
        category: "Alimentos",
        image: "/img/cafe.avif"
    },
    {
        id: 5,
        name: "Zapatillas Running",
        description: "Zapatillas deportivas ultraligeras con tecnología de amortiguación reactiva. Suela antideslizante para mayor tracción y tejido transpirable. Diseñadas para corredores que buscan comodidad y rendimiento",
        price: 49.99,
        stock: 15,
        category: "Ropa",
        image: "/img/zapatilla.avif"
    },
    {
        id: 6,
        name: "Smartwatch Pro",
        description: "Reloj inteligente con pantalla AMOLED de 1.4, monitor de frecuencia cardíaca, oxígeno en sangre y seguimiento del sueño. Resistente al agua (5ATM), notificaciones inteligentes y batería de 7 días de duración",
        price: 129.99,
        stock: 20,
        category: "Electronica",
        image: "/img/reloj-inteligente.avif"
    },
    {
        id: 7,
        name: "Gafas de Sol",
        description: "Gafas de sol con lentes polarizadas 100% protección UV400. Montura ligera de acetato italiano con diseño urbano. Incluye estuche rígido y paño de microfibra para limpieza",
        price: 24.99,
        stock: 35,
        category: "Accesorios",
        image: "/img/gafas-de-sol.avif"
    },
    {
        id: 8,
        name: "Mochila Urbana",
        description: "Mochila resistente al agua con compartimento acolchado para laptop de hasta 15, múltiples bolsillos organizadores y correas ergonómicas. Fabricada en nylon reciclado con refuerzos en puntos de tensión",
        price: 39.99,
        stock: 18,
        category: "Accesorios",
        image: "/img/mochila.avif"
    },
    {
        id: 9,
        name: "Pelota de Fútbol",
        description: "Pelota profesional tamaño 5 homologada por FIFA. Superficie texturizada para mejor control, válvula de retención de aire y durabilidad en todo tipo de superficies. Ideal para competición y entrenamiento",
        price: 29.99,
        stock: 22,
        category: "Deportes",
        image: "/img/pelota-de-futbol.avif"
    },
    {
        id: 10,
        name: "Jeans Slim Fit",
        description: "Pantalón jeans de corte ajustado con elastano para mayor comodidad. Tintura ecológica, bolsillos reforzados y acabado desgastado moderno. Disponible en varios lavados de azul",
        price: 39.99,
        stock: 18,
        category: "Ropa",
        image: "/img/pantalon.avif"
    },
    {
        id: 11,
        name: "Lámpara LED",
        description: "Luz blanca cálida con bajo consumo",
        price: 14.99,
        stock: 40,
        category: "Muebles",
        image: "/img/lampara-led.avif"
    },
    {
        id: 12,
        name: "Chocolate",
        description: "Tableta de chocolate negro premium con 70% de cacao de origen único. Sin gluten, vegano y sin aceite de palma. Notas frutales y florales con un perfecto equilibrio entre amargor y dulzor",
        price: 3.99,
        stock: 40,
        category: "Alimentos",
        image: "/img/chocolate.avif"
    },
    {
        id: 13,
        name: "Raqueta de Tenis",
        description: "Raqueta de tenis de aluminio con encordado profesional. Peso equilibrado (280g), grip ergonómico absorbente de impactos y marco reforzado. Incluye funda protectora y overgrip adicional",
        price: 45.99,
        stock: 14,
        category: "Deportes",
        image: "/img/raqueta-de-tenis.avif"
    },
    {
        id: 14,
        name: "Silla de Madera",
        description: "Silla de comedor de madera de haya maciza con asiento tapizado en lino. Líneas limpias inspiradas en el diseño nórdico, estructura robusta y acabado natural. Altura estándar de 45cm",
        price: 75.99,
        stock: 12,
        category: "Muebles",
        image: "/img/silla.avif"
    }
];

const seedProducts = () => {
    const productsRef = collection(db, "products")

    products.map(({ id, ...dataProduct }) => {
        addDoc(productsRef, dataProduct)
    })

    return
}

seedProducts()

