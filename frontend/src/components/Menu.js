import React, { useState } from "react";

function Menu({ nama, clickedMenu, onCLickedMenu }) {
  const nameStyle =
    clickedMenu === nama ? (
      <span style={{ color: "green" }}>{nama}</span>
    ) : (
      nama
    );

  function handleClick() {
    onCLickedMenu(nama);
  }
  return (
    <li style={{ marginBottom: 10, marginLeft: 10 }}>
      <a onClick={handleClick}>{nameStyle}</a>
    </li>
  );
}

export default Menu;
