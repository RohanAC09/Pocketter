import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import Post from "./Post";
import api from "../api/api";

export default function Profile() {
  const { username, token } = useContext(AuthContext);
  const { userId } = useParams();
  const [ doesUserExist, setDoesUserExist ] = useState(true);

  const defaultProfileDetails = {
    userProfileName: "User",
    userProfileId: username,
    userProfileBio: "Hey there! I am using Pocketter.",
    followerCount: "0",
    followingCount: "0"
  };
  const [ displayProfileDetails, setDisplayProfileDetails] = useState(defaultProfileDetails);

  const defaultPost = {
    postId: "1",
    postedBy: username,
    postContent: "This is a sample post content.",
    postCreatedAt: new Date().toISOString()
  }

  async function getUserProfileDetails(userId, username) {
      /* {
          "bio": "Hey there! I have started using Pocketter!",
          "createdAt": "2026-06-01T11:00:08.410Z",
          "email": "rohan",
          "followerCount": 0,
          "following": false,
          "followingCount": 0,
          "fullName": "rohan",
          "userId": 1,
          "username": "rohan"
      } */
    const paramUsername = { username: userId, currentUsername: username };
    const response = await api.get("http://localhost:8085/api/v1/profile/fetchProfileDetails", 
                      { params: paramUsername });

    if (response.status !== 200 || response?.data?.message === "User does not exists") {
      console.error("Failed to fetch user profile details");
      setDoesUserExist(false);
      return {};
    }

    return { ...defaultProfileDetails, 
      userProfileId: response.data.username,
      userProfileName: response.data.fullName,
      userProfileBio: response.data.bio,
      followerCount: response.data.followerCount,
      followingCount: response.data.followingCount
    };
  }

  useEffect(() => {
    setDoesUserExist(true);
    const fetchDetails = async () => {
      const details = await getUserProfileDetails(userId, username);
      setDisplayProfileDetails(details);
    };
    fetchDetails();
  }, [userId, username]);

  return (
    <>
      <div className="container col-xxl-8 px-4">
        { doesUserExist ? 
            (
            <div>
              <ProfileCard displayProfileDetails={displayProfileDetails} username={username} />
              <Post postDetails={defaultPost} />
            </div>  
            )
           :  <div className="d-flex justify-content-center align-items-center user-not-found">
                <div className="text-center mt-5">User not found!</div>
              </div>
          }
      </div>
    </>
  );
}

