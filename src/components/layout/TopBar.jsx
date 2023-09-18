import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="flex bg-[#282634] w-full h-[101px] justify-between items-center pr-5 md:pr-10">
      <Link to="/">
        <img src="/assets/logo.png" alt="" />
      </Link>
      <div className="flex">
        <input type="text" className="h-12 w-60 rounded-md text-black pl-2" />
        <img
          src="/assets/search.svg"
          alt=""
          className="w-7 h-6 -translate-x-9 translate-y-3"
        />
        <Link to="/login">
          <img src="/assets/profile.svg" alt="" className="w-12 h-12" />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
