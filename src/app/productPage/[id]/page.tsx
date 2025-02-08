import Image from 'next/image';
import React from 'react';
import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: 'zls3kszt',
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2021-03-25', 
});

interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    imageUrl: string;
    tags: string[];
}

const Id = async ({ params: { id } }: { params: { id: string } }) => {
    try {
        const query = `*[_type == "product" && _id == $id]{
            "id": _id,
            title,
            price,
            description,
            "imageUrl": productImage.asset->url,
            tags
        }[0]`;

        const productDetail: Product | null = await client.fetch(query, { id });

        if (!productDetail) {
            return (
                <div className="text-center py-10">
                    <h1 className="text-2xl font-semibold text-red-500">Product not found</h1>
                </div>
            );
        }

        return (
            <div className="flex justify-center items-center min-h-screen py-10">
                <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg text-center">
                    <h1 className="text-3xl font-bold text-gray-800">{productDetail.title}</h1>
                    <Image
                        src={productDetail.imageUrl}
                        alt={productDetail.title}
                        width={500}
                        height={500}
                        className="mt-4 rounded-md object-cover mx-auto"
                    />
                    <p className="text-gray-600 mt-4">{productDetail.description}</p>
                    <p className="text-lg font-semibold text-blue-600 mt-2">${productDetail.price}</p>

                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        {productDetail.tags.map((tag) => (
                            <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a
                        href="/"
                        className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Back to Products
                    </a>
                </div>
            </div>
        );
    } catch (error) {
        return (
            <div className="text-center py-10">
                <h1 className="text-2xl font-semibold text-red-500">Error loading product</h1>
            </div>
        );
    }
};

export default Id;