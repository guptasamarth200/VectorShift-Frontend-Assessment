import React from "react";
import { Handle, Position } from "reactflow";

const NodeBase = ({ id, title, color = "bg-white", inputs = [], outputs = [], children }) => {
  return (
    <div className={`rounded-xl shadow-md border border-gray-300 p-3 w-56 ${color}`}>
      <div className="font-semibold text-center mb-2 text-gray-800">{title}</div>

      {inputs.map((inp, i) => (
        <Handle
          key={i}
          type="target"
          position={Position.Left}
          id={`${id}-${inp}`}
          style={{ top: 30 + i * 20 }}
          className="w-3 h-3 bg-blue-500 border-2 border-white"
        />
      ))}

      <div className="text-sm text-gray-700">{children}</div>

      {outputs.map((out, i) => (
        <Handle
          key={i}
          type="source"
          position={Position.Right}
          id={`${id}-${out}`}
          style={{ top: 30 + i * 20 }}
          className="w-3 h-3 bg-green-500 border-2 border-white"
        />
      ))}
    </div>
  );
};

export default NodeBase;
