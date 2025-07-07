import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import AnimatedPage from "../components/AnimatedPage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/admin";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@") || password.length < 4) {
      setError("Please enter a valid email and password.");
      return;
    }

    login(email);
    navigate(from, { replace: true });
  };

  if (isAuthenticated) {
    navigate(from);
    return null;
  }

  return (
    <AnimatedPage>
      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "2rem",
          background: "#1e1e1e",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Log In</h1>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            required
            style={inputStyle}
          />
          {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}
          <button type="submit" style={{ marginTop: "0.5rem" }}>Log In</button>
        </form>
      </div>
    </AnimatedPage>
  );
};

const inputStyle = {
  padding: "0.75rem",
  fontSize: "1rem",
  borderRadius: "6px",
  border: "1px solid #555",
  backgroundColor: "#2e2e2e",
  color: "white",
};

export default Login;
