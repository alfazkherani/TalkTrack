import Image from "next/image";
import { getString } from "@/utils/strings";

export const SocialLoginButtons = () => {
  return (
    <div className="space-y-4 mb-6">
      <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        <Image
          src="/resources/google-icon.svg"
          alt={getString("auth.altText.googleIcon")}
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <span className="text-gray-700">
          {getString("auth.socialLogin.google")}
        </span>
      </button>
      <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        <Image
          src="/resources/github-icon.svg"
          alt={getString("auth.altText.githubIcon")}
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <span className="text-gray-700">
          {getString("auth.socialLogin.github")}
        </span>
      </button>
    </div>
  );
};
