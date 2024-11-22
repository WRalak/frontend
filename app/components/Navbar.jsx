'use client'

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Sync dark mode with the body class
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 dark:bg-fuchsia-950">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">My App</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200"
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 018 8 8.01 8.01 0 01-8 8c-4.418 0-8-3.582-8-8a8 8 0 018-8zm0 2a6 6 0 000 12 6.01 6.01 0 005.373-3.394A6.01 6.01 0 0110 4z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 12a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm0-5a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zM3 10a1 1 0 011-1h2a1 1 0 110 2H4a1 1 0 01-1-1zm12.071-4.071a1 1 0 011.414 0l1.414 1.414a1 1 0 11-1.414 1.414L14.657 7.343a1 1 0 010-1.414zm-8.485 0a1 1 0 011.414 1.414L7.343 8.757a1 1 0 01-1.414-1.414l1.414-1.414zM3.515 15.657a1 1 0 011.414 0l1.414 1.414a1 1 0 11-1.414 1.414L3.515 17.071a1 1 0 010-1.414zm12.071 0a1 1 0 011.414 1.414l-1.414 1.414a1 1 0 11-1.414-1.414l1.414-1.414z" />
          </svg>
        )}
      </button>
    </nav>
  );
}

