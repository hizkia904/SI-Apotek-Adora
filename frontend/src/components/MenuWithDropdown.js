import React, { useState } from "react";
import Menu from "./Menu";
function MenuWithDropdown({ nama, clickedMenu, onCLickedMenu, dropdown }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const ClickHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
    // onCLickedMenu(nama);
  };

  const pemetaanDropdown = dropdown.map((x) => {
    return (
      <Menu
        nama={x}
        key={x}
        clickedMenu={clickedMenu}
        onCLickedMenu={onCLickedMenu}
      ></Menu>
    );
  });

  // const nameStyle =
  //   clickedMenu === nama || dropdown.indexOf(clickedMenu) >= 0 ? (
  //     <span style={{ color: "green" }}>{nama}</span>
  //   ) : (
  //     nama
  //   );

  return (
    <li style={{ marginBottom: 10, marginLeft: 10 }}>
      <a onClick={ClickHandler}>{nama}</a>

      {isDropdownOpen && <ul>{pemetaanDropdown}</ul>}
    </li>
  );
}

export default MenuWithDropdown;
