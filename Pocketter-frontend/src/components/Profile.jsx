import UserPhoto from "../assets/User-photo.jpg";
import FollowersDetail from "./dto/FollowersDetail";

function Profile() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-8 col-sm-6 col-lg-4">
            <img
              src={UserPhoto}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="500"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-7">
            <h3 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Rohan Chinchkar
            </h3>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, popular front-end open source toolkit, featuring Sass
              variables, and powerful JavaScript plugins.
            </p>
            <FollowersDetail followers="0" following="0" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
