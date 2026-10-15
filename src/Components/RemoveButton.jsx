export const RemoveButton = ({ onRemove }) => {
  return (
      <button onClick={onRemove} className="flex items-center gap-2 
      font-nunito p-2 rounded-md
      hover:bg-[#F2F7EC] text-red-600 text-sm font-semibold self-end">
        <TrashIcon size={14}/>
        Remove plant
      </button>
  );
};
