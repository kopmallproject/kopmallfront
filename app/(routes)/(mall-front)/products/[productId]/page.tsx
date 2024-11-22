'use client';
import React from 'react';
import dummyAvatar from '@/app/assets/images/img-17.png';
import RelatedProducts from '@/app/(routes)/(mall-front)/products/components/RelatedProducts';
import { products } from '@/app/data/products-list';
import { useParams, useSearchParams } from 'next/navigation';
import DummyBanner1 from '@/app/assets/images/img-23.png';
import DummyBanner2 from '@/app/assets/images/img-9.png';
import DummyBanner3 from '@/app/assets/images/img-20.png';
import DummyBanner4 from '@/app/assets/images/img-21.png';
import DummyBanner5 from '@/app/assets/images/img-22.png';
import DummyBanner6 from '@/app/assets/images/img-9.png';
import Image from 'next/image';
import ProductCard from '../../(home)/components/ProductCard';
import { HiChevronRight } from 'react-icons/hi2';
import ProductImageGallery from '@/app/(routes)/(mall-front)/products/components/ProductImageGallery';
import ProductDescription from '@/app/(routes)/(mall-front)/products/components/ProductDescription';
import OverviewMobileTab from '@/app/(routes)/(mall-front)/products/components/OverviewMobileTab';
import DescriptionMobileTab from '@/app/(routes)/(mall-front)/products/components/DescriptionMobileTab';
import WarrantyMobileTab from '@/app/(routes)/(mall-front)/products/components/WarrantyMobileTab';
import ReviewMobileTab from '@/app/(routes)/(mall-front)/products/components/ReviewMobileTab';
import ProductNavigationTabs from '@/app/(routes)/(mall-front)/products/components/ProductNavigationTabs';

