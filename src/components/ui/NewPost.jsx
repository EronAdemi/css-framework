import { useState } from "react";

const NewPost = ({ setNewPostSubmitted }) => {
  const initialFormData = {
    title: "",
    body: "",
    tags: [""],
    media: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "tags") {
      setFormData({
        ...formData,
        [name]: value.split(",").map((tag) => tag.trim()),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const profileData = JSON.parse(sessionStorage.getItem("data"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${profileData?.accessToken}`,
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/social/posts?_author=true&_comments=true&_reactions=true`,
        options
      );
      await response.json();
      setNewPostSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="relative border-[#D9D9D9] border-b-[1px] flex flex-col ">
      <form onSubmit={handleSubmit} className=" md:flex gap-5 w-full">
        <div className="left-container flex flex-col w-full md:w-2/3 gap-5  my-5 px-10">
          <p className=" font-bold text-xl">Create a New Post?</p>
          <input
            name="title"
            type="text"
            placeholder="Title"
            className=" h-8 rounded-md font-bold px-5 text-black"
            onChange={handleChange}
          />
          <input
            name="body"
            type="text"
            placeholder="Body"
            className=" h-8 rounded-md font-bold px-5 text-black"
            onChange={handleChange}
          />
          <input
            name="tags"
            type="text"
            placeholder="Write comma between tags"
            className=" h-8 rounded-md font-bold px-5 text-black"
            onChange={handleChange}
          />
          <input
            name="media"
            type="url"
            placeholder="Media Url"
            className=" h-8 rounded-md font-bold px-5 text-black"
            onChange={handleChange}
          />
        </div>
        <div className="right-container w-1/3 m-auto h-full items-center ">
          <button
            type="submit"
            className="w-24 h-8 md:w-36 mb-5 md:mb-0 md:h-14 bg-[#282634] rounded-2xl md:text-xl font-semibold"
          >
            Post
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

export default NewPost;
