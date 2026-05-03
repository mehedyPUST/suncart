




// // "use client";

// // import React, { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { ChevronLeft, ChevronRight, Flame, ShoppingBag, Zap, Clock } from 'lucide-react';

// // const slides = [
// //     {
// //         id: 1,
// //         title: "Summer Sale",
// //         discount: "50% OFF",
// //         description: "On all summer essentials",
// //         cta: "Shop Now",
// //         link: "/sale",
// //         bgColor: "from-amber-600 to-orange-600",
// //         icon: <Flame className="text-amber-300" size={40} />,
// //         badge: "HOT DEALS 🔥",
// //         image: "🌊",
// //     },
// //     {
// //         id: 2,
// //         title: "Flash Sale",
// //         discount: "UP TO 70%",
// //         description: "Limited time summer offers",
// //         cta: "Grab Deals",
// //         link: "/flash-sale",
// //         bgColor: "from-orange-500 to-red-600",
// //         icon: <Zap className="text-amber-300" size={40} />,
// //         badge: "⚡ FLASH SALE",
// //         image: "⚡",
// //     },
// //     {
// //         id: 3,
// //         title: "New Arrivals",
// //         discount: "FREE SHIPPING",
// //         description: "On orders over $50",
// //         cta: "Explore Now",
// //         link: "/new-arrivals",
// //         bgColor: "from-amber-500 to-orange-500",
// //         icon: <ShoppingBag className="text-white" size={40} />,
// //         badge: "✨ JUST LANDED",
// //         image: "🛍️",
// //     },
// // ];

// // const Banner = () => {
// //     const [currentSlide, setCurrentSlide] = useState(0);
// //     const [isAnimating, setIsAnimating] = useState(false);

// //     useEffect(() => {
// //         const timer = setInterval(() => {
// //             nextSlide();
// //         }, 5000);
// //         return () => clearInterval(timer);
// //     }, [currentSlide]);

// //     const nextSlide = () => {
// //         if (isAnimating) return;
// //         setIsAnimating(true);
// //         setCurrentSlide((prev) => (prev + 1) % slides.length);
// //         setTimeout(() => setIsAnimating(false), 500);
// //     };

// //     const prevSlide = () => {
// //         if (isAnimating) return;
// //         setIsAnimating(true);
// //         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
// //         setTimeout(() => setIsAnimating(false), 500);
// //     };

// //     const goToSlide = (index) => {
// //         if (isAnimating || index === currentSlide) return;
// //         setIsAnimating(true);
// //         setCurrentSlide(index);
// //         setTimeout(() => setIsAnimating(false), 500);
// //     };

// //     return (
// //         <div className="relative w-full overflow-hidden mt-4 md:mt-10">
// //             {/* Main Slider Container */}
// //             <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
// //                 {slides.map((slide, index) => (
// //                     <div
// //                         key={slide.id}
// //                         className={`absolute inset-0 transition-all duration-700 transform ${index === currentSlide
// //                             ? 'translate-x-0 opacity-100'
// //                             : index < currentSlide
// //                                 ? '-translate-x-full opacity-0'
// //                                 : 'translate-x-full opacity-0'
// //                             }`}
// //                     >
// //                         {/* Background with Gradient */}
// //                         <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} opacity-95`} />

// //                         {/* Decorative Pattern */}
// //                         <div className="absolute inset-0 opacity-10">
// //                             <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl" />
// //                             <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl" />
// //                         </div>

// //                         {/* Content Container */}
// //                         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
// //                             <div className="grid md:grid-cols-2 gap-8 items-center w-full">
// //                                 {/* Left Content */}
// //                                 <div className="text-white space-y-6 animate-fadeInUp">
// //                                     {/* Badge */}
// //                                     <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
// //                                         {slide.icon}
// //                                         <span className="text-sm font-semibold">{slide.badge}</span>
// //                                     </div>

// //                                     {/* Title */}
// //                                     <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
// //                                         {slide.title}
// //                                         <br />
// //                                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-200">
// //                                             {slide.discount}
// //                                         </span>
// //                                     </h1>

