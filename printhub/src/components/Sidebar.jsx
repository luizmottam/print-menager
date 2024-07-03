import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <header className="sidebar-header">
          <div className="text header-text">
            <span className="name">Print HUB</span>
          </div>
        </header>
        <div className="menu-bar">
          <ul className="menu">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                <img src='src/assets/home.svg' alt="Home" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cont-de-impressoras" className={({ isActive }) => isActive ? 'active' : ''}>
                <img src='src/assets/123.svg' alt="Cont. de Papel" /> 
                <span>Cont. de Papel</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/comparador-de-meses" className={({ isActive }) => isActive ? 'active' : ''}>
                <img src='src/assets/calendar_month.svg' alt="Comparador de Meses" />
                <span>Comparador de Meses</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/impressoras" className={({ isActive }) => isActive ? 'active' : ''}>
                <img src='src/assets/print.svg' alt="Impressoras" />
                <span>Impressoras</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
