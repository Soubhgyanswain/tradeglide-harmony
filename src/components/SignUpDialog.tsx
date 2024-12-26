import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import { useNavigate } from "react-router-dom"

const SignUpDialog = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    countryCode: "+1",
    password: "",
    confirmPassword: "",
  })
  const [isRegistered, setIsRegistered] = useState(false)
  const { toast } = useToast()
  const navigate = useNavigate()

  // Check if user is already registered
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail")
    if (userEmail) {
      setIsRegistered(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords do not match",
        description: "Please ensure both passwords are identical",
      })
      return
    }

    // Store user data in localStorage
    localStorage.setItem("userEmail", formData.email)
    localStorage.setItem("userFullName", formData.fullName)
    setIsRegistered(true)

    toast({
      title: "Account created successfully!",
      description: "Welcome to AlgoTrade",
    })

    // Navigate to dashboard after successful signup
    navigate("/dashboard")
  }

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically validate credentials
    // For demo purposes, we'll just check if email exists
    const storedEmail = localStorage.getItem("userEmail")
    if (storedEmail === formData.email) {
      toast({
        title: "Signed in successfully!",
        description: "Welcome back to AlgoTrade",
      })
      navigate("/dashboard")
    } else {
      toast({
        variant: "destructive",
        title: "Invalid credentials",
        description: "Please check your email and password",
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-primary text-white hover:bg-primary/90">
          {isRegistered ? "Sign In" : "Sign Up"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-dark-lighter text-white max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {isRegistered ? "Welcome Back" : "Create Account"}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <form onSubmit={isRegistered ? handleSignIn : handleSubmit} className="space-y-4 mt-4">
            {!isRegistered && (
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-dark border-gray-700"
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-dark border-gray-700"
              />
            </div>
            {!isRegistered && (
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="w-24 rounded-md border border-gray-700 bg-dark px-3 py-2 text-sm"
                  >
                    <option value="+1">US +1</option>
                    <option value="+44">UK +44</option>
                    <option value="+91">IN +91</option>
                    <option value="+86">CN +86</option>
                    <option value="+81">JP +81</option>
                  </select>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="bg-dark border-gray-700"
                    placeholder="Phone number"
                  />
                </div>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="bg-dark border-gray-700"
              />
            </div>
            {!isRegistered && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="bg-dark border-gray-700"
                />
              </div>
            )}
            <Button type="submit" className="w-full">
              {isRegistered ? "Sign In" : "Create Account"}
            </Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default SignUpDialog