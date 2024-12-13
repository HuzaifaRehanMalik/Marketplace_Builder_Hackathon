import Link from "next/link";
import Image from "next/image";
import { Fullscreen } from "lucide-react";
export default function Checkout() {
    return (
        <main>
            <div className="px-10 py-10">
                <div className="bg-[url('/Rectangle1.png')] h-[300px] sm:h-[200px] w-full flex justify-center items-center">
                    <div>
                        <h1 className="text-4xl text-center font-semibold">Checkout</h1>
                        <h3 className="text-xs font-medium text-center">
                            <Link href="/">Home</Link> {" > "} Checkout
                        </h3>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-evenly items-start px-10 py-10">
                    <div className="w-full lg:w-[608px]">
                        <form
                            action="/submit-checkout" // Replace with your actual API endpoint
                            method="POST"
                            className="max-w-xl mx-auto p-4 space-y-4"
                        >
                            <h1 className="text-2xl font-bold">Billing Details</h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="mt-1 block w-full border rounded-xl p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="mt-1 block w-full border rounded-xl p-2"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="companyName" className="block text-sm font-medium">Company Name (Optional)</label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    className="mt-1 block w-full border rounded-xl p-2"
                                />
                            </div>

                            <div>
                                <label htmlFor="country" className="block text-sm font-medium">Country / Region</label>
                                <select
                                    id="country"
                                    name="country"
                                    className="mt-1 block w-full border rounded-xl p-2"
                                >
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="India">India</option>
                                    <option value="United States">United States</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="streetAddress" className="block text-sm font-medium">Street Address</label>
                                <input
                                    type="text"
                                    id="streetAddress"
                                    name="streetAddress"
                                    className="mt-1 block w-full border rounded-xl p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="city" className="block text-sm font-medium">Town / City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    className="mt-1 block w-full border rounded-xl p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="province" className="block text-sm font-medium">Province</label>
                                <select
                                    id="province"
                                    name="province"
                                    className="mt-1 block w-full border rounded-xl p-2"
                                >
                                    <option value="Western Province">Western Province</option>
                                    <option value="Central Province">Central Province</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="zipCode" className="block text-sm font-medium">ZIP Code</label>
                                <input
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    className="mt-1 block w-full border rounded-xl p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    className="mt-1 block w-full border rounded-xl p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full border rounded-xl p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="additionalInfo" className="block text-sm font-medium">Additional Information</label>
                                <textarea
                                    id="additionalInfo"
                                    name="additionalInfo"
                                    className="mt-1 block w-full border rounded-xl p-2"
                                />
                            </div>


                        </form>
                    </div>
                    <div className="w-full lg:w-[500px] h-auto  rounded-md  ">
                        <div className="flex justify-evenly items-center">

                            <div className="flex flex-col justify-evenly items-start p-10 gap-5">
                                <h2 className="text-xl font-semibold ">Product</h2>
                                <div className="flex gap-2 ">
                                    <p className="text-[#9F9F9F]">Asgaard sofa </p>
                                    <p>x 1</p>

                                </div>
                                <p className="text-center">Subtotal</p>
                                <p>Total</p>

                            </div>
                            <div className="flex flex-col justify-evenly items-center p-10 gap-5">
                                <h2 className="text-xl font-semibold mb-4">Subtotal</h2>
                                <p>Rs. 250,000.00</p>
                                <p>Rs. 250,000.00</p>
                                <p className="text-xl text-[#B88E2F] font-bold ">Rs. 250,000.00</p>

                            </div>
                        </div>

                        <div>
                            _______________________________________________________________________
                        </div>
                        <ul className="list-disc">
                            <li className="pl-2 m-4 text-x font-semibold ">Direct Bank Transfer</li>
                            <li className="list-none text-[#9F9F9F]">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</li>
                        </ul>
                        <div className="flex flex-col gap-2 text-[#9F9F9F]">
                            <p>
                                <input type="checkbox" name="Direct Bank Transfer" className="rounded-full" />
                                Direct Bank Transfer

                            </p>
                            <p>

                                <input type="checkbox" name="Cash On Delivery" className="rounded-full" />
                                Cash On Delivery
                            </p>

                        </div>
                        <div>
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <p className="font-bold inline-block">privacy policy. </p>
                        </div>
                        <div className="flex justify-center items-center m-10">
                            <button className="border-[1px] border-black text-[#000000] w-[300px] h-[50px] rounded-xl ">
                                Place order
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center py-10">
                <Image src="/v-1.png" alt="lable" width={5000} height={500} />
            </div>
        </main>
    );
}
