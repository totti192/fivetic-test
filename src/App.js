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
      <h1 className="ventas">Ventas</h1>
      </main>

      <body>
        <div className="paneles">
          <div className="panelI">
            <form>
            <label>
              Factura N°
              <input placeholder="ID Venta" className="idFactuta"/>
            </label>
            <ul className="bloqueProductos">
              <li># item</li>
              <li>ID Producto</li>
              <li>Descripción Producto</li>
              <li>Cantidad</li>
              <li>Precio producto unidad</li>
              <li>Total</li>
              <li><img src="./media/Icons/bxs-check-square.svg" alt="Confirmar"/><img src="./media/Icons/bx-trash.svg" alt="Eliminar"/></li>
              <input type="search" zise="12" maxLength="40"/>
              <input type="search" zise="12" maxLength="40"/>
              <input type="search" zise="12" maxLength="40"/>
              <input type="search" zise="12" maxLength="40"/>
              <input type="search" zise="12" maxLength="40"/>
              <input type="search" zise="12" maxLength="40"/>
              <li><button><img src="./media/Icons/bxs-check-square.svg" alt="Confirmar"/></button><button><img src="./media/Icons/bx-trash.svg" alt="Eliminar"/></button></li>
            </ul>
            <label>
              Vendedor
              <input type="search"/>
            </label>
            <label>
              Valor total
              <input type="number"/>
            </label>
            </form>
          </div>
          <div className="panelD">
            <form>
            <label>
              Factura N°
              <input placeholder="ID Venta"/>
            </label>
            <ul className="bloqueProductos">
            </ul>
            <label>
              Vendedor
              <input type="search"/>
            </label>
            <label>
              Valor total
              <input type="number"/>
            </label>
            </form>
          </div>
        
        </div>
      </body>
    </div>
  );
}

export default App;
