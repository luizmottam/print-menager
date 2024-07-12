import React from "react";
import searchIcon from "../assets/search.svg";

export default function SearchBarImpressoras() {
  return (
    <div className="search-container">
      <img src={searchIcon} alt="icon search" />
      <input type="search" placeholder="Search..." />
    </div>
  );
}
