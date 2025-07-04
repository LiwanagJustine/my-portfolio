"use client";
import { useTheme } from "@/contexts/ThemeContext";

export default function Profile() {
    const { theme } = useTheme();
    
    return (
        <>
            <div className={`profile w-32 h-32 flex items-center justify-center border-8 rounded-full overflow-hidden font-[Raleway] transition-colors duration-200 ${
                theme === 'dark' 
                    ? 'border-[color(srgb_1_1_1/_0.15)]' 
                    : 'border-gray-300'
            }`}>
                <img src="/images/justineliwanag02.jpeg" alt="" className="object-cover" />
            </div>
        </>
    )
}
