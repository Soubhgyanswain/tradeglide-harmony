import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ProfileMenu from "@/components/ProfileMenu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const Dashboard = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate("/")
    } else {
      setIsLoggedIn(true)
    }
  }, [navigate])

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className="min-h-screen bg-dark text-white">
      <header className="bg-dark-lighter">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">AlgoTrade</h1>
          <div className="flex items-center gap-4">
            <ProfileMenu />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Trading Dashboard</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search strategies..."
                className="pl-10 bg-dark-lighter border-gray-700"
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              New Strategy
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Strategy Cards */}
          <div className="bg-dark-lighter p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Moving Average Crossover</h3>
            <p className="text-gray-400 mb-4">
              A trend-following strategy that uses two moving averages to generate trading signals.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-green-500">Active</span>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View Details
              </Button>
            </div>
          </div>

          <div className="bg-dark-lighter p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">RSI Strategy</h3>
            <p className="text-gray-400 mb-4">
              Uses the Relative Strength Index to identify overbought and oversold conditions.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500">Paused</span>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View Details
              </Button>
            </div>
          </div>

          <div className="bg-dark-lighter p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Bollinger Bands</h3>
            <p className="text-gray-400 mb-4">
              Trading strategy based on Bollinger Bands indicators for volatility.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-red-500">Stopped</span>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard