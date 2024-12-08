import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-1 border-ye">
            <div className="flex justify-evenly items-center">
                <div>
                    <h3 className="text-center font-extrabold text-xl">
                        Funiro.
                        <br />
                        <br />
                        <br />
                    </h3>
                    <p className="text-xs text-[#9F9F9F]">
                        400 University Drive Suite 200 Coral Gables,
                        <br />
                        FL 33134 USA
                    </p>
                </div>
                <div>
                    <h3 className="text-center font-extrabold text-xl text-[#9F9F9F]">
                        Links
                    </h3>
                    <ul className="text-xs text-[#000000] space-y-2">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/Shop">Shop</Link>
                        </li>
                        <li>
                            <Link href="/About">About</Link>
                        </li>
                        <li>
                            <Link href="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-center font-extrabold text-xl text-[#9F9F9F]">
                        Help
                        <br />
                        
                    </h3>
                    <ul className="text-xs text-[#000000] space-y-3">
                        <li>
                            <Link href="/Payment Options">Payment Options</Link>
                        </li>
                        <li>
                            <Link href="/Returns">Returns</Link>
                        </li>
                        <li>
                            <Link href="/Privacy Policies">Privacy Policies</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-center text-[#9F9F9F] font-extrabold text-xl">
                        Newsletter
                        <br />
                        <br />
                        <br />
                    </h3>
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        className="bg-[#F5F7F8] text-xs p-2"
                    />
                    <button className="bg-white py-2 px-5 text-xs font-bold text-black">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
            <h3 className="text-[#000000] py-20 px-20">
                2023 Funiro. All rights reserved.
            </h3>
        </footer>
    );
}
