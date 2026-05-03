
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
        <div className="relative w-full mt-4 md:mt-6 overflow-hidden  animate__animated animate__fadeInDown">

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