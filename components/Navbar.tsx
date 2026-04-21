"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import DonateButton from "./DonateButton";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Events & Gallery", href: "/events" },
        { name: "Contact", href: "/join" },
    ];

    return (
        <>
            {/* Floating sticky container utilizing our custom glass-panel utility */}
            <nav className="fixed w-full h-20 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
                <div className="flex items-center justify-between pt-4 px-6 md:px-12">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center">
                        <Image src="/logo.jpeg" width={60} height={60} alt="GM" priority className="rounded-full bg-secondary p-0" />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8 font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-primary/80 transition-colors hover:text-primary"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    {/* Right Side Controls */}
                    <div className="flex items-center gap-2 md:gap-4">

                        {/* Theme Toggle always visible */}
                        <ThemeToggle />

                        {/* Desktop CTAs */}
                        <div className="hidden items-center gap-4 md:flex">
                            <Link href="/join" className="font-medium text-primary transition-colors hover:text-primary/80">
                                Join Us
                            </Link>
                            <DonateButton />
                        </div>

                        {/* Mobile Hamburger Menu */}
                        <button
                            className="p-2 text-primary focus:outline-none md:hidden rounded-full hover:bg-primary/10 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                {isOpen && (
                    <div className="flex flex-col gap-4 border-t border-primary/10 pb-2 md:hidden z-10 bg-white/90 backdrop-glass-lg shadow-lg rounded-lg">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-primary/90"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 flex flex-col gap-3">
                            <Link
                                href="/join"
                                className="w-full rounded-full border-2 border-primary py-2.5 text-center font-medium text-primary transition-colors hover:bg-primary/5"
                                onClick={() => setIsOpen(false)}
                            >
                                Join Us
                            </Link>
                            <DonateButton className="w-full" />
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}