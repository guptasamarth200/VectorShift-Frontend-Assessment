import { useState } from 'react';
import NodeBase from './NodeBase';

export const LogicNode = ({ id, data }) => {
  const [operator, setOperator] = useState(data?.operator || 'AND');

  return (
    <NodeBase
      id={id}
      title="Logic"
      color="bg-cyan-50"
      inputs={['condition1', 'condition2']}
      outputs={['result']}
    >
      <div className="flex flex-col">
        <label className="text-xs text-gray-600 mb-1">Operator:</label>
        <select 
          value={operator} 
          onChange={(e) => setOperator(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="AND">AND</option>
          <option value="OR">OR</option>
          <option value="NOT">NOT</option>
          <option value="XOR">XOR</option>
        </select>
      </div>
    </NodeBase>
  );
}
