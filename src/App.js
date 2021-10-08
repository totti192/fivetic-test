import './App.css';
import './media/icons/bxs-group.svg';


function App() {
  return (
    <div>
      <header>
        <ul className="navbar">
            <li>
                <img src="./media/Logo.PNG" alt="imagen" className="Logo"/></li>
            <li><img src="./media/icons/bxs-group.svg" alt="Usuario" className="usuario"/>
            <button className="button">Usuario</button></li>
            <li><button className="button">Productos</button></li>
            <li><button className="button">Ventas</button></li>

        </ul>
      </header>
    </div>
  );
}

export default App;
