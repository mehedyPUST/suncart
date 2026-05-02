// import { Card } from '@heroui/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const ProductsCard = ({ product }) => {
//     return (
//         <Card className='border overflow-hidden'>
//             <div className='relative w-full h-48'>
//                 <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     className="object-cover"
//                 />
//             </div>

//             <div className='p-3 space-y-2'>
//                 <h3 className='font-semibold'>{product.name}</h3>
//                 <div className='flex items-center gap-1'>
//                     <span>★</span>
//                     <span>{product.rating}</span>
//                 </div>
//                 <div className='font-bold text-lg'>${product.price}</div>

//                 <Link href={`/all-products/${product.id}`}>
//                     <button className='w-full py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition'>
//                         View Details
//                     </button>
//                 </Link>
//             </div>
//         </Card>
//     );
// };

// export default ProductsCard;


import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductsCard = ({ product }) => {
    // Calculate discounted price if discount exists
    const discountedPrice = product.discount
        ? (product.price - (product.price * product.discount / 100)).toFixed(2)
        : null;

    return (
        <Card className='border border-amber-100 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white'>
            <div className='relative w-full h-48 md:h-56 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50'>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Discount Badge */}
                {product.discount > 0 && (
                    <div className='absolute top-2 left-2 bg-gradient-to-r from-amber-600 to-orange-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-md'>
                        {product.discount}% OFF
                    </div>
                )}

                {/* Hot Deal Badge */}
                {product.isHotDeal && (
                    <div className='absolute top-2 right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-md'>
                        🔥 Hot
                    </div>
                )}
            </div>

            <div className='p-4 space-y-2'>
                {/* Brand */}
                <div className='text-xs text-amber-600 font-semibold'>
                    {product.brand}
                </div>

                {/* Product Name */}
                <h3 className='font-semibold text-gray-800 line-clamp-2 min-h-[3rem]'>
                    {product.name}
                </h3>

                {/* Rating */}
                <div className='flex items-center gap-1'>
                    <span className='text-amber-400 text-sm'>★</span>
                    <span className='text-sm font-medium text-gray-700'>{product.rating}</span>
                    <span className='text-gray-400 text-xs'>|</span>
                    <span className='text-xs text-green-600'>{product.stock} in stock</span>
                </div>

                {/* Price */}
                <div className='flex items-baseline gap-2'>
                    {discountedPrice ? (
                        <>
                            <span className='font-bold text-lg text-amber-600'>${discountedPrice}</span>
                            <span className='text-gray-400 line-through text-sm'>${product.price}</span>
                            <span className='text-green-600 text-xs font-semibold'>
                                Save ${(product.price - discountedPrice).toFixed(2)}
                            </span>
                        </>
                    ) : (
                        <span className='font-bold text-lg text-amber-600'>${product.price}</span>
                    )}
                </div>

                {/* View Details Button */}
                <Link href={`/all-products/${product.id}`}>
                    <button className='w-full py-2 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg text-sm font-semibold hover:from-amber-700 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-md'>
                        View Details →
                    </button>
                </Link>
            </div>
        </Card>
    );
};

export default ProductsCard;