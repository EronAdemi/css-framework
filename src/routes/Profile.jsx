import ProfileSection from "../components/ui/ProfileSection";
import Post from "../components/ui/Post";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProfileData, fetchProfilePosts } from "../data";

const Profile = () => {
  const [profileDetails, setProfileDetails] = useState({});
  const [profilePosts, setProfilePosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postUpdate, setPostUpdate] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const profileData = JSON.parse(sessionStorage.getItem("data"));
    !profileData && navigate("/login");
  
    fetchProfilePosts(profileData?.accessToken, profileData?.name).then((data) =>
      setProfilePosts(data)
    );
    fetchProfileData(profileData?.accessToken, profileData?.name).then(
      (data) => {
        setProfileDetails(data);
      }
    );
  }, [isModalOpen, postUpdate]);

  return (
    <div className="w-9/12 md:w-8/12 border-[#D9D9D9] border-r-[1px] mr-[1px]">
      <ProfileSection
        profileDetails={profileDetails}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
      {profilePosts.length > 0 ? (
        profilePosts?.map((post) => (
          <Post
            key={post.id}
            profileDetails={profileDetails}
            post={post}
            postUpdate={postUpdate}
            setPostUpdate={setPostUpdate}
          />
        ))
      ) : (
        <div className="flex justify-center items-center h-[80vh]">
          <p className="text-2xl">No Posts Yet</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
