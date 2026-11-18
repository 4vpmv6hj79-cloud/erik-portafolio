
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const links = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
];

function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const currentLanguage = i18n.language.startsWith('es') ? 'es' : 'en';

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4"
        aria-label={currentLanguage === 'es' ? 'Navegación principal' : 'Main navigation'}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="shrink-0 text-xl font-bold tracking-tight text-slate-900"
          aria-label="Erik Palomares - Home"
        >
          Erik<span className="text-blue-600">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>

        {/* Language and mobile menu */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div
            className="flex items-center rounded-lg border border-slate-200 p-1"
            aria-label={currentLanguage === 'es' ? 'Seleccionar idioma' : 'Select language'}
          >
            <button
              type="button"
              onClick={() => i18n.changeLanguage('en')}
              aria-label="Switch to English"
              aria-pressed={currentLanguage === 'en'}
              className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors sm:px-3 sm:py-2 sm:text-sm ${
                currentLanguage === 'en'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => i18n.changeLanguage('es')}
              aria-label="Cambiar a español"
              aria-pressed={currentLanguage === 'es'}
              className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors sm:px-3 sm:py-2 sm:text-sm ${
                currentLanguage === 'es'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              ES
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 md:hidden"
            aria-label={
              menuOpen
                ? currentLanguage === 'es' ? 'Cerrar menú' : 'Close menu'
                : currentLanguage === 'es' ? 'Abrir menú' : 'Open menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-200 md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 border-t-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="px-4 py-3 sm:px-6">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

