import NewPost from "../components/ui/NewPost";
import Post from "../components/ui/Post";

const Home = () => {
  const image = "/assets/photo.png";
  const comment = "Wow so cool ";
  const comment2 = "So cool wow";

  return (
    <div className="w-9/12 md:w-8/12 border-[#D9D9D9] border-r-[1px] mr-[1px] ">
      <NewPost />
      <Post comment={comment} />
      <Post comment={comment2} image={image} />
      <Post comment={comment} />
      <Post comment={comment2} image={image} />
    </div>
  );
}

export default Home