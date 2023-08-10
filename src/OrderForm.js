import React, { useState, useEffect } from "react";
import OrderReceived from "./OrderReceived";

const OrderForm = () => {
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [secimler, setSecimler] = useState([]);
  const [toplamPara, setToplamPara] = useState(0);
  const [secimlerPara, setSecimlerPara]=useState(0);
   const [siparis, setSiparis] = useState(false);

   const availableToppings = ["Pepperoni", "Domates", "Mantar", "Yeşil Zeytin", "Ananas", "Mısır", "Turşu", "Sarımsak", "Sucuk", "Sosis"];


  const handleSubmit = (event) => {
   
    if (!boyut || !hamur) {
      alert("Lütfen boyut ve hamur seçin.");
    } else {
      setSiparis(true);
    }
  };

  const handleSizeChange = (event) => {
    setBoyut(event.target.value);
   
  };

  const handleDoughChange = (event) => {
    setHamur(event.target.value);
  };

  const handleToppingChange = (event) => {
    const selectedTopping = event.target.value;
   
      if (secimler.length < 5) {
        setSecimler([...secimler, selectedTopping]);
      } else {
        event.target.checked = false;
        alert("En fazla 5 malzeme seçebilirsiniz.");
          } 
  };

  useEffect(() => {
    let price = 0;
    if (boyut === "kucuk") {
      price = 43;
    } else if (boyut === "orta") {
      price = 64;
    } else if (boyut === "buyuk") {
      price = 92;
    }
    price += secimler.length * 5;
    setSecimlerPara(secimler.length*5);
    setToplamPara(price);
  }, [boyut, secimler]);

  return (
    <div>
    <div style={{ backgroundColor: "#CE2829", paddingTop: "1rem", paddingBottom:"1rem", color: "#FAF7F2", textAlign: "center" }}>
      <h2>Teknolojik Yemekler</h2>
      <p>
        <a href="/" style={{ color: "#FAF7F2"}}>
          Ana Sayfa
        </a>
      </p>
    </div>
  
    {siparis ? (
      <OrderReceived/>
    ) : (
      <div>
        <div style={{ backgroundColor: "#FAF7F2", color: "#292929", display: "flex", justifyContent: "center", gap: "6rem", paddingBottom: "2rem" }}>
          <div>
            <h3>Boyut Seç</h3>
            <label>
              <input type="radio" name="boyut" value="kucuk" onChange={handleSizeChange} required />
              Küçük
            </label>
            <label>
              <input type="radio" name="boyut" value="orta" onChange={handleSizeChange} required />
              Orta
            </label>
            <label>
              <input type="radio" name="boyut" value="buyuk" onChange={handleSizeChange} required />
              Büyük
            </label>
          </div>
          <div>
            <h3>Hamur Seç</h3>
            <select value={hamur} onChange={handleDoughChange}>
              <option value="">Seçiniz</option>
              <option value="ince">İnce Hamur</option>
              <option value="normal">Normal Hamur</option>
              <option value="kalin">Kalın Hamur</option>
            </select>
          </div>
        </div>
  
        <div style={{ textAlign: "center" }}>
  <h3>Ek Malzemeler</h3>
  <p style={{ fontSize: "12px"}}>En fazla 5 malzeme seçebilirsiniz. Her malzeme extra 5 TL.</p>
  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
    {availableToppings.map((topping, index) => (
      <label key={topping} style={{ margin: "1.5rem", padding: "1rem" }}>
        <input style={{ margin: "0.5rem" }} type="checkbox" name="secimler" value={topping} onChange={handleToppingChange} checked={secimler.includes(topping)} />
        {topping}
      </label>
    ))}
  </div>
</div>
 
        <div style={{ backgroundColor: "#CE2829", padding: "20px", color: "#FAF7F2", textAlign: "center" }}>
          <h3>Sipariş Toplamı</h3>
          <p>Malzemeler Tutarı : {secimlerPara} TL</p>
          <p>Toplam Fiyat: {toplamPara} TL</p>
          <button style={{ backgroundColor: "#FDC913", padding: "10px 20px", borderRadius: "10px", color: "#292929", fontWeight: "bold", textDecoration: "none", cursor: "pointer" }} onClick={handleSubmit}>
            Siparişi Tamamla
          </button>
        </div>
      </div>
    )}
  </div>
  );
};

export default OrderForm;