// //                                     {/* Description */}
// //                                     <p className="text-lg md:text-xl text-white/90 max-w-md">
// //                                         {slide.description}
// //                                     </p>

// //                                     {/* Timer for Flash Sale */}
// //                                     {slide.id === 2 && <FlashTimer />}

// //                                     {/* CTA Buttons */}
// //                                     <div className="flex flex-wrap gap-4 pt-4">
// //                                         <Link
// //                                             href={slide.link}
// //                                             className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
// //                                         >
// //                                             {slide.cta}
// //                                             <ChevronRight size={20} />
// //                                         </Link>
// //                                         <Link
// //                                             href="/all-products"
// //                                             className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
// //                                         >
// //                                             View All
// //                                         </Link>
// //                                     </div>
// //                                 </div>

// //                                 {/* Right Content - Decorative Image/Illustration */}
// //                                 <div className="hidden md:flex justify-center items-center animate-float">
// //                                     <div className="relative">
// //                                         <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-3xl opacity-30 animate-pulse" />
// //                                         <div className="relative text-9xl">
// //                                             {slide.image}
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}

// //                 {/* Navigation Arrows */}
// //                 <button
// //                     onClick={prevSlide}
// //                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20"
// //                     aria-label="Previous slide"
// //                 >
// //                     <ChevronLeft size={24} />
// //                 </button>
// //                 <button
// //                     onClick={nextSlide}
// //                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20"
// //                     aria-label="Next slide"
// //                 >
// //                     <ChevronRight size={24} />
// //                 </button>

// //                 {/* Dots Navigation */}
// //                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
// //                     {slides.map((_, index) => (
// //                         <button
// //                             key={index}
// //                             onClick={() => goToSlide(index)}
// //                             className={`transition-all duration-300 ${index === currentSlide
// //                                 ? 'w-12 h-2 bg-amber-400'
// //                                 : 'w-2 h-2 bg-white/50 hover:bg-white/80'
// //                                 } rounded-full`}
// //                             aria-label={`Go to slide ${index + 1}`}
// //                         />
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* Features Strip */}
// //             <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 py-4">
// //                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                         <FeatureItem icon="🚚" text="Free Shipping" subtext="On orders $50+" />
// //                         <FeatureItem icon="🔄" text="30 Days Return" subtext="Easy returns policy" />
// //                         <FeatureItem icon="🔒" text="Secure Payment" subtext="100% secure checkout" />
// //                         <FeatureItem icon="🎧" text="24/7 Support" subtext="Customer service" />
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // // Flash Timer Component
// // const FlashTimer = () => {
// //     const [timeLeft, setTimeLeft] = useState({
// //         hours: 23,
// //         minutes: 59,
// //         seconds: 59
// //     });

// //     useEffect(() => {
// //         const timer = setInterval(() => {
// //             setTimeLeft(prev => {
// //                 if (prev.seconds > 0) {
// //                     return { ...prev, seconds: prev.seconds - 1 };
// //                 } else if (prev.minutes > 0) {
// //                     return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
// //                 } else if (prev.hours > 0) {
// //                     return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
// //                 }
// //                 return prev;
// //             });
// //         }, 1000);

// //         return () => clearInterval(timer);
// //     }, []);

// //     return (
// //         <div className="flex gap-4 pt-2">
// //             <TimerUnit value={timeLeft.hours} label="Hours" />
// //             <TimerUnit value={timeLeft.minutes} label="Minutes" />
// //             <TimerUnit value={timeLeft.seconds} label="Seconds" />
// //         </div>
// //     );
// // };

// // const TimerUnit = ({ value, label }) => (
// //     <div className="text-center">
// //         <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
// //             <span className="text-2xl md:text-3xl font-bold text-white">
// //                 {String(value).padStart(2, '0')}
// //             </span>
// //         </div>
// //         <span className="text-xs text-white/80 mt-1 block">{label}</span>
// //     </div>
// // );

// // const FeatureItem = ({ icon, text, subtext }) => (
// //     <div className="flex items-center gap-3 text-white">
// //         <span className="text-2xl">{icon}</span>
// //         <div>
// //             <p className="font-semibold text-sm md:text-base">{text}</p>
// //             <p className="text-xs text-white/80">{subtext}</p>
// //         </div>
// //     </div>
// // );

