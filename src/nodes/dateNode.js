import { useState } from 'react';
import NodeBase from './NodeBase';

export const DateNode = ({ id, data }) => {
  const [format, setFormat] = useState(data?.format || 'ISO');

  return (
    <NodeBase
      id={id}
      title="Date"
      color="bg-teal-50"
      inputs={['date']}
      outputs={['formatted', 'timestamp']}
    >
      <div className="space-y-2">
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Format:</label>
          <select 
            value={format} 
            onChange={(e) => setFormat(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="ISO">ISO 8601</option>
            <option value="US">US (MM/DD/YYYY)</option>
            <option value="EU">EU (DD/MM/YYYY)</option>
            <option value="RELATIVE">Relative</option>
          </select>
        </div>
        <div className="text-xs text-gray-500 text-center">
          📅 Date Formatter
        </div>
      </div>
    </NodeBase>
  );
}
