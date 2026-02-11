import React from "react";
import Card1 from "./Card1";

// Define Types for CardList1 props
interface CardList1Props {
    href: string; //link to product page
    imageSrc: string; // product image source
    imageAlt: string; // alt text for image
    title: string; // product title
    discountedPrice: string; // discounted price to show
    originalPrice: string; // original price to show with strikethrough
    currency: string; // currency symbol to show with price
    discountPercentage: string; // percentage discount to show (e.g. 20 for 20% off)
}
// Array of card data
const cardsData: CardList1Props[] = [
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/f3b1c505815be4aa8b8b5363624fbfb4.jpg_400x400q80.jpg_.avif",
        imageAlt: "Product 1",
        title: "MuscleBlaze Creatine Monohydrate 100g 32 Servings with CREAMP Micronized Powder for Muscle Building",
        discountedPrice: "1,080",
        originalPrice: "1,600",
        currency: "Rs.",
        discountPercentage: "-35% ",  
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/g/kf/S75dd470a558a428091d4a54d672a3ed91.jpg_400x400q80.jpg",
        imageAlt: "Product 1",
        title: "Sugar Free Gold - 300 Pellets",
        discountedPrice: "317",
        originalPrice: "352",
        currency: "Rs.",
        discountPercentage: "-10% ",  
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/g/kf/S99bb4349d42042c0a6114f5cb255d132L.jpg_400x400q80.jpg",
        imageAlt: "Product 1",
        title: "Head Scalp Massager Brush with Soft Silicone Random Color",
        discountedPrice: "98",
        originalPrice: "150",
        currency: "Rs.",
        discountPercentage: "-35% ",  
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/3d20410f845d99ad4b2bd1137d292528.jpg_400x400q80.jpg",
        imageAlt: "Product 1",
        title: "Sneaker Shoes Clean &amp; Fresh  Cleaner Shoes Shining  (Pack of 1)",
        discountedPrice: "249",
        originalPrice: "599",
        currency: "Rs.",
        discountPercentage: "-58%",  
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/g/kf/S943f5473261a44c8a91dab7afd29e855L.jpg_400x400q80.jpg",
        imageAlt: "Product 1",
        title: "Mamaearth Rice Oil-Free Face Moisturizer for Oily Skin, With Rice Water & Niacinamide for Glass Skin - 80 g",
        discountedPrice: "468",
        originalPrice: "510",
        currency: "Rs.",
        discountPercentage: "-8%",  
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/a9e82bfd5568e399e01856d29ba0745b.jpg_400x400q80.jpg",
        imageAlt: "Product 1",
        title: "Rechargeable 2 In 1 Eyebrow Trimmer Flawless Facial And Eyebrow Razor For Women Portable And Easy To Use",
        discountedPrice: "340",
        originalPrice: "1,000",
        currency: "Rs.",
        discountPercentage: "-66% ",  
    },
];

const CardList1: React.FC = () => {
    return (
        <div className="grid grid-cols-6 gap-4">
            {cardsData.map((card, index) => (
                <Card1
                    key={index}
                    href={card.href}
                    imageSrc={card.imageSrc}
                    imageAlt={card.imageAlt}
                    title={card.title}
                    discountedPrice={card.discountedPrice}
                    originalPrice={card.originalPrice}
                    currency={card.currency}
                    discountPercentage={card.discountPercentage}
                />
            ))}
        </div>
    );
}
export default CardList1;