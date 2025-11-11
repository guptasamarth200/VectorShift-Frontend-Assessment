import NodeBase from './NodeBase';

export const LLMNode = ({ id, data }) => {
  return (
    <NodeBase
      id={id}
      title="LLM"
      color="bg-purple-50"
      inputs={['system', 'prompt']}
      outputs={['response']}
    >
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Large Language Model
        </p>
        <p className="text-xs text-gray-400 mt-1">
          GPT-4
        </p>
      </div>
    </NodeBase>
  );
}
