import "./App.css";
import NairaToDollar from "./NairaToDollar.js";
import { Route, Routes, Link } from "react-router-dom";
import NairaToPounds from "./NairaToPounds.js";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="./">Home</Link>
        </li>

        <Link to="./naira-dollar">
          <li>Naira to Dollar</li>
        </Link>
        <Link to="/naira-pounds">
          <li>Naira to Pound</li>
        </Link>
      </ul>
      <Routes>
        <Route path="/naira-pounds" element={<NairaToPounds />} />
        <Route path="/naira-dollar" element={<NairaToDollar />} />
      </Routes>
    </div>
  );
}

export default App;
