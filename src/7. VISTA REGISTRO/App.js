import './App.css';

function App() {
  return (
    <div>
      <header>
        <ul className="navbar">
          <div>
            <img src="./media/Logo.PNG" alt="imagen" className="Logo"/>
          </div>
          <div className="menu">
              <li><img src="./media/usuario2.png" alt="Usuario"/><button>USUARIO</button></li>
              <li><img src="./media/producto.png" alt="Productos"/><button>PRODUCTOS</button></li>
              <li><img src="./media/ventas.png" alt="Ventas" /><button>VENTAS</button></li>
          </div>
        </ul>
      </header>
     
     
      <main>
      <h1 className="titulo">¿Ya tienes una cuenta?</h1>
      </main>

      <body>
         <h5 className="subtitulo"> Inicia sesión para entrar en la página </h5>
        <div className="botonIniciar"> 
         <button className="iniciarSesion">Iniciar sesión</button>
        </div>
      </body>
    </div>
  );
}

export default App;
