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
        <h3>Fecha</h3>
        <input type="date"></input>
        



      </form>
       </body>
    </div>
  );
}

export default App;
