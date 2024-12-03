const DealsForm: React.FC = () => (
  <form>
    <h2 className="text-xl font-bold mb-4">Deals Form</h2>
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">Deal Name</label>
      <input
        type="text"
        placeholder="Enter deal name"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
      Submit
    </button>
  </form>
);

export default DealsForm;
