"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await api.get("/api/orders/my");
      setOrders(data.orders);
    };
    fetchOrders();
  }, []);

  if (orders.length === 0) {
    return <div className="mt-32 text-center">No orders yet</div>;
  }

  return (
    <section className="max-w-5xl mx-auto px-6 mt-24">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      <div className="flex flex-col gap-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="border rounded-lg p-4"
          >
            <p className="text-sm text-gray-500">
              Order ID: {order._id}
            </p>

            <p className="font-medium mt-2">
              Total: ₹{order.totalAmount}
            </p>

            <p className="text-sm text-gray-500">
              Items: {order.items.length}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
