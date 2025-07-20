"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
    { href: '#services', label: 'Servicios' },
    { href: '#gallery', label: 'Galería' },
    { href: '#about', label: 'Nosotros' },
    { href: '#team', label: 'Equipo' },
    { href: '#clients', label: 'Clientes' },
    { href: '#careers', label: 'Vacantes' },
    { href: '#contact', label: 'Contacto' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detectar si es móvil
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // Puedes ajustar este valor
        };

        handleResize(); // Detectar en el primer render
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
                isScrolled || mobileMenuOpen ? 'bg-[var(--navbar-bg)]' : 'bg-transparent'
            }`}
            id="mainNav"
        >
            <div className="container mx-auto flex h-24 items-center justify-between px-6">
                <a
                    href="#home"
                    className="text-2xl font-bold text-primary-foreground font-headline"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    SW Safety Excellence
                </a>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex">
                    <ul className="flex items-center space-x-1">
                        {navLinks.map(({ href, label }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className="px-4 py-2 font-semibold uppercase tracking-wider text-primary-foreground/75 hover:text-primary-foreground transition-colors"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="inline-flex items-center justify-center rounded-md border border-white/25 p-2 text-primary-foreground/75 hover:bg-white/10 hover:text-primary-foreground"
                        aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Abrir menú principal</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <span className="ml-2 font-semibold uppercase">Menú</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {mobileMenuOpen && isMobile && (
                <div className="bg-[var(--navbarmb-bg)] lg:hidden">
                    <ul className="flex flex-col items-center py-4">
                        {navLinks.map(({ href, label }) => (
                            <li key={label} className="w-full text-center">
                                <a
                                    href={href}
                                    onClick={closeMobileMenu}
                                    className="block py-3 font-semibold uppercase tracking-wider text-primary-foreground/75 hover:text-primary-foreground transition-colors"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;