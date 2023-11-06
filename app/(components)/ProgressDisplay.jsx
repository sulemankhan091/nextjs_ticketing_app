const ProgressDisplay = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full  h-4">
      <div
        className="bg-blue-600 h-4 flex  items-baseline rounded-full"
        style={{ width: `${progress}%` }}
        title={`${progress}%`}
      >
        <p className="text-xs float-left">{progress}</p>
      </div>
    </div>
  );
};

export default ProgressDisplay;
