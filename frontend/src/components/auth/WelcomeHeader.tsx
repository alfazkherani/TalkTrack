import Image from "next/image";
import { getString } from "@/utils/strings";

export const WelcomeHeader = () => {
  return (
    <div className="flex items-center justify-center space-x-3 mb-8">
      <Image
        src="/resources/user.png"
        alt={getString("auth.altText.userIcon")}
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
      <h1 className="text-2xl font-medium text-gray-900">
        {getString("auth.welcome.title")}
      </h1>
    </div>
  );
};
