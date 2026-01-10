"use client";

import ProductCard from "@/components/ProductCard";
import api from "@/lib/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get("/api/products");
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32">
    
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0D141C]">
          Our Products
        </h1>
        <p className="text-[#4D7399] text-sm">
          Explore our curated collection of high-quality products.
        </p>
      </div>

     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.slice(0, 20).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
