/*export const registerUser = async (userData) => {
  const res = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const loginUser = async (loginData) => {
  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  });
  const data = await res.json();
  if (data.username) localStorage.setItem("username", data.username);
  return data;
};
*/


// add the save last_login


export const registerUser = async (userData) => {
  const res = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const loginUser = async (loginData) => {
  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  });

  const data = await res.json();

  // Save user info locally
  if (data.username) localStorage.setItem("username", data.username);
  if (data.name) localStorage.setItem("name", data.name);
  if (data.email) localStorage.setItem("email", data.email);
  if (data.phone) localStorage.setItem("phone", data.phone);
  if (data.last_login) localStorage.setItem("last_login", data.last_login);

  return data;
};
