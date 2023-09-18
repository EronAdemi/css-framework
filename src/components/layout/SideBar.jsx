import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-3/12 md:w-2/12  border-[#D9D9D9] border-r-[1px] flex flex-col items-center gap-14 pt-16 ">
      <Link to="/" className="flex gap-2 items-center">
        <img src="/assets/home.svg" alt="" className="w-5 lg:w-7 h-6" />
        <p className="inline-block font-semibold text-sm lg:text-2xl ">HOME</p>
      </Link>
      <Link className="flex gap-2 items-center">
        <img src="/assets/search.svg" alt="" className="w-5 lg:w-7 h-6" />
        <p className="inline-block font-semibold text-sm lg:text-2xl ">
          SEARCH
        </p>
      </Link>
      <Link to="/profile" className="flex gap-2 items-center">
        <img src="/assets/profile.svg" alt="" className="w-5 lg:w-7 h-6" />
        <p className="inline-block font-semibold text-sm lg:text-2xl ">
          PROFILE
        </p>
      </Link>
    </div>
  );
};

export default SideBar;
