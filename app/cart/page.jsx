"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, loading, updateQuantity, removeFromCart } = useCart();

  if (loading) {
    return <div className="mt-32 text-center">Loading cart...</div>;
  }

  if (cart.length === 0) {
    return <div className="mt-32 text-center">Your cart is empty</div>;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <section className="max-w-5xl mx-auto px-6 mt-24">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="flex flex-col gap-6">
        {cart.map(({ product, quantity }) => (
          <div
            key={product._id}
            className="flex items-center gap-6 border-b pb-4"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={120}
              className="object-cover rounded"
            />

            <div className="flex-1">
              <h2 className="font-medium">{product.name}</h2>
              <p className="text-sm text-gray-500">₹{product.price}</p>
            </div>

           <div className="flex items-center gap-3">
  <button
    onClick={() =>
      quantity > 1 && updateQuantity(product._id, quantity - 1)
    }
    className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100"
  >
    −
  </button>

  <span className="w-6 text-center font-medium">
    {quantity}
  </span>

  <button
    onClick={() =>
      updateQuantity(product._id, quantity + 1)
    }
    className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100"
  >
    +
  </button>
</div>


            <button
              onClick={() => removeFromCart(product._id)}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <p className="text-lg font-semibold">Total: ₹{total}</p>
        <button className="px-6 py-3 bg-black text-white rounded-lg">
          Checkout
        </button>
      </div>
    </section>
  );
}
