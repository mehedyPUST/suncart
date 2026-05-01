import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ProductsCard = ({ product }) => {
    return (
        <Card >
            <div className=''>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </Card>
    );
};

export default ProductsCard;