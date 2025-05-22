import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Invoices from "./Pages/Invoices";
import AgentChat from "./Pages/AgentChat";
import Settings from "./Pages/Settings";
import AdminPanel from "./Pages/AdminPanel";

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/ai-agent" element={<AgentChat />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
