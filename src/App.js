import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import CreateView from "./components/CreateView.js";
import Select from "react-select";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-view" element={<CreateView />} />
      </Routes>
    </div>
  );
}

export default App;