// // // Add these animations to your global CSS file
// // const styles = `
// // @keyframes fadeInUp {
// //     from {
// //         opacity: 0;
// //         transform: translateY(30px);
// //     }
// //     to {
// //         opacity: 1;
// //         transform: translateY(0);
// //     }
// // }

// // @keyframes float {
// //     0%, 100% {
// //         transform: translateY(0px);
// //     }
// //     50% {
// //         transform: translateY(-20px);
// //     }
// // }

// // .animate-fadeInUp {
// //     animation: fadeInUp 0.6s ease-out forwards;
// // }

// // .animate-float {
// //     animation: float 3s ease-in-out infinite;
// // }
// // `;

// // // Add styles to document if needed
// // if (typeof document !== 'undefined') {
// //     const styleSheet = document.createElement("style");
// //     styleSheet.textContent = styles;
// //     document.head.appendChild(styleSheet);
// // }

// // export default Banner;




// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import "animate.css";
// import { ChevronLeft, ChevronRight, Flame, ShoppingBag, Zap } from "lucide-react";

// const slides = [
//     {
//         id: 1,
//         title: "Summer Sale",
//         discount: "50% OFF",
//         description: "On all summer essentials",
//         cta: "Shop Now",
//         link: "/sale",
//         bgColor: "from-amber-600 to-orange-600",
//         icon: <Flame className="text-amber-300" size={40} />,
//         badge: "HOT DEALS 🔥",
//         image: "🌊",
//     },
//     {
//         id: 2,
//         title: "Flash Sale",
//         discount: "UP TO 70%",
//         description: "Limited time summer offers",
//         cta: "Grab Deals",
//         link: "/flash-sale",
//         bgColor: "from-orange-500 to-red-600",
//         icon: <Zap className="text-amber-300" size={40} />,
//         badge: "⚡ FLASH SALE",
//         image: "⚡",
//     },
//     {
//         id: 3,
//         title: "New Arrivals",
//         discount: "FREE SHIPPING",
//         description: "On orders over $50",
//         cta: "Explore Now",
//         link: "/new-arrivals",
//         bgColor: "from-amber-500 to-orange-500",
//         icon: <ShoppingBag className="text-white" size={40} />,
//         badge: "✨ JUST LANDED",
//         image: "🛍️",
//     },
// ];

// const Banner = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % slides.length);
//         }, 5000);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <div className="relative w-full overflow-hidden mt-4 md:mt-8">
//             {/* Reduced Height */}
//             <div className="relative h-[350px] md:h-[420px] lg:h-[480px] overflow-hidden">

//                 {slides.map((slide, index) => (
//                     <div
//                         key={slide.id}
//                         className={`absolute inset-0 transition-all duration-700 ${index === currentSlide
//                                 ? "opacity-100 z-10"
//                                 : "opacity-0 z-0"
//                             }`}
//                     >
//                         {/* Background */}
//                         <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor}`} />

//                         {/* Content */}
//                         <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
//                             <div className="grid md:grid-cols-2 gap-6 items-center w-full">

//                                 {/* LEFT */}
//                                 <div className="text-white space-y-4 animate__animated animate__fadeInUp">

//                                     <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm">
//                                         {slide.icon}
//                                         {slide.badge}
//                                     </div>

//                                     <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//                                         {slide.title}
//                                         <br />
//                                         <span className="text-amber-200">
//                                             {slide.discount}
//                                         </span>
//                                     </h1>

//                                     <p className="text-sm md:text-base text-white/90">
//                                         {slide.description}
//                                     </p>

//                                     <div className="flex gap-3 pt-2">
//                                         <Link
//                                             href={slide.link}
//                                             className="bg-white text-amber-600 px-6 py-2 rounded-md font-semibold hover:scale-105 transition"
//                                         >
//                                             {slide.cta}
//                                         </Link>

//                                         <Link
//                                             href="/all-products"
//                                             className="border border-white px-6 py-2 rounded-md hover:bg-white/10 transition"
//                                         >
//                                             View All
//                                         </Link>
//                                     </div>
//                                 </div>

