
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  Code2,
  Layers,
  MonitorSmartphone,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Experience from './components/Experience';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language.startsWith('es');

  const technologies = [
    'Angular',
    'React',
    'TypeScript',
    'JavaScript',
    'RxJS',
    'HTML5',
    'CSS3',
    'SCSS',
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Navbar />

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative scroll-mt-20 overflow-hidden bg-slate-50 px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:pb-28 md:pt-36 lg:pb-32 lg:pt-44"
        >
          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Introduction */}
            <div className="min-w-0">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 text-xs font-medium leading-relaxed text-blue-700 shadow-sm sm:mb-7 sm:px-4 sm:text-sm">
                <span className="h-2 w-2 shrink-0 rounded-full bg-green-500" />
                {t('hero.location')}
              </div>

              <p className="mb-3 text-base font-medium text-blue-600 sm:text-lg">
                {t('hero.greeting')}
              </p>

              <h1 className="break-words text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
                {t('hero.name')}
                <span className="text-blue-600">.</span>
              </h1>

              <h2 className="mt-3 text-xl font-semibold leading-snug text-slate-600 sm:mt-5 sm:text-2xl md:text-3xl">
                {t('hero.role')}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8">
                {t('hero.description')}
              </p>

              {/* Main actions */}
              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#projects"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 sm:w-auto sm:px-6 sm:py-3.5 sm:text-base"
                >
                  {t('hero.projects')}
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="/documents/Erik-Palomares-CV-EN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600 sm:w-auto sm:px-6 sm:py-3.5 sm:text-base"
                >
                  <Download size={18} />
                  {t('hero.resume')}
                </a>
              </div>

              {/* Social links */}
              <div className="mt-7 flex items-center gap-6 sm:mt-9">
                <a
                  href="https://www.linkedin.com/in/erik-palomares-875467b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-500 transition hover:text-blue-600"
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href="mailto:erikgonzalopalomares@gmail.com"
                  aria-label="Email"
                  className="text-slate-500 transition hover:text-blue-600"
                >
                  <Mail size={22} />
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-500 transition hover:text-blue-600"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>

            {/* Professional profile card */}
            <div className="relative mx-auto w-full max-w-md min-w-0">
              <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-200 to-slate-100 opacity-70 blur-xl sm:-inset-4" />

              <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="rounded-2xl bg-blue-50 p-3 text-blue-600 sm:p-4">
                    <Code2 size={30} />
                  </div>

                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    Frontend Development
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold sm:mt-8 sm:text-2xl">
                  Building digital experiences
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
                  Creating maintainable interfaces, reusable components and
                  responsive web applications.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
                  <div className="min-w-0 rounded-xl bg-slate-50 p-3 sm:p-4">
                    <Layers className="mb-3 text-blue-600" size={23} />
                    <p className="text-sm font-semibold">
                      Component-driven
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Reusable architecture
                    </p>
                  </div>

                  <div className="min-w-0 rounded-xl bg-slate-50 p-3 sm:p-4">
                    <MonitorSmartphone
                      className="mb-3 text-blue-600"
                      size={23}
                    />
                    <p className="text-sm font-semibold">Responsive UI</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Multiple devices
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5 sm:mt-8 sm:pt-6">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-600">
                    Core technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-slate-100 px-2.5 py-2 text-xs font-semibold text-slate-700 sm:px-3"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-400 transition hover:text-blue-600 md:block"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={22} />
          </a>
        </section>

        {/* About Me */}
        <section
          id="about"
          className="scroll-mt-24 bg-white px-5 py-20 sm:px-6 md:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                {isSpanish ? 'Sobre mí' : 'About Me'}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {isSpanish
                  ? 'Desarrollando experiencias digitales con propósito.'
                  : 'Building meaningful digital experiences.'}
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                {isSpanish
                  ? 'Soy desarrollador Frontend con más de 7 años de experiencia construyendo aplicaciones web modernas, responsivas y mantenibles. Me especializo en Angular y también cuento con experiencia práctica desarrollando soluciones con React.'
                  : "I'm a Frontend Developer with over 7 years of experience building modern, responsive, and maintainable web applications. I specialize in Angular and also have hands-on experience developing solutions with React."}
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                {isSpanish
                  ? 'Me enfoco en crear interfaces intuitivas, desarrollar componentes reutilizables e integrar servicios mediante APIs. Disfruto resolver problemas técnicos, mejorar la calidad del código y colaborar en equipos ágiles para entregar productos que aporten valor.'
                  : 'I focus on creating intuitive interfaces, developing reusable components, and integrating services through APIs. I enjoy solving technical challenges, improving code quality, and collaborating with agile teams to deliver valuable products.'}
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <Code2 className="text-blue-600" size={28} />
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {isSpanish
                    ? 'Desarrollo Frontend'
                    : 'Frontend Development'}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {isSpanish
                    ? 'Angular, React, TypeScript y JavaScript para construir aplicaciones web modernas.'
                    : 'Angular, React, TypeScript, and JavaScript for building modern web applications.'}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <Layers className="text-blue-600" size={28} />
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {isSpanish
                    ? 'Arquitectura y componentes'
                    : 'Architecture & Components'}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {isSpanish
                    ? 'Componentes reutilizables, código mantenible y buenas prácticas de desarrollo.'
                    : 'Reusable components, maintainable code, and software development best practices.'}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:col-span-2 lg:col-span-1">
                <MonitorSmartphone
                  className="text-blue-600"
                  size={28}
                />
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {isSpanish
                    ? 'Experiencia de usuario'
                    : 'User Experience'}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {isSpanish
                    ? 'Interfaces responsivas, accesibles y enfocadas en las necesidades de los usuarios.'
                    : 'Responsive, accessible interfaces focused on users’ needs.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Experience />

        <Skills />

        <FeaturedProjects />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

