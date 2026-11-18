
import { BriefcaseBusiness } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const experience = [
  {
    company: 'TCS (Tata Consultancy Services)',
    role: {
      en: 'Front End Developer',
      es: 'Desarrollador Frontend',
    },
    period: {
      en: 'Oct 2023 – Jan 2026',
      es: 'Oct 2023 – Ene 2026',
    },
    description: {
      en: [
        'Developed frontend solutions for digital banking and insurance contracting platforms.',
        'Built and maintained reusable UI components using Angular 18 and TypeScript.',
        'Integrated REST APIs and developed responsive interfaces using HTML5 and Sass.',
        'Applied lazy loading and code splitting to improve application loading and structure.',
      ],
      es: [
        'Desarrollé soluciones frontend para plataformas de banca digital y contratación de seguros.',
        'Construí y mantuve componentes reutilizables utilizando Angular 18 y TypeScript.',
        'Integré APIs REST y desarrollé interfaces responsivas utilizando HTML5 y Sass.',
        'Implementé lazy loading y code splitting para mejorar la carga y estructura de las aplicaciones.',
      ],
    },
    technologies: [
      'Angular 18',
      'TypeScript',
      'HTML5',
      'Sass',
      'REST APIs',
      'Postman',
    ],
  },
  {
    company: 'Minsait (Indra)',
    role: {
      en: 'Front End Developer',
      es: 'Desarrollador Frontend',
    },
    period: {
      en: 'Apr 2021 – Apr 2023',
      es: 'Abr 2021 – Abr 2023',
    },
    description: {
      en: [
        'Developed frontend features for insurance contracting applications.',
        'Implemented dashboards and user interfaces based on business requirements and design mockups.',
        'Collaborated in an Agile Scrum environment and supported API integration and testing.',
      ],
      es: [
        'Desarrollé funcionalidades frontend para aplicaciones de contratación de seguros.',
        'Implementé dashboards e interfaces de usuario basados en requerimientos de negocio y mockups.',
        'Colaboré en un entorno ágil Scrum y apoyé la integración y pruebas de APIs.',
      ],
    },
    technologies: [
      'Angular 15',
      'HTML5',
      'Sass',
      'Postman',
      'Git',
      'Scrum',
    ],
  },
  {
    company: 'Nova Solutions Systems',
    role: {
      en: 'Front End Developer',
      es: 'Desarrollador Frontend',
    },
    period: {
      en: 'Jan 2020 – Jul 2020',
      es: 'Ene 2020 – Jul 2020',
    },
    description: {
      en: [
        'Developed frontend functionality for debit and credit account opening processes.',
        'Built user interfaces using Angular 8, JavaScript, HTML5 and SCSS.',
        'Worked with identity verification integration and frontend unit testing.',
      ],
      es: [
        'Desarrollé funcionalidades frontend para procesos de apertura de cuentas de débito y crédito.',
        'Construí interfaces utilizando Angular 8, JavaScript, HTML5 y SCSS.',
        'Trabajé con integración de verificación de identidad y pruebas unitarias frontend.',
      ],
    },
    technologies: [
      'Angular 8',
      'JavaScript',
      'HTML5',
      'SCSS',
      'Incode',
      'Jasmine',
      'Karma',
      'Postman',
    ],
  },
  {
    company: 'Neoris',
    role: {
      en: 'Developer',
      es: 'Desarrollador',
    },
    period: {
      en: 'Nov 2016 – Feb 2019',
      es: 'Nov 2016 – Feb 2019',
    },
    description: {
      en: [
        'Developed paperless user interfaces for contract consultation, updating and downloading.',
        'Implemented frontend screens using AngularJS, JavaScript, HTML5 and Bootstrap.',
        'Collaborated with backend services built with Java and Spring.',
      ],
      es: [
        'Desarrollé interfaces paperless para la consulta, actualización y descarga de contratos.',
        'Implementé pantallas frontend utilizando AngularJS, JavaScript, HTML5 y Bootstrap.',
        'Colaboré con servicios backend desarrollados con Java y Spring.',
      ],
    },
    technologies: [
      'AngularJS',
      'JavaScript',
      'HTML5',
      'Bootstrap',
      'Java',
      'Spring',
      'SOAP UI',
    ],
  },
];

function Experience() {
  const { t, i18n } = useTranslation();
  const language = i18n.language.startsWith('es') ? 'es' : 'en';

  return (
    <section
      id="experience"
      className="scroll-mt-24 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {language === 'es'
              ? 'Trayectoria profesional'
              : 'Career journey'}
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {t('nav.experience')}
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600">
            {language === 'es'
              ? 'Más de 7 años desarrollando soluciones frontend para diferentes sectores y necesidades de negocio.'
              : 'Over 7 years of experience building frontend solutions for different industries and business needs.'}
          </p>
        </header>

        <div className="relative space-y-8 border-l-2 border-slate-200 pl-6 md:pl-8">
          {experience.map((job) => (
            <article
              key={job.company}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[33px] top-8 h-4 w-4 rounded-full border-4 border-white bg-blue-600 ring-2 ring-blue-100 md:-left-[41px]"
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-blue-600">
                    <BriefcaseBusiness size={18} aria-hidden="true" />
                    <span className="text-sm font-medium">
                      {job.period[language]}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {job.company}
                  </h3>

                  <p className="mt-1 font-medium text-slate-600">
                    {job.role[language]}
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {job.description[language].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-slate-600"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

