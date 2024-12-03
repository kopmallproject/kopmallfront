import React from 'react';
import { useAppSelector, useAppDispatch } from '@/app/rtk-base/hooks';
import { hideOverlay } from '@/app/rtk-base/slices/overlay-slice';
import CreateUserForm from '@/app/(routes)/admin/components/CreateUserForm';
import StoreForm from '@/app/(routes)/admin/components/StoreForm';
import CategoriesForm from '@/app/(routes)/admin/components/CategoriesForm';
import DealsForm from '@/app/(routes)/admin/components/DealsForm';
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
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-[40%] relative">
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
