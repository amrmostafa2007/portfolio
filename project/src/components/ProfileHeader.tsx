import React from 'react';
import { User } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  bio: string;
  imageUrl?: string;
}

export function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <div className="text-center mb-12">
      <div className="relative w-28 h-28 mx-auto mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full animate-spin-slow blur-xl opacity-75"></div>
        <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200 ring-4 ring-white dark:ring-gray-700 shadow-lg">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <User className="w-12 h-12 text-gray-400" />
            </div>
          )}
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-3 text-gray-800 dark:text-white">{name}</h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-sm mx-auto">{bio}</p>
    </div>
  );
}