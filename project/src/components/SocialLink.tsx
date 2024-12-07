import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  username: string;
}

export function SocialLink({ href, icon: Icon, label, username }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 w-full p-4 bg-white dark:bg-gray-700/50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] transform border border-gray-100 dark:border-gray-600"
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-600 group-hover:bg-gray-100 dark:group-hover:bg-gray-500 transition-colors">
        <Icon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{label}</span>
        <span className="font-semibold text-gray-800 dark:text-white">{username}</span>
      </div>
    </a>
  );
}