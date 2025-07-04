"use client";
import { useTheme } from '@/contexts/ThemeContext';
import { memo } from 'react';

const ThemeToggle = memo(function ThemeToggle() {
  const { theme, toggleTheme, isLoaded } = useTheme();

  // Show loading state while theme is being determined
  if (!isLoaded) {
    return (
      <button className="theme-toggle p-3 rounded-full transition-all duration-200 bg-gray-800 hover:bg-gray-700 border border-gray-600 group relative overflow-hidden cursor-pointer">
        <div className="relative w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 transition-all duration-300 text-gray-700"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle p-3 rounded-full transition-all duration-200 cursor-pointer
        ${theme === 'dark' 
          ? 'bg-gray-800 hover:bg-gray-700 border border-gray-600' 
          : 'bg-gray-100 hover:bg-gray-200 border border-gray-300'
        }
        group relative overflow-hidden`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6">
        {theme === 'light' ? (
          // Moon icon for dark mode
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 transition-all duration-300 text-gray-700"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          // Sun icon for light mode
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 transition-all duration-300 text-yellow-400"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        )}
      </div>
    </button>
  );
});

export default ThemeToggle;
