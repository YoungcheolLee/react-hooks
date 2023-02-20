import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseState from "./ReactHooks/UseState";
import Home from "./ReactHooks/Home";
import UseEffect from "./ReactHooks/UseEffect";
import UseRef from "./ReactHooks/UseRef";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UseState" element={<UseState />} />
          <Route path="/UseEffect" element={<UseEffect />} />
          <Route path="/UseRef" element={<UseRef />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
