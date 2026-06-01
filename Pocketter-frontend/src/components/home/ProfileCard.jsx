import UserPhoto from "../../assets/User_photo.jpg";
import PofilePhoto from "../../assets/Meghalaya_DP.jpg";
import FollowersDetail from "../dto/FollowersDetail";

export default function ProfileCard({ displayProfileDetails, username }) {
  return (
    <>
      <div className="row d-flex-lg-row align-items-start g-5 py-5">
        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-start mt-4">
          <img
            src={
              displayProfileDetails.userProfileId === "rohan"
                ? PofilePhoto
                : UserPhoto
            }
            className="d-block mx-lg-auto img-fluid rounded-circle"
            alt="User picture"
            style={{
              maxWidth: "200px",
              width: "40vw",
              aspectRatio: "1 / 1",
              objectFit: "cover"
            }}
            loading="lazy"
          />
        </div>
        <div className="col-12 col-lg-7">
          <h3 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            {displayProfileDetails.userProfileName}
          </h3>
          <p className="fw-bold text-body-emphasis lh-1 mb-3">
            @{displayProfileDetails.userProfileId}
          </p>
          <p className="lead">{displayProfileDetails.userProfileBio}</p>
          <FollowersDetail
            followers={displayProfileDetails.followerCount}
            following={displayProfileDetails.followingCount}
          />

          <div className="profile-follow d-flex justify-content-start align-items-center">
            {displayProfileDetails.userProfileId !== username && (
              <button className="btn btn-primary">Follow</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
