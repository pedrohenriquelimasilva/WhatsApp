import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    toast("Developed by Daniel");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      
      <ToastContainer
        position="top-right"
        autoClose={6000}
      />
      {/* Same as */}
      <ToastContainer />
      <div className="formWrapper">
        <span className="logo">System Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Seu e-mail" />
          <input type="password" placeholder="Sua senha" />
          <button>Entrar</button>
          {err && <span>Algo deu errado</span>}
        </form>
        <p>
          Não possui conta? <Link to="/register">Registrar-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
