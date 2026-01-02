import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="left-nav">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <a href="#feedback">Feedback</a>
        </div>
        <div className="right-logo">
          <h2>BindAI-Explorer</h2>
        </div>
      </header>

      <section className="home-hero">
        <div className="hero-text">
          <h1>Predict Protein-Ligand Binding Affinity</h1>
          <p>
            Empower your research with AI-driven predictions, interactive
            visualizations, and explainable insights.
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1581091870622-0f27f6a327e3?auto=format&fit=crop&w=600&q=80"
            alt="Protein AI"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
