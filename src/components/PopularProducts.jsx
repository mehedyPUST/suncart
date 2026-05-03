import React from 'react';
import ProductsCard from './ProductsCard';

const PopularProducts = async () => {

    const res = await fetch("https://suncart-gamma.vercel.app/data.json");
    const products = await res.json();
    const popularProducts = products.slice(0, 3);

    return (
        <div className="mt-6 md:mt-10  mx-auto px-4">

            <h2 className="text-xl md:text-2xl font-bold mb-4">
                Popular Products
            </h2>

            <div className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                gap-4 md:gap-6
            ">
                {popularProducts.map(product => (
                    <ProductsCard
                        product={product}
                        key={product.id}
                    />
                ))}
            </div>

        </div>
    );
};

export default PopularProducts;