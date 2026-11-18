
import { ArrowUp, Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();

  const isSpanish = i18n.language.startsWith('es');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-slate-700">
              © {currentYear} Erik Palomares
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {isSpanish
                ? 'Desarrollador Frontend'
                : 'Frontend Developer'}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-5">
            <a
              href="mailto:erikgonzalopalomares@gmail.com"
              aria-label="Send email"
              className="text-slate-500 transition-colors hover:text-blue-600"
            >
              <Mail className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/erik-palomares-875467b2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-500 transition-colors hover:text-blue-600"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#home"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
          >
            {isSpanish ? 'Volver arriba' : 'Back to top'}

            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
