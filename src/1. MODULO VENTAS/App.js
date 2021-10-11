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
          <div className="subPanel">
            <form>
            <label>
              Factura N°
              <input placeholder="ID Venta" className="idFactura"/>
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
            <form className="vendedor">
              Vendedor:
              <select>
                <option disable selected="">selecione un vendedor</option>
                <option></option>
              </select>
            </form>

            <label className="vendedor">
              Valor total
              <input type="number"/>
            </label>
            </form>
          </div>


          <div className="subPanel">
            <form>
            <label className="facturaFecha">
              <h3>Factura N° </h3>
              <input placeholder="ID Venta" className=""/>
              <h3>Fecha</h3>
              <input type="date"/>
            </label>
            </form>
            <form>
            <label className="CC-nombre">
              <h3 className="titulos">Cliente</h3>
              <input type="number" placeholder="CC o NIT" className=""/>
              <input type="text" placeholder="Nombre/apellidos" className="nombre-apellido"/>
            </label>
            <label>
              <h3 className="titulos">Producto</h3>
              <input type="number" placeholder="ID Producto"className="idProducto"/>
              <input  placeholder="Descripción producto" className="dProducto"/>
            </label>
            <label>
              <input type="number" placeholder="Precio producto unidad" className="precio"/>
              <input type="number" placeholder="Cantidad" className="cantidad"/>
            </label>
            <button className="agregarProducto">
              <img src="./media/Icons/bx-cart.svg" alt="Agregar" />Agregar Producto
            </button>
            
            <ul className="bloqueProductos">
            </ul>
            </form>
          </div>
          
        
        </div>
      </body>
    </div>
  );
}

export default App;
