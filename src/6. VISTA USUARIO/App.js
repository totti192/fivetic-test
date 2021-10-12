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
     

      <body>
      <h1 className="titulo">Usuario</h1>

      <form>
        <div className="fecha">
        <h3>Fecha</h3>
        <input type="date"></input>
        </div>
        <h3 className="usuario">Usuario</h3>
        <div className="cedula">
          <input type="number" placeholder="C.C o Nit"></input>
          <input type="text" placeholder="Nombre/apellidos"></input>
        </div>
        <div className="cedula">
          <select>
          <option disabled selected="Rol">Rol</option>
            <option>Administrador</option>
            <option>Vendedor</option>
            <option>Cliente</option>
          </select>
          <select>
            <option disabled selected="Estado usuario">Estado usuario</option>
            <option>Pendiente</option>
            <option>Autorizado</option>
            <option>No Autorizado</option>
          </select>
        </div>
      </form>
        <div className="botonRol"> 
         <button className="rol">Actualizar Rol</button>
        </div>




      
       </body>
    </div>
  );
}

export default App;
