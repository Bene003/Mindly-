import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/ui/NavItems";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-red-50 to-pink-100 shadow-lg border-b border-red-100">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-2.5 cursor-pointer">
                            <Image
                                src="/images/logo.svg"
                                alt="logo"
                                width={46}
                                height={44}
                            />
                            <span className="text-red-600 font-bold text-xl">Mindly</span>
                        </div>
                    </Link>
                    <div className="flex items-center gap-8">
                        <div className="text-red-600">
                            <NavItems />
                        </div>
                        <SignedOut>
                            <SignInButton>
                                <button className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-lg font-semibold transition-colors">
                                    Se connecter
                                </button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar