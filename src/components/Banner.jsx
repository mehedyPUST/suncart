// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { ChevronLeft, ChevronRight, Flame, ShoppingBag, Zap, Clock } from 'lucide-react';

// const slides = [
//     {
//         id: 1,
//         title: "Summer Sale",
//         discount: "50% OFF",
//         description: "On all summer collections",
//         cta: "Shop Now",
//         link: "/sale",
//         bgColor: "from-orange-500 to-red-600",
//         icon: <Flame className="text-yellow-300" size={40} />,
//         badge: "HOT DEALS 🔥",
//         image: "🌊", // Placeholder for actual image
//     },
//     {
//         id: 2,
//         title: "Flash Sale",
//         discount: "UP TO 70%",
//         description: "Limited time offers",
//         cta: "Grab Deals",
//         link: "/flash-sale",
//         bgColor: "from-purple-500 to-pink-600",
//         icon: <Zap className="text-yellow-300" size={40} />,
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
//         bgColor: "from-teal-500 to-blue-600",
//         icon: <ShoppingBag className="text-white" size={40} />,
//         badge: "✨ JUST LANDED",
//         image: "🛍️",
//     },
// ];

// const Banner = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isAnimating, setIsAnimating] = useState(false);

//     // Auto-slide functionality
//     useEffect(() => {
//         const timer = setInterval(() => {
//             nextSlide();
//         }, 5000);
//         return () => clearInterval(timer);
//     }, [currentSlide]);

//     const nextSlide = () => {
//         if (isAnimating) return;
//         setIsAnimating(true);
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//         setTimeout(() => setIsAnimating(false), 500);
//     };

//     const prevSlide = () => {
//         if (isAnimating) return;
//         setIsAnimating(true);
//         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//         setTimeout(() => setIsAnimating(false), 500);
//     };

//     const goToSlide = (index) => {
//         if (isAnimating || index === currentSlide) return;
//         setIsAnimating(true);
//         setCurrentSlide(index);
//         setTimeout(() => setIsAnimating(false), 500);
//     };

//     return (
//         <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 mt-5 mb-5">
//             {/* Main Slider Container */}
//             <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
//                 {slides.map((slide, index) => (
//                     <div
//                         key={slide.id}
//                         className={`absolute inset-0 transition-all duration-700 transform ${index === currentSlide
//                             ? 'translate-x-0 opacity-100'
//                             : index < currentSlide
//                                 ? '-translate-x-full opacity-0'
//                                 : 'translate-x-full opacity-0'
//                             }`}
//                     >
//                         {/* Background with Gradient */}
//                         <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} opacity-90`} />

//                         {/* Decorative Pattern */}
//                         <div className="absolute inset-0 opacity-10">
//                             <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
//                             <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-3xl" />
//                         </div>

//                         {/* Content Container */}
//                         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
//                             <div className="grid md:grid-cols-2 gap-8 items-center w-full">
//                                 {/* Left Content */}
//                                 <div className="text-white space-y-6 animate-fadeInUp">
//                                     {/* Badge */}
//                                     <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
//                                         {slide.icon}
//                                         <span className="text-sm font-semibold">{slide.badge}</span>
//                                     </div>

//                                     {/* Title */}
//                                     <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
//                                         {slide.title}
//                                         <br />
//                                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
//                                             {slide.discount}
//                                         </span>
//                                     </h1>

//                                     {/* Description */}
//                                     <p className="text-lg md:text-xl text-white/90 max-w-md">
//                                         {slide.description}
//                                     </p>

//                                     {/* Timer for Flash Sale */}
//                                     {slide.id === 2 && <FlashTimer />}

//                                     {/* CTA Buttons */}
//                                     <div className="flex flex-wrap gap-4 pt-4">
//                                         <Link
//                                             href={slide.link}
//                                             className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
//                                         >
//                                             {slide.cta}
//                                             <ChevronRight size={20} />
//                                         </Link>
//                                         <Link
//                                             href="/products"
//                                             className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
//                                         >
//                                             View All
//                                         </Link>
//                                     </div>
//                                 </div>

