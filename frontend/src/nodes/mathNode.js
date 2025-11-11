import { useState } from 'react';
import NodeBase from './NodeBase';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  return (
    <NodeBase
      id={id}
      title="Math"
      color="bg-blue-50"
      inputs={['a', 'b']}
      outputs={['result']}
    >
      <div className="flex flex-col">
        <label className="text-xs text-gray-600 mb-1">Operation:</label>
        <select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (-)</option>
          <option value="multiply">Multiply (×)</option>
          <option value="divide">Divide (÷)</option>
          <option value="power">Power (^)</option>
        </select>
      </div>
    </NodeBase>
  );
}
