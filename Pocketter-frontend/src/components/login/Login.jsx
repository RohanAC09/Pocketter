import { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import api from "../api/api";
// import { loginAPI } from '../api'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { username:userId, token, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("http://localhost:9016/api/v1/auth/login", { email: username.trim(), password });
      if(res.data.message === "Success") login({ token: res.data.token, username: username.trim() });
      navigate("/Pocketter/profile", { replace: true });
    } catch (err) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setError(null), 4000);
    return () => clearTimeout(timeout);
  }, [ error ]);

  useEffect(() => {
    console.log("Login token:", token);
    if ( token ) {
      navigate("/Pocketter/profile/"+userId, { replace: true });
    }
  }, [ token ]);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center login-page">
        <div className="d-flex flex-column align-items-center login-card m-4 p-4">
          <p className="login-title mb-3">Login</p>

          <form
            onSubmit={onSubmit}
            className="d-flex flex-column gap-3 login-form"
          >
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              required
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />

            {/* <div className="forgot">Forgot Password?</div> */}

            <div className="pt-2">
              {error && <div className="input-error text-center mb-2 mx-0 px-0">{error}</div>}

              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Logging…" : "Login"}
                </button>
              </div>
            </div>

          </form>
          <div className="mt-3 d-flex align-items-center gap-2 input-footer">
            <p>Don't have an account?
            <NavLink to="/Pocketter/register" className="ps-2">
              Register
            </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
