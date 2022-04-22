import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import Header from "./Components/Header.jsx";
import Watchlist from "./Components/Watchlist";
import Watched from "./Components/Watched";
import Add from "./Components/Add";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
