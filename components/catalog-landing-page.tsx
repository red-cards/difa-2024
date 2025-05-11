"use client"; // Required for useEffect and useState

import { useEffect, useState } from "react";
import {Open_Sans} from "next/font/google";
import { db } from "../config/firestore"; // Import the db instance
import { collection, getDocs, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

const openSans = Open_Sans({ subsets: ["latin"] });

interface Category {
    id: string;
    name: string;
}

interface Product {
    id: string;
    name: string;
    // Add other product fields here, e.g., price, imageUrl
}

export default function CatalogLandingPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Fetch categories
                const categoriesCollection = collection(db, "categories");
                const categorySnapshot = await getDocs(categoriesCollection);
                const categoriesList = categorySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
                    id: doc.id,
                    name: doc.data().name as string, // Assuming 'name' field exists
                }));
                setCategories(categoriesList);

                // Fetch products
                const productsCollection = collection(db, "products");
                const productSnapshot = await getDocs(productsCollection);
                const productsList = productSnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
                    id: doc.id,
                    name: doc.data().name as string, // Assuming 'name' field exists
                }));
                setProducts(productsList);

                setError(null);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to load data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
    }

    return (
        <div className="flex flex-row px-32 py-16 gap-5">
            <div className="w-96">
                <div className="p-4 bg-gray-100 rounded-md">
                    <h1 className={`${openSans.className} text-blue-900 font-bold`}>Category</h1>
                    <br />
                    {categories.length > 0 ? (
                        categories.map(category => (
                            <h1 key={category.id} className="py-1">{category.name}</h1>
                        ))
                    ) : (
                        <p>No categories found.</p>
                    )}
                </div>
            </div>
            <div className="w-[48rem] grid grid-cols-3 gap-4">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} className="bg-gray-100 rounded-md h-96 p-4 flex items-center justify-center">
                            {product.name}
                        </div>
                    ))
                ) : (
                    <p className="col-span-3 text-center">No products found.</p>
                )}
            </div>
        </div>
    )
}