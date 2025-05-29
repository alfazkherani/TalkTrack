export const strings = {
  auth: {
    welcome: {
      title: "Welcome back",
    },
    login: {
      title: "Login",
      email: {
        placeholder: "example@gmail.com",
        label: "Email",
      },
      password: {
        placeholder: "••••••••••",
        label: "Password",
        toggle: "Toggle password visibility",
      },
      rememberMe: "Remember me",
      forgotPassword: "Forgot Password?",
      submit: "Login",
      noAccount: "Don't have an account?",
      register: "Register",
      or: "OR",
    },
    socialLogin: {
      google: "Login with Google",
      github: "Login with GitHub",
    },
    altText: {
      logo: "TalkTrack logo",
      userIcon: "User Icon",
      googleIcon: "Google",
      githubIcon: "GitHub",
    },
  },
} as const;

// Type for accessing nested strings with dot notation
type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}.${NestedKeyOf<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never;

export type StringKey = NestedKeyOf<typeof strings>;
