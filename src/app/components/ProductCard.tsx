"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: number;
  discountPercentage: number;
  description: string;
  imageUrl: string;
  tags: string[];
}

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
          "id": _id,
          title,
          price,
          discountPercentage,
          description,
          "imageUrl": productImage.asset->url,
          tags
        }`;
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} added to cart`);
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-700 mt-4 mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/productPage/${product.id}`} key={product.id}>
            <div className="bg-gray-300 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-slate-800 mt-2 text-sm">
                  {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </p>
                <button
                  className="mt-4 w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
