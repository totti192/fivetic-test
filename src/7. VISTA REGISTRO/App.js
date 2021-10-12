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
      <h1 className="titulo">Registrarse</h1>
      </main>

      <body>
        <div className="bloque">
        <form>
          <label className="nombre">
            <img src="./media/Icons/usuario.svg" alt="usuario" className="imgNombre"></img>
            <input type="text" placeholder="Nombre completo" className="letraNombre"></input>
          </label>
        </form>
        </div>
        <div className="bloque">
        <form>
          <label className="nombre">
            <img src="./media/Icons/bxs-envelope.svg" alt="Email" className="imgNombre"></img>
            <input type="email" placeholder="Correo electronico" className="letraNombre"></input>
          </label>
        </form>
        </div>
        <div className="bloque">
        <form>
          <label className="nombre">
            <img src="./media/Icons/usuario.svg" alt="usuario" className="imgNombre"></img>
            <input type="text" placeholder="Usuario" className="letraNombre"></input>
          </label>
        </form>
        </div>
        <div className="bloque">
        <form>
          <label className="nombre">
            <img src="./media/Icons/candado.svg" alt="Contraseña" className="imgNombre"></img>
            <input type="password" placeholder="Contraseña" className="letraNombre"></input>
          </label>
        </form>
        </div>
        <div className="botonRegistrarse"> 
         <button className="registrarse">Registrarse</button>
        </div>
      </body>
    </div>
  );
}

export default App;
