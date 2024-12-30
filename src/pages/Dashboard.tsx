import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import ProfileMenu from "@/components/ProfileMenu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// TradingView Widget Component
const TradingViewWidget = ({ symbol = "NASDAQ:AAPL" }) => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/tv.js"
    script.async = true
    script.onload = () => {
      // @ts-ignore - TradingView is loaded globally
      if (typeof TradingView !== 'undefined') {
        // @ts-ignore - TradingView is loaded globally
        new TradingView.widget({
          width: "100%",
          height: 600,
          symbol: symbol,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_chart"
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [symbol])

  return (
    <div id="tradingview_chart" className="w-full h-[600px] rounded-lg overflow-hidden" />
  )
}

const Dashboard = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [searchSymbol, setSearchSymbol] = useState("")
  const [currentSymbol, setCurrentSymbol] = useState("NASDAQ:AAPL")

  useEffect(() => {
    // Add authentication check here
    const isAuthenticated = localStorage.getItem("userEmail")
    if (!isAuthenticated) {
      navigate("/")
    }
  }, [navigate])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchSymbol) {
      toast({
        title: "Please enter a stock symbol",
        description: "For example: NASDAQ:AAPL, NYSE:GME",
        variant: "destructive"
      })
      return
    }
    
    // Format the symbol for TradingView
    const formattedSymbol = searchSymbol.includes(":") 
      ? searchSymbol.toUpperCase() 
      : `NASDAQ:${searchSymbol.toUpperCase()}`
    
    setCurrentSymbol(formattedSymbol)
    toast({
      title: "Chart Updated",
      description: `Showing chart for ${formattedSymbol}`
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AlgoTrade
            </Link>
            <nav className="hidden md:flex items-center space-x-4">
              <Link to="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <Link to="/learn" className="text-gray-300 hover:text-white transition-colors">Learn</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ProfileMenu />
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-2 max-w-xl">
            <Input
              type="text"
              placeholder="Enter stock symbol (e.g., AAPL, GOOGL)"
              value={searchSymbol}
              onChange={(e) => setSearchSymbol(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-card rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Market Chart</h2>
            <TradingViewWidget symbol={currentSymbol} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard