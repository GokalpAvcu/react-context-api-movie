import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import "./App.css";
import "./lib/fontawesome/css/all.min.css"
import Header from "./Components/Header.jsx";
import Watchlist from "./Components/Watchlist";
import Watched from "./Components/Watched";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} /> 
          <Route path="/watched" element={<Watched />} /> 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
