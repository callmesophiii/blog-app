import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <header>
      <nav className="nav-container">
        <div className="nav-left">
          <Link to="/blog" className="nav-link">Blog</Link>
          {isAuthenticated && <Link to="/admin" className="nav-link">Admin</Link>}
        </div>

        <div className="nav-right">
          {isAuthenticated && user ? (
            <>
              <span className="user-name">{user.name}</span>
              <img src={user.avatar} alt="avatar" className="avatar" />
              <button onClick={logout} className="nav-button">Log Out</button>
            </>
          ) : (
            <Link to="/login" className="nav-button-link">Log In</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
