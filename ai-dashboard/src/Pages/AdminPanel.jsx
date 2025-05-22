// 6. Admin Panel (Optional) - src/pages/AdminPanel.jsx
export default function AdminPanel() {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">🛠 Admin Panel</h1>
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">User Activity Logs</h2>
          <p className="text-sm bg-gray-100 p-4 rounded">No recent activity.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">System Status</h2>
          <p className="text-sm bg-gray-100 p-4 rounded">LangChain Status: ✅ DB Health: ✅</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-2">Invoice Parsing Accuracy</h2>
          <p className="text-sm bg-gray-100 p-4 rounded">Parsing Accuracy: 92%</p>
        </section>
      </div>
    );
  }
  