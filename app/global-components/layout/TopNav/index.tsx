function TopNav() {
  return (
    <nav className="w-full bg-[#25133A] text-white h-16 flex items-center justify-around px-4">
      <h1 className="text-xs sm:text-base text-center font-bold poppins">
        June Sales For All Apple Products And Free Express Delivery - OFF 50%!{' '}
        <span className="text-lg font-normal ml-5 cursor-pointer hover:underline text-[#FCB349]">
          ShopNow
        </span>
      </h1>
      <div className="hidden lg:block">
        <select
          id="language"
          name="language"
          className="cursor-pointer w-full text-xs sm:text-base font-semibold border-none rounded-md p-2 flex-1 bg-transparent text-white"
        >
          <option className="text-black">English</option>
          <option className="text-black">Chinese</option>
        </select>
      </div>
    </nav>
  );
}
export default TopNav;
