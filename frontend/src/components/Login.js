import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasil, setHasil] = useState("");
  const [kelas, setKelas] = useState("button is-success is-fullwidth");
  const [disable, setDisabled] = useState(false);
  const navigate = useNavigate();

  const checkUsernameAndPassword = async (e) => {
    e.preventDefault();
    setKelas(kelas + " is-loading");
    setDisabled(true);
    axios
      .post("http://localhost:8080/login", { username, password })
      .then((response) => {
        if (response.data === "Login Berhasil") {
          navigate("/dashboard");
        } else {
          setHasil(response.data);
        }
      })
      .catch((error) => {
        setHasil(error.message);
      })
      .finally(() => {
        setKelas("button is-success is-fullwidth");
        setDisabled(false);
      });
  };

  return (
    <section className="container">
      <div className="columns is-centered">
        <div className="column is-one-fifth">
          <img src="/Logo ADORA.jpg" alt="Logo Apotek Adora" />
          <form onSubmit={checkUsernameAndPassword}>
            {/* field username */}
            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input is-normal is-success"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="username"
                  required
                  disabled={disable}
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
            {/* password */}
            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input is-normal is-success"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="password"
                  required
                  disabled={disable}
                  maxLength="8"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
            {/* field button */}
            <div class="field">
              <button type="submit" class={kelas}>
                LOGIN
              </button>
            </div>
            {/* hasil */}
            <div class="field">
              <p id="hasil" className="help is-danger">
                {hasil}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
