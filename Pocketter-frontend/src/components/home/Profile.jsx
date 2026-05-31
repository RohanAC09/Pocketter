import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import UserPhoto from "../../assets/User-photo.jpg";
import PofilePhoto from "../../assets/Meghalaya_DP.jpg";
import FollowersDetail from "../dto/FollowersDetail";

export default function Profile() {
  const { username } = useContext(AuthContext);
  
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-8 col-sm-6 col-lg-4">
            <img
              src={username === "rohan_chinchkar" ? PofilePhoto : UserPhoto}
              className="d-block mx-lg-auto img-fluid rounded-circle"
              alt="User picture"
              style={{
                maxWidth: "250px",
                width: "40vw",
                aspectRatio: "1 / 1",
                objectFit: "cover",
              }}
              loading="lazy"
            />
          </div>
          <div className="col-lg-7">
            <h3 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Rohan Chinchkar
            </h3>
            <p className="fw-bold text-body-emphasis lh-1 mb-3">@{username}</p>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, popular front-end open source toolkit, featuring Sass
              variables, and powerful JavaScript plugins.
            </p>
            <FollowersDetail followers="1952930" following="10" />
          </div>
        </div>
      </div>
    </>
  );
}

