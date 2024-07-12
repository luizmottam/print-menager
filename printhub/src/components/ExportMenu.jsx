import React from "react";
import downloadIcon from "../assets/download.svg";

export default function ExportMenu({ isMenuActive, selectedOption, handleToggleMenu, handleOptionClick }) {
  return (
    <div className={`export-menu ${isMenuActive ? "active" : ""}`}>
      <div className="export-btn" onClick={handleToggleMenu}>
        <span className="btn-options">{selectedOption}</span>
        <img src={downloadIcon} alt="Download" />
      </div>
      <ul className="options">
        {["Excel", "PDF"].map((optionText) => (
          <li
            key={optionText}
            className="option"
            onClick={() => handleOptionClick(optionText)}
          >
            <span className="option-text">{optionText}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
