import { IconType } from "react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  icon: IconType;
  title: string;
  href: string;
}

export function SidebarItem({ icon: Icon, title, href }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
        isActive
          ? "text-blue-600 bg-blue-50"
          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{title}</span>
    </Link>
  );
}
