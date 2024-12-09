import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
    const products = [
        {
            image: "/Images.png",
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
        },
        {
            image: "/PopUp.png",
            name: "Levoisa",
            description: "Modern chair",
            price: "Rp 2.000.000",
        },
        {
            image: "/Images (1).png",
            name: "Lolito",
            description: "Luxury big sofa",
            price: "Rp 7.000.000",
        },
        {
            image: "/Images (2).png",
            name: "Respira",
            description: "Outdoor bar table and stool",
            price: "Rp 500.000",
        },
        {
            image: "/Images (3).png",
            name: "Grifo",
            description: "Night lamp",
            price: "Rp 1.500.000",
        },
        {
            image: "/Images (4).png",
            name: "Muggo",
            description: "Small mug",
            price: "Rp 150.000",
        },
        {
            image: "/Images (5).png",
            name: "Pingky",
            description: "Cute bed set",
            price: "Rp 7.000.000",
        },
        {
            image: "/Images (6).png",
            name: "Potty",
            description: "Minimalist flower pot",
            price: "Rp 500.000",
        },
    ];

    return (
        <div className="px-10 py-10">
            <h2 className="text-center font-extrabold text-3xl mb-10">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
                        style={{ height: "420px" }} // Increased height
                    >
                        <Link href="/SingleProduct">

                            <Image
                                src={product.image}
                                alt={product.name}
                                width={200}
                                height={200}
                                className="object-cover w-full h-56" // Increased image height
                            />
                            <div className="bg-[#F4F5F7] p-6">
                                <h3 className="font-bold text-lg">{product.name}</h3>
                                <h4 className="text-[#898989]">{product.description}</h4>
                                <p className="font-semibold text-black">{product.price}</p>
                            </div>
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
}
