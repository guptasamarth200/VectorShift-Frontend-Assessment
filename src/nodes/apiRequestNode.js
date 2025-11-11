import { useState } from 'react';
import NodeBase from './NodeBase';

export const APIRequestNode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method || 'GET');
  const [url, setUrl] = useState(data?.url || 'https://api.example.com');

  return (
    <NodeBase
      id={id}
      title="API Request"
      color="bg-pink-50"
      inputs={['body', 'headers']}
      outputs={['response', 'status']}
    >
      <div className="space-y-2">
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Method:</label>
          <select 
            value={method} 
            onChange={(e) => setMethod(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">URL:</label>
          <input 
            type="text" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="https://..."
          />
        </div>
      </div>
    </NodeBase>
  );
}
