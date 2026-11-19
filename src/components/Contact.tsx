
import {
  Mail,
  Send,
  MessageSquare,
  User,
} from 'lucide-react';

import { FaLinkedin } from 'react-icons/fa';

import { useTranslation } from 'react-i18next';
import { useState, type FormEvent } from 'react';

const blockedDomains = new Set([
  'example.com',
  'example.org',
  'example.net',
  'test.com',
  'localhost',
  'mailinator.com',
  '10minutemail.com',
  'guerrillamail.com',
]);

function hasValidEmailFormat(email: string): boolean {
  const parts = email.trim().toLowerCase().split('@');

  if (parts.length !== 2) {
    return false;
  }

  const [localPart, domain] = parts;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return false;
  }

  if (blockedDomains.has(domain)) {
    return false;
  }

  if (localPart === domain.split('.')[0]) {
    return false;
  }

  return true;
}

function Contact() {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language.startsWith('es');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedName = name.trim().replace(/\s+/g, ' ');
    const normalizedEmail = email.trim().toLowerCase();

    const nameRegex =
      /^[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)*$/u;

    if (!nameRegex.test(normalizedName)) {
      setNameError(
        isSpanish
          ? 'Ingresa un nombre válido. Utiliza únicamente letras.'
          : 'Enter a valid name using letters only.'
      );
      return;
    }

    setNameError('');

    if (!hasValidEmailFormat(normalizedEmail)) {
      setEmailError(
        isSpanish
          ? 'Ingresa un correo con un formato y dominio válidos.'
          : 'Enter an email with a valid format and domain.'
      );
      return;
    }

    setEmailError('');
    setIsVerifying(true);

    try {
      const response = await fetch('/api/validate-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: normalizedEmail,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.valid) {
        setEmailError(
          result.temporary
            ? (
                isSpanish
                  ? 'No fue posible verificar el dominio en este momento. Inténtalo nuevamente.'
                  : 'The domain could not be verified right now. Please try again.'
              )
            : (
                isSpanish
                  ? 'El dominio no parece tener registros válidos para recibir correos.'
                  : 'The domain does not appear to have valid email records.'
              )
        );

        return;
      }

      const subject = encodeURIComponent(
        isSpanish
          ? `Contacto desde mi portafolio - ${normalizedName}`
          : `Portfolio contact - ${normalizedName}`
      );

      const body = encodeURIComponent(
        `${isSpanish ? 'Nombre' : 'Name'}: ${normalizedName}\n` +
        `${isSpanish ? 'Correo' : 'Email'}: ${normalizedEmail}\n\n` +
        `${isSpanish ? 'Mensaje' : 'Message'}:\n${message.trim()}`
      );

      window.location.href =
        `mailto:erikgonzalopalomares@gmail.com?subject=${subject}&body=${body}`;
    } catch {
      setEmailError(
        isSpanish
          ? 'No fue posible conectar con el servicio de validación. Inténtalo nuevamente.'
          : 'Could not connect to the verification service. Please try again.'
      );
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {isSpanish ? 'Hablemos' : "Let's connect"}
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {isSpanish
              ? '¿Tienes un proyecto en mente?'
              : 'Have a project in mind?'}
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            {isSpanish
              ? 'Estoy abierto a nuevas oportunidades profesionales y colaboraciones. Si buscas un desarrollador frontend con experiencia en Angular y React, será un gusto conversar contigo.'
              : "I'm open to new professional opportunities and collaborations. If you're looking for a frontend developer with Angular and React experience, I'd be happy to connect."}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <Mail size={23} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900">
                    Email
                  </h3>

                  <a
                    href="mailto:erikgonzalopalomares@gmail.com"
                    className="break-all text-sm text-slate-600 transition hover:text-blue-600"
                  >
                    erikgonzalopalomares@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/erik-palomares-875467b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <FaLinkedin />

              <div>
                <h3 className="font-bold text-slate-900">
                  LinkedIn
                </h3>

                <p className="text-sm text-slate-600">
                  {isSpanish
                    ? 'Conectemos profesionalmente'
                    : "Let's connect professionally"}
                </p>
              </div>
            </a>

            <div className="rounded-2xl bg-blue-600 p-6 text-white">
              <MessageSquare size={28} />

              <h3 className="mt-4 text-lg font-bold">
                {isSpanish
                  ? 'Disponible para nuevas oportunidades'
                  : 'Open to new opportunities'}
              </h3>

              <p className="mt-2 text-sm leading-7 text-white">
                {isSpanish
                  ? 'Interesado en posiciones de Frontend Developer y Senior Frontend Developer.'
                  : 'Interested in Frontend Developer and Senior Frontend Developer opportunities.'}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h3 className="text-xl font-bold text-slate-900">
              {isSpanish ? 'Envíame un mensaje' : 'Send me a message'}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {isSpanish
                ? 'Completa el formulario para preparar un correo.'
                : 'Fill out the form to prepare an email.'}
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  {isSpanish ? 'Nombre' : 'Name'}
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={name}
                    onChange={(event) => {
                      const cleanName = event.target.value
                        .replace(/[^\p{L}\p{M} '-]/gu, '')
                        .replace(/\s{2,}/g, ' ');

                      setName(cleanName);
                      setNameError('');
                    }}
                    aria-invalid={Boolean(nameError)}
                    aria-describedby={
                      nameError ? 'contact-name-error' : undefined
                    }
                    placeholder={isSpanish ? 'Tu nombre' : 'Your name'}
                    className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {nameError && (
                  <p
                    id="contact-name-error"
                    role="alert"
                    className="mt-2 text-sm text-red-600"
                  >
                    {nameError}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  {isSpanish ? 'Correo electrónico' : 'Email address'}
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setEmailError('');
                    }}
                    aria-invalid={Boolean(emailError)}
                    aria-describedby={
                      emailError ? 'contact-email-error' : undefined
                    }
                    placeholder="example@email.com"
                    className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {emailError && (
                  <p
                    id="contact-email-error"
                    role="alert"
                    className="mt-2 text-sm text-red-600"
                  >
                    {emailError}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  {isSpanish ? 'Mensaje' : 'Message'}
                </label>

                <textarea
                  id="contact-message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={
                    isSpanish
                      ? 'Cuéntame cómo podemos colaborar...'
                      : 'Tell me how we can work together...'
                  }
                  className="w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                disabled={isVerifying}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isVerifying
                  ? (
                      isSpanish
                        ? 'Verificando correo...'
                        : 'Verifying email...'
                    )
                  : (
                      isSpanish
                        ? 'Preparar correo'
                        : 'Prepare email'
                    )}

                <Send size={17} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

