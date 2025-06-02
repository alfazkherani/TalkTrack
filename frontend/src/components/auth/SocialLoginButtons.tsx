"use client";

import Image from "next/image";
import { getString } from "@/utils/strings";
import { googleSignIn } from "@/utils/auth";

export const SocialLoginButtons = () => {
  const handleGoogleSignIn = async () => {
    await googleSignIn();
  };

  return (
    <div className="space-y-4 mb-6">
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <div className="relative w-5 h-5">
          <Image
            src="/resources/google-icon.svg"
            alt={getString("auth.altText.googleIcon")}
            fill
            priority
            sizes="20px"
            className="object-contain"
          />
        </div>
        <span className="text-gray-700">
          {getString("auth.socialLogin.google")}
        </span>
      </button>
    </div>
  );
};
