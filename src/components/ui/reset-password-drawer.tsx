
// components/ResetPasswordDrawer.tsx
import { useState, forwardRef, InputHTMLAttributes, FormEvent } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"; // shadcn/ui Drawer
import { Button } from "@/components/ui/button"; // shadcn/ui Button
import { cn } from "@/lib/utils"; // shadcn utility for className merging
import { Lock } from "lucide-react";

// Custom Input Component
interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string; // Explicitly type error as string | undefined
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          className={cn(
            "w-full text-black px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
            error ? "border-red-500" : "border-gray-300",
            "disabled:bg-gray-100 disabled:cursor-not-allowed",
            className // Removed erroneous "Link"
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

// Custom Hook for Reset Password Logic
const useResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call (replace with your actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess("Password reset link sent to your email!");
      setEmail(""); // Reset form
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    isLoading,
    error,
    success,
    onSubmit,
  };
};

// Reset Password Drawer Component
export default function ResetPasswordDrawer() {
  const { email, setEmail, isLoading, error, success, onSubmit } = useResetPassword();

  return (
    <Drawer>
      <DrawerTrigger asChild>
       <div className="mt-6 text-center">
                <p
                  
                  className="flex items-center justify-center text-sm sm:text-base text-zinc-300 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Forgot Password?
                </p>
              </div>

      </DrawerTrigger>
      <DrawerContent className="p-6 max-w-md mx-auto">
        <DrawerHeader>
          <DrawerTitle>Reset Your Password</DrawerTitle>
          <DrawerDescription>
            Enter your email address to receive a password reset link.
          </DrawerDescription>
        </DrawerHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <CustomInput
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error ?? undefined} // Ensure error is string | undefined
            disabled={isLoading}
          />
          {success && <p className="text-sm text-green-500">{success}</p>}
          <DrawerFooter>
            <Button type="submit" disabled={isLoading} className="relative">
              {isLoading ? (
                <>
                  <span className="absolute left-2 top-1/2 -translate-y-1/2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </span>
                  Sending...
                </>
              ) : (
                "Send Reset Link"
              )}
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
