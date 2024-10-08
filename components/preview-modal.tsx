"use client"

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "./ui/modal";
import Gallery from "./gallery";
import Info from "./info";
import { getStrapiMedia } from "@/utils/api-helpers";
const PreviewModal = () => {

    const previewModal = usePreviewModal();
    const product = usePreviewModal((state:any) => state.data)
    // console.log("product from modal",product)
    if (!product) {
        return null
    }
    const { gallery } = product?.attributes;


//  let imageUrl;
//     if (gallery && gallery.data && gallery.data.length > 0) {
//         imageUrl = getStrapiMedia(product.attributes.gallery.data[0].attributes.url);
//     }
    return (
        <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                    <Gallery images={gallery.data} />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                    <Info data={product} />
                </div>
            </div>
        </Modal>
    );
}


export default PreviewModal;