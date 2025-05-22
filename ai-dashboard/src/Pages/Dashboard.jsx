// 2. Dashboard/Home Page - src/pages/Dashboard.jsx
export default function Dashboard() {
    return (
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">📊 Dashboard Overview</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card title="Total Invoices" value="230" />
          <Card title="Extracted" value="200" />
          <Card title="Failed Parses" value="30" />
          <Card title="AI Queries Today" value="42" />
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-8 mb-2">📁 Upload Invoice</h2>
          <input type="file" className="mb-4" />
          <h2 className="text-xl font-semibold mb-2">📋 Latest Invoices</h2>
          <table className="w-full text-sm border">
            <thead>
              <tr>
                <th>File Name</th><th>Status</th><th>Date</th><th>View</th><th>Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>invoice123.pdf</td><td>Parsed</td><td>2025-05-20</td><td><button>👁️</button></td><td><button>⬇️ Excel</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  function Card({ title, value }) {
    return (
      <div className="bg-white shadow p-4 rounded text-center">
        <h3 className="text-sm font-medium mb-1">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    );
  }
  