import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart } from 'lucide-react';
export default function Cart() {
    return (
        <div >
            <Sheet >
                <SheetTrigger>
                    <ShoppingCart />
                </SheetTrigger>
                <SheetContent className="bg-white w-[417px] h-[746px]">
                    <SheetHeader>
                        <SheetTitle className="text-3xl font-bold ">Shopping Cart</SheetTitle>
                        <SheetDescription className="text-[#D9D9D9] gap-5">______________________________________________________</SheetDescription>
                        <SheetDescription>
                            <div>

                                <div className="flex justify-between items-center">

                                    <Image
                                        src="/c1.png"
                                        alt="Asgaard Sofa"
                                        width={100}
                                        height={100}
                                        className="rounded-lg"
                                    />
                                    <div >
                                        <div>
                                            <h2 className="text-black text-xl">Asgaard Sofa</h2>
                                            <div className="flex justify-evenly items-center">
                                                <p>1</p>
                                                <p>X</p>
                                                <p className="text-[#B88E2F]">Rs. 250,000.00</p>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <Image
                                        src="/c2.png"
                                        alt="Casaliving Wood"
                                        width={100}
                                        height={100}
                                        className="rounded-lg bg-[#D9D9D9]"
                                    />
                                    <div >
                                        <div>
                                            <h2 className="text-black text-xl">Casaliving Wood</h2>
                                            <div className="flex justify-evenly items-center">
                                                <p>1</p>
                                                <p>X</p>
                                                <p className="text-[#B88E2F]">Rs. 250,000.00</p>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <div>

                                    <div className="p-4 text-center font-sans">
                                        <div className="flex justify-between items-center px-6 mb-2 text-lg">
                                            <span>Subtotal</span>
                                            <span className="text-[#b0862b] font-bold">Rs. 520,000.00</span>
                                        </div>

                                        <hr className="border-gray-300 mb-4" />
                                        <div className="flex justify-center gap-4">
                                            <button className="px-6 py-2 border border-black rounded-full hover:bg-gray-100">
                                                Cart
                                            </button>
                                            <button className="px-6 py-2 border border-black rounded-full hover:bg-gray-100">
                                                Checkout
                                            </button>
                                            <button className="px-6 py-2 border border-black rounded-full hover:bg-gray-100">
                                                Comparison
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}


