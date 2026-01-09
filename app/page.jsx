"use client";

import ProductCard from "@/components/ProductCard";
import api from "@/lib/axios";
import axios from "axios";
import { useEffect, useState } from "react";

// const dummyProducts = [
//   {
//     id: 1,
//     name: "Velvet Noir Dress",
//     description: "Elegant evening wear crafted from premium velvet fabric.",
//     price: 7999,
//     image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
//   },
//   {
//     id: 2,
//     name: "Wine Silk Saree",
//     description: "Soft silk saree with a rich wine tone and gold accents.",
//     price: 11999,
//     image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
//   },
//   {
//     id: 3,
//     name: "Velvet Rose Handbag",
//     description: "Handcrafted handbag with elegant structure and finish.",
//     price: 4599,
//     image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
//   },
//   {
//     id: 4,
//     name: "Velvet Noir Dress",
//     description: "Elegant evening wear crafted from premium velvet fabric.",
//     price: 7999,
//     image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
//   },
//   {
//     id: 5,
//     name: "Wine Silk Saree",
//     description: "Soft silk saree with a rich wine tone and gold accents.",
//     price: 11999,
//     image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
//   },
//   {
//     id: 6,
//     name: "Velvet Rose Handbag",
//     description: "Handcrafted handbag with elegant structure and finish.",
//     price: 4599,
//     image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
//   },
// ];






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
    }
    fetchProducts();
  }, [])
  return (
    <section className="flex flex-col mx-36 mt-24">
      <div className="flex flex-col gap-2">
        <h1 className="text-[32px] font-bold text-[#0D141C] ">Our Products</h1>
        <p className="text-[#4D7399] text-[14px]">Explore our curated collection of high-quality products.</p>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {products.slice(0, 20).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </section>
  );
}
