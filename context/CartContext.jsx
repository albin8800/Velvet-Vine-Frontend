"use client";

import { createContext, useContext, useEffect, useState } from "react";
import api from "@/lib/axios";
import { useAuth } from "@/context/AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user, token } = useAuth();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch cart when user logs in
  useEffect(() => {
    if (user && token) {
      fetchCart();
    } else {
      setCart([]);
    }
  }, [user, token]);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/api/cart");
      setCart(data.cart);
    } catch (error) {
      console.error("Failed to fetch cart", error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId) => {
  try {
    await api.post("/api/cart/add", { productId });
    fetchCart();
  } catch (error) {
    if (error.response?.status === 401) {
      alert("Please login to add items to cart");
    } else {
      console.error("Add to cart failed", error);
    }
  }
};


  const updateQuantity = async (productId, quantity) => {
    try {
      await api.put("/api/cart/update", { productId, quantity });
      fetchCart();
    } catch (error) {
      console.error("Update cart failed", error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await api.delete(`/api/cart/remove/${productId}`);
      fetchCart();
    } catch (error) {
      console.error("Remove from cart failed", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
