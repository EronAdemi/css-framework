// eslint-disable-next-line react/prop-types
const Post = ({ image, comment }) => {
  return (
    <div className="relative border-b-[1px] pb-5 ">
      <img
        src="/assets/dots.svg"
        alt=""
        className="w-6 h-10 absolute top-5 right-2 md:right-14"
      />
      <div className="comment-container mx-2 md:ml-14 pt-16 md:pt-20 flex flex-col md:flex-row">
        <img src="/assets/profile.svg" alt="" className="md:w-16 h-14 mb-3 md:mb-0" />
        <div className="font-bold text-sm md:text-2xl ml-5">
          <p className="flex">
            Lorem Ipsum <span className="opacity-20 ml-3">@IpsumLorem</span>
            <img
              src="assets/dot.svg "
              alt=""
              className="w-2 mx-2 md:mx-4 translate-y-[1px] opacity-80"
            />
            <span className="opacity-20">13h</span>
          </p>
          <p className="pt-1">{comment}</p>
        </div>
      </div>
      <div className="image-container w-full flex justify-center pt-10">
        <img src={image} alt="" className="w-[750px] " />
      </div>
      <div className="info-container w-full mt-10 flex justify-center md:text-xl">
        <div className="info-inner-container flex w-[750px] justify-between px-5">
          <div className="flex items-center">
            <img src="/assets/comment.svg" alt="" />{" "}
            <span className="opacity-50 ml-2 w-5 ">999</span>
          </div>
          <div className="flex items-center">
            <img src="/assets/star.svg" alt="" />{" "}
            <span className="opacity-50 ml-2 w-5 ">999</span>
          </div>
          <img src="/assets/out.svg" alt="" className="w-5" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Post;
