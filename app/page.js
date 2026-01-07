export default function Home() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        
        {/* Brand Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide text-[#5A1A2E]">
          Velvet & Vine
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Timeless elegance, thoughtfully curated. Discover premium pieces
          crafted to elevate your everyday style.
        </p>

        {/* Call to Action */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/products"
            className="px-6 py-3 rounded-md bg-[#5A1A2E] text-white font-medium hover:bg-[#4A1626] transition"
          >
            Shop Collection
          </a>

          <a
            href="/register"
            className="px-6 py-3 rounded-md border border-[#5A1A2E] text-[#5A1A2E] font-medium hover:bg-[#5A1A2E] hover:text-white transition"
          >
            Create Account
          </a>
        </div>
      </section>
    </main>
  );
}
