"use client";
import { useTheme } from '@/contexts/ThemeContext';
import { useLoading } from '@/contexts/LoadingContext';
import { memo } from 'react';

const LoadingSpinner = memo(function LoadingSpinner() {
  const { theme } = useTheme();
  const { isLoading, isInitialLoading } = useLoading();

  // Only show spinner during initial loading or manual loading states
  if (!isLoading && !isInitialLoading) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-900/95 backdrop-blur-sm' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Main Spinner */}
        <div className="relative">
          <div
            className={`w-16 h-16 border-4 border-solid rounded-full animate-spin ${
              theme === 'dark'
                ? 'border-gray-700 border-t-cyan-400'
                : 'border-gray-300 border-t-blue-500'
            }`}
          />
          {/* Inner spinner for more dynamic effect */}
          <div
            className={`absolute top-2 left-2 w-12 h-12 border-2 border-solid rounded-full animate-spin ${
              theme === 'dark'
                ? 'border-transparent border-t-cyan-300'
                : 'border-transparent border-t-blue-400'
            }`}
            style={{ animationDirection: 'reverse', animationDuration: '1s' }}
          />
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2
            className={`text-2xl font-bold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
          >
            Loading Portfolio...
          </h2>
          <p
            className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Preparing everything for you
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full animate-pulse ${
                theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-500'
              }`}
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default LoadingSpinner;
