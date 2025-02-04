"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";

const sanity = createClient({
  projectId: "zls3kszt",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  discountPercentage: number;
  description: string;
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
}

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"]{
          _id,
          title,
          price,
          discountPercentage,
          description,
          "imageUrl": productImage.asset->url,
          tags
        }
      `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching Products:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} added to cart`);
  };

  const truncateDescription = (description: string) => {
    return description.length > 100 ? `${description.substring(0, 100)}...` : description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-700 mt-4 mb-4">Products from API data</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-gray-300 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <Image
              src={product.imageUrl || "/path/to/default/image.jpg"}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-slate-800 mt-2 text-sm">{truncateDescription(product.description)}</p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-600 font-bold">${product.price.toFixed(2)}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-green-500 text-sm">{product.discountPercentage}% OFF</p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-slate-600 text-xs bg-slate-200 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="mt-4 w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-black text-red-400">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm">
                <div>
                  <p className="text-slate-800 font-medium">{item.title}</p>
                  <p className="text-slate-500 text-sm">${item.price.toFixed(2)}</p>
                </div>
                <Image
                  src={item.imageUrl || "/path/to/default/image.jpg"}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-cover rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-500 text-center">No items in the cart</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;