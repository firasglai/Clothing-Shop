"use client";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { Image } from "@/types";

import GalleryTab from "./gallery-tab";
import { getStrapiMedia } from "@/utils/api-helpers";
interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
 

  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
        {(images || []).map((image, index) => (
            <GalleryTab key={index} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
  {(images || []).map((image, index) => (
    <Tab.Panel key={image ? image.id : index}>
      <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
        <NextImage
          fill
          src={image ? getStrapiMedia(image.attributes.url) || "/images/placeholder-small.jpg" : "/images/placeholder-small.jpg"}
          alt="Image"
          className="object-cover object-center"
        />
      </div>
    </Tab.Panel>
  ))}
</Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
