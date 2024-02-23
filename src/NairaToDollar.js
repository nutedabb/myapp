import { useState } from "react";
import "./App.css";

const NairaToDollar = () => {
  // let naira = document.getElementById("nairaDollar");
  // let dd = document.getElementById("dollarNaira");
  const [dollar, setDollar] = useState(0);
  const [naira, setNaira] = useState(0);

  const handleNaira = (e) => {
    setNaira((n) => (n = e.target.value));
  };

  const handleNairaToDollar = () => {
    setDollar((dollar) => (dollar = naira * 0.00062));
  };
  return (
    <>
      <h2>Convert Naira to Dollars</h2>

      <div className="container">
        <div>
          <label for="nairaDollar">Naira </label>
          <input type="number" id="nairaDollar" onChange={handleNaira} />
        </div>
        <div>
          <label for="dollarNair">Dollar</label>
          <input type="number" id="dollarNaira" value={dollar} />
        </div>
        <input type="submit" value="convert" onClick={handleNairaToDollar} />
      </div>
    </>
  );
};

export default NairaToDollar;
