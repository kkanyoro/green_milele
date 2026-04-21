"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Avoid hydration mismatch by waiting for mount
    useEffect(() => setMounted(true), []);

    // Close dropdown if clicked outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!mounted) return <div className="h-10 w-10" />; // Spacer while mounting

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="Toggle theme"
            >
                {theme === "light" ? <FiSun size={20} /> : theme === "dark" ? <FiMoon size={20} /> : <FiMonitor size={20} />}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 flex w-36 flex-col overflow-hidden glass-panel py-2 z-50">
                    <button
                        onClick={() => { setTheme("light"); setIsOpen(false); }}
                        className={`flex w-full items-center gap-3 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/10 ${theme === 'light' ? 'font-bold' : ''}`}
                    >
                        <FiSun size={16} /> Light
                    </button>
                    <button
                        onClick={() => { setTheme("dark"); setIsOpen(false); }}
                        className={`flex w-full items-center gap-3 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/10 ${theme === 'dark' ? 'font-bold' : ''}`}
                    >
                        <FiMoon size={16} /> Dark
                    </button>
                    <button
                        onClick={() => { setTheme("system"); setIsOpen(false); }}
                        className={`flex w-full items-center gap-3 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/10 ${theme === 'system' ? 'font-bold' : ''}`}
                    >
                        <FiMonitor size={16} /> System
                    </button>
                </div>
            )}
        </div>
    );
}