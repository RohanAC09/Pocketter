import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

function Navbar() {
  const { token } = useContext(AuthContext);

  return (
    <>
      <header className="pb-3 mb-3 border-bottom">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div className="col-12 d-flex me-lg-auto m-0 justify-content-start mb-md-0">
            <Link to="/profile" className="nav-link m-0">
              <h1>Pocketter</h1>
            </Link>
            <div className="col-5 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              { token !== null && (
                <ul className="nav pt-1">
                  <li>
                    <Link
                      to="/profile"
                      className="nav-link ps-4 pe-2 link-secondary"
                    >
                      <h5>Profile</h5>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/feed"
                      className="nav-link px-2 link-body-emphasis"
                    >
                      <h5>Feed</h5>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          { token !== null ? (
            <div className="col-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <form
                className="mt-2 mt-xl-0 me-sm-3"
                role="search"
              >
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search User..."
                  aria-label="Search"
                />
              </form>
              <button className="btn btn-primary me-3 mt-2 mt-xl-0">
                Search
              </button>
              <button className="btn btn-primary me-3 mt-2 mt-xl-0">Logout</button>
            </div>
          ) : (
            // <span className="welcome-msg">Welcome, {username}!</span>
            <Link to="/login" className="btn btn-primary me-3 mt-2 mt-xl-0">
              Login
            </Link>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
