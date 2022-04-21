import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header.jsx";
import Watchlist from "./Components/Watchlist";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