const OverviewPage: React.FC = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const productId = params?.productId;
  const name = searchParams.get('name');
  const price = searchParams.get('price');
  const originalPrice = searchParams.get('originalPrice');
  const discount = searchParams.get('discount');
  const rating = searchParams.get('rating');
  const image = searchParams.get('image') || dummyAvatar;

  const mainImage = image as string;
  const images = [
    { src: mainImage, alt: 'user-icon-1' },
    { src: mainImage, alt: 'user-icon-1' },
    { src: mainImage, alt: 'user-icon-1' },
    { src: mainImage, alt: 'user-icon-1' }
  ];

  return (
    <>
      <main className="product-page min-h-screen pt-4 pb-[100px] text-[14px]">
        <section className="single-product-section">
          <div className="flex gap-2 text-xs cursor-pointer">
            <span>Account / </span>
            <span>Gaming / </span>
            <span className="font-semibold">{name}</span>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-between gap-5 py-[20px]">
            <ProductImageGallery images={images} mainImage={mainImage} />
            <ProductDescription
              name={name as string}
              price={price as string}
              originalPrice={originalPrice as string}
              description="High quality vinyl controller skin for easy install & removal."
              rating={Number(rating) || 4}
              stockStatus={''}
            />
          </div>
          <div className="w-full flex flex-col py-[20px]">
            {/* for mobile screens */}
            <OverviewMobileTab />
            <DescriptionMobileTab />
            <WarrantyMobileTab />
            <ReviewMobileTab />

            {/* for large screens */}
            <ProductNavigationTabs />
          </div>

          <section className="recently-viewed bg-white mt-[20px] rounded-[7px] pb-2">
            <div className="main-header-wrapper py-2 px-3 border-b-[1px] flex flex-row justify-between items-center">
              <h3 className="poppins secondary-text-color font-normal text-[14px] xsm:text-[16px] sm:text-[20px] flex items-center">
                Recently Viewed
              </h3>
              {/* <div className="poppins text-[12px] xsm:text-[14px] font-normal flex gap-2 items-center">
              <div className="text-center">See all items</div>
              <div>
                <HiChevronRight className="text-[16px] font-bold" />
              </div>
            </div> */}
            </div>
            <div className="products p-3 flex gap-5 w-[100%] overflow-x-auto">
              {products.map((product) => {
                return <ProductCard {...product} key={product.productName} />;
              })}
            </div>
            {/* <div className="flex items-center justify-center mt-[20px] px-3 pb-3">
            <button className="w-full rounded-[5px] px-4 py-3 poppins text-[14px] secondary-background-color font-normal">
              See All Items
            </button>
          </div> */}
          </section>
          <section className="mt-[20px] bg-white rounded-[7px] w-full">
            <div className="main-header-wrapper py-2 px-3 border-b-[1px] flex flex-row justify-between items-center">
              <h3 className="poppins secondary-text-color font-normal text-[14px] xsm:text-[16px] sm:text-[20px] flex items-center">
                Top Phone deals
              </h3>
              <div className="poppins text-[12px] xsm:text-[14px] font-normal flex gap-2 items-center">
                <div className="text-center">See all items</div>
                <div>
                  <HiChevronRight className="text-[16px] font-bold" />
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[20px] p-3">
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
              </div>
            </div>
          </section>
          <section className="sponsored-products-section bg-white mt-[20px] rounded-[7px] pb-2">
            <div className="main-header-wrapper py-2 px-3 border-b-[1px] flex flex-row justify-between items-center">
              <h3 className="poppins secondary-text-color font-normal text-[14px] xsm:text-[16px] sm:text-[20px] flex items-center">
                Recommended products
              </h3>
              <div className="poppins text-[12px] xsm:text-[14px] font-normal flex gap-2 items-center">
                <div className="text-center">See all items</div>
                <div>
                  <HiChevronRight className="text-[16px] font-bold" />
                </div>
              </div>
            </div>
            <div className="products p-3 flex gap-5 w-[100%] overflow-x-auto">
              {products.map((product) => {
                return <ProductCard {...product} key={product.productName} />;
              })}
            </div>
            {/* <div className="flex items-center justify-center mt-[20px] px-3 pb-3">
            <button className="w-full rounded-[5px] px-4 py-3 poppins text-[14px] secondary-background-color font-normal">
              See All Items
            </button>
          </div> */}
          </section>
          <section className="sponsored-products-section bg-white mt-[20px] rounded-[7px] pb-2">
            <div className="main-header-wrapper py-2 px-3 border-b-[1px] flex flex-row justify-between items-center">
              <h3 className="poppins secondary-text-color font-normal text-[14px] xsm:text-[16px] sm:text-[20px] flex items-center">
                Binatone Store
              </h3>
              <div className="poppins text-[12px] xsm:text-[14px] font-normal flex gap-2 items-center">
                <div className="text-center">See all items</div>
                <div>
                  <HiChevronRight className="text-[16px] font-bold" />
                </div>
              </div>
            </div>
            <div className="products p-3 flex gap-5 w-[100%] overflow-x-auto">
              {products.map((product) => {
                return <ProductCard {...product} key={product.productName} />;
              })}
            </div>
            {/* <div className="flex items-center justify-center mt-[20px] px-3 pb-3">
            <button className="w-full rounded-[5px] px-4 py-3 poppins text-[14px] secondary-background-color font-normal">
              See All Items
            </button>
          </div> */}
          </section>
          <section className="sponsored-products-section bg-white mt-[20px] rounded-[7px] pb-2">
            <div className="main-header-wrapper py-2 px-3 border-b-[1px] flex flex-row justify-between items-center">
              <h3 className="poppins secondary-text-color font-normal text-[14px] xsm:text-[16px] sm:text-[20px] flex items-center">
                Binatone Store
              </h3>
              <div className="poppins text-[12px] xsm:text-[14px] font-normal flex gap-2 items-center">
                <div className="text-center">See all items</div>
                <div>
                  <HiChevronRight className="text-[16px] font-bold" />
                </div>
              </div>
            </div>
            <div className="products p-3 flex gap-5 w-[100%] overflow-x-auto">
              {products.map((product) => {
                return <ProductCard {...product} key={product.productName} />;
              })}
            </div>
            {/* <div className="flex items-center justify-center mt-[20px] px-3 pb-3">
            <button className="w-full rounded-[5px] px-4 py-3 poppins text-[14px] secondary-background-color font-normal">
              See All Items
            </button>
          </div> */}
          </section>
        </section>
      </main>
    </>
  );
};

export default OverviewPage;
