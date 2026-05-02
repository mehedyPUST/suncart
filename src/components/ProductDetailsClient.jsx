

"use client";

import React, { useState } from 'react';
import { Heart, RotateCcw, Share2, Shield, ShoppingCart, Star, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import "animate.css";
import { useRouter } from "next/navigation";

const ProductDetailsClient = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
    const [quantity, setQuantity] = useState(1);
    const [isWishListed, setIsWishListed] = useState(false);

    // Calculate discounted price
    const discountedPrice = product.discount
        ? (product.price - (product.price * product.discount / 100)).toFixed(2)
        : product.price;

    // Handle quantity change
    const increaseQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const router = useRouter();
    return (
        <div className="bg-linear-to-r from-amber-50 via-white to-amber-50 min-h-screen py-8 animate__animated  animate__backInUp">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="mb-6 flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors"
                >
                    ← Back to Previous Page
                </button>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Image Gallery */}
                    <div className="space-y-4">
                        <div className="relative bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden group border border-amber-100">
                            {/* Main Image */}
                            <div className="relative aspect-square">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    onError={(e) => {
                                        e.target.src = '/placeholder-image.jpg';
                                    }}
                                />
                            </div>

                            {/* Discount Badge */}
                            {product.discount > 0 && (
                                <div className="absolute top-4 left-4 bg-linear-to-r from-amber-600 to-orange-500 text-white px-3 py-1 rounded-lg font-bold text-sm shadow-lg">
                                    {product.discount}% OFF
                                </div>
                            )}

                            {/* Hot Deal Badge */}
                            {product.isHotDeal && (
                                <div className="absolute top-4 right-4 bg-linear-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-lg font-bold text-sm animate-pulse shadow-lg">
                                    🔥 Hot Deal
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Product Details */}
                    <div className="space-y-6">
                        {/* Brand */}
                        <div className="inline-block">
                            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
                                {product.brand}
                            </span>
                        </div>

                        {/* Product Name */}
                        <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                            {product.name}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < Math.floor(product.rating)
                                            ? 'fill-amber-400 text-amber-400'
                                            : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="font-semibold text-gray-700">{product.rating}</span>
                            <span className="text-gray-400">|</span>
                            <span className="text-green-600 font-medium">{product.stock} in stock</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-3">
                            {product.discount > 0 && (
                                <span className="text-gray-400 line-through text-2xl">
                                    ${product.price}
                                </span>
                            )}
                            <span className="text-4xl font-bold text-amber-600">
                                ${discountedPrice}
                            </span>
                            {product.discount > 0 && (
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-semibold">
                                    Save ${(product.price - discountedPrice).toFixed(2)}
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        <div className="border-t border-b border-amber-100 py-4">
                            <h3 className="font-semibold text-lg mb-2 text-gray-800">Description</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>



                        {/* Quantity Selector */}
                        <div>
                            <h3 className="font-semibold text-lg mb-3 text-gray-800">Quantity</h3>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={decreaseQuantity}
                                    className="w-10 h-10 rounded-full border border-amber-200 flex items-center justify-center hover:bg-amber-50 transition-colors"
                                >
                                    -
                                </button>
                                <span className="text-xl font-semibold w-12 text-center text-gray-800">{quantity}</span>
                                <button
                                    onClick={increaseQuantity}
                                    className="w-10 h-10 rounded-full border border-amber-200 flex items-center justify-center hover:bg-amber-50 transition-colors"
                                >
                                    +
                                </button>
                                <span className="text-sm text-gray-500 ml-2">
                                    {product.stock} items available
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button className="flex-1 bg-linear-to-r from-amber-600 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-600 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-md">
                                <ShoppingCart size={20} />
                                Add to Cart
                            </button>
                            <button
                                onClick={() => setIsWishListed(!isWishListed)}
                                className="px-6 py-3 rounded-xl border-2 border-amber-200 hover:border-red-400 transition-all hover:scale-105"
                            >
                                <Heart
                                    size={20}
                                    className={isWishListed ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                                />
                            </button>
                            <button className="px-6 py-3 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-all hover:scale-105">
                                <Share2 size={20} className="text-gray-600" />
                            </button>
                        </div>

                        {/* Features Strip */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-amber-100">
                            <div className="flex flex-col items-center text-center">
                                <Truck size={24} className="text-amber-600 mb-2" />
                                <span className="text-xs font-medium text-gray-700">Free Shipping</span>
                                <span className="text-xs text-gray-400">On orders $50+</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <RotateCcw size={24} className="text-amber-600 mb-2" />
                                <span className="text-xs font-medium text-gray-700">30 Days Return</span>
                                <span className="text-xs text-gray-400">Easy returns policy</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Shield size={24} className="text-amber-600 mb-2" />
                                <span className="text-xs font-medium text-gray-700">Secure Payment</span>
                                <span className="text-xs text-gray-400">100% protected</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsClient;