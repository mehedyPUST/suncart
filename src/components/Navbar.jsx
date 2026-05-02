
// "use client";
// import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from "@heroui/react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//     const userData = authClient.useSession();
//     const user = userData.data?.user;
//     const pathname = usePathname();

//     const handleSignOut = async () => {
//         await authClient.signOut();
//     }

//     // Helper function to check if link is active
//     const isActive = (path) => {
//         return pathname === path;
//     }

//     return (
//         <div className="border-b sticky top-0 z-50 bg-white">
//             <nav className="flex justify-between items-center py-3 w-11/12 mx-auto">
//                 <div className="flex gap-2 items-center">
//                     <Link href={"/"}>
//                         <h3 className="font-black text-lg hover:text-blue-600 transition-colors">SunCart</h3>
//                     </Link>
//                 </div>

//                 <ul className="flex items-center gap-5 text-sm">
//                     <li>
//                         <Link
//                             href={"/"}
//                             className={`relative transition-colors ${isActive('/')
//                                 ? 'text-blue-600 font-semibold'
//                                 : 'text-gray-600 hover:text-blue-600'
//                                 }`}
//                         >
//                             Home
//                             {isActive('/') && (
//                                 <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
//                             )}
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             href={"/all-products"}
//                             className={`relative transition-colors ${isActive('/all-products')
//                                 ? 'text-blue-600 font-semibold'
//                                 : 'text-gray-600 hover:text-blue-600'
//                                 }`}
//                         >
//                             Products
//                             {isActive('/all-products') && (
//                                 <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
//                             )}
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             href={"/profile"}
//                             className={`relative transition-colors ${isActive('/profile')
//                                 ? 'text-blue-600 font-semibold'
//                                 : 'text-gray-600 hover:text-blue-600'
//                                 }`}
//                         >
//                             Profile
//                             {isActive('/profile') && (
//                                 <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
//                             )}
//                         </Link>
//                     </li>
//                 </ul>

//                 <div className="flex gap-4">
//                     {!user && (
//                         <ul className="flex items-center text-sm gap-5">
//                             <li>
//                                 <Link
//                                     href={"/signup"}
//                                     className={`relative transition-colors ${isActive('/signup')
//                                         ? 'text-blue-600 font-semibold'
//                                         : 'text-gray-600 hover:text-blue-600'
//                                         }`}
//                                 >
//                                     Register
//                                     {isActive('/signup') && (
//                                         <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
//                                     )}
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     href={"/signin"}
//                                     className={`relative transition-colors ${isActive('/signin')
//                                         ? 'text-blue-600 font-semibold'
//                                         : 'text-gray-600 hover:text-blue-600'
//                                         }`}
//                                 >
//                                     Login
//                                     {isActive('/signin') && (
//                                         <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
//                                     )}
//                                 </Link>
//                             </li>
//                         </ul>
//                     )}

//                     {user && (
//                         <div className="flex gap-3 items-center">
//                             <div className="relative">
//                                 <Avatar size="sm">
//                                     <Avatar.Image
//                                         alt={user?.name || "User"}
//                                         src={user?.image}
//                                         referrerPolicy="no-referrer"
//                                     />
//                                     <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
//                                 </Avatar>
//                                 {/* Online indicator */}
//                                 <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
//                             </div>
//                             <Button onClick={handleSignOut} size="sm" variant="light" color="danger">
//                                 Sign Out
//                             </Button>
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
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    // Helper function to check if link is active
    const isActive = (path) => {
        return pathname === path;
    }

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/all-products", label: "Products" },
        { href: "/profile", label: "Profile" },
    ];

    return (
        <div className="border-b sticky top-0 z-50 bg-white border-amber-100">
            <nav className="flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex gap-2 items-center">
                    <Link href={"/"}>
                        <h3 className="font-black text-lg bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent hover:from-amber-700 hover:to-orange-600 transition-all">
                            SunCart
                        </h3>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-5 text-sm">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`relative transition-colors ${isActive(link.href)
                                    ? 'text-amber-600 font-semibold'
                                    : 'text-gray-600 hover:text-amber-600'
                                    }`}
                            >
                                {link.label}
                                {isActive(link.href) && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full"></span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Auth Section */}
                <div className="hidden md:flex gap-4">
                    {!user && (
                        <ul className="flex items-center text-sm gap-5">
                            <li>
                                <Link
                                    href={"/signup"}
                                    className={`relative transition-colors ${isActive('/signup')
                                        ? 'text-amber-600 font-semibold'
                                        : 'text-gray-600 hover:text-amber-600'
                                        }`}
                                >
                                    Register
                                    {isActive('/signup') && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full"></span>
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/signin"}
                                    className={`relative transition-colors ${isActive('/signin')
                                        ? 'text-amber-600 font-semibold'
                                        : 'text-gray-600 hover:text-amber-600'
                                        }`}
                                >
                                    Login
                                    {isActive('/signin') && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full"></span>
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
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                            </div>
                            <Button onClick={handleSignOut} size="sm" variant="light" className="text-red-500 hover:bg-red-50">
                                Sign Out
                            </Button>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-gray-600 hover:text-amber-600 transition-colors"
                >
                    {isMenuOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={22} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-amber-100 py-4 px-4">
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block transition-colors ${isActive(link.href)
                                        ? 'text-amber-600 font-semibold'
                                        : 'text-gray-600 hover:text-amber-600'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}

                        {!user ? (
                            <>
                                <li className="pt-2 border-t border-amber-100">
                                    <Link
                                        href={"/signup"}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block transition-colors ${isActive('/signup')
                                            ? 'text-amber-600 font-semibold'
                                            : 'text-gray-600 hover:text-amber-600'
                                            }`}
                                    >
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/signin"}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block transition-colors ${isActive('/signin')
                                            ? 'text-amber-600 font-semibold'
                                            : 'text-gray-600 hover:text-amber-600'
                                            }`}
                                    >
                                        Login
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li className="pt-2 border-t border-amber-100">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar size="sm">
                                            <Avatar.Image
                                                alt={user?.name || "User"}
                                                src={user?.image}
                                                referrerPolicy="no-referrer"
                                            />
                                            <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
                                        </Avatar>
                                        <span className="text-sm text-gray-700">{user?.name}</span>
                                    </div>
                                    <Button onClick={handleSignOut} size="sm" variant="light" className="text-red-500">
                                        Sign Out
                                    </Button>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;