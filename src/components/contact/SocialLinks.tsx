import { Linkedin, Instagram } from 'lucide-react';
import type { SocialLink } from '../../types';
import { FaBehance } from 'react-icons/fa';

const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/emmanuel-olusola-2731a1196/',
    icon: 'linkedin',
  },
  {
    platform: 'FaBehance',
    url: 'https://www.behance.net/emmanuelolusola',
    icon: 'behance',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/primecreativehub1?igsh=MWJ1c3U3djNwaGJ5aA==',
    icon: 'instagram',
  },
];

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((link) => {
        const Icon = {
          linkedin: Linkedin,
          behance: FaBehance,
          instagram: Instagram,
        }[link.icon];

        return (
          <a
            key={link.platform}
            href={link.url}
            className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{link.platform}</span>
            <Icon className="h-6 w-6" />
          </a>
        );
      })}
    </div>
  );
}