import ProductDetailsClient from '@/components/ProductDetailsClient';

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://suncart-gamma.vercel.app/data.json");
    const products = await res.json();
    const product = products.find(product => product.id == id);

    if (!product) {
        return (
            <div className="text-center py-12">
                <h1 className="text-2xl font-bold text-gray-800">Product Not Found</h1>
                <Link href="/all-products" className="text-blue-600 mt-4 inline-block">
                    Back to Products
                </Link>
            </div>
        );
    }

    return <ProductDetailsClient product={product} />;
};

export default ProductDetailsPage;