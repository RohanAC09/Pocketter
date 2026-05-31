import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

function Navbar({ basePath='/Pocketter' }) {
  const { token, logout } = useContext(AuthContext);

  function handleLogout() {
    <Navigate to={`${basePath}/login`} replace />
    logout();
  }

  function handleRegister() {
    <Navigate to={`${basePath}/register`} replace />
  }

  return (
    <>
      <header className="pb-3 mb-3 border-bottom">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between">
          <div className="col-12 col-sm-auto d-flex flex-wrap">
            <Link to={`${basePath}/profile`} className="nav-link pe-4">
              <h1 className="app-title">Pocketter</h1>
            </Link>
            <div className="">
              { token && (
                <ul className="nav pt-1 ">
                  <li>
                    <Link to={`${basePath}/profile`} 
                      className="col-6 col-sm-auto nav-link px-2" >
                      <h5 className="nav-items">Profile</h5>
                    </Link>
                  </li>
                  <li>
                    <Link to={`${basePath}/feed`}
                      className="col-6 col-sm-auto nav-link px-2" >
                      <h5 className="nav-items">Feed</h5>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          { token && (
            <div className="col-12 col-md-6 col-lg-4 d-flex mb-2 justify-content-start mb-md-0">
              <form
                className="mt-1 mt-md-0 me-2"
                role="search"
              >
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search User..."
                  aria-label="Search"
                />
              </form>
              <button className="btn btn-primary me-2 me-md-4 mt-1 mt-md-0">
                Search
              </button>
              <button className="btn btn-primary me-1 mt-1 mt-md-0" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) }
        </div>
      </header>
    </>
  );
}

export default Navbar;
