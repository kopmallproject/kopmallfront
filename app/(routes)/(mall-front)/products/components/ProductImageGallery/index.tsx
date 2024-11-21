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
            className="bg-[#F5F5F5] rounded-[5px] w-full flex justify-center items-center p-2"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="bg-cover w-[100px] sm:w-[120px]"
              width={120}
              height={120}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center">
        <Image
          src={mainImage}
          alt="main-product-image"
          className="bg-cover w-[80%] mx-auto"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;
