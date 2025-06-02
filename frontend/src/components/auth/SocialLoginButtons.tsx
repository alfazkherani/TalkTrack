"use client";

import { getString } from "@/utils/strings";
import { googleSignIn } from "@/utils/auth";
import { GoogleIcon } from "@/statics/icons/google";

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
        <div className="w-5 h-5 flex items-center justify-center">
          <GoogleIcon />
        </div>
        <span className="text-gray-700">
          {getString("auth.socialLogin.google")}
        </span>
      </button>
    </div>
  );
};
