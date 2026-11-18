
import {
  Code2,
  Layers3,
  Palette,
  Wrench,
  TestTube2,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const skillGroups = [
  {
    title: {
      en: 'Frontend Development',
      es: 'Desarrollo Frontend',
    },
    description: {
      en: 'Building modern, responsive and scalable web applications with a focus on maintainable code.',
      es: 'Desarrollo de aplicaciones web modernas, responsivas y escalables, con enfoque en código mantenible.',
    },
    icon: Code2,
    skills: [
      'Angular',
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
    ],
    featured: true,
  },
  {
    title: {
      en: 'Frameworks & State Management',
      es: 'Frameworks y gestión de estado',
    },
    description: {
      en: 'Managing application state, reactive data flows and reusable frontend architecture.',
      es: 'Gestión del estado de aplicaciones, flujos reactivos de datos y arquitecturas frontend reutilizables.',
    },
    icon: Layers3,
    skills: [
      'RxJS',
      'NgRx',
      'Angular Signals',
      'Redux',
      'Angular Material',
    ],
  },
  {
    title: {
      en: 'UI Development & Styling',
      es: 'Desarrollo de interfaces y estilos',
    },
    description: {
      en: 'Creating consistent user interfaces and responsive layouts across devices.',
      es: 'Creación de interfaces consistentes y diseños adaptables a diferentes dispositivos.',
    },
    icon: Palette,
    skills: [
      'SCSS',
      'Sass',
      'Tailwind CSS',
      'Bootstrap',
      'Flexbox',
      'CSS Grid',
    ],
  },
  {
    title: {
      en: 'Tools & Backend Integration',
      es: 'Herramientas e integración backend',
    },
    description: {
      en: 'Integrating frontend applications with REST services and development tools.',
      es: 'Integración de aplicaciones frontend con servicios REST y herramientas de desarrollo.',
    },
    icon: Wrench,
    skills: [
      'REST APIs',
      'Git',
      'Postman',
      'Node.js',
      'Firebase',
      'Kiro',
    ],
  },
  {
    title: {
      en: 'Testing & Methodologies',
      es: 'Pruebas y metodologías',
    },
    description: {
      en: 'Applying testing practices and collaborative methodologies to support software quality.',
      es: 'Aplicación de prácticas de testing y metodologías colaborativas para contribuir a la calidad del software.',
    },
    icon: TestTube2,
    skills: [
      'Jasmine',
      'Karma',
      'Unit Testing',
      'Scrum',
      'Kanban',
    ],
  },
];

function Skills() {
  const { i18n, t } = useTranslation();
  const language = i18n.language.startsWith('es') ? 'es' : 'en';

  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {language === 'es'
              ? 'Mi stack tecnológico'
              : 'My tech stack'}
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {t('nav.skills')}
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            {language === 'es'
              ? 'Tecnologías y herramientas que utilizo para desarrollar soluciones frontend, crear experiencias de usuario y conectar aplicaciones con servicios backend.'
              : 'Technologies and tools I use to build frontend solutions, create user experiences and integrate applications with backend services.'}
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title.en}
                className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  group.featured
                    ? 'border-blue-200 bg-white shadow-sm'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {group.title[language]}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {group.description[language]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg px-3 py-2 text-sm font-medium ${
                        group.featured
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;

