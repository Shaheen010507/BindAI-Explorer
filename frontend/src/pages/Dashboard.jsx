/*import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

function Dashboard() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) setUsername(storedUsername);
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h2>Welcome, {username ? username : "Researcher"}</h2>
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
*/

/// username+last login


import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

function Dashboard() {
  const [username, setUsername] = useState("");
  const [lastLogin, setLastLogin] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedLogin = localStorage.getItem("last_login");
    if (storedUsername) setUsername(storedUsername);
    if (storedLogin) setLastLogin(storedLogin);
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h2>Welcome, {username}</h2>
        {lastLogin && <p>Last login: {lastLogin}</p>}
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
