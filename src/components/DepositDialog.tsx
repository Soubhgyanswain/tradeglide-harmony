import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IndianRupee, Plus, CreditCard, QrCode } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const DepositDialog = () => {
  const [amount, setAmount] = useState("0")
  const { toast } = useToast()

  const handleQuickAmount = (value: string) => {
    setAmount(value)
  }

  const handleDeposit = () => {
    // Here you would integrate with your payment gateway
    toast({
      title: "Processing payment",
      description: `Initiating deposit for ₹${amount}`,
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-dark-lighter border-primary text-primary hover:bg-primary hover:text-white">
          <IndianRupee className="w-4 h-4 mr-2" />
          Deposit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-dark-lighter text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Add Money
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="deposit" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-dark">
            <TabsTrigger value="deposit" className="data-[state=active]:bg-primary">
              Deposit
            </TabsTrigger>
            <TabsTrigger value="withdraw" className="data-[state=active]:bg-primary">
              Withdraw
            </TabsTrigger>
          </TabsList>
          <TabsContent value="deposit">
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Enter Amount</label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-10 bg-dark border-gray-700"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 border-primary"
                  onClick={() => handleQuickAmount("100")}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  ₹100
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-primary"
                  onClick={() => handleQuickAmount("500")}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  ₹500
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-primary"
                  onClick={() => handleQuickAmount("1000")}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  ₹1000
                </Button>
              </div>
              <div className="space-y-4">
                <div className="bg-dark p-4 rounded-lg cursor-pointer hover:bg-dark/70 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <QrCode className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium">UPI Payment</p>
                      <p className="text-sm text-gray-400">Pay using any UPI app</p>
                    </div>
                  </div>
                </div>
                <div className="bg-dark p-4 rounded-lg cursor-pointer hover:bg-dark/70 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium">Card Payment</p>
                      <p className="text-sm text-gray-400">Credit/Debit Card</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleDeposit}>
                Add Money
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="withdraw">
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Withdraw Amount</label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-10 bg-dark border-gray-700"
                  />
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleDeposit}>
                Withdraw
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

export default DepositDialog