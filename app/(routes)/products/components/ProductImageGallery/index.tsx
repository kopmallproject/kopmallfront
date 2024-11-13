// components/ProductImageGallery.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';

type ImageData = {
  src: string | StaticImageData;
  alt: string;
};

interface ProductImageGalleryProps {
  images: ImageData[];
  mainImage: StaticImageData;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  mainImage
}) => {
  return (
    <div className="product-image flex gap-3 w-full">
      <div className="grid grid-cols-1 gap-3 w-1/4 justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-[#F5F5F5] w-full flex justify-center items-center p-2"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="bg-cover w-[100px] sm:w-[120px]"
            />
          </div>
        ))}
      </div>
      <div className="bg-[#F5F5F5] w-full flex items-center">
        <Image
          src={mainImage}
          alt="main-product-image"
          className="bg-cover w-full"
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;
