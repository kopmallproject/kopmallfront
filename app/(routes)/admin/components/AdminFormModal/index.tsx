import React from 'react';
import { useAppSelector, useAppDispatch } from '@/app/rtk-base/hooks';
import { hideOverlay } from '@/app/rtk-base/slices/overlay-slice';
import CreateUserForm from '@/app/(routes)/admin/components/CreateUserForm';
import StoreForm from '@/app/(routes)/admin/components/StoreForm';
import CategoriesForm from '@/app/(routes)/admin/components/CategoriesForm';
import DealsForm from '@/app/(routes)/admin/components/DealsForm';
import ProductForm from '@/app/(routes)/admin/components/ProductForm';
import CampaignForm from '@/app/(routes)/admin/components/CampaignForm';
import { HiMiniXMark } from 'react-icons/hi2';

const AdminFormModal: React.FC = () => {
  const { type } = useAppSelector((state: { overlay: any }) => state.overlay);
  const dispatch = useAppDispatch();

  if (!type) return null;

  const renderForm = () => {
    switch (type) {
      case 'createUser':
        return <CreateUserForm />;
      case 'store':
        return <StoreForm />;
      case 'categories':
        return <CategoriesForm />;
      case 'deals':
        return <DealsForm />;
      case 'product':
        return <ProductForm />;
      case 'campaign':
        return <CampaignForm />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      {/* The overlay container covers the entire screen */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-[40%] z-50 relative">
        <button
          onClick={() => dispatch(hideOverlay())}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <HiMiniXMark className="text-[15px] xsm:text-[18px]" />
        </button>
        {renderForm()}
      </div>
    </div>
  );
};

export default AdminFormModal;
