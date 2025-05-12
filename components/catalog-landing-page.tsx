"use client"; // Required for useEffect and useState

import { useEffect, useState } from "react";
import { Open_Sans } from "next/font/google";
import { db } from "../config/firestore"; // Import the db instance
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import CatalogChild from "./catalog-child";

const openSans = Open_Sans({ subsets: ["latin"] });

interface Category {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  amount: string;
  categoryId?: string; // To store the ID of the category from Firestore
  categoryName?: string; // To store the resolved category name
  imageUrl?: string; // To store the image URL from Firestore
  // Add other product fields here, e.g., price, imageUrl, description
}

export default function CatalogLandingPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null); // To store the ID of the selected category
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // 1. Fetch all categories and create a lookup map
        const categoriesCollectionRef = collection(db, "categories");
        const categorySnapshot = await getDocs(categoriesCollectionRef);
        const categoryMap = new Map<string, string>();
        const categoriesList = categorySnapshot.docs.map(
          (doc: QueryDocumentSnapshot<DocumentData>) => {
            const categoryData = {
              id: doc.id,
              name: doc.data().name as string, // Assuming 'name' field exists
            };
            categoryMap.set(doc.id, categoryData.name);
            return categoryData;
          }
        );

        setCategories(categoriesList);

        // 2. Fetch products and resolve category names
        const productsCollectionRef = collection(db, "products");
        const productSnapshot = await getDocs(productsCollectionRef);
        const productsList = productSnapshot.docs.map(
          (doc: QueryDocumentSnapshot<DocumentData>) => {
            const productData = doc.data();
            const categoryId = productData.category as string | undefined;
            const categoryName = categoryId
              ? categoryMap.get(categoryId)
              : undefined;
            return {
              id: doc.id,
              name: productData.name as string, // Assuming 'name' field exists
              amount: productData.amount as string, // Assuming 'amount' field exists
              categoryId: categoryId,
              categoryName: categoryName,
              imageUrl: productData.imageUrl as string | undefined, // Assuming 'imageUrl' field exists
            };
          }
        );

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
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  // Filter products based on selectedCategoryId
  const filteredProducts = selectedCategoryId
    ? products.filter(product => product.categoryId === selectedCategoryId)
    : products;

  const handleCategoryClick = (categoryId: string | null) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="flex flex-row px-32 py-16 gap-5">
      <div className="w-96">
        <div className="p-4 bg-gray-100 rounded-md">
          <h1 className={`${openSans.className} text-blue-900 font-bold`}>
            Category
          </h1>
          <br />
          {/* "All Categories" option */}
          <button
            onClick={() => handleCategoryClick(null)}
            className={`py-1 w-full text-left hover:text-blue-700 ${selectedCategoryId === null ? 'text-blue-900' : ''}`}
          >
            All Categories
          </button>
          {categories.length > 0 ? (
            categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`py-1 w-full text-left hover:text-blue-700 ${selectedCategoryId === category.id ? ' text-blue-900' : ''}`}
              >
                {category.name}
              </button>
            ))
          ) : (
            <p>No categories found.</p>
          )}
        </div>
      </div>
      <div className="w-[48rem] grid grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <CatalogChild
              key={product.id}
              title={product.name}
              amount={product.amount}
              image={product.imageUrl}
            />
          ))
        ) : (
          <p className="col-span-3 text-center">No products found.</p>
        )}
      </div>
    </div>
  );
}
