import Link from "next/link";
import Image from "next/image";

export default function Shop() {
    const products = [
        {
            src: "/Images.png",
            title: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            originalPrice: "Rp 3.500.000",
            badge: "30% Off",
        },
        {
            src: "/Image.png",
            title: "Lolito",
            description: "Luxury big sofa",
            price: "Rp 7.000.000",
            badge: "New",
        },
        {
            src: "/Images (1).png",
            title: "Respira",
            description: "Outdoor bar table and stool",
            price: "Rp 500.000",
            badge: "New",
        },
        {
            src: "/Images (3).png",
            title: "Grifo",
            description: "Night lamp",
            price: "Rp 1.500.000",
        },
        {
            src: "/Images (4).png",
            title: "Muggo",
            description: "Small mug",
            price: "Rp 150.000",
        },
        {
            src: "/Images (5).png",
            title: "Pingky",
            description: "Cute bed set",
            price: "Rp 7.000.000",
        },
        {
            src: "/Images (6).png",
            title: "Potty",
            description: "Minimalist flower pot",
            price: "Rp 500.000",
        },
        {
            src: "/Images (4).png",
            title: "Muggo",
            description: "Small mug",
            price: "Rp 150.000",
        },
        {
            src: "/Images (5).png",
            title: "Pingky",
            description: "Cute bed set",
            price: "Rp 7.000.000",
        },
        {
            src: "/Images (6).png",
            title: "Potty",
            description: "Minimalist flower pot",
            price: "Rp 500.000",
        },
        {
            src: "/Images (5).png",
            title: "Pingky",
            description: "Cute bed set",
            price: "Rp 7.000.000",
        },
        {
            src: "/Images (6).png",
            title: "Potty",
            description: "Minimalist flower pot",
            price: "Rp 500.000",
        },
    ];

    return (
        <div>
            {/* Header */}
            <div className="px-10 py-10">
                <div className="bg-[url('/Rectangle1.png')] h-[300px] w-full flex justify-center items-center">
                    <div>
                        <h1 className="text-4xl text-center font-semibold">Shop</h1>
                        <h3 className="text-xs font-medium text-center">
                            <Link href="/">Home</Link> {" > "} Shop
                        </h3>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-4 gap-8 px-10 py-10">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="relative bg-white shadow-md rounded-lg overflow-hidden group"
                    >
                        {/* Product Image */}
                        <div className="relative">
                            <Image
                                src={product.src}
                                alt={product.title}
                                className="w-full"
                                width={300}
                                height={300}
                            />
                            {product.badge && (
                                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                    {product.badge}
                                </span>
                            )}
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
                                <button className="bg-white text-black px-4 py-2 m-2 rounded hover:bg-gray-200">
                                    Add to cart
                                </button>
                                <button className="bg-white text-black px-4 py-2 m-2 rounded hover:bg-gray-200">
                                    Compare
                                </button>
                                <button className="bg-white text-black px-4 py-2 m-2 rounded hover:bg-gray-200">
                                    Wishlist
                                </button>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="p-4">
                            <h3 className="font-bold">{product.title}</h3>
                            <h4 className="text-gray-500">{product.description}</h4>
                            <p className="font-semibold">{product.price}</p>
                            {product.originalPrice && (
                                <p className="text-gray-400 line-through text-sm">
                                    {product.originalPrice}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
