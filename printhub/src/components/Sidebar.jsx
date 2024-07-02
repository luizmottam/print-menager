import { NavLink } from "react-router-dom";
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <header className="sidebar-header">
          <h1>Print Hub</h1>
        </header>
        <div className="menu-bar">
          <ul className="menu">
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            {/* Add more links here as needed */}
          </ul>
        </div>
      </nav>
    </aside>
  );
}

