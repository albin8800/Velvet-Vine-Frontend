"use client";

import { useState } from "react";
import { login } from "@/services/authService";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUser } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await login({ email, password });
      localStorage.setItem("token", data.token);

      const payload = JSON.parse(atob(data.token.split(".")[1]));
      setUser({ id: payload.id, role: payload.role });

      router.push("/");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-8">

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center text-[#5A1A2E]">
          Welcome Back
        </h1>
        <p className="mt-2 text-sm text-center text-gray-500">
          Sign in to your Velvet & Vine account
        </p>

        {/* Error */}
        {error && (
          <div className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-2">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full text-[#5A1A2E] rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-[#5A1A2E] focus:ring-1 focus:ring-[#5A1A2E] outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full text-[#5A1A2E] rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-[#5A1A2E] focus:ring-1 focus:ring-[#5A1A2E] outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 px-4 py-2 rounded-md bg-[#5A1A2E] text-white font-medium hover:bg-[#4A1626] transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-[#5A1A2E] font-medium hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </main>
  );
}
