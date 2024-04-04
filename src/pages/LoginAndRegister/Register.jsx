import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../assets/constants/ApiUrl";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
      roles: [role],
    };
    console.log(data);
    try {
      const response = await fetch(
        `${apiUrl}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        console.log("You have registered successfully. Please login");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
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
        <label>
          Role:
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
