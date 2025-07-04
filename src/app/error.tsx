// error.tsx
'use client';

import { useTheme } from "@/contexts/ThemeContext";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    const { theme } = useTheme();
    
    return (
        <div className={`flex flex-col items-center justify-center min-h-screen w-full md:ml-80 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'
        }`}>
            <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>Something went wrong!</h2>
            <button
                className="px-4 py-2 bg-[#149ddd] text-white rounded hover:bg-[#1186c4] transition-colors duration-200"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
}