import { useState } from 'react';
import NodeBase from './NodeBase';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <NodeBase
      id={id}
      title="Input"
      color="bg-green-50"
      outputs={['value']}
    >
      <div className="space-y-2">
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Name:</label>
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Type:</label>
          <select 
            value={inputType} 
            onChange={handleTypeChange}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </NodeBase>
  );
}
