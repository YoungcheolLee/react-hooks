import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseState from "./ReactHooks/UseState";
import Home from "./ReactHooks/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UseState" element={<UseState />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
