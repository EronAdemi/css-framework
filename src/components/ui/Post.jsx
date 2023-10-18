import { useState } from "react";
import Modal from "react-modal";
import { useSpring, animated } from "react-spring";
import { deletePost, updatePost } from "../../data";

const Post = ({ post, profileDetails, setPostUpdate, postUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    tags: [""],
    media: "",
  });
  // Given date
  const createdDate = new Date(post.updated);
  const currentDate = new Date();
  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - createdDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Create the "hours or days ago" format
  let timeAgo = "";
  if (days > 0) {
    timeAgo = days + (days === 1 ? " day ago" : " days ago");
  } else if (hours > 0) {
    timeAgo = hours + (hours === 1 ? " hour ago" : " hours ago");
  } else if (minutes > 0) {
    timeAgo = minutes + (minutes === 1 ? " minute ago" : " minutes ago");
  } else {
    timeAgo = seconds + (seconds === 1 ? " second ago" : " seconds ago");
  }

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

    updatePost(profileData?.accessToken, post.id, formData).then(() => {
      setPostUpdate(!postUpdate);
      closeModal();
      setFormData({
        title: "",
        body: "",
        tags: [""],
        media: "",
      });
    });
  };

  const handleDelete = async () => {
    const profileData = JSON.parse(sessionStorage.getItem("data"));
    deletePost(profileData?.accessToken, post?.id).then(() => {
      setPostUpdate(!postUpdate);
    });
  };
  return (
    <div className="relative border-b-[1px] pb-5 ">
      <button
        onClick={handleDelete}
        className="w-6 h-10 absolute top-5 right-8 md:right-16 cursor-pointer opacity-40 font-semibold"
      >
        delete
      </button>
      <img
        src="/assets/dots.svg"
        alt=""
        className="w-6 h-10 absolute top-5 right-20 md:right-32 cursor-pointer"
        onClick={openModal}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: { zIndex: 1000 },
          content: {
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "20px",
            position: "absolute",
            width: "400px",
            height: "550px",
            margin: "auto",
          },
        }}
      >
        <animated.div style={modalAnimation}>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <p className=" font-bold text-xl mb-5">Update Your Post</p>
              <input
                name="title"
                type="text"
                placeholder={
                  post?.title ? post.title : "Update your posts Title"
                }
                className="w-11/12 lg:w-full h-14 rounded-xl pl-5 mb-4 mt-1 border text-black"
                onChange={handleChange}
                value={formData.title}
              />
              <input
                name="body"
                type="text"
                placeholder={post?.body ? post.body : "Update your posts Body"}
                className="w-11/12 lg:w-full h-14 rounded-xl pl-5 mb-4 mt-1 border text-black"
                onChange={handleChange}
                value={formData.body}
              />
              <input
                name="tags"
                type="text"
                placeholder="Write comma between tags"
                className="w-11/12 lg:w-full h-14 rounded-xl pl-5 mb-4 mt-1 border text-black"
                onChange={handleChange}
              />
              <input
                name="media"
                type="url"
                placeholder="Media Url"
                className="w-11/12 lg:w-full h-14 rounded-xl pl-5 mb-4 mt-1 border text-black"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-[#7660FF] w-11/12 lg:w-full h-12 rounded-2xl mt-10 font-semibold text-2xl"
            >
              Update
            </button>
          </form>
        </animated.div>
      </Modal>
      <div className="comment-container mx-2 md:ml-14 pt-16 md:pt-20 flex flex-col md:flex-row">
        <img
          src={
            profileDetails?.avatar
              ? profileDetails.avatar
              : post.author?.avatar
              ? post.author?.avatar
              : "/assets/Group 9.png"
          }
          alt=""
          className="w-16 m-auto md:m-0 h-14 mb-3 md:mb-0"
        />

        <div className="font-bold text-sm md:text-2xl pl-5 w-full">
          <p className="flex flex-col xl:flex-row w-full justify-between">
            {post.author?.name}{" "}
            <span className="opacity-20 xl:ml-3">{post?.author.email} </span>
            <img
              src="assets/dot.svg "
              alt=""
              className="w-2 mx-2 md:mx-4 translate-y-[1px] opacity-80 hidden xl:block"
            />
            <span className="opacity-20 text-sm xl:text-lg mb-10 xl:mb-0">{timeAgo} </span>
          </p>
          <p className="pt-1">{post?.title}</p>
          <p className="pt-1 opacity-40">{post?.body}</p>
        </div>
      </div>
      <div className="image-container w-full flex justify-center pt-10">
        <img src={post?.media} alt="" className="w-[750px] " />
      </div>
      <div className="info-container w-full mt-10 flex justify-center md:text-xl">
        <div className="info-inner-container flex w-[750px] justify-between px-5">
          <div className="flex items-center">
            <img src="/assets/comment.svg" alt="" />{" "}
            <span className="opacity-50 ml-2 w-5 ">
              {post?._count.comments}{" "}
            </span>
          </div>
          <div className="flex items-center">
            <img src="/assets/star.svg" alt="" />{" "}
            <span className="opacity-50 ml-2 w-5 ">
              {post?._count.reactions}
            </span>
          </div>
          <img src="/assets/out.svg" alt="" className="w-5" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Post;
