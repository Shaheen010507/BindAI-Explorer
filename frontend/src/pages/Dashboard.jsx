import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h2>Research Dashboard</h2>
        <p>Upload protein & ligand files to predict binding affinity.</p>
        <div className="dashboard-buttons">
          <button>Upload Protein</button>
          <button>Upload Ligand</button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
