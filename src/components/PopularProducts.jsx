// import React from 'react';
// import ProductsCard from './ProductsCard';

// const PopularProducts = async () => {

//     const res = await fetch("https://suncart-gamma.vercel.app/data.json")
//     const products = await res.json()
//     const popularProducts = products.slice(0, 3)
//     // console.log(popularProducts)
//     return (
//         <div>

//             <h2 className='text-2xl font-bold mt-5 mb-2'>Popular Products</h2>

//             <div className='grid grid-cols-3 gap-5'>
//                 {
//                     popularProducts.map(product => < ProductsCard product={product} key={product.id} />


//                     )
//                 }
//             </div>
//         </div >
//     );
// };

// export default PopularProducts;




import React from 'react';
import ProductsCard from './ProductsCard';

const PopularProducts = async () => {

    const res = await fetch("https://suncart-gamma.vercel.app/data.json")
    const products = await res.json()
    const popularProducts = products.slice(0, 3)

    return (
        <div className="w-full bg-gradient-to-r from-amber-50 via-white to-amber-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <span>⭐</span>
                        <span>Best Sellers</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-4">
                        Popular Products
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto rounded-full"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Most loved summer essentials our customers can't stop buying
                    </p>
                </div>

                {/* Products Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                    {
                        popularProducts.map(product => <ProductsCard product={product} key={product.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;