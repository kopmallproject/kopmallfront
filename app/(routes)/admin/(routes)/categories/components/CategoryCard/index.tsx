import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi2';
import { HiPencilSquare } from 'react-icons/hi2';
import { useAppDispatch } from '@/app/rtk-base/hooks';
import { showOverlay } from '@/app/rtk-base/slices/overlay-slice';

type PageProps = {
  categoryName: string;
};

function CategoryCard({ categoryName }: PageProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="category-card flex justify-between items-center px-4 sm:px-10 py-3 sm:py-5 text-center bg-gray-100 rounded-[20px] gap-4">
      <div className="poppins text-[12px] sm:xsm:text-[14px] md:text-base">
        {categoryName}
      </div>
      <div className="controls flex flex-row-reverse gap-3 w-full">
        <div className="cursor-pointer edit-product-button flex items-center justify-center w-[25px] h-[25px] xsm:w-[35px] xsm:h-[35px] rounded-[7px] bg-white">
          <HiPencilSquare
            onClick={() => {
              console.log('Opening Deals Overlay');
              dispatch(showOverlay('categories'));
            }}
            className="text-[15px] xsm:text-[18px]"
          />
        </div>
        <div className="cursor-pointer delete-product-button flex items-center justify-center w-[25px] h-[25px] xsm:w-[35px] xsm:h-[35px] rounded-[7px] bg-white">
          <HiOutlineTrash className="text-[15px] xsm:text-[18px]" />
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
