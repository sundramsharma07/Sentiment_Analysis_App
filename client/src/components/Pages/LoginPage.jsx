import { SignIn } from "@clerk/clerk-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <SignIn 
        redirectUrl="/dashboard"
        appearance={{
          elements: {
            card: "rounded-xl shadow-lg",
          },
        }}
      />
    </div>
  );
}