import Header from "@/components/Header"
import { Button } from "@/components/ui/button"

const Pricing = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8">Pricing Plans</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors border border-gray-700">
            <h3 className="text-2xl font-semibold mb-2">Basic</h3>
            <div className="text-3xl font-bold mb-4">$29<span className="text-lg font-normal">/month</span></div>
            <ul className="space-y-3 mb-6">
              <li>Basic market data</li>
              <li>5 trades per day</li>
              <li>Basic analytics</li>
              <li>Email support</li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
          
          <div className="p-6 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors border border-primary">
            <h3 className="text-2xl font-semibold mb-2">Pro</h3>
            <div className="text-3xl font-bold mb-4">$99<span className="text-lg font-normal">/month</span></div>
            <ul className="space-y-3 mb-6">
              <li>Real-time market data</li>
              <li>Unlimited trades</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
              <li>Portfolio management</li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors border border-gray-700">
            <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-4">$299<span className="text-lg font-normal">/month</span></div>
            <ul className="space-y-3 mb-6">
              <li>Everything in Pro</li>
              <li>Custom solutions</li>
              <li>API access</li>
              <li>Dedicated support</li>
              <li>Custom integrations</li>
            </ul>
            <Button className="w-full">Contact Sales</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing