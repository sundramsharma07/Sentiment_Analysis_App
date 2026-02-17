export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-8">Sentiment Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-green-100 rounded-xl">
          <h3 className="font-semibold">Positive</h3>
          <p className="text-3xl font-bold mt-2">72%</p>
        </div>

        <div className="p-6 bg-yellow-100 rounded-xl">
          <h3 className="font-semibold">Neutral</h3>
          <p className="text-3xl font-bold mt-2">18%</p>
        </div>

        <div className="p-6 bg-red-100 rounded-xl">
          <h3 className="font-semibold">Negative</h3>
          <p className="text-3xl font-bold mt-2">10%</p>
        </div>
      </div>
    </div>
  );
}
