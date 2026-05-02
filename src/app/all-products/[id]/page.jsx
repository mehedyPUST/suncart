// import ProductDetailsClient from '@/components/ProductDetailsClient';

// const ProductDetailsPage = async ({ params }) => {
//     const { id } = await params;
//     const res = await fetch("https://suncart-gamma.vercel.app/data.json");
//     const products = await res.json();
//     const product = products.find(product => product.id == id);

//     if (!product) {
//         return (
//             <div className="text-center py-12">
//                 <h1 className="text-2xl font-bold text-gray-800">Product Not Found</h1>
//                 <Link href="/all-products" className="text-blue-600 mt-4 inline-block">
//                     Back to Products
//                 </Link>
//             </div>
//         );
//     }

//     return <ProductDetailsClient product={product} />;
// };

// export default ProductDetailsPage;


import ProductDetailsClient from '@/components/ProductDetailsClient';
import Link from 'next/link';

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://suncart-gamma.vercel.app/data.json");
    const products = await res.json();
    const product = products.find(product => product.id == id);

    if (!product) {
        return (
            <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50 min-h-screen py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center py-12">
                        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <span>🔍</span>
                            <span>Not Found</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-4">
                            Product Not Found
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 mb-6">
                            Sorry, the product you're looking for doesn't exist or has been removed.
                        </p>
                        <Link
                            href="/all-products"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-600 transition-all hover:scale-105 shadow-md"
                        >
                            ← Back to Products
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return <ProductDetailsClient product={product} />;
};

export default ProductDetailsPage;