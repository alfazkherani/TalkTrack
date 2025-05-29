import Image from "next/image";
import { getString } from "@/utils/strings";

export const LoginForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <div className="relative">
          <input
            type="email"
            placeholder={getString("auth.login.email.placeholder")}
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
            required
          />
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Image
              src="/resources/email-icon.svg"
              alt={getString("auth.login.email.label")}
              width={20}
              height={20}
              className="h-5 w-5 text-gray-400"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <input
            type="password"
            placeholder={getString("auth.login.password.placeholder")}
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
            required
          />
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Image
              src="/resources/password-icon.svg"
              alt={getString("auth.login.password.label")}
              width={20}
              height={20}
              className="h-5 w-5 text-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-700"
          >
            {getString("auth.login.rememberMe")}
          </label>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          {getString("auth.login.forgotPassword")}
        </a>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
      >
        {getString("auth.login.submit")}
      </button>
    </form>
  );
};
