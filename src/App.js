import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import Watchlist from "./component/Watchlist";
import Header from "./component/Header";
import Watched from "./component/Watched";
import Add from "./component/Add";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
