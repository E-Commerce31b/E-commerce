import React, { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/Logo.png";
import "../../index.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordConfirmRef.current.value !== passwordRef.current.value)
      return setError("Contrasena no coincide");
    try {
      setError("");
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        passwordConfirmRef.current.value
      );
      navigate("/"); /// cambiar a ruta user
    } catch {
      setError("Error al crear la cuenta");
    }
  }

  return (
    <div className="backgroundColor">
      <div style={{ backgroundColor: "white" }}>
        <div className="navbar-brand ">
          <div className="navbar-item ">
            <NavLink to="/home " className="textDecoration">
              <img src={logo} width="112" height="80" />
              <div className=" is-size-4 has-text-weight-bold font_family is-pulled-right">
                <h1 className="flex has-text-right ">
                  <span>Paranoid </span>
                  <span>Bikes</span>
                </h1>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      <div style={{ margin: "80px" }}>
        <h1 className="column has-text-centered" style={{ paddingTop: "10px" }}>
          <strong className="font_family fontColor">CREAR USUARIO</strong>
        </h1>
      </div>

      <div
        className="container box"
        style={{ width: "50%", marginTop: "50px" }}
      >
        {error && <p>{error}</p>}

        <form on onSubmit={handleSubmit}>
          <div className="field">
            <label className="label font_family">Nombre</label>
            <input className="input" type="text"></input>
          </div>
          <div className="field">
            <label className="label font_family">Correo electronico</label>
            <input className="input" type="email" ref={emailRef}></input>
          </div>

          <div className="field">
            <label className="label font_family">Contrasena</label>
            <input className="input" type="password" ref={passwordRef}></input>
          </div>

          <div className="field">
            <label className="label font_family">Confirmar contrasena</label>
            <input
              className="input"
              type="password"
              ref={passwordConfirmRef}
            ></input>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" />
                <a href="#" className="font_family">
                  Acepto los terminos y condiciones
                </a>
              </label>
            </div>
          </div>

          <div className="buttons v">
            <button className="button is-primary font_family" type="submit">
              Registrarse
            </button>

            <Link to="/">
              <button className="button is-light font_family" type="submit">
                Cancelar
              </button>
            </Link>
          </div>
        </form>
        <br />
        <div className="font_family">
          Ya tiene una cuenta con nosotros?{" "}
          <Link to="/login">Iniciar Sesion</Link>
        </div>
      </div>
    </div>
  );
}