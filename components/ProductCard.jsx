import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  const imageSrc =
    product.image && product.image.trim() !== ""
      ? product.image
      : "/placeholder-product.png";

  return (

    <Link href={`/products/${product._id}`}>
    <div className="mt-8 flex flex-col gap-3 transition ">
     
      <div>
        <Image
          src={imageSrc}
          alt={product.name}
          width={176}
          height={176}
          className="
            w-full
            h-48
            sm:h-56
            lg:h-64
            object-cover
            rounded-lg
            transition-transform duration-300 hover:scale-105
            
          "
        />
      </div>

    
      <div className="flex flex-col gap-1">
        <h2 className="text-[#0D141C] text-[14px] sm:text-[15px] lg:text-[16px] font-medium">
          {product.name}
        </h2>
        <p className="text-[#4D7399] text-[13px] sm:text-[14px]">
          ₹{product.price}
        </p>
      </div>
    </div>
    </Link>
  );
}
