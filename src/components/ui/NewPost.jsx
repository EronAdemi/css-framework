const NewPost = () => {
  return (
    <div className="h-44 relative border-[#D9D9D9] border-b-[1px]">
      <p className="opacity-40 absolute top-10 left-3 md:left-10 md:text-2xl font-bold">
        Create a New Post?
      </p>
      <button
        type="button"
        className="absolute bottom-6 right-3 md:right-10 w-24 h-8 md:w-36 md:h-14 bg-[#282634] rounded-2xl md:text-xl font-semibold"
      >
        Post
      </button>{" "}
    </div>
  );
};

export default NewPost;
