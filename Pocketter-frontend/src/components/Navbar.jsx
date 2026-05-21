function Navbar() {
  return (
    <>
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <button className="btn btn-info">Pocketter</button>
              <li>
                <a href="#" className="nav-link ps-4 pe-2 link-secondary">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  Feed
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  Follow
                </a>
              </li>
            </ul>
            <form
              className="col-12 col-sm-auto mt-2 mt-xl-0 me-sm-3"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search User..."
                aria-label="Search"
              />
            </form>
            <button className="btn btn-secondary me-3 mt-2 mt-xl-0">
              Search
            </button>
            <div className="dropdown text-end mt-2 mt-xl-0">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
