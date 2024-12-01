// components/ProductImageGallery.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';

type ImageData = {
  src: string | StaticImageData;
  alt: string;
};

interface ProductImageGalleryProps {
  images: ImageData[];
  mainImage: string | StaticImageData;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  mainImage
}) => {
  return (
    <div className="product-image flex gap-3 w-full bg-white p-3 rounded-[7px]">
      <div className="grid grid-cols-1 gap-3 w-1/4 justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-[#F5F5F5] rounded-[5px] w-full flex justify-center items-center p-2 min-h-[120px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="bg-cover w-[80px] sm:w-[100px]"
              width={80}
              height={80}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center">
        <Image
          src={mainImage}
          alt="main-product-image"
          className="bg-cover w-[250px] mx-auto"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;
