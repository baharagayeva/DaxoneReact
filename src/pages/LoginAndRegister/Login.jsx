import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../assets/constants/ApiUrl";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const { jwtToken } = await response.json();
        localStorage.setItem("token", jwtToken);
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
