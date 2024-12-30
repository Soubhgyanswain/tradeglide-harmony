import Header from "@/components/Header"

const Learn = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8">Learning Center</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Trading Basics</h3>
            <p className="text-gray-300 mb-4">Learn the fundamentals of trading and market analysis.</p>
            <a href="#" className="text-primary hover:underline">Start Learning →</a>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Technical Analysis</h3>
            <p className="text-gray-300 mb-4">Master chart patterns and technical indicators.</p>
            <a href="#" className="text-primary hover:underline">Start Learning →</a>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
            <p className="text-gray-300 mb-4">Learn how to protect your investments and minimize losses.</p>
            <a href="#" className="text-primary hover:underline">Start Learning →</a>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Video Tutorials</h3>
            <p className="text-gray-300 mb-4">Watch step-by-step guides on using our platform.</p>
            <a href="#" className="text-primary hover:underline">Watch Now →</a>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Market Research</h3>
            <p className="text-gray-300 mb-4">Learn how to conduct thorough market research.</p>
            <a href="#" className="text-primary hover:underline">Start Learning →</a>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Trading Strategies</h3>
            <p className="text-gray-300 mb-4">Explore different trading strategies and methodologies.</p>
            <a href="#" className="text-primary hover:underline">Start Learning →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn