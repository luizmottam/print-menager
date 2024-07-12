import React, { useState } from "react";
import "../style/Impressoras.css";
import ExportMenu from "../components/ExportMenu";
import Table from "../components/Table";
import SearchBarImpressoras from "../components/SearchBarImpressoras";

export default function Impressoras() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Exportar");

  const handleToggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleOptionClick = (optionText) => {
    setSelectedOption(optionText);
    setIsMenuActive(false);
  };

  return (
    <>
      <h1>Impressoras</h1>
      <div className="search-imp">
        <SearchBarImpressoras />
        <ExportMenu
          isMenuActive={isMenuActive}
          selectedOption={selectedOption}
          handleToggleMenu={handleToggleMenu}
          handleOptionClick={handleOptionClick}
        />
      </div>
      <Table />
    </>
  );
}
