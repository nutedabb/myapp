import "./App.css";
import { useState } from "react";

const NairaToPounds = () => {
  const [naira, setNaira] = useState(0);
  const [pound, setPound] = useState(0);
  const handlNaira = (e) => {
    setNaira((n) => (n = e.target.value));
  };
  const changeToPound = () => {
    setPound((pound) => (pound = naira * 0.00049));
  };

  return (
    <>
      <h2> Convert Naira to Pounds</h2>
      <div className="container">
        <div>
          <label for="nairapounds">Naira</label>
          <input type="number" id="nairapounds" onChange={handlNaira} />
        </div>
        <div>
          <label for="pounds">Pound</label>
          <input type="number" id="pounds" value={pound} />
        </div>
        <input type="submit" onClick={changeToPound} />
      </div>
    </>
  );
};

export default NairaToPounds;
