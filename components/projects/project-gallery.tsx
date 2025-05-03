"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";

interface ProjectGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images.length) return null;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl mb-4">gallery</h2>
      
      <div className="relative aspect-video w-full overflow-hidden border-[0.5px] border-black">
        <img
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          className="w-full h-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-video w-24 flex-shrink-0 border-[0.5px] border-black overflow-hidden group ${
                selectedImage === index ? "ring-2 ring-black" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 