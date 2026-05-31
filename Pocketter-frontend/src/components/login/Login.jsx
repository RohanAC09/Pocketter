import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import api from "../api/api";
// import { loginAPI } from '../api'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("http://localhost:9016/api/v1/auth/login", { email: username.trim(), password });
      console.log(res);
      if(res.data.message === "Success") login({ token: res.data.token, username: username.trim() });
      navigate("/Pocketter/profile", { replace: true });
    } catch (err) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  if ( token ) {
    return navigate("/Pocketter/profile", { replace: true });
  }

  return (
    <>
      { token && redirectLoggedUser() }
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

            {error && <div className="error">{error}</div>}

            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging…" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
