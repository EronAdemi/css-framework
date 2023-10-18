import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <div className="flex bg-[#282634] w-full h-[101px] justify-between items-center pr-5 md:pr-10">
      <Link to="/">
        <img src="/assets/logo.png" alt="" />
      </Link>
      <Link to="/profile">
        <img src="/assets/profile.svg" alt="" className="w-12 h-12" />
      </Link>
    </div>
  );
};

export default TopBar;
