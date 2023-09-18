import ProfileSection from "../components/ui/ProfileSection";
import Post from "../components/ui/Post";
const Profile = () => {
    const image = "/assets/photo.png";
    const comment = "Wow so cool ";
    const comment2 = "So cool wow";
  return (
    <div className="w-9/12 md:w-8/12 border-[#D9D9D9] border-r-[1px] mr-[1px]">
      <ProfileSection />
      <Post comment={comment} />
      <Post image={image} comment={comment2} />
    </div>
  );
};

export default Profile;
