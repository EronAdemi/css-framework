import { useEffect, useState } from "react";
import NewPost from "../components/ui/NewPost";
import Post from "../components/ui/Post";
import { useNavigate } from "react-router-dom";
import { fetchAllPosts } from "../data";

const Home = () => {
  const [newPostSubmitted, setNewPostSubmitted] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [postUpdate, setPostUpdate] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");

  const navigate = useNavigate();
  useEffect(() => {
    const profileData = JSON.parse(sessionStorage.getItem("data"));
    !profileData?.accessToken && navigate("/login");
    fetchAllPosts(profileData?.accessToken, search, sortOrder).then((data) =>
      setFilteredPosts(data)
    );
    setNewPostSubmitted(false);
  }, [newPostSubmitted, postUpdate, sortOrder]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = JSON.parse(sessionStorage.getItem("data"));
    fetchAllPosts(profileData?.accessToken, search).then((data) =>
      setFilteredPosts(data)
    );
  };

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };
  return (
    <div className="w-9/12 md:w-8/12 border-[#D9D9D9] h-full border-r-[1px] mr-[1px] ">
      <div className="flex justify-center md:justify-end mt-5 ml-5 sm:ml-0">
        <p className="mr-5 opacity-40">
          sort by{" "}
          <span className="cursor-pointer" onClick={toggleSortOrder}>
            {sortOrder === "asc" ? "oldest" : "newest"}
          </span>{" "}
        </p>
        <form onSubmit={handleSubmit} action="">
          <input
            onChange={handleChange}
            placeholder="Search"
            type="text"
            className="h-12 w-60 rounded-md text-black pl-2"
          />
        </form>
        <img
          onClick={handleSubmit}
          src="/assets/search.svg"
          alt=""
          className="w-7 h-6 -translate-x-9 translate-y-3 cursor-pointer"
        />
      </div>
      <NewPost setNewPostSubmitted={setNewPostSubmitted} />
      {filteredPosts.length > 0 ? (
        filteredPosts.map(
          (post) =>
            post.title && (
              <Post
                key={post.id}
                post={post}
                setPostUpdate={setPostUpdate}
                postUpdate={postUpdate}
              />
            )
        )
      ) : (
        <div className="flex justify-center items-center h-[80vh]">
          <h1 className="text-3xl">No posts found</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
