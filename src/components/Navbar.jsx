// "use client";
// import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from "@heroui/react";
// // import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//     const userData = authClient.useSession();
//     const user = userData.data?.user;

//     const handleSignOut = async () => {
//         await authClient.signOut();
//     }

//     return (
//         <div className="border-b sticky top-0 z-50 bg-white">
//             <nav className="flex justify-between items-center py-3 w-11/12 mx-auto">
//                 <div className="flex gap-2 items-center">
//                     <h3 className="font-black text-lg">SunCart</h3>
//                 </div>

//                 <ul className="flex items-center gap-5 text-sm">
//                     <li>
//                         <Link href={"/"}>Home</Link>
//                     </li>
//                     <li>
//                         <Link href={"/all-products"}>Products</Link>
//                     </li>
//                     <li>
//                         <Link href={"/profile"}>Profile</Link>
//                     </li>
//                 </ul>

//                 <div className="flex gap-4">
//                     {!user && (
//                         <ul className="flex items-center text-sm gap-5">
//                             <li>
//                                 <Link href={"/signup"}>Register</Link>
//                             </li>
//                             <li>
//                                 <Link href={"/signin"}>Login</Link>
//                             </li>
//                         </ul>
//                     )}

//                     {user && (
//                         <div className="flex gap-3">
//                             <Avatar size="sm">
//                                 <Avatar.Image
//                                     alt="John Doe"
//                                     src={user?.image}
//                                     referrerPolicy="no-referrer"
//                                 />
//                                 <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
//                             </Avatar>

//                             <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
//                         </div>
//                     )}
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;



"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const pathname = usePathname();

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    // Helper function to check if link is active
    const isActive = (path) => {
        return pathname === path;
    }

    return (
        <div className="border-b sticky top-0 z-50 bg-white">
            <nav className="flex justify-between items-center py-3 w-11/12 mx-auto">
                <div className="flex gap-2 items-center">
                    <Link href={"/"}>
                        <h3 className="font-black text-lg hover:text-blue-600 transition-colors">SunCart</h3>
                    </Link>
                </div>

                <ul className="flex items-center gap-5 text-sm">
                    <li>
                        <Link
                            href={"/"}
                            className={`relative transition-colors ${isActive('/')
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-600 hover:text-blue-600'
                                }`}
                        >
                            Home
                            {isActive('/') && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/all-products"}
                            className={`relative transition-colors ${isActive('/all-products')
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-600 hover:text-blue-600'
                                }`}
                        >
                            Products
                            {isActive('/all-products') && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/profile"}
                            className={`relative transition-colors ${isActive('/profile')
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-600 hover:text-blue-600'
                                }`}
                        >
                            Profile
                            {isActive('/profile') && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                            )}
                        </Link>
                    </li>
                </ul>

                <div className="flex gap-4">
                    {!user && (
                        <ul className="flex items-center text-sm gap-5">
                            <li>
                                <Link
                                    href={"/signup"}
                                    className={`relative transition-colors ${isActive('/signup')
                                            ? 'text-blue-600 font-semibold'
                                            : 'text-gray-600 hover:text-blue-600'
                                        }`}
                                >
                                    Register
                                    {isActive('/signup') && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/signin"}
                                    className={`relative transition-colors ${isActive('/signin')
                                            ? 'text-blue-600 font-semibold'
                                            : 'text-gray-600 hover:text-blue-600'
                                        }`}
                                >
                                    Login
                                    {isActive('/signin') && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                                    )}
                                </Link>
                            </li>
                        </ul>
                    )}

                    {user && (
                        <div className="flex gap-3 items-center">
                            <div className="relative">
                                <Avatar size="sm">
                                    <Avatar.Image
                                        alt={user?.name || "User"}
                                        src={user?.image}
                                        referrerPolicy="no-referrer"
                                    />
                                    <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
                                </Avatar>
                                {/* Online indicator */}
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                            </div>
                            <Button onClick={handleSignOut} size="sm" variant="light" color="danger">
                                Sign Out
                            </Button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;