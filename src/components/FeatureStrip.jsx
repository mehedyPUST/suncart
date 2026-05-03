"use client";

import React from "react";
import { Truck, ShieldCheck, RefreshCcw, Wallet } from "lucide-react";

const features = [
    {
        icon: Truck,
        title: "Free Delivery",
        desc: "On orders over ৳1000",
    },
    {
        icon: Wallet,
        title: "Cash on Delivery",
        desc: "Pay when you receive",
    },
    {
        icon: ShieldCheck,
        title: "Secure Payment",
        desc: "100% protected",
    },
    {
        icon: RefreshCcw,
        title: "Easy Returns",
        desc: "7 days return policy",
    },
];

const FeatureStrip = () => {
    return (
        <div className="bg-linear-to-r from-amber-50 to-orange-50 py-4 md:py-6 mt-5">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="group flex items-center gap-3 bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
                            >
                                {/* ICON */}
                                <div className="bg-amber-100 text-amber-600 p-2 rounded-lg group-hover:scale-110 transition">
                                    <Icon size={20} />
                                </div>

                                {/* TEXT */}
                                <div>
                                    <p className="font-semibold text-sm md:text-base text-gray-800">
                                        {item.title}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default FeatureStrip;