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

const ProfileMenu = ({ userInitials = "S" }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const navigate = useNavigate()

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
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <User size={16} />
              Edit Personal Info
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <Image size={16} />
              Change Profile Picture
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <Mail size={16} />
              Update Email
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <Phone size={16} />
              Update Phone Number
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <Key size={16} />
              Change Password
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <MapPin size={16} />
              Update Address
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
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