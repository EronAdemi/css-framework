import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
    const profileData = JSON.parse(sessionStorage.getItem("data"));

  const logout = () => {
    sessionStorage.removeItem("data");
    navigate("/login");
  };

  return (
    <div className="w-4/12 md:w-2/12  border-[#D9D9D9] border-r-[1px] flex flex-col pl-1 sm:pl-5 gap-14 pt-16 ">
      <Link to="/" className="flex gap-2">
        <img src="/assets/home.svg" alt="" className="w-5 lg:w-7 h-6" />
        <p className="inline-block font-semibold text-sm lg:text-2xl ">HOME</p>
      </Link>
      <Link className="flex gap-2">
        <img src="/assets/search.svg" alt="" className="w-5 lg:w-7 h-6" />
        <p className="inline-block font-semibold text-sm lg:text-2xl ">
          SEARCH
        </p>
      </Link>
      <Link to="/profile" className="flex gap-2">
        <img src="/assets/profile.svg" alt="" className="w-5 lg:w-7 h-6" />
        <p className="inline-block font-semibold text-sm lg:text-2xl ">
          PROFILE
        </p>
      </Link>
      <Link to="/profile" className="mt-16">
        <p className="inline-block font-semibold text-sm lg:text-2xl ">
          <p onClick={logout}>
            {profileData?.accessToken ? " LOGOUT" : "LOGIN"}
          </p>
        </p>
      </Link>
    </div>
  );
};

export default SideBar;
