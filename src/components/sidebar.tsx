"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import Profile from "./profile";
import SocialMedia from "./socialmedia";
import ThemeToggle from "./ThemeToggle";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

export default function SideBar() {
    const [open, setOpen] = useState(false);
    const [hobbiesOpen, setHobbiesOpen] = useState(false);
    const pathname = usePathname();
    const { theme, isLoaded } = useTheme();

    // Memoize hobby routes to prevent recreation on every render
    const hobbyRoutes = useMemo(() => [
        "/music",
        "/watching",
        "/guitar",
        "/sing",
        "/banding",
        "/hobbies/music",
        "/hobbies/watching",
        "/hobbies/guitar",
        "/hobbies/sing",
        "/hobbies/banding"
    ], []);

    const isHobbyActive = useMemo(() => 
        hobbyRoutes.includes(pathname), 
        [hobbyRoutes, pathname]
    );

    // Memoize menu items for better performance
    const menuItems = useMemo(() => [
        {
            href: "/",
            label: "Home",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20" height="20"
                    className={`transition-colors duration-200 ${pathname === "/" ? "fill-[#149ddd]" : "fill-current group-hover:fill-[#149ddd]"}`}>
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
            )
        },
        {
            href: "/about",
            label: "About",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"
                    className={`transition-colors duration-200 ${pathname === "/about" ? "fill-[#149ddd]" : "fill-current group-hover:fill-[#149ddd]"}`}>
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                </svg>
            )
        },
        {
            href: "/education",
            label: "Education", 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"
                    className={`transition-colors duration-200 ${pathname === "/education" ? "fill-[#149ddd]" : "fill-current group-hover:fill-[#149ddd]"}`}>
                    <path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9l0 57.1c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-57.1L48 93.3l0 65.1 15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9l-32 0c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4l0-71.8C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z" />
                </svg>
            )
        },
        {
            href: "/career",
            label: "Career",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"
                    className={`transition-colors duration-200 ${pathname === "/career" ? "fill-[#149ddd]" : "fill-current group-hover:fill-[#149ddd]"}`}>
                    <path d="M336 80V72c0-39.8-32.2-72-72-72h-80c-39.8 0-72 32.2-72 72v8H48C21.5 80 0 101.5 0 128v48c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-48c0-26.5-21.5-48-48-48h-48zm-176-8c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40v8H160v-8zm288 120H0v240c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192z" />
                </svg>
            )
        }
    ], [pathname]);

    // Memoize hobby submenu items
    const hobbyItems = useMemo(() => [
        { href: "/hobbies/music", label: "Listening Music" },
        { href: "/hobbies/watching", label: "Watching Anime" },
        { href: "/hobbies/guitar", label: "Playing Guitar" },
        { href: "/hobbies/banding", label: "Banding with Family" }
    ], []);

    // Memoize theme classes for better performance
    const themeClasses = useMemo(() => ({
        hamburger: theme === 'dark' ? 'bg-[#149ddd]' : 'bg-gray-700',
        sidebar: theme === 'dark' 
            ? 'bg-[#040b14] text-white' 
            : 'bg-white text-gray-800 border-r border-gray-200 shadow-lg',
        title: theme === 'dark' ? 'text-white' : 'text-gray-800',
        hobbiesContainer: theme === 'dark' 
            ? 'text-white' 
            : 'text-gray-800',
        hobbiesInactive: theme === 'dark' 
            ? 'text-[#a8a9b4]' 
            : 'text-gray-600',
        hoverBg: theme === 'light' ? 'hover:bg-gray-100' : '',
        dropdownArrow: theme === 'dark' ? '#a8a9b4' : '#6b7280'
    }), [theme]);

    // Memoized callbacks for better performance
    const toggleSidebar = useCallback(() => setOpen(prev => !prev), []);
    const toggleHobbies = useCallback(() => setHobbiesOpen(prev => !prev), []);
    const closeSidebar = useCallback(() => setOpen(false), []);

    // Open hobbies dropdown if a hobbies subpage is active, close sidebar on navigation (mobile)
    useEffect(() => {
        if (isHobbyActive) setHobbiesOpen(true);
        setOpen(false);
    }, [pathname, isHobbyActive]);

    return (
        <>
            {/* Hamburger button: visible on mobile only */}
            <button
                className={`fixed top-4 left-4 md:hidden z-50 focus:outline-none transition-colors duration-200 ${themeClasses.hamburger} rounded p-2`}
                onClick={toggleSidebar}
                aria-label="Open sidebar"
            >
                <span className="block w-5 h-0.5 bg-white rounded mb-1"></span>
                <span className="block w-5 h-0.5 bg-white rounded mb-1"></span>
                <span className="block w-5 h-0.5 bg-white rounded"></span>
            </button>
            
            {/* Sidebar: hidden on mobile, visible on md+ OR open on mobile */}
            <div
                className={`sidebar-panel font-[Raleway] ${open ? 'open' : ''}
                fixed top-0 left-0 w-4/5 max-w-xs z-40 h-screen p-4
                md:static md:translate-x-0 md:w-full md:max-w-none md:z-auto md:overflow-y-auto
                ${themeClasses.sidebar}`}
            >
                {/* Theme Toggle - Top Right Corner */}
                <div className="absolute top-4 right-4 z-10">
                    <ThemeToggle />
                </div>

                <div className="profile flex items-center justify-center flex-col mb-4">
                    <Profile />
                    <div className="name">
                        <h2 className={`font-bold mt-2 text-2xl ${themeClasses.title}`}>
                            Justine Liwanag
                        </h2>
                    </div>
                </div>
                
                <div className="social-media mb-6">
                    <SocialMedia />
                </div>
                
                <aside className="sidebar-container">
                    <nav className="sidebar">
                        <ul className="space-y-1">
                            {/* Main Menu Items */}
                            {menuItems.map((item) => (
                                <MenuItem 
                                    key={item.href}
                                    href={item.href}
                                    isActive={pathname === item.href}
                                    icon={item.icon}
                                    label={item.label}
                                    theme={theme}
                                />
                            ))}
                            
                            {/* Hobbies with Dropdown */}
                            <li className={`menu-item group w-full p-4 flex flex-col gap-1 font-semibold rounded-lg transition-all duration-200
                                ${isHobbyActive ? themeClasses.hobbiesContainer : themeClasses.hobbiesInactive} 
                                ${themeClasses.hoverBg}`}>
                                <div
                                    className="flex items-center gap-3 cursor-pointer"
                                    onClick={toggleHobbies}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === 'Enter' && toggleHobbies()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"
                                        className={`transition-colors duration-200 ${isHobbyActive ? "fill-[#149ddd]" : "fill-current group-hover:fill-[#149ddd]"}`}>
                                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                    </svg>
                                    <span className="transition-colors duration-200 mt-1">Hobbies</span>
                                    <svg 
                                        className={`ml-auto transition-transform duration-200 ${hobbiesOpen ? "rotate-180" : ""}`} 
                                        width="16" 
                                        height="16" 
                                        fill="none" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            d="M6 9l6 6 6-6" 
                                            stroke={themeClasses.dropdownArrow} 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                        />
                                    </svg>
                                </div>
                                
                                {/* Hobby Submenu with smooth animation */}
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    hobbiesOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <ul className="ml-8 mt-2 space-y-2">
                                        {hobbyItems.map((hobby) => (
                                            <li key={hobby.href}>
                                                <Link 
                                                    href={hobby.href} 
                                                    className={`block ml-3 py-1 transition-colors duration-200 ${
                                                        pathname === hobby.href 
                                                            ? themeClasses.hobbiesContainer
                                                            : `${themeClasses.hobbiesInactive} hover:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`
                                                    }`}
                                                >
                                                    {hobby.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>
            
            {/* Overlay for mobile when sidebar is open */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 md:hidden transition-opacity duration-200"
                    onClick={closeSidebar}
                    aria-label="Close sidebar"
                />
            )}
        </>
    );
}