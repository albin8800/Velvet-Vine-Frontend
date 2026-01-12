export default function Footer() {
  return (
    <footer className="h-16 border-t bg-white mt-20">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between text-sm text-gray-500">
        
        <p className="whitespace-nowrap">
          © {new Date().getFullYear()} Velvet & Co.
        </p>

        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-gray-900 transition">
            Privacy
          </a>
          <a href="/terms" className="hover:text-gray-900 transition">
            Terms
          </a>
          <a href="/contact" className="hover:text-gray-900 transition">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}
