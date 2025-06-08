'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SignedIn } from "@clerk/nextjs";

const navItems = [
    { label: 'Accueil', href: '/' },
    // 'Assistants' will be rendered conditionally below
    { label: 'Créer un Assistant', href: '/companions/new' },
    { label: 'Mon Parcours', href: '/my-journey' },
];

const NavItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(pathname === href && 'text-primary font-semibold')}
                >
                    {label}
                </Link>
            ))}
            <SignedIn>
                <Link
                    href="/companions"
                    className={cn(pathname === '/companions' && 'text-primary font-semibold')}
                >
                    Assistants
                </Link>
            </SignedIn>
        </nav>
    );
};

export default NavItems;