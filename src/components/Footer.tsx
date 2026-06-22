import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold text-sm">
              KR<span className="text-teal-500">.</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 flex items-center gap-1.5 order-last sm:order-none">
            &copy; {year} Kshatri Reshmasree.
          </p>

          {/* Social */}
          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: personalInfo.github, label: 'GitHub' },
              { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg border border-gray-800 text-gray-500 flex items-center justify-center hover:border-teal-500/50 hover:text-teal-400 transition-all"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
