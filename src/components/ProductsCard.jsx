import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductsCard = ({ product }) => {
    return (
        <Card className='border overflow-hidden'>
            <div className='relative w-full h-48'>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className='p-3 space-y-2'>
                <h3 className='font-semibold'>{product.name}</h3>
                <div className='flex items-center gap-1'>
                    <span>★</span>
                    <span>{product.rating}</span>
                </div>
                <div className='font-bold text-lg'>${product.price}</div>

                <Link href={`/product/${product.id}`}>
                    <button className='w-full py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition'>
                        View Details
                    </button>
                </Link>
            </div>
        </Card>
    );
};

export default ProductsCard;