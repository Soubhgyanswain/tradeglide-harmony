import Header from "@/components/Header"

const Features = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8">Features</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Real-Time Trading</h3>
            <p className="text-gray-300">Access live market data and execute trades instantly with our advanced trading platform.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Advanced Analytics</h3>
            <p className="text-gray-300">Powerful technical analysis tools and indicators to help you make informed decisions.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Portfolio Management</h3>
            <p className="text-gray-300">Track and manage your investments with our comprehensive portfolio tools.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Market Research</h3>
            <p className="text-gray-300">Access in-depth market research and analysis from industry experts.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
            <p className="text-gray-300">Advanced tools to help you manage and minimize trading risks.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-300">Round-the-clock customer support to assist you with any questions or issues.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features