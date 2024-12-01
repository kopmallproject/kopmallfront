'use client';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-7.png';
import { useAppDispatch, useAppSelector } from '@/app/rtk-base/hooks';
import { RootState } from '@/app/rtk-base/store';
import { setActiveTab } from '@/app/rtk-base/slices/tab-slice';
import { products } from '@/app/data/products-list';
import FlexibleWidthProductCard from './components/FlexibleWidthProductCard';
import { officialStores } from '@/app/data/official-stores';
import { HiChevronRight } from 'react-icons/hi2';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import MainAdminLayout from '../../components/layout/MainAdminLayout';
import { HiMiniPlus } from 'react-icons/hi2';

function Orders() {
  const activeTab = useAppSelector((state: RootState) => state.tab.activeTab);
  const dispatch = useAppDispatch();
  return (
    <MainAdminLayout>
      <section className="text-[12px] text-gray-500 mt-2 mb-2 md:mb-4">
        Admin / Products
      </section>
      <section className="bg-white mt-[20px] rounded-[7px] pb-2">
        <div className="w-full">
          <h2 className="poppins font-medium text-[16px] pb-3">
            Products (2500)
          </h2>
        </div>
        <div className="products gap-5 w-[100%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-2">
          {products.map((product) => (
            // <Link
            //   key={product.productId}
            //   href={{
            //     pathname: `/products/${product.productId}`, // Dynamic route using the product id
            //     query: {
            //       image: product.productImage.src,
            //       name: product.productName,
            //       price: product.discountedPrice,
            //       originalPrice: product.originalPrice,
            //       discount: product.discount,
            //       rating: product.rating,
            //       isLiked: product.isLiked
            //     }
            //   }}
            //   passHref
            // >
            <FlexibleWidthProductCard //   key={product.productId}
              {...product}
              key={product.productId}
            />
            // </Link>
          ))}
        </div>
        {/* <div className="flex items-center justify-center mt-[20px] px-3 pb-3">
            <button className="w-full rounded-[5px] px-4 py-3 poppins text-[14px] secondary-background-color font-normal">
              See All Items
            </button>
          </div> */}
      </section>
      <button
        className="add-product-button rounded-full w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] fixed bottom-[30px] 
      right-[30px] md:bottom-[50px] md:right-[50px] secondary-background-color flex items-center justify-center"
      >
        <HiMiniPlus className="text-black text-[25px] sm:text-[30px]" />
      </button>
    </MainAdminLayout>
  );
}

export default Orders;
