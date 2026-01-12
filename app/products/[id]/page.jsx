"use client";

import api from "@/lib/axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductDetails() {

    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await api.get(`/api/products/${id}`);
                setProduct(data.product);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        }
        fetchProduct();
    }, [id]);

    if (!product) {
        return (
        <div className="mt-32 text-center text-gray-500">
        Loading product...
      </div>
        );
    }
    return (
        <section className="max-w-7xl mx-auto px-6 mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
    
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={600}
          className="w-full h-[500px] object-cover rounded-lg"
        />
      </div>

      
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-[#0D141C]">
          {product.name}
        </h1>

        <p className="text-2xl font-semibold text-[#4D7399]">
          ₹{product.price}
        </p>

        <p className="text-[#7c7c7c] leading-relaxed">
          {product.description}
        </p>

       
        <button className="mt-6 w-fit px-8 py-3 bg-[#0D141C] text-white rounded-lg hover:opacity-90 transition">
          Add to Cart
        </button>
      </div>
    </section>
    )
}