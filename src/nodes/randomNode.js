import { useState } from 'react';
import NodeBase from './NodeBase';

export const RandomNode = ({ id, data }) => {
  const [min, setMin] = useState(data?.min || '0');
  const [max, setMax] = useState(data?.max || '100');
  const [type, setType] = useState(data?.type || 'integer');

  return (
    <NodeBase
      id={id}
      title="Random"
      color="bg-purple-50"
      outputs={['value']}
    >
      <div className="space-y-2">
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Type:</label>
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="integer">Integer</option>
            <option value="float">Float</option>
            <option value="boolean">Boolean</option>
          </select>
        </div>
        {type !== 'boolean' && (
          <div className="flex gap-2">
            <div className="flex flex-col flex-1">
              <label className="text-xs text-gray-600 mb-1">Min:</label>
              <input 
                type="number" 
                value={min} 
                onChange={(e) => setMin(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-xs text-gray-600 mb-1">Max:</label>
              <input 
                type="number" 
                value={max} 
                onChange={(e) => setMax(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        )}
      </div>
    </NodeBase>
  );
}
