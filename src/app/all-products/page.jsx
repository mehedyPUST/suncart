import ProductsCard from '@/components/ProductsCard';
import React from 'react';


const AllProductsPage = async () => {

    const res = await fetch("https://suncart-gamma.vercel.app/data.json")
    const products = await res.json()

    console.log(products)
    return (
        <div>

            <h2 className='text-2xl font-bold mt-5 mb-2'>Popular Products</h2>

            <div className='grid grid-cols-3 gap-5'>
                {
                    products.map(product => < ProductsCard product={product} key={product.id} />


                    )
                }
            </div>
        </div >
    );
};

export default AllProductsPage;