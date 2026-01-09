
import Image from "next/image";

export default function ProductCard({ product }) {
    const imageSrc =
    product.image && product.image.trim() !== ""
      ? product.image
      : "/placeholder-product.png";
  return (
    <div className="mt-8 flex flex-col gap-3">
        <div>
        <Image
          src={imageSrc}
          alt={product.name}
          width={176}
          height={176}
          className="w-full h-64 object-cover rounded-lg"
        />
        </div>
        <div className="flex flex-col gap-1">
            <h2 className="text-[#0D141C] text-[16px] font-medium">{product.name}</h2>
            <p className="text-[#4D7399] text-[14px]">₹{product.price}</p>
        </div>
    </div>
  );
}
