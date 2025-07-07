import AnimatedPage from "../components/AnimatedPage";

const Admin = () => {
  return (
    <AnimatedPage>
      <div style={containerStyle}>
        <h1>Welcome to the Admin Dashboard! 💫</h1>
        <p style={funnyTextStyle}>
          You have the power! Just don't break anything... or do, but don’t tell anyone. 🤫
        </p>
        <img
          src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
          alt="funny gif"
          style={gifStyle}
        />
      </div>
    </AnimatedPage>
  );
};

const containerStyle: React.CSSProperties = {
  maxWidth: "600px",
  margin: "2rem auto",
  textAlign: "center",
  backgroundColor: "#1a1a1a",
  padding: "2rem",
  borderRadius: "12px",
  color: "#fff",
  boxShadow: "0 0 15px rgba(100, 108, 255, 0.5)",
};

const funnyTextStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  marginTop: "1rem",
  marginBottom: "1.5rem",
  fontStyle: "italic",
  color: "#b0b0ff",
};

const gifStyle: React.CSSProperties = {
  maxWidth: "100%",
  borderRadius: "12px",
  boxShadow: "0 0 10px rgba(100, 108, 255, 0.6)",
};

export default Admin;
