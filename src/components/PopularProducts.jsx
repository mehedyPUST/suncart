import React from 'react';
import ProductsCard from './ProductsCard';

const PopularProducts = async () => {

    const res = await fetch("https://suncart-gamma.vercel.app/data.json")
    const products = await res.json()
    const popularProducts = products.slice(0, 3)
    // console.log(popularProducts)
    return (
        <div>

            <h2 className='text-2xl font-bold mt-5 mb-2'>Popular Products</h2>

            <div className='grid grid-cols-3 gap-5'>
                {
                    popularProducts.map(product => < ProductsCard product={product} key={product.id} />


                    )
                }
            </div>
        </div >
    );
};

export default PopularProducts;

