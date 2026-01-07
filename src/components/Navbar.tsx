import React, { useEffect, useState } from 'react';
import { ui } from '../i18n/ui';

interface NavbarProps {
    lang?: 'en' | 'pt';
}

const Navbar: React.FC<NavbarProps> = ({ lang = 'en' }) => {
    const t = ui[lang];
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
            if (storedTheme) {
                setTheme(storedTheme);
            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark');
            } else {
                setTheme('light'); // Default to light if no preference, or keep dark if that's the brand
            }
        }
    }, []);

    const navLinks = [
        { name: t['nav.about'], href: '#about' },
        { name: t['nav.work'], href: '#projects' },
        { name: t['nav.experience'], href: '#experience' },
        { name: t['nav.skills'], href: '#skills' },
        { name: t['nav.contact'], href: '#contact' },
    ];

    const homeLink = lang === 'pt' ? '/pt' : '/';

    const handleNavClick = () => {
        setIsOpen(false);
        // Dispatch custom event to close any other potential popups/modals
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('close-popups'));
        }
    };

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-forge-800 bg-forge-950/80 backdrop-blur-md print:hidden">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4 md:px-4 md:py-4">
                <a
                    href={`${homeLink}#hero`}
                    onClick={handleNavClick}
                    className="flex items-center space-x-3 rtl:space-x-reverse group"
                >
                    <span className="self-center text-2xl font-display font-semibold whitespace-nowrap text-main group-hover:text-accent transition-colors duration-300">
                        JOTTA<span className="text-accent">P</span>
                    </span>
                </a>

                <div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse items-center">
                    {/* Language Switcher */}
                    <a
                        href={lang === 'en' ? '/pt' : '/'}
                        onClick={() => {
                            if (typeof window !== 'undefined') {
                                localStorage.setItem('preferred_lang', lang === 'en' ? 'pt' : 'en');
                            }
                        }}
                        className="flex items-center justify-center px-3 py-1 bg-forge-800 hover:bg-forge-700 rounded-xl text-xs font-bold text-forge-200 transition-all border border-forge-700 hover:border-accent group"
                        aria-label="Switch Language"
                    >
                        <span className={lang === 'en' ? "text-accent" : "text-forge-500"}>EN</span>
                        <span className="mx-1 text-forge-600">/</span>
                        <span className={lang === 'pt' ? "text-accent" : "text-forge-500"}>PT</span>
                    </a>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="hidden p-2 text-forge-400 hover:text-accent rounded-xl hover:bg-forge-800 focus:outline-none transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                        )}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-forge-400 rounded-xl md:hidden hover:bg-forge-800 focus:outline-none focus:ring-2 focus:ring-forge-600"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto md:order-1`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-forge-800 rounded-lg bg-forge-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={handleNavClick}
                                    className="block py-2 px-3 text-forge-200 rounded hover:bg-forge-800 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 transition-all duration-300 relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
