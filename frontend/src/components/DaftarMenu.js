import React, { useState } from "react";

import Menu from "./Menu";

import MenuWithDropdown from "./MenuWithDropdown";
import Dashboard from "./Dashboard";
import Kasir from "./Kasir";
import Supplier from "./Supplier";
import TransaksiStokOpname from "./TransaksiStokOpname";
import TransaksiPembelian from "./TransaksiPembelian";
import TransaksiPenjualan from "./TransaksiPenjualan";
import DaftarItem from "./DaftarItem";
import JenisItem from "./JenisItem";
import SatuanItem from "./SatuanItem";
import Laporan from "./Laporan";
import PengaturanUser from "./PengaturanUser";

const ImageOfAdora = () => {
  return (
    <li>
      <figure className="image is-64x64" style={{ marginLeft: 60 }}>
        <img src="Logo ADORA.jpg" alt="Logo Apotik Adora" />
      </figure>
    </li>
  );
};

const DaftarMenu = () => {
  const [clickedMenu, setClickedMenu] = useState("");

  const dropdownProduk = ["Daftar Item", "Jenis Item", "Satuan Item"];
  const dropdownTransaksi = [
    "Transaksi Stok Opname",
    "Transaksi Pembelian",
    "Transaksi Penjualan",
  ];
  let content = "";

  switch (clickedMenu) {
    case "Dashboard":
      content = <Dashboard />;
      break;
    case "Kasir":
      content = <Kasir />;
      break;
    case "Supplier":
      content = <Supplier />;
      break;
    case "Transaksi Stok Opname":
      content = <TransaksiStokOpname />;
      break;
    case "Transaksi Pembelian":
      content = <TransaksiPembelian />;
      break;
    case "Transaksi Penjualan":
      content = <TransaksiPenjualan />;
      break;
    case "Daftar Item":
      content = <DaftarItem />;
      break;
    case "Jenis Item":
      content = <JenisItem />;
      break;
    case "Satuan Item":
      content = <SatuanItem />;
      break;
    case "Laporan":
      content = <Laporan />;
      break;
    case "Pengaturan User":
      content = <PengaturanUser />;
      break;
    default:
      break;
  }

  return (
    <div className="columns">
      <div className="column is-2">
        <aside className="menu" style={{ height: 500, overflow: "auto" }}>
          <ul className="menu-list">
            <ImageOfAdora />
            <Menu
              clickedMenu={clickedMenu}
              onCLickedMenu={setClickedMenu}
              nama="Dashboard"
            ></Menu>
            <Menu
              clickedMenu={clickedMenu}
              onCLickedMenu={setClickedMenu}
              nama="Kasir"
            ></Menu>
            <Menu
              clickedMenu={clickedMenu}
              onCLickedMenu={setClickedMenu}
              nama="Supplier"
            ></Menu>
            <MenuWithDropdown
              clickedMenu={clickedMenu}
              onCLickedMenu={setClickedMenu}
              nama="Transaksi"
              dropdown={dropdownTransaksi}
            ></MenuWithDropdown>
            <MenuWithDropdown
              clickedMenu={clickedMenu}
              onCLickedMenu={setClickedMenu}
              nama="Produk"
              dropdown={dropdownProduk}
            ></MenuWithDropdown>
            <Menu
              clickedMenu={clickedMenu}
              onCLickedMenu={setClickedMenu}
              nama="Laporan"
            ></Menu>
          </ul>
        </aside>
        <div className="columns" style={{ marginTop: 60 }}>
          <div className="column">
            <aside className="menu">
              <ul className="menu-list">
                <Menu
                  clickedMenu={clickedMenu}
                  onCLickedMenu={setClickedMenu}
                  nama="Pengaturan User"
                ></Menu>
                <Menu
                  clickedMenu={clickedMenu}
                  onCLickedMenu={setClickedMenu}
                  nama="Log Out"
                ></Menu>
              </ul>
            </aside>
          </div>
        </div>
      </div>
      <div className="column has-background-info">{content}</div>
    </div>
  );
};

export default DaftarMenu;
