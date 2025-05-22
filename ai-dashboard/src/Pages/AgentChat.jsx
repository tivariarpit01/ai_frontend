// 4. AI Agent Chat Page - src/pages/AgentChat.jsx
import { useState } from 'react';

export default function AgentChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [file, setFile] = useState(null);

  const sendMessage = () => {
    setMessages([...messages, { role: 'user', content: input }, { role: 'ai', content: 'Mock AI response for: ' + input }]);
    setInput('');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🤖 AI Agent Chat</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4" />
      <div className="border rounded p-4 h-64 overflow-y-auto mb-4 bg-gray-50">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className="text-sm block p-2 bg-white inline-block rounded shadow">{msg.content}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input className="flex-grow border p-2 rounded" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something..." />
        <button onClick={sendMessage} className="bg-indigo-600 text-white px-4 py-2 rounded">Send</button>
      </div>
    </div>
  );
}