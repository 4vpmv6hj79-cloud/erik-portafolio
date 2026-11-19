
import {
  ArrowUpRight,
  Trophy,
  Truck,
  Mail,
  Code2,
  Scale,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import nflStatsScreenshot from '../assets/projects/nfl-stats-pro.webp';
import logisticsScreenshot from '../assets/projects/p&dlogistic.webp';
import invitationsScreenshot from '../assets/projects/invitaciones.webp';
import seniorLabScreenshot from '../assets/projects/seniorix.webp';
import lawFirmScreenshot from '../assets/projects/abogado.webp';

const projectImages: Record<string, string> = {
  'nfl-stats': nflStatsScreenshot,
  logistics: logisticsScreenshot,
  'digital-invitations': invitationsScreenshot,
  'senior-lab': seniorLabScreenshot,
  'law-firm': lawFirmScreenshot,
};

const projects = [
  {
    id: 'nfl-stats',
    icon: Trophy,
    name: 'NFL Stats Pro',
    category: {
      en: 'Sports Statistics Platform',
      es: 'Plataforma de estadísticas deportivas',
    },
    description: {
      en: 'A sports platform featuring NFL teams, standings, scores, statistics and a prediction game for football fans.',
      es: 'Plataforma deportiva con equipos de la NFL, clasificaciones, marcadores, estadísticas y una quiniela para aficionados.',
    },
    technologies: ['Angular 21', 'TypeScript', 'RxJS', 'REST API'],
    status: {
      en: 'Live project',
      es: 'Proyecto publicado',
    },
    url: 'https://project-nfl-stats-pro.vercel.app/quiniela',
    githubUrl: 'https://github.com/4vpmv6hj79-cloud/project-nfl-stats-pro',
  },
  {
    id: 'zona-once',
    icon: Trophy,
    name: 'Zona Once',
    category: {
      en: 'Football Ecosystem',
      es: 'Ecosistema de fútbol',
    },
    description: {
      en: 'A digital football ecosystem focused on Liga MX, with match information, tournament statistics and community features.',
      es: 'Ecosistema digital enfocado en la Liga MX, con información de partidos, estadísticas de torneos y funcionalidades para comunidades.',
    },
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'React Query',
    ],
    status: {
      en: 'In development',
      es: 'En desarrollo',
    },
    url: undefined,
    githubUrl: undefined,
  },
  {
    id: 'logistics',
    icon: Truck,
    name: 'Logistics Platform',
    category: {
      en: 'Logistics & Management',
      es: 'Logística y gestión',
    },
    description: {
      en: 'A web application designed to support logistics operations and management through a modern React-based interface.',
      es: 'Aplicación web diseñada para apoyar operaciones y procesos de gestión logística mediante una interfaz moderna basada en React.',
    },
    technologies: ['React', 'Next.js', 'TypeScript'],
    status: {
      en: 'Live project',
      es: 'Proyecto publicado',
    },
    url: 'https://plataforma-logistica-mu.vercel.app/',
    githubUrl: 'https://github.com/4vpmv6hj79-cloud/plataforma-logistica',
  },
  {
    id: 'digital-invitations',
    icon: Mail,
    name: 'Digital Invitations',
    category: {
      en: 'Full-Stack Event Platform',
      es: 'Plataforma integral de eventos',
    },
    description: {
      en: 'A full-stack platform for creating, customizing and sharing digital invitations. Includes event templates, user authentication, QR tickets, RSVP management and payment workflows.',
      es: 'Plataforma full-stack para crear, personalizar y compartir invitaciones digitales. Incluye plantillas, autenticación, boletos QR, confirmación de asistencia y procesos de pago.',
    },
    technologies: [
      'Angular 22',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Stripe',
      'Docker',
    ],
    status: {
      en: 'Live project',
      es: 'Proyecto publicado',
    },
    url: 'https://invitaciones-eight-nu.vercel.app/',
    githubUrl: 'https://github.com/4vpmv6hj79-cloud/invitaciones',
  },
  {
    id: 'senior-lab',
    icon: Code2,
    name: 'Front End Senior Lab',
    category: {
      en: 'Developer Learning Platform',
      es: 'Plataforma de aprendizaje para desarrolladores',
    },
    description: {
      en: 'A learning platform designed to help frontend developers strengthen their technical skills through practical exercises and programming challenges.',
      es: 'Plataforma de aprendizaje diseñada para ayudar a desarrolladores frontend a fortalecer sus habilidades técnicas mediante ejercicios prácticos y retos de programación.',
    },
    technologies: ['Angular', 'TypeScript'],
    status: {
      en: 'Live project',
      es: 'Proyecto publicado',
    },
    url: 'https://www.seniorix.dev/',
    githubUrl: 'https://github.com/4vpmv6hj79-cloud/frontend-senior-lab',
  },
  {
    id: 'law-firm',
    icon: Scale,
    name: 'Palomares Vargas y Abogados',
    category: {
      en: 'Professional Law Firm Website',
      es: 'Sitio web para despacho jurídico',
    },
    description: {
      en: 'A professional website for a law firm, focused on presenting legal services, building trust and providing accessible contact information.',
      es: 'Sitio web profesional para un despacho jurídico, enfocado en presentar servicios legales, generar confianza y facilitar el contacto con sus clientes.',
    },
    technologies: ['Web Development', 'Responsive Design'],
    status: {
      en: 'GitHub project',
      es: 'Proyecto en GitHub',
    },
    url: undefined,
    githubUrl: 'https://github.com/4vpmv6hj79-cloud/palomares-vargas-abogados',
  },
];

function FeaturedProjects() {
  const { i18n } = useTranslation();
  const language = i18n.language.startsWith('es') ? 'es' : 'en';

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {language === 'es' ? 'Trabajo seleccionado' : 'Selected work'}
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {language === 'es' ? 'Proyectos destacados' : 'Featured Projects'}
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            {language === 'es'
              ? 'Una selección de proyectos personales y profesionales en los que aplico mis conocimientos de desarrollo frontend y construcción de aplicaciones web.'
              : 'A selection of personal and professional projects where I apply my frontend development skills and build modern web applications.'}
          </p>
        </header>

        <div className="grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            const image = projectImages[project.id];

            return (
              <article
                key={project.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  {image ? (
                    <img
                      src={image}
                      alt={`${project.name} screenshot`}
                      className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-blue-50 text-slate-400">
                      <Icon size={42} strokeWidth={1.5} />
                      <span className="text-sm font-medium">
                        {language === 'es'
                          ? 'Vista previa próximamente'
                          : 'Preview coming soon'}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={23} aria-hidden="true" />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                      {project.status[language]}
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-semibold text-blue-600">
                      {project.category[language]}
                    </p>

                    <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900">
                      {project.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {project.description[language]}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-5 border-t border-slate-100 pt-6">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${language === 'es' ? 'Ver demo de' : 'View demo of'} ${project.name}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                      >
                        {language === 'es' ? 'Ver demo' : 'Live Demo'}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub ${project.name}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
                      >
                        GitHub
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    )}

                    {!project.url && !project.githubUrl && (
                      <span className="text-sm font-medium text-slate-600">
                        {language === 'es' ? 'Próximamente' : 'Coming soon'}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;



