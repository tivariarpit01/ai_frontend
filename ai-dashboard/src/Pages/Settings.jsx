// 5. Settings Page - src/pages/Settings.jsx
import { useState } from 'react';

export default function Settings() {
  const [apiKey, setApiKey] = useState('');

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">⚙️ Settings</h1>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Gemini/OpenAI API Key</label>
        <input type="text" className="w-full p-2 border rounded" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Theme</label>
        <select className="w-full p-2 border rounded">
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Language</label>
        <select className="w-full p-2 border rounded">
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
}