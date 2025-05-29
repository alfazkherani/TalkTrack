import Image from "next/image";
import { WelcomeHeader } from "@/components/auth/WelcomeHeader";
import { SocialLoginButtons } from "@/components/auth/SocialLoginButtons";
import { LoginForm } from "@/components/auth/LoginForm";
import { getString } from "@/utils/strings";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="flex w-full max-w-4xl">
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8">
          <div className="relative w-full max-w-md">
            <div className="absolute top-0 left-0 w-32 h-32 bg-pink-200 rounded-full -z-10 transform -translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200 rounded-full -z-10 transform translate-x-1/4 translate-y-1/4"></div>
            <Image
              src="/resources/talktrack-logo.png"
              alt={getString("auth.altText.logo")}
              width={400}
              height={300}
              className="w-full h-auto relative z-10"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
          <div className="max-w-md mx-auto">
            <WelcomeHeader />
            <SocialLoginButtons />

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  {getString("auth.login.or")}
                </span>
              </div>
            </div>

            <LoginForm />

            <p className="mt-6 text-center text-sm text-gray-600">
              {getString("auth.login.noAccount")}{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {getString("auth.login.register")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