//                                 {/* Right Content - Decorative Image/Illustration */}
//                                 <div className="hidden md:flex justify-center items-center animate-float">
//                                     <div className="relative">
//                                         <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl opacity-30 animate-pulse" />
//                                         <div className="relative text-9xl">
//                                             {slide.image}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}

//                 {/* Navigation Arrows */}
//                 <button
//                     onClick={prevSlide}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20"
//                     aria-label="Previous slide"
//                 >
//                     <ChevronLeft size={24} />
//                 </button>
//                 <button
//                     onClick={nextSlide}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20"
//                     aria-label="Next slide"
//                 >
//                     <ChevronRight size={24} />
//                 </button>

//                 {/* Dots Navigation */}
//                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//                     {slides.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => goToSlide(index)}
//                             className={`transition-all duration-300 ${index === currentSlide
//                                 ? 'w-12 h-2 bg-white'
//                                 : 'w-2 h-2 bg-white/50 hover:bg-white/80'
//                                 } rounded-full`}
//                             aria-label={`Go to slide ${index + 1}`}
//                         />
//                     ))}
//                 </div>
//             </div>

//             {/* Features Strip */}
//             <div className="relative bg-black/20 backdrop-blur-sm py-4 border-t border-white/10">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                         <FeatureItem icon="🚚" text="Free Shipping" subtext="On orders $50+" />
//                         <FeatureItem icon="🔄" text="30 Days Return" subtext="Easy returns policy" />
//                         <FeatureItem icon="🔒" text="Secure Payment" subtext="100% secure checkout" />
//                         <FeatureItem icon="🎧" text="24/7 Support" subtext="Customer service" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Flash Timer Component
// const FlashTimer = () => {
//     const [timeLeft, setTimeLeft] = useState({
//         hours: 23,
//         minutes: 59,
//         seconds: 59
//     });

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTimeLeft(prev => {
//                 if (prev.seconds > 0) {
//                     return { ...prev, seconds: prev.seconds - 1 };
//                 } else if (prev.minutes > 0) {
//                     return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
//                 } else if (prev.hours > 0) {
//                     return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
//                 }
//                 return prev;
//             });
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <div className="flex gap-4 pt-2">
//             <TimerUnit value={timeLeft.hours} label="Hours" />
//             <TimerUnit value={timeLeft.minutes} label="Minutes" />
//             <TimerUnit value={timeLeft.seconds} label="Seconds" />
//         </div>
//     );
// };

// const TimerUnit = ({ value, label }) => (
//     <div className="text-center">
//         <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
//             <span className="text-2xl md:text-3xl font-bold text-white">
//                 {String(value).padStart(2, '0')}
//             </span>
//         </div>
//         <span className="text-xs text-white/80 mt-1 block">{label}</span>
//     </div>
// );

// const FeatureItem = ({ icon, text, subtext }) => (
//     <div className="flex items-center gap-3 text-white">
//         <span className="text-2xl">{icon}</span>
//         <div>
//             <p className="font-semibold text-sm md:text-base">{text}</p>
//             <p className="text-xs text-white/70">{subtext}</p>
//         </div>
//     </div>
// );

// // Add these animations to your global CSS file
// const styles = `
// @keyframes fadeInUp {
//     from {
//         opacity: 0;
//         transform: translateY(30px);
//     }
//     to {
//         opacity: 1;
//         transform: translateY(0);
//     }
// }

// @keyframes float {
//     0%, 100% {
//         transform: translateY(0px);
//     }
//     50% {
//         transform: translateY(-20px);
//     }
// }

// .animate-fadeInUp {
//     animation: fadeInUp 0.6s ease-out forwards;
// }

// .animate-float {
//     animation: float 3s ease-in-out infinite;
// }
// `;

// // Add styles to document if needed
// if (typeof document !== 'undefined') {
//     const styleSheet = document.createElement("style");
//     styleSheet.textContent = styles;
//     document.head.appendChild(styleSheet);
// }

// export default Banner;




"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Flame, ShoppingBag, Zap, Clock } from 'lucide-react';

const slides = [
    {
        id: 1,
        title: "Summer Sale",
        discount: "50% OFF",
        description: "On all summer essentials",
        cta: "Shop Now",
        link: "/sale",
        bgColor: "from-amber-600 to-orange-600",
        icon: <Flame className="text-amber-300" size={40} />,
        badge: "HOT DEALS 🔥",
        image: "🌊",
    },
    {
        id: 2,
        title: "Flash Sale",
        discount: "UP TO 70%",
        description: "Limited time summer offers",
        cta: "Grab Deals",
        link: "/flash-sale",
        bgColor: "from-orange-500 to-red-600",
        icon: <Zap className="text-amber-300" size={40} />,
        badge: "⚡ FLASH SALE",
        image: "⚡",
    },
    {
        id: 3,
        title: "New Arrivals",
        discount: "FREE SHIPPING",
        description: "On orders over $50",
        cta: "Explore Now",
        link: "/new-arrivals",
        bgColor: "from-amber-500 to-orange-500",
        icon: <ShoppingBag className="text-white" size={40} />,
        badge: "✨ JUST LANDED",
        image: "🛍️",
    },
];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToSlide = (index) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <div className="relative w-full overflow-hidden mt-4 md:mt-10">
            {/* Main Slider Container */}
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-700 transform ${index === currentSlide
                            ? 'translate-x-0 opacity-100'
                            : index < currentSlide
                                ? '-translate-x-full opacity-0'
                                : 'translate-x-full opacity-0'
                            }`}
                    >
                        {/* Background with Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} opacity-95`} />

                        {/* Decorative Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl" />
                        </div>

                        {/* Content Container */}
                        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                            <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                                {/* Left Content */}
                                <div className="text-white space-y-6 animate-fadeInUp">
                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                                        {slide.icon}
                                        <span className="text-sm font-semibold">{slide.badge}</span>
                                    </div>

                                    {/* Title */}
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                        {slide.title}
                                        <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-200">
                                            {slide.discount}
                                        </span>
                                    </h1>

                                    {/* Description */}
                                    <p className="text-lg md:text-xl text-white/90 max-w-md">
                                        {slide.description}
                                    </p>

                                    {/* Timer for Flash Sale */}
                                    {slide.id === 2 && <FlashTimer />}

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <Link
                                            href={slide.link}
                                            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
                                        >
                                            {slide.cta}
                                            <ChevronRight size={20} />
                                        </Link>
                                        <Link
                                            href="/all-products"
                                            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
                                        >
                                            View All
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Content - Decorative Image/Illustration */}
                                <div className="hidden md:flex justify-center items-center animate-float">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-3xl opacity-30 animate-pulse" />
                                        <div className="relative text-9xl">
                                            {slide.image}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Dots Navigation */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 ${index === currentSlide
                                ? 'w-12 h-2 bg-amber-400'
                                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                                } rounded-full`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Features Strip */}
            <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <FeatureItem icon="🚚" text="Free Shipping" subtext="On orders $50+" />
                        <FeatureItem icon="🔄" text="30 Days Return" subtext="Easy returns policy" />
                        <FeatureItem icon="🔒" text="Secure Payment" subtext="100% secure checkout" />
                        <FeatureItem icon="🎧" text="24/7 Support" subtext="Customer service" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Flash Timer Component
const FlashTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex gap-4 pt-2">
            <TimerUnit value={timeLeft.hours} label="Hours" />
            <TimerUnit value={timeLeft.minutes} label="Minutes" />
            <TimerUnit value={timeLeft.seconds} label="Seconds" />
        </div>
    );
};

const TimerUnit = ({ value, label }) => (
    <div className="text-center">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
            <span className="text-2xl md:text-3xl font-bold text-white">
                {String(value).padStart(2, '0')}
            </span>
        </div>
        <span className="text-xs text-white/80 mt-1 block">{label}</span>
    </div>
);

const FeatureItem = ({ icon, text, subtext }) => (
    <div className="flex items-center gap-3 text-white">
        <span className="text-2xl">{icon}</span>
        <div>
            <p className="font-semibold text-sm md:text-base">{text}</p>
            <p className="text-xs text-white/80">{subtext}</p>
        </div>
    </div>
);

// Add these animations to your global CSS file
const styles = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}
`;

// Add styles to document if needed
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

export default Banner;