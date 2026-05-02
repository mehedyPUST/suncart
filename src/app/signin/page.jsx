// "use client";
// import { authClient } from "@/lib/auth-client";
// import { Check } from "@gravity-ui/icons";
// import {
//     Button,
//     Card,
//     Description,
//     FieldError,
//     Form,
//     Input,
//     Label,
//     TextField,
// } from "@heroui/react";
// import { useRouter } from "next/navigation";
// import { GrGoogle } from "react-icons/gr";

// export default function SignInPage() {

//     const router = useRouter()

//     const onSubmit = async (e) => {
//         e.preventDefault();


//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         // console.log(name, image, email, password)
//         const { data, error } = await authClient.signIn.email({

//             email,
//             password,
//             callbackURL: "/",
//         });


//         // console.log({ data, error })

//         if (!error) {
//             router.push('/')
//         }

//     };

//     const handleGoogleSignIn = async () => {
//         await authClient.signIn.social({
//             provider: "google"
//         })
//     }

//     return (
//         <Card className="border mx-auto w-125 py-10 mt-5">
//             <h1 className="text-center text-2xl font-bold">Log In</h1>

//             <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>


//                 <TextField
//                     isRequired
//                     name="email"
//                     type="email"
//                     validate={(value) => {
//                         if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//                             return "Please enter a valid email address";
//                         }

//                         return null;
//                     }}
//                 >
//                     <Label>Email</Label>
//                     <Input placeholder="john@example.com" />
//                     <FieldError />
//                 </TextField>

//                 <TextField
//                     isRequired
//                     minLength={8}
//                     name="password"
//                     type="password"
//                     validate={(value) => {
//                         if (value.length < 8) {
//                             return "Password must be at least 8 characters";
//                         }
//                         if (!/[A-Z]/.test(value)) {
//                             return "Password must contain at least one uppercase letter";
//                         }
//                         if (!/[0-9]/.test(value)) {
//                             return "Password must contain at least one number";
//                         }

//                         return null;
//                     }}
//                 >
//                     <Label>Password</Label>
//                     <Input placeholder="Enter your password" />
//                     <Description>
//                         Must be at least 8 characters with 1 uppercase and 1 number
//                     </Description>
//                     <FieldError />
//                 </TextField>

//                 <div className="flex gap-2">
//                     <Button type="submit">
//                         <Check />
//                         Log In
//                     </Button>
//                     <Button type="reset" variant="secondary">
//                         Reset
//                     </Button>
//                 </div>
//             </Form>

//             <p className="text-center">Or</p>
//             <Button onClick={handleGoogleSignIn} className={'w-full'}>
//                 <GrGoogle />  Sign In with Google
//             </Button>
//         </Card>
//     );
// }

"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { MdEmail, MdLock } from "react-icons/md";

export default function SignInPage() {
    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        if (!error) {
            router.push('/')
        }
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google"
        })
    }

    return (
        <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <span>🔐</span>
                        <span>Welcome Back</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-4">
                        Sign In
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto rounded-full"></div>
                    <p className="text-gray-500 mt-4">
                        Access your account and continue shopping
                    </p>
                </div>

                {/* Sign In Card */}
                <div className="flex justify-center items-center">
                    <Card className="w-full max-w-md border border-amber-100 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                        <div className="p-6 md:p-8">
                            <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
                                {/* Email Field */}
                                <TextField
                                    isRequired
                                    name="email"
                                    type="email"
                                    validate={(value) => {
                                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                            return "Please enter a valid email address";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label className="text-gray-700 font-semibold">Email</Label>
                                    <div className="relative">
                                        <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <Input
                                            placeholder="john@example.com"
                                            className="pl-10 border-amber-100 focus:border-amber-400"
                                        />
                                    </div>
                                    <FieldError />
                                </TextField>

                                {/* Password Field */}
                                <TextField
                                    isRequired
                                    minLength={8}
                                    name="password"
                                    type="password"
                                    validate={(value) => {
                                        if (value.length < 8) {
                                            return "Password must be at least 8 characters";
                                        }
                                        if (!/[A-Z]/.test(value)) {
                                            return "Password must contain at least one uppercase letter";
                                        }
                                        if (!/[0-9]/.test(value)) {
                                            return "Password must contain at least one number";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label className="text-gray-700 font-semibold">Password</Label>
                                    <div className="relative">
                                        <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <Input
                                            placeholder="Enter your password"
                                            className="pl-10 border-amber-100 focus:border-amber-400"
                                        />
                                    </div>
                                    <Description className="text-gray-400">
                                        Must be at least 8 characters with 1 uppercase and 1 number
                                    </Description>
                                    <FieldError />
                                </TextField>

                                {/* Forgot Password Link */}
                                <div className="text-right">
                                    <Link href="/forgot-password" className="text-sm text-amber-600 hover:text-amber-700 hover:underline transition-colors">
                                        Forgot password?
                                    </Link>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-2">
                                    <Button
                                        type="submit"
                                        className="flex-1 bg-gradient-to-r from-amber-600 to-orange-500 text-white font-semibold hover:from-amber-700 hover:to-orange-600 transition-all hover:scale-105 shadow-md"
                                    >
                                        <Check size={18} />
                                        Sign In
                                    </Button>
                                    <Button
                                        type="reset"
                                        variant="flat"
                                        className="border border-amber-200 text-gray-600 hover:bg-amber-50"
                                    >
                                        Reset
                                    </Button>
                                </div>
                            </Form>

                            {/* Divider */}
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-amber-100"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-400">Or continue with</span>
                                </div>
                            </div>

                            {/* Google Sign In Button */}
                            <Button
                                onClick={handleGoogleSignIn}
                                className="w-full border border-amber-200 bg-white text-gray-700 font-semibold hover:bg-amber-50 hover:border-amber-300 transition-all duration-300"
                            >
                                <GrGoogle className="text-red-500" />
                                Sign In with Google
                            </Button>

                            {/* Sign Up Link */}
                            <p className="text-center text-sm text-gray-600 mt-6">
                                Don't have an account?{' '}
                                <Link href="/signup" className="text-amber-600 font-semibold hover:text-amber-700 hover:underline transition-colors">
                                    Create an account
                                </Link>
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}