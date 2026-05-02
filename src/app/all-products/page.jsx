// import ProductsCard from '@/components/ProductsCard';
// import React from 'react';


// const AllProductsPage = async () => {

//     const res = await fetch("https://suncart-gamma.vercel.app/data.json")
//     const products = await res.json()

//     console.log(products)
//     return (
//         <div>

//             <h2 className='text-2xl font-bold mt-5 mb-2'>All Products</h2>

//             <div className='grid grid-cols-3 gap-5'>
//                 {
//                     products.map(product => < ProductsCard product={product} key={product.id} />


//                     )
//                 }
//             </div>
//         </div >
//     );
// };

// export default AllProductsPage;


import ProductsCard from '@/components/ProductsCard';
import React from 'react';
import "animate.css";

const AllProductsPage = async () => {
    const res = await fetch("https://suncart-gamma.vercel.app/data.json");
    const products = await res.json();

    return (
        <div className="bg-linear-to-r from-amber-50 via-white to-amber-50 min-h-screen py-8 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="text-center mb-12 animate__animated animate__fadeInDown">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <span>🛍️</span>
                        <span>Shop Collection</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-4">
                        All Products
                    </h1>
                    <div className="w-24 h-1 bg-linear-to-r from-amber-600 to-orange-500 mx-auto rounded-full"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Discover our complete collection of summer essentials
                    </p>
                </div>

                {/* Products Grid - Responsive */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'>
                    {products.map((product) => (
                        <ProductsCard product={product} key={product.id} />
                    ))}
                </div>

                {/* Optional: Show message if no products */}
                {products.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No products found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllProductsPage;


