// src/pages/Invoices.jsx
import { useEffect, useState } from 'react';

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/invoices')
      .then(res => res.json())
      .then(data => setInvoices(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Parsed Invoices</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">File Name</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">View</th>
            <th className="border px-4 py-2">Download</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv, idx) => (
            <tr key={idx} className="text-center">
              <td className="border px-4 py-2">{inv.filename}</td>
              <td className="border px-4 py-2">{inv.status}</td>
              <td className="border px-4 py-2">{inv.date}</td>
              <td className="border px-4 py-2"><button className="text-blue-500">View</button></td>
              <td className="border px-4 py-2"><button className="text-green-600">Download</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
