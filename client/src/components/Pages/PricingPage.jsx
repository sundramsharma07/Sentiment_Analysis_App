export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Pricing</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Free */}
        <div className="border rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Free</h2>
          <p className="text-3xl font-extrabold mb-6">₹0</p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>✔ Basic sentiment analysis</li>
            <li>✔ Limited uploads</li>
          </ul>
          <button className="w-full py-2 border rounded-lg">
            Get Started
          </button>
        </div>

        {/* Pro */}
        <div className="border-2 border-blue-600 rounded-xl p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Pro</h2>
          <p className="text-3xl font-extrabold mb-6">₹999</p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>✔ Real-time analysis</li>
            <li>✔ Unlimited uploads</li>
            <li>✔ Dashboard analytics</li>
          </ul>
          <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Buy Pro
          </button>
        </div>

        {/* Enterprise */}
        <div className="border rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
          <p className="text-3xl font-extrabold mb-6">Custom</p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>✔ Custom AI models</li>
            <li>✔ API access</li>
            <li>✔ Priority support</li>
          </ul>
          <button className="w-full py-2 border rounded-lg">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
