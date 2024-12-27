import Image from "next/image"
import Link from "next/link"
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';
import Cart from "./Cart";

export default function Navebar() {
    return (
        <nav>
            <div className="flex justify-evenly items-center">
                <Link href="/">
                    <Image src="/Logo.png" alt="Logo of website" width={100} height={100} className="m-5" />
                </Link>
                <div className="flex justify-between items-start gap-10">
                    <Link href="/">Home</Link>
                    <Link href="/Shop">Shop</Link>
                    <Link href="/Blog">Blog</Link>
                    <Link href="/Contact">Contact</Link>

                </div>
                <div className="flex justify-evenly items-start gap-10">

                    <User />
                    <Search />
                    <Heart />
                    <Cart />
                        
                </div>

            </div>

        </nav>
    )
}
