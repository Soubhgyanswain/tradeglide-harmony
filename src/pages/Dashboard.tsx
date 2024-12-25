import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ProfileMenu from "@/components/ProfileMenu"

const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Add authentication check here
    // If not authenticated, redirect to home
    // This is a placeholder for now
  }, [navigate])

  return (
    <div className="min-h-screen bg-dark">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">AlgoTrade</h1>
          <div className="flex items-center gap-4">
            <ProfileMenu />
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="bg-dark-lighter rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
              {/* Add chart components here */}
            </div>
          </div>
          <div>
            <div className="bg-dark-lighter rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Watchlist</h2>
              {/* Add watchlist components here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard