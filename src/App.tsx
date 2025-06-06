// components/AuthForm.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, Lock, Mail, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ResetPasswordDrawer from './components/ui/reset-password-drawer';

export default function AuthForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(''); // For Sign Up
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleGoogleAuth = async (e: React.FormEvent, isSignUp: boolean) => {
        e.preventDefault();
        console.log(isSignUp);

        if (!termsAccepted) {
            alert('Please accept the Terms and Conditions.');
            return;
        }
        setIsLoading(true);
        // Implement Google sign-in or sign-up logic here
        setTimeout(() => setIsLoading(false), 2000); // Simulated API call
    };

    const handleEmailSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert('Please accept the Terms and Conditions.');
            return;
        }
        setIsLoading(true);
        // Implement email sign-in logic here
        setTimeout(() => setIsLoading(false), 2000); // Simulated API call
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert('Please accept the Terms and Conditions.');
            return;
        }
        setIsLoading(true);
        // Implement sign-up logic here
        setTimeout(() => setIsLoading(false), 2000); // Simulated API call
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[90%] sm:max-w-[400px] md:max-w-[450px] mx-auto"
            >
                {/* Theme Toggle Button */}
                {/* Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="flex w-full max-w-[300px] bg-zinc-800/50 dark:bg-gray-700/50 rounded-full p-1">
                        <button
                            onClick={() => setActiveTab('signin')}
                            className={`flex-1 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ${
                                activeTab === 'signin'
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white'
                                    : 'text-zinc-400 dark:text-gray-400 hover:text-white dark:hover:text-gray-200'
                            }`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => setActiveTab('signup')}
                            className={`flex-1 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ${
                                activeTab === 'signup'
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white'
                                    : 'text-zinc-400 dark:text-gray-400 hover:text-white dark:hover:text-gray-200'
                            }`}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Form Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'signin' ? (
                        <motion.div
                            key="signin"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            {/* Sign In Header */}
                            <div className="text-center">
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-gray-100">
                                    Welcome Back
                                </h1>
                                <p className="mt-2 text-sm sm:text-base text-zinc-400 dark:text-gray-400">
                                    Sign in to continue your journey
                                </p>
                            </div>

                            {/* Google Sign-In */}
                            <form
                                onSubmit={e => handleGoogleAuth(e, false)}
                                className="space-y-4"
                            >
                                <Button
                                    variant="outline"
                                    className="w-full bg-transparent border-zinc-700 dark:border-gray-600 text-white dark:text-gray-200 hover:bg-zinc-800/50 dark:hover:bg-gray-700/50 py-6 text-sm sm:text-base transition-all duration-200"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    ) : (
                                        <svg
                                            className="mr-2 h-5 w-5"
                                            viewBox="0 0 48 48"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="#FFC107"
                                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                            />
                                            <path
                                                fill="#FF3D00"
                                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                            />
                                            <path
                                                fill="#4CAF50"
                                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                            />
                                            <path
                                                fill="#1976D2"
                                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                            />
                                        </svg>
                                    )}
                                    Sign in with Google
                                </Button>
                            </form>

                            {/* Enhanced Separator */}
                            <div className="relative my-6">
                                <Separator className="bg-gradient-to-r from-transparent via-zinc-700 dark:via-gray-600 to-transparent" />
                                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 dark:bg-gray-900 px-4 py-1 text-zinc-300 dark:text-gray-400 text-sm font-semibold uppercase rounded-full border border-zinc-700 dark:border-gray-600 shadow-sm">
                                    OR
                                </span>
                            </div>

                            {/* Email/Password Form */}
                            <form
                                onSubmit={handleEmailSignIn}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="email"
                                        className="text-white dark:text-gray-200 text-sm sm:text-base"
                                    >
                                        Email
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 dark:text-gray-500" />
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={e =>
                                                setEmail(e.target.value)
                                            }
                                            className="w-full pl-10 pr-4 py-3 bg-zinc-950/50 dark:bg-gray-900/50 border border-zinc-700 dark:border-gray-600 rounded-lg text-white dark:text-gray-200 placeholder:text-zinc-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400 text-sm sm:text-base transition-all duration-300"
                                            autoCapitalize="none"
                                            autoComplete="email"
                                            autoCorrect="off"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="password"
                                        className="text-white dark:text-gray-200 text-sm sm:text-base"
                                    >
                                        Password
                                    </Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 dark:text-gray-500" />
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={e =>
                                                setPassword(e.target.value)
                                            }
                                            className="w-full pl-10 pr-4 py-3 bg-zinc-950/50 dark:bg-gray-900/50 border border-zinc-700 dark:border-gray-600 rounded-lg text-white dark:text-gray-200 placeholder:text-zinc-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400 text-sm sm:text-base transition-all duration-300"
                                            autoComplete="current-password"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="terms"
                                        checked={termsAccepted}
                                        onCheckedChange={checked =>
                                            setTermsAccepted(checked as boolean)
                                        }
                                        className="border-zinc-700 dark:border-gray-600 data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-400 data-[state=checked]:border-blue-500 dark:data-[state=checked]:border-blue-400"
                                    />
                                    <Label
                                        htmlFor="terms"
                                        className="text-sm text-zinc-300 dark:text-gray-400"
                                    >
                                        I agree to the{' '}
                                        <a
                                            href="/terms"
                                            className="text-blue-500 dark:text-blue-400 hover:underline font-medium"
                                        >
                                            Terms and Conditions
                                        </a>
                                    </Label>
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-sm sm:text-base font-semibold py-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                                    disabled={isLoading || !termsAccepted}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Signing in...
                                        </>
                                    ) : (
                                        'Sign In'
                                    )}
                                </Button>
                            </form>

                            {/* Forgot Password Link */}
                            <ResetPasswordDrawer />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="signup"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            {/* Sign Up Header */}
                            <div className="text-center">
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-gray-100">
                                    Join Us
                                </h1>
                                <p className="mt-2 text-sm sm:text-base text-zinc-400 dark:text-gray-400">
                                    Create your account to get started
                                </p>
                            </div>

                            {/* Google Sign-Up */}
                            <form
                                onSubmit={e => handleGoogleAuth(e, true)}
                                className="space-y-4"
                            >
                                <Button
                                    variant="outline"
                                    className="w-full bg-transparent border-zinc-700 dark:border-gray-600 text-white dark:text-gray-200 hover:bg-zinc-800/50 dark:hover:bg-gray-700/50 py-6 text-sm sm:text-base transition-all duration-200"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    ) : (
                                        <svg
                                            className="mr-2 h-5 w-5"
                                            viewBox="0 0 48 48"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="#FFC107"
                                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                            />
                                            <path
                                                fill="#FF3D00"
                                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                            />
                                            <path
                                                fill="#4CAF50"
                                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                            />
                                            <path
                                                fill="#1976D2"
                                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                            />
                                        </svg>
                                    )}
                                    Sign up with Google
                                </Button>
                            </form>

                            {/* Enhanced Separator */}
                            <div className="relative my-6">
                                <Separator className="bg-gradient-to-r from-transparent via-zinc-700 dark:via-gray-600 to-transparent" />
                                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 dark:bg-gray-900 px-4 py-1 text-zinc-300 dark:text-gray-400 text-sm font-semibold uppercase rounded-full border border-zinc-700 dark:border-gray-600 shadow-sm">
                                    OR
                                </span>
                            </div>

                            {/* Sign Up Form */}
                            <form onSubmit={handleSignUp} className="space-y-4">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="username"
                                        className="text-white dark:text-gray-200 text-sm sm:text-base"
                                    >
                                        Username
                                    </Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 dark:text-gray-500" />
                                        <input
                                            id="username"
                                            type="text"
                                            placeholder="Your username"
                                            value={username}
                                            onChange={e =>
                                                setUsername(e.target.value)
                                            }
                                            className="w-full pl-10 pr-4 py-3 bg-zinc-950/50 dark:bg-gray-900/50 border border-zinc-700 dark:border-gray-600 rounded-lg text-white dark:text-gray-200 placeholder:text-zinc-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400 text-sm sm:text-base transition-all duration-300"
                                            autoCapitalize="none"
                                            autoComplete="username"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="email"
                                        className="text-white dark:text-gray-200 text-sm sm:text-base"
                                    >
                                        Email
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 dark:text-gray-500" />
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={e =>
                                                setEmail(e.target.value)
                                            }
                                            className="w-full pl-10 pr-4 py-3 bg-zinc-950/50 dark:bg-gray-900/50 border border-zinc-700 dark:border-gray-600 rounded-lg text-white dark:text-gray-200 placeholder:text-zinc-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400 text-sm sm:text-base transition-all duration-300"
                                            autoCapitalize="none"
                                            autoComplete="email"
                                            autoCorrect="off"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="password"
                                        className="text-white dark:text-gray-200 text-sm sm:text-base"
                                    >
                                        Password
                                    </Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 dark:text-gray-500" />
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={e =>
                                                setPassword(e.target.value)
                                            }
                                            className="w-full pl-10 pr-4 py-3 bg-zinc-950/50 dark:bg-gray-900/50 border border-zinc-700 dark:border-gray-600 rounded-lg text-white dark:text-gray-200 placeholder:text-zinc-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400 text-sm sm:text-base transition-all duration-300"
                                            autoComplete="new-password"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="password"
                                        className="text-white dark:text-gray-200 text-sm sm:text-base"
                                    >
                                        Confirm Password
                                    </Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 dark:text-gray-500" />
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            value={confirmPassword}
                                            onChange={e =>
                                                setConfirmPassword(
                                                    e.target.value
                                                )
                                            }
                                            className="w-full pl-10 pr-4 py-3 bg-zinc-950/50 dark:bg-gray-900/50 border border-zinc-700 dark:border-gray-600 rounded-lg text-white dark:text-gray-200 placeholder:text-zinc-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400 text-sm sm:text-base transition-all duration-300"
                                            autoComplete="new-password"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="terms"
                                        checked={termsAccepted}
                                        onCheckedChange={checked =>
                                            setTermsAccepted(checked as boolean)
                                        }
                                        className="border-zinc-700 dark:border-gray-600 data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-400 data-[state=checked]:border-blue-500 dark:data-[state=checked]:border-blue-400"
                                    />
                                    <Label
                                        htmlFor="terms"
                                        className="text-sm text-zinc-300 dark:text-gray-400"
                                    >
                                        I agree to the{' '}
                                        <a
                                            href="/terms"
                                            className="text-blue-500 dark:text-blue-400 hover:underline font-medium"
                                        >
                                            Terms and Conditions
                                        </a>
                                    </Label>
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-sm sm:text-base font-semibold py-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                                    disabled={isLoading || !termsAccepted}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Signing up...
                                        </>
                                    ) : (
                                        'Sign Up'
                                    )}
                                </Button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