//                                 {/* RIGHT */}
//                                 <div className="hidden md:flex justify-center items-center animate__animated animate__zoomIn">
//                                     <div className="text-7xl lg:text-8xl">
//                                         {slide.image}
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 ))}

//                 {/* Arrows */}
//                 <button
//                     onClick={() =>
//                         setCurrentSlide((prev) =>
//                             prev === 0 ? slides.length - 1 : prev - 1
//                         )
//                     }
//                     className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white"
//                 >
//                     <ChevronLeft />
//                 </button>

//                 <button
//                     onClick={() =>
//                         setCurrentSlide((prev) => (prev + 1) % slides.length)
//                     }
//                     className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white"
//                 >
//                     <ChevronRight />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Banner;



// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import "animate.css";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Banner = () => {
//     const [products, setProducts] = useState([]);
//     const [current, setCurrent] = useState(0);

//     // FETCH API
//     useEffect(() => {
//         fetch("https://suncart-gamma.vercel.app/data.json")
//             .then((res) => res.json())
//             .then((data) => setProducts(data.products || data))
//             .catch(console.error);
//     }, []);

//     // AUTO SLIDE
//     useEffect(() => {
//         if (!products.length) return;
//         const timer = setInterval(() => {
//             setCurrent((prev) => (prev + 1) % 3);
//         }, 5000);
//         return () => clearInterval(timer);
//     }, [products]);

//     if (!products.length) return null;

//     return (
//         <div className="relative w-full mt-4 md:mt-6 overflow-hidden">

//             {/* HERO HEIGHT (Amazon style shorter) */}
//             <div className="relative h-[320px] md:h-[420px] lg:h-[480px]">

//                 {products.slice(0, 3).map((product, index) => (
//                     <div
//                         key={product.id}
//                         className={`absolute inset-0 transition-all duration-700 ${index === current ? "opacity-100 z-10" : "opacity-0"
//                             }`}
//                     >
//                         {/* BACKGROUND IMAGE */}
//                         <img
//                             src={product.image}
//                             alt={product.name}
//                             className="w-full h-full object-cover"
//                         />

//                         {/* DARK GRADIENT OVERLAY (🔥 KEY PART) */}
//                         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

//                         {/* CONTENT */}
//                         <div className="absolute inset-0 flex items-center z-20">
//                             <div className="max-w-7xl mx-auto px-4 w-full">

//                                 <div className="max-w-lg bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-xl animate__animated animate__fadeInUp">

//                                     {/* BADGE */}
//                                     <span className="inline-block bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
//                                         HOT DEAL
//                                     </span>

//                                     {/* TITLE */}
//                                     <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
//                                         {product.name}
//                                     </h1>

//                                     {/* DESC */}
//                                     <p className="text-white/80 mt-2 text-sm md:text-base line-clamp-2">
//                                         {product.description}
//                                     </p>

//                                     {/* PRICE (if exists) */}
//                                     {product.price && (
//                                         <p className="text-amber-400 font-bold text-lg mt-2">
//                                             ৳{product.price}
//                                         </p>
//                                     )}

//                                     {/* BUTTONS */}
//                                     <div className="flex gap-3 mt-4">
//                                         <Link
//                                             href={`/product/${product.id}`}
//                                             className="bg-amber-500 text-black px-5 py-2 rounded-md font-semibold hover:scale-105 transition"
//                                         >
//                                             Shop Now
//                                         </Link>

//                                         <Link
//                                             href="/all-products"
//                                             className="border border-white text-white px-5 py-2 rounded-md hover:bg-white/10 transition"
//                                         >
//                                             Browse
//                                         </Link>
//                                     </div>

//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 ))}

//                 {/* ARROWS */}
//                 <button
//                     onClick={() =>
//                         setCurrent((prev) => (prev === 0 ? 2 : prev - 1))
//                     }
//                     className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-30"
//                 >
//                     <ChevronLeft />
//                 </button>

//                 <button
//                     onClick={() =>
//                         setCurrent((prev) => (prev + 1) % 3)
//                     }
//                     className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-30"
//                 >
//                     <ChevronRight />
//                 </button>

