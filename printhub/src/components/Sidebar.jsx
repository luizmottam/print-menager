import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../style/Sidebar.css";

export default function Sidebar({ toggleBlur }) {
  const [isClosed, setIsClosed] = useState(true);

  const handleToggle = () => {
    setIsClosed(!isClosed);
    toggleBlur();
  };

  return (
    <aside className={`sidebar ${isClosed ? 'close' : ''}`}>
      <nav>
        <header className="sidebar-header">
          <div className="text logo-text">
            <span className="name">Print HUB</span>
          </div>
          <div className="toggle-icon" onClick={handleToggle}>
            <img
              src={isClosed ? 'src/assets/chevron_left.svg' : 'src/assets/chevron_right.svg'}
              alt="Toggle"
            />
          </div>
        </header>
        <div className="menu-bar">
          <ul className="menu-links">
            <li className="nav-link">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img className="icon" src="src/assets/home.svg" alt="Home" />
                <span className="text nav-text">Home</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/cont-de-impressoras"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img className="icon" src="src/assets/123.svg" alt="Cont. de Papel" />
                <span className="text nav-text">Cont. de Papel</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/comparador-de-meses"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img
                  className="icon"
                  src="src/assets/calendar_month.svg"
                  alt="Comparador de Meses"
                />
                <span className="text nav-text">Comparador de Meses</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/impressoras"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img className="icon" src="src/assets/print.svg" alt="Impressoras" />
                <span className="text nav-text">Impressoras</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
