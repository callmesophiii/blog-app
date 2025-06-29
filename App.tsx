import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Header from "./components/Header";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  const location = useLocation();

  return (
    <AuthProvider>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h2 className="container">Page not found</h2>} />
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  );
};

export default App;