//                 {/* DOTS */}
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
//                     {[0, 1, 2].map((i) => (
//                         <div
//                             key={i}
//                             onClick={() => setCurrent(i)}
//                             className={`cursor-pointer transition-all ${current === i
//                                 ? "w-6 h-2 bg-amber-500"
//                                 : "w-2 h-2 bg-white/50"
//                                 } rounded-full`}
//                         />
//                     ))}
//                 </div>
//             </div>

//             {/* TRUST BAR (Daraz style) */}
//             <div className="bg-white shadow-sm py-3">
//                 <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

//                     <div>🚚 Free Delivery</div>
//                     <div>💵 Cash on Delivery</div>
//                     <div>🔒 Secure Payment</div>
//                     <div>🔄 Easy Returns</div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;




"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "animate.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const campaigns = [
    {
        title: "Summer Sale",
        subtitle: "Up to",
        highlight: "50% OFF",
        badge: "HOT DEALS 🔥",
    },
    {
        title: "Flash Deals",
        subtitle: "Limited Time",
        highlight: "70% OFF",
        badge: "⚡ FLASH SALE",
    },
    {
        title: "New Arrivals",
        subtitle: "Trending Now",
        highlight: "Shop Today",
        badge: "✨ JUST LANDED",
    },
];

const Banner = () => {
    const [products, setProducts] = useState([]);
    const [current, setCurrent] = useState(0);

    // FETCH PRODUCTS
    useEffect(() => {
        fetch("https://suncart-gamma.vercel.app/data.json")
            .then((res) => res.json())
            .then((data) => setProducts(data.products || data))
            .catch(console.error);
    }, []);

    // AUTO SLIDE
    useEffect(() => {
        if (!products.length) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(timer);
    }, [products]);

    if (!products.length) return null;

    return (
        <div className="relative w-full mt-4 md:mt-6 overflow-hidden">

            <div className="relative h-[320px] md:h-[420px] lg:h-[480px]">

                {products.slice(0, 3).map((product, index) => {
                    const campaign = campaigns[index];

                    return (
                        <div
                            key={product.id}
                            className={`absolute inset-0 transition-all duration-700 ${index === current ? "opacity-100 z-10" : "opacity-0"
                                }`}
                        >
                            {/* IMAGE */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />

                            {/* GRADIENT OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                            {/* CONTENT */}
                            <div className="absolute inset-0 flex items-center z-20">
                                <div className="max-w-7xl mx-auto px-4 w-full">

                                    <div className="max-w-xl animate__animated animate__fadeInUp space-y-4">

                                        {/* BADGE */}
                                        <span className="inline-block bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                                            {campaign.badge}
                                        </span>

                                        {/* BIG TITLE */}
                                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                            {campaign.title}
                                        </h1>

                                        {/* HIGHLIGHT */}
                                        <h2 className="text-2xl md:text-4xl font-extrabold text-amber-400">
                                            {campaign.highlight}
                                        </h2>

                                        {/* SUBTEXT */}
                                        <p className="text-white/80 text-sm md:text-base max-w-md">
                                            {product.name} — {product.description}
                                        </p>

                                        {/* BUTTONS */}
                                        <div className="flex gap-3 pt-2">
                                            <Link
                                                href={`/product/${product.id}`}
                                                className="bg-amber-500 text-black px-6 py-2 rounded-md font-semibold hover:scale-105 transition"
                                            >
                                                Shop Now
                                            </Link>

                                            <Link
                                                href="/sale"
                                                className="border border-white text-white px-6 py-2 rounded-md hover:bg-white/10 transition"
                                            >
                                                View Deals
                                            </Link>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* ARROWS */}
                <button
                    onClick={() =>
                        setCurrent((prev) => (prev === 0 ? 2 : prev - 1))
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white z-30"
                >
                    <ChevronLeft />
                </button>

                <button
                    onClick={() =>
                        setCurrent((prev) => (prev + 1) % 3)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white z-30"
                >
                    <ChevronRight />
                </button>

                {/* DOTS */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`cursor-pointer ${current === i
                                ? "w-6 h-2 bg-amber-500"
                                : "w-2 h-2 bg-white/50"
                                } rounded-full`}
                        />
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Banner;