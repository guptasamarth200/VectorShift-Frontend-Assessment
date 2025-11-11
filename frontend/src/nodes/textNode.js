import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    // Extract variables from text using regex {{variableName}}
    const regex = /\{\{\s*(\w+)\s*\}\}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(currText)) !== null) {
      if (!matches.includes(match[1])) {
        matches.push(match[1]);
      }
    }
    setVariables(matches);
  }, [currText]);

  useEffect(() => {
    // Auto-resize textarea based on content
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const rows = Math.max(2, Math.min(6, currText.split('\n').length));

  return (
    <div className="rounded-xl shadow-md border border-gray-300 p-3 bg-yellow-50" style={{ minWidth: '200px' }}>
      <div className="font-semibold text-center mb-2 text-gray-800">Text</div>

      {/* Dynamic input handles for variables */}
      {variables.map((variable, index) => (
        <Handle
          key={`input-${variable}`}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: 30 + index * 20 }}
          className="w-3 h-3 bg-blue-500 border-2 border-white"
          title={variable}
        />
      ))}

      <div className="text-sm text-gray-700">
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Text:</label>
          <textarea 
            ref={textareaRef}
            value={currText} 
            onChange={handleTextChange}
            rows={rows}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
            placeholder="Type text... use {{variableName}}"
            style={{ minHeight: '60px' }}
          />
        </div>
        {variables.length > 0 && (
          <div className="mt-2 text-xs text-gray-500">
            Variables: {variables.join(', ')}
          </div>
        )}
      </div>

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ top: 30 }}
        className="w-3 h-3 bg-green-500 border-2 border-white"
      />
    </div>
  );
}
