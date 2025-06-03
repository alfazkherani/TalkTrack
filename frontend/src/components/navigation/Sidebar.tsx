import {
  FiFolder,
  FiPieChart,
  FiSearch,
  FiUsers,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { SidebarItem } from "./SidebarItem";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";

interface NavigationItem {
  title: string;
  icon: IconType;
  href: string;
}

const mainNavigationItems: NavigationItem[] = [
  {
    title: "My Conversations",
    icon: FiFolder,
    href: "/dashboard",
  },
  {
    title: "Insights",
    icon: FiPieChart,
    href: "/insights",
  },
  {
    title: "Smart Search",
    icon: FiSearch,
    href: "/search",
  },
  {
    title: "Teams",
    icon: FiUsers,
    href: "/teams",
  },
];

interface SidebarProps {
  appName: string;
}

export function Sidebar({ appName }: SidebarProps) {
  const router = useRouter();
  const [showLogout, setShowLogout] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      // Clear any client-side data
      localStorage.removeItem("user-preferences");
      sessionStorage.clear();

      // Sign out and redirect to login
      await signOut({
        callbackUrl: "/login",
      });
    } catch (error) {
      console.error("Failed to logout:", error);
      setIsLoggingOut(false);
      router.push("/login");
    }
  };

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col h-screen">
      {/* Main content */}
      <div className="p-6 flex-grow">
        <h2 className="text-xl font-bold mb-6">{appName}</h2>
        <nav className="space-y-1">
          {mainNavigationItems.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              title={item.title}
              href={item.href}
            />
          ))}
        </nav>
      </div>

      {/* Settings and Logout section */}
      <div className="p-6 border-t border-gray-100">
        <div
          className="relative settings-logout-container"
          onMouseEnter={() => !isLoggingOut && setShowLogout(true)}
          onMouseLeave={() => setShowLogout(false)}
        >
          <SidebarItem icon={FiSettings} title="Settings" href="/settings" />
          <div
            className={`absolute bottom-full left-0 w-full transition-all duration-200 ${
              showLogout ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="w-full mb-1 flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiLogOut className="w-5 h-5" />
              <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
