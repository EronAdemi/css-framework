const ProfileSection = () => {
  return (
    <div className="w-full ">
      <div className="profile-container w-full items-end border-b-[1px] ">
        <div className="image-container relative pb-12 md:pb-28">
          <img src="assets/photo-c.png" alt="" className="w-full " />
          <div className="profile flex items-end absolute -bottom-0 left-5">
            <img src="/assets/Group 9.png" alt="" className="w-20 md:w-56" />
            <button
              type="button"
              className="border-[1px] md:h-12 md:w-52 px-3 border-white rounded-3xl mb-4 md:mb-12 text-sm md:text-xl"
            >
              Edit Profile
            </button>
          </div>
        </div>
        <p className="ml-7 md:text-3xl font-bold">Lorem Ipsum</p>
        <p className="opacity-25 ml-7 md:text-3xl font-normal">@Ipsumlorem</p>

        <div className="info-container w-full mt-10 mb-5 flex justify-between md:text-2xl px-7">
          <p className="opacity-25 font-bold">Joined 1999.9.9</p>
          <div className="flex gap-5">
            <p className="">
              999 <span className="opacity-25">Following</span>
            </p>
            <p className="">
              999 <span className="opacity-25">Followers</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
