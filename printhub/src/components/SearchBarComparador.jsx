import React, { useState } from "react";
import "../style//SearchBarComparador.css";

export default function SearchBarComparador() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(
    "Selecione um mês inicial"
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setIsDropdownOpen(false);
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <img src="src/assets/search.svg" alt="icon search" />
        <input type="search" placeholder="Search..." />
      </div>

      <div id="select-mes-inicial" className="select-menu">
        <div id="select-button" className="select-btn" onClick={toggleDropdown}>
          <div id="select-value">{selectedMonth}</div>
          <div id="chevrons">
            <img
              className="down"
              src="src/assets/keyboard_arrow_down.svg"
              alt="keyboard_arrow_down"
              style={{ display: isDropdownOpen ? "none" : "block" }}
            />
            <img
              className="up"
              src="src/assets/keyboard_arrow_up.svg"
              alt="keyboard_arrow_up"
              style={{ display: isDropdownOpen ? "block" : "none" }}
            />
          </div>
        </div>

        <ul id="options">
          {["Janeiro", "Fevereiro"].map((optionText) => (
            <li key={optionText} className="option" onClick={() => handleOptionClick(optionText)}>
              <input type="radio" name="mes" value="" data-label="Janeiro" />
              <span className="option-text">{optionText}</span>
              <img src="src/assets/check.svg" alt="" />
            </li>
          ))}
        </ul>
      </div>

      <button>
        <p>Filtro</p>
        <img src="src/assets/filter.svg" alt="filter" />
      </button>
    </div>
  );
}
