import React from "react";
import { Link } from "react-router-dom";
import advFormBanner from "./adv-aseets/adv-form-banner.png";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#CE2829", minHeight: "100vh", padding: "20px", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ marginBottom: "50px" }}>
        <h1 style={{ fontFamily: "Barlow", fontSize: "24px", fontWeight: "bold", color: "#FAF7F2" }}>Teknolojik Yemekler</h1>
        <p style={{ fontFamily: "Quattrocento", fontSize: "36px", color: "#FAF7F2", marginBottom: "1rem" }}>KOD ACIKTIRIR</p>
        <p style={{ fontFamily: "Quattrocento", fontSize: "36px", color: "#FAF7F2", marginBottom: "1rem" }}>PİZZA DOYURUR</p>
        <Link to="/pizza" id="order-pizza">
          <button style={{ backgroundColor: "#FDC913", padding: "10px 20px", borderRadius: "50px", color: "#292929", fontWeight: "bold", textDecoration: "none", cursor: "pointer" }}>ACIKTIM</button>
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
        <img src={advFormBanner} alt="Adv Form Banner" className="adv-form-banner-img" style={{ width: "100", height: "auto" }} />
      </div>
    </div>
  );
};

export default HomePage;
