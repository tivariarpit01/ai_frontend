// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">AI Accountant</h1>
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-yellow-400">Dashboard</Link>
        <Link to="/invoices" className="hover:text-yellow-400">Invoices</Link>
        <Link to="/ai-agent" className="hover:text-yellow-400">AI Agent</Link>
        <Link to="/settings" className="hover:text-yellow-400">Settings</Link>
        <Link to="/admin" className="hover:text-yellow-400">Admin</Link>
      </div>
    </nav>
  );
}
