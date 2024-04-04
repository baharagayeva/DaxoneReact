import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../assets/constants/ApiUrl";

const LoginAndRegister = () => {
  //change login and register pages
  const [activeContent, setActiveContent] = useState("login");

  const changeContent = (contentId) => {
    setActiveContent(contentId);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
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
        navigate("/admin");
        window.location.reload();
      }
    } catch (error) {
      console.log("Invalid username or password");
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
      roles: [role],
    };
    console.log(data);
    try {
      const response = await fetch(`${apiUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("You have registered successfully. Please login");
        changeContent("login");
        setUsername("");
        setPassword("");
        setRole("");
      }
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <>
      <Breadcrumb pageTitle={"Login Register"} />

      <section className="login-register-area">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ms-auto me-auto">
              <div className="login-register-wrapper">
                <div className="login-register-button d-flex justify-content-center align-items-center">
                  <Link
                    className={activeContent === "login" ? "active" : ""}
                    onClick={() => changeContent("login")}
                  >
                    Login
                  </Link>
                  <span>|</span>
                  <Link
                    className={activeContent === "register" ? "active" : ""}
                    onClick={() => changeContent("register")}
                  >
                    Register
                  </Link>
                </div>
                <div className="login-register-content position-relative">
                  <div
                    id="login"
                    className={`login-register-form-container ${
                      activeContent === "login" ? "active" : ""
                    }`}
                  >
                    <div className="login-form-content">
                      <div className="inp-box d-flex flex-column">
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Username"
                        />
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        />
                      </div>
                      <div className="button-box">
                        <div className="login-btn d-flex justify-content-between">
                          <div className="d-flex">
                            <input type="checkbox" className="me-2" />
                            <label>Remember me</label>
                          </div>
                          <a href="#" className="forgot-password">
                            Forgot Password?
                          </a>
                        </div>
                        <button type="button" onClick={handleLogin}>
                          LOGIN
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    id="register"
                    className={`login-register-form-container ${
                      activeContent === "register" ? "active" : ""
                    }`}
                  >
                    <div className="login-form-content">
                      <div className="inp-box d-flex flex-column">
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Username"
                        />
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        />
                        <input
                          type="text"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          placeholder="Role"
                        />
                      </div>
                      <div className="button-box">
                        <button type="button" onClick={handleRegister}>
                          REGISTER
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginAndRegister;
