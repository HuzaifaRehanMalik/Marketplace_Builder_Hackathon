import Link from "next/link";
import Image from "next/image";
import Product from "../components/ProductCard";

export default function Shop() {
    return (
        <div>
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
            <Product />
        </div>
    );
}
