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
              <li><img src="./media/icons/bxs-group.svg" alt="Usuario"/><button>Usuario</button></li>
              <li><img src="./media/icons/bxs-carousel.svg" alt="Productos"/><button>Productos</button></li>
              <li><img src="./media/icons/bxs-spreadsheet.svg" alt="Ventas" /><button>Ventas</button></li>
          </div>

        </ul>
      </header>
    </div>
  );
}

export default App;
