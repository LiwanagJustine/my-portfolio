"use client";
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isLoaded: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Function to get initial theme without causing hydration mismatch
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'; // SSR default to match HTML
  
  try {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'dark';
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set the theme class immediately on mount to sync with HTML
    const root = document.documentElement;
    const currentTheme = getInitialTheme();
    
    if (currentTheme !== theme) {
      setTheme(currentTheme);
    }
    
    // The HTML already has 'dark' class, so only modify if needed
    if (currentTheme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
    
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    
    // Save theme and apply changes
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, isLoaded]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  // Always provide the context, even during initialization
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
