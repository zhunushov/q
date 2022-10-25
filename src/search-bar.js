export default function SearchComponent({ val, setVal, onClick, disabled }) {
  return (
    <div className="flex items-center justify-center sticky top-20">
      <div className="flex  rounded">
        <input
          onFocus={() => {
            window.navigator.clipboard.readText().then((text) => {
              setVal(text.trim());
            });
          }}
          value={val}
          onChange={({ target: { value } }) => setVal(value)}
          type="text"
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Enter your code..."
        />
        <button
          disabled={disabled}
          onClick={onClick}
          className={`px-4 ml-1 text-white  border-l rounded ${
            disabled ? "bg-slate-400" : "bg-purple-600"
          }`}>
          submit
        </button>
      </div>
    </div>
  );
}
