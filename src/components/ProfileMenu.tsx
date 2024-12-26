import { useState, useEffect } from "react"
import {
  Settings,
  CreditCard,
  Users,
  HelpCircle,
  Bell,
  Sun,
  Globe,
  LogOut,
  User,
  Lock,
  Mail,
  Phone,
  Shield,
  Key,
  Image,
  MapPin
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"

const ProfileMenu = ({ userInitials = "S" }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const navigate = useNavigate()
  const { toast } = useToast()

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setIsDarkTheme(isDark)
  }, [])

  const handleThemeChange = (checked: boolean) => {
    setIsDarkTheme(checked)
    if (checked) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const handleSignOut = () => {
    navigate("/")
  }

  const handleEditPersonalInfo = () => {
    console.log("Opening personal info editor")
    toast({
      title: "Edit Personal Info",
      description: "Opening personal information editor...",
    })
  }

  const handleChangeProfilePicture = () => {
    console.log("Opening profile picture upload")
    toast({
      title: "Change Profile Picture",
      description: "Opening profile picture upload dialog...",
    })
  }

  const handleUpdateEmail = () => {
    console.log("Opening email update form")
    toast({
      title: "Update Email",
      description: "Opening email update form...",
    })
  }

  const handleUpdatePhone = () => {
    console.log("Opening phone update form")
    toast({
      title: "Update Phone Number",
      description: "Opening phone number update form...",
    })
  }

  const handleChangePassword = () => {
    console.log("Opening password change form")
    toast({
      title: "Change Password",
      description: "Opening password change form...",
    })
  }

  const handleUpdateAddress = () => {
    console.log("Opening address update form")
    toast({
      title: "Update Address",
      description: "Opening address update form...",
    })
  }

  const handleSecuritySettings = () => {
    console.log("Opening security settings")
    toast({
      title: "Security Settings",
      description: "Opening security settings panel...",
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar>
          <AvatarFallback className="bg-primary text-primary-foreground">
            {userInitials}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-dark-lighter text-white" align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-700" />
        
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex items-center gap-2 cursor-pointer">
            <Settings size={16} />
            Profile Settings
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="bg-dark-lighter text-white">
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={handleEditPersonalInfo}>
              <User size={16} />
              Edit Personal Info
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={handleChangeProfilePicture}>
              <Image size={16} />
              Change Profile Picture
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={handleUpdateEmail}>
              <Mail size={16} />
              Update Email
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={handleUpdatePhone}>
              <Phone size={16} />
              Update Phone Number
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={handleChangePassword}>
              <Key size={16} />
              Change Password
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={handleUpdateAddress}>
              <MapPin size={16} />
              Update Address
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={handleSecuritySettings}>
              <Shield size={16} />
              Security Settings
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
          <CreditCard size={16} />
          Account and Billing
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
          <Users size={16} />
          <span>Refer a friend</span>
          <span className="ml-auto">0 $</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
          <HelpCircle size={16} />
          Help Center
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
          <Bell size={16} />
          <span>Notifications</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
          What's new
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
          <Sun size={16} />
          <span>Dark theme</span>
          <Switch
            className="ml-auto"
            checked={isDarkTheme}
            onCheckedChange={handleThemeChange}
          />
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
          <Globe size={16} />
          <span>Language</span>
          <span className="ml-auto text-sm text-gray-400">English (India)</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-red-500" onClick={handleSignOut}>
          <LogOut size={16} />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileMenu