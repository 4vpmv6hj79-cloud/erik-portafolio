
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
      hero: {
        greeting: "Hello, I'm",
        name: 'Erik Palomares',
        role: 'Senior Frontend Developer',
        description:
          'I build scalable, responsive and user-focused web applications using modern frontend technologies.',
        location: 'Based in Mexico · Available for remote opportunities',
        projects: 'Explore my projects',
        resume: 'Download my resume',
        contact: 'Get in touch',
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Sobre mí',
        experience: 'Experiencia',
        skills: 'Habilidades',
        projects: 'Proyectos',
        contact: 'Contacto',
      },
      hero: {
        greeting: 'Hola, soy',
        name: 'Erik Palomares',
        role: 'Senior Frontend Developer',
        description:
          'Desarrollo aplicaciones web escalables, responsivas y centradas en el usuario utilizando tecnologías frontend modernas.',
        location: 'Ubicado en México · Disponible para oportunidades remotas',
        projects: 'Ver mis proyectos',
        resume: 'Descargar CV',
        contact: 'Contáctame',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
