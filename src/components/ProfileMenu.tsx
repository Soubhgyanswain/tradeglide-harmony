import { useState } from "react"
import {
  Settings,
  CreditCard,
  Users,
  HelpCircle,
  Bell,
  Sun,
  Globe,
  LogOut
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { useNavigate } from "react-router-dom"

const ProfileMenu = ({ userInitials = "S" }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const navigate = useNavigate()

  const handleSignOut = () => {
    // Add sign out logic here
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
        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
          <Settings size={16} />
          Profile Settings
        </DropdownMenuItem>
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
          <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">11</span>
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
            onCheckedChange={setIsDarkTheme}
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