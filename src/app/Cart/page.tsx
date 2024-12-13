import Link from "next/link"
import Image from "next/image"
export default function Cart() {
    return (
        <div>
            <div className="px-10 py-10">
                <div className="bg-[url('/Rectangle1.png')] h-[300px] w-full flex justify-center items-center">
                    <div>
                        <h1 className="text-4xl text-center font-semibold">Cart</h1>
                        <h3 className="text-xs font-medium text-center">
                            <Link href="/">Home</Link> {" > "} Cart
                        </h3>
                    </div>
                </div>
                <div className="bg-[#F9F1E7] w-[800px] h-[55px] m-5 flex justify-evenly items-center">
                    <div className="text-black p-4">Product</div>
                    <div className="text-black p-4">Price</div>
                    <div className="text-black p-4">Quantity</div>
                    <div className="text-black p-4">Subtotal</div>
                </div>
                <div className="flex justify-between">

                    <div className="flex justify-evenly items-center gap-[60px] m-4 h-[55px] ">
                        <Image src="/Group 146.png" alt="Sofa" width={100} height={100} />
                        <h1 className="text-[#9F9F9F]">Asgaard sofa</h1>
                        <h2 className="text-[#9F9F9F]">Rs. 250,000.00</h2>
                        <div className="text-[#9F9F9F] border-[1px] border-black p-2 rounded-sx">1</div>
                        <h2 className="text-[#9F9F9F]">Rs. 250,000.00</h2>
                        <Image src="/l1.png" alt="Sofa" width={30} height={10} />
                    </div>
                    <div className="bg-[#F9F1E7] w-[393px] h-[390px]">
                        <h1 className="text-[#000000] text-center font-extrabold text-5xl p-4">Cart Totals</h1>
                        <div className="flex justify-evenly items-center m-10">
                            <h3 className="text-[#000000]">Subtotal</h3>
                            <h4 className="text-[#9F9F9F]">Rs. 250,000.00</h4>
                        </div>
                        <div className="flex justify-evenly items-center m-10">
                            <h3 className="text-[#000000]">Total</h3>
                            <h4 className="text-[#B88E2F]">Rs. 250,000.00</h4>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link href="/Checkout">
                                <button className="border-[1px] border-black rounded-xl w-[222px] h-[60px]" >Check Out</button>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center py-10">
                <Image src="/v-1.png" alt="lable" width={5000} height={500} />
            </div>

        </div>
    )
}
