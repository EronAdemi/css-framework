
import { useState } from "react";
import Modal from "react-modal";
import { useSpring, animated } from "react-spring";
import { updateProfile } from "../../data";

const ProfileSection = ({ profileDetails, setIsModalOpen, isModalOpen }) => {
  const [errors, setErrors] = useState({});
  
    const [formData, setFormData] = useState({
      avatar: "",
      banner: "",
    });
  const modalAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 500 },
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  const profileData = JSON.parse(sessionStorage.getItem("data"));

    // Form validation
    const validationErrors = {};
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (formData.banner && !urlPattern.test(formData.banner)) {
      validationErrors.banner = "Invalid URL for Banner";
    }
    if (formData.avatar && !urlPattern.test(formData.avatar)) {
      validationErrors.avatar = "Invalid URL for Avatar";
    }

    if (Object.keys(validationErrors).length === 0) {
      updateProfile(profileData?.accessToken, profileDetails.name, formData).then(() => {
        closeModal();
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="w-full ">
      <div className="profile-container w-full items-end border-b-[1px] ">
        <div className="image-container relative pb-12 md:pb-28">
          <img src="assets/photo-c.png" alt="" className="w-full " />
          <div className="profile flex items-end absolute -bottom-0 left-5">
            <img
              src={
                profileDetails.avatar ? profileDetails.avatar : "/assets/Group 9.png"
              }
              alt=""
              className="w-20 md:w-56"
            />
            <button
              onClick={openModal}
              type="button"
              className="border-[1px] md:h-12 md:w-52 px-3 border-white rounded-3xl mb-4 md:mb-12 text-sm md:text-xl"
            >
              Edit Profile
            </button>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              style={{
                overlay: { zIndex: 1000 },
                content: {
                  background: "white",
                  border: "1px solid #ccc",
                  borderRadius: "20px",
                  width: "330px",
                  height: "350px",
                  margin: "auto",
                },
              }}
            >
              <animated.div style={modalAnimation}>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col items-center">
                    <label>Avatar:</label>
                    <input
                      type="text"
                      placeholder={profileDetails?.avatar}
                      className="w-11/12 lg:w-full h-14 rounded-xl pl-5 mb-4 mt-1 border text-black"
                      name="avatar"
                      value={formData.avatar}
                      onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                  </div>
                  <div className="flex flex-col items-center">
                    <label>Banner:</label>
                    <input
                      type="url"
                      placeholder={profileDetails?.banner}
                      className="w-11/12 lg:w-full h-14 rounded-xl pl-5 border text-black"
                      name="banner"
                      value={formData.banner}
                      onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                  </div>
                  <button
                    type="submit"
                    className="bg-[#7660FF] w-full h-12 rounded-2xl mt-10 font-semibold text-2xl "
                  >
                    Update
                  </button>
                </form>
              </animated.div>
            </Modal>
          </div>
        </div>
        <p className="ml-7 md:text-3xl font-bold">{profileDetails?.name}</p>
        <p className="opacity-25 ml-7 md:text-3xl font-normal">
          {profileDetails?.email}
        </p>

        <div className="info-container w-full mt-10 mb-5 flex justify-between md:text-2xl px-7">
          <p className="opacity-25 font-bold">
            posts {profileDetails._count?.posts}{" "}
          </p>
          <div className="flex gap-5">
            <p className="">
              {profileDetails._count?.following}{" "}
              <span className="opacity-25">Following</span>
            </p>
            <p className="">
              {profileDetails._count?.followers}{" "}
              <span className="opacity-25">Followers</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
