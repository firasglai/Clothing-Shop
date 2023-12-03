"use client";
//TODO: FIX IMAGE NOT VALID ERROR
import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { getStrapiMedia } from "@/utils/api-helpers";
interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  //console.log("Image URL:", data.attributes.images[0]?.attributes.url);
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  //? Deconstructing response
  const { name, price, description, size, color, category } = data?.attributes;
  //console.log("Product Card Data:", data);  
  //? Binding url with local provider
  const imageUrl = getStrapiMedia(data.attributes.image1.data.attributes.url);
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
      {imageUrl && (
         <Image
         src={imageUrl}
          alt="Product Image"
          fill
          className="aspect-square object-cover rounded-md"
       
        />
      )}
       
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Name */}
      <div>
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm text-gray-500">Category Name</p>
      </div>
      {/* Price & Review */}
      <div className="flex items-center justify-between">
        <Currency value={price} />
      </div>
      <div className="mt-4 text-[#f6b400] text-l tracking-[2px]">
        ★★★★★
      </div>
    </div>
  );
};

export default ProductCard;
