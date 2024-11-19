// 'use client';
// import React from 'react';
// import dummyAvatar from '../../../assets/images/img-17.png';
// import RelatedProducts from '../../app/(routes)/product-page/components/RelatedProducts';
// import { products } from '@/app/data/products-list';
// import ProductImageGallery from '../../app/(routes)/product-page/components/ProductImageGallery';
// import ProductDescription from '../../app/(routes)/product-page/components/ProductDescription';
// import OverviewMobileTab from '../../app/(routes)/product-page/components/OverviewMobileTab';
// import DescriptionMobileTab from '../../app/(routes)/product-page/components/DescriptionMobileTab';
// import WarrantyMobileTab from '../../app/(routes)/product-page/components/WarrantyMobileTab';
// import ReviewMobileTab from '../../app/(routes)/product-page/components/ReviewMobileTab';
// import ProductNavigationTabs from '../../app/(routes)/product-page/components/ProductNavigationTabs';

// const ReviewPage: React.FC = () => {
//   const images = [
//     { src: dummyAvatar, alt: 'user-icon-1' },
//     { src: dummyAvatar, alt: 'user-icon-2' },
//     { src: dummyAvatar, alt: 'user-icon-3' },
//     { src: dummyAvatar, alt: 'user-icon-4' }
//   ];

//   return (
//     <>
//       <main className="min-h-screen mt-4 text-[14px]">
//         <section className="single-product-section">
//           <div className="flex gap-2 text-xs cursor-pointer">
//             <span>Account / </span>
//             <span>Gaming / </span>
//             <span className="font-semibold">Havic HV G-92 Gamepad</span>
//           </div>
//           <div className="w-full flex flex-col lg:flex-row justify-between gap-5 py-[20px]">
//             <ProductImageGallery images={images} mainImage={dummyAvatar} />
//             <ProductDescription />
//           </div>
//           <div className="w-full flex flex-col py-[20px]">
//             <OverviewMobileTab />
//             <DescriptionMobileTab />
//             <WarrantyMobileTab />
//             <ReviewMobileTab />
//             <ProductNavigationTabs />
//           </div>
//           <div className="main-header-wrapper flex flex-col mt-4">
//             <h3 className="before:w-[10px] before:h-[30px] before:mr-[20px] before:secondary-background-color before:inline-block poppins font-semibold text-lg sm:text-xl secondary-text-color flex items-center">
//               Picks for you
//             </h3>
//           </div>
//           <div className="mt-6 flex flex-col xsm:flex-row">
//             <h3 className="poppins text-[20px] sm:text-2xl">
//               Similar Items you might like
//             </h3>
//           </div>
//           <div className="related-products flex gap-x-5 mt-[20px] overflow-x-auto w-[100%]">
//             {products.map((product) => {
//               return <RelatedProducts {...product} key={product.productName} />;
//             })}
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default ReviewPage;
