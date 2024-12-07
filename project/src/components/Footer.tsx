import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center mt-12 text-sm text-gray-600 dark:text-gray-400">
      <p>© {currentYear} Amr Mostafa. All rights reserved.</p>
      <p className="mt-2 text-xs">Made by Amr Mostafa</p>
    </footer>
  );
}