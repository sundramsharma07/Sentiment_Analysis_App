export default function Input({ label, ...props }) {
  return (
    <div className="space-y-1">
      {label && <label className="text-sm text-gray-600">{label}</label>}
      <input
        {...props}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
