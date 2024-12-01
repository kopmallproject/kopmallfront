function TopNav() {
  return (
    <nav className="w-full bg-[#25133A] text-white py-2 px-2 sm:py-3 flex items-center justify-between">
      <h1 className="text-[12px] xsm:text-[14px] capitalize sm:text-[14px] text-center poppins w-full md:w-10/12">
        Black Friday Sales For All Apple Products And Free Express Delivery -
        OFF 50%!{' '}
        <span className="poppins font-semibold ml-5 cursor-pointer hover:underline text-[#FCB349]">
          ShopNow
        </span>
      </h1>
      <div className="hidden md:block sm:w-2/12">
        <select
          id="language"
          name="language"
          className="poppins w-[90px] cursor-pointer text-xs border-none rounded-md p-2 flex-1 bg-transparent text-white"
        >
          <option className="text-black text-[12px]">English</option>
          <option className="text-black text-[12px]">Chinese</option>
        </select>
      </div>
    </nav>
  );
}
export default TopNav;
