import { useState } from 'react';
import NodeBase from './NodeBase';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <NodeBase
      id={id}
      title="Output"
      color="bg-red-50"
      inputs={['value']}
    >
      <div className="space-y-2">
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Name:</label>
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Type:</label>
          <select 
            value={outputType} 
            onChange={handleTypeChange}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
      </div>
    </NodeBase>
  );
}
