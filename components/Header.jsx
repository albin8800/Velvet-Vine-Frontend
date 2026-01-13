"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { user, logout, loading } = useAuth();
  const { cart } = useCart();

  if (loading) return null;

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="fixed top-0 left-0 w-full border-b border-gray-200 bg-[#FAFAFA] z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    
        <Link
          href="/"
          className="text-xl font-semibold tracking-wide text-[#5A1A2E]"
        >
          Velvet & Vine
        </Link>

       
        <div className="flex items-center gap-6 text-sm font-medium">
          {!user && (
            <>
              <Link
                href="/login"
                className="text-gray-700 hover:text-[#5A1A2E] transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-4 py-2 rounded-md bg-[#5A1A2E] text-white hover:bg-[#4A1626] transition"
              >
                Register
              </Link>
            </>
          )}

          {user && (
            <>
           
              <Link
                href="/cart"
                className="relative text-gray-700 hover:text-[#5A1A2E] transition"
              >
                Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 text-xs bg-[#5A1A2E] text-white rounded-full px-2 py-[1px]">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link
                href="/orders"
                className="text-gray-700 hover:text-[#5A1A2E] transition"
              >
                My Orders
              </Link>

              <button
                onClick={logout}
                className="text-[#C9A24D] hover:text-[#B08E3C] transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
