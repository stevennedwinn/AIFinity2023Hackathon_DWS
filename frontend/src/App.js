import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebarr/SideBar";
import Dashboard from "./pages/Dashboard";
import Summary from "./pages/Summary";
import Setting from "./pages/Setting";
import NavBar from "./components/Navbar/Navbar"
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/summary" element={<Summary/>} />
          <Route path="*" element={<> not found </>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
