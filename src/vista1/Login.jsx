import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="Formulario">
      <div className="container">
        <h1>Iniciar Sesión</h1>
        <form action="">

          <input type="text" className="user" placeholder="Usuario"/>

          <input type="password" className="pass" placeholder="Contraseña"/>

          <a href="#">¿Olvidaste tu contraseña?</a>
          <button className="button">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;