import React from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="relative max-w-md mx-auto">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <ProfileHeader
            name="Amr Mostafa"
            bio="Connect with me across all social platforms"
            imageUrl="https://i.ibb.co/xztmTFR/amr-beach.jpg"
          />
          <SocialLinks />
          <Footer />
        </div>
      </div>
    </div>
  );
}