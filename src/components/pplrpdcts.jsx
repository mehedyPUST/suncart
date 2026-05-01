




import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';

const PopularProducts = async () => {
    const res = await fetch("https://suncart-gamma.vercel.app/data.json", {
        cache: 'no-store', // Ensures fresh data on each request
        // OR use: next: { revalidate: 3600 } for ISR
    });

    const products = await res.json();
    const popularProducts = products.slice(0, 3);

    // Helper function to calculate discounted price
    const getDiscountedPrice = (price, discount) => {
        if (discount) {
            return (price - (price * discount / 100)).toFixed(2);
        }
        return price;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Section Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                    🔥 Popular Products
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Most loved items by our customers. Grab them before they're gone!
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularProducts.map((product, index) => {
                    const discountedPrice = getDiscountedPrice(product.price, product.discount);

                    return (
                        <div
                            key={product.id}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                        >
                            {/* Badges */}
                            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                                {product.popular && (
                                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                                        🔥 Popular
                                    </span>
                                )}
                                {product.discount > 0 && (
                                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {product.discount}% OFF
                                    </span>
                                )}
                                {product.isNew && (
                                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        New
                                    </span>
                                )}
                            </div>

                            {/* Wishlist Button */}
                            <button className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white">
                                <Heart size={18} className="text-gray-600 hover:text-red-500 transition-colors" />
                            </button>

                            {/* Product Image */}
                            <Link href={`/product/${product.id}`}>
                                <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-72 cursor-pointer">
                                    <img
                                        src={product.image || product.thumbnail}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button className="bg-white text-gray-900 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100">
                                            <Eye size={20} />
                                        </button>
                                    </div>
                                </div>
                            </Link>

                            {/* Product Info */}
                            <div className="p-5">
                                {/* Brand & Category */}
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                        {product.brand || 'SunCart'}
                                    </span>
                                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                        {product.category || 'Accessories'}
                                    </span>
                                </div>

                                {/* Product Name */}
                                <Link href={`/product/${product.id}`}>
                                    <h3 className="font-semibold text-lg text-gray-800 mb-2 hover:text-orange-600 transition-colors line-clamp-2 min-h-[56px]">
                                        {product.name}
                                    </h3>
                                </Link>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                className={i < Math.floor(product.rating || 4.5)
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "text-gray-300"
                                                }
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500">
                                        ({product.rating || 4.5})
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {product.reviews || 128} reviews
                                    </span>
                                </div>

                                {/* Price & Stock */}
                                <div className="flex justify-between items-center mb-4">
                                    <div className="space-x-2">
                                        {product.discount > 0 && (
                                            <span className="text-gray-400 line-through text-sm">
                                                ${product.price}
                                            </span>
                                        )}
                                        <span className="text-2xl font-bold text-orange-600">
                                            ${discountedPrice}
                                        </span>
                                    </div>
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${product.stock > 0
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                        }`}>
                                        {product.stock > 0 ? `In Stock` : 'Out of Stock'}
                                    </span>
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${product.stock > 0
                                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-lg active:scale-95'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                    disabled={product.stock === 0}
                                >
                                    <ShoppingCart size={18} />
                                    {product.stock > 0 ? 'Add to Cart' : 'Sold Out'}
                                </button>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-orange-500 transition-all duration-300 pointer-events-none"></div>
                        </div>
                    );
                })}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                    View All Products
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default PopularProducts;