
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { resolveMx } from 'node:dns/promises';
import { domainToASCII } from 'node:url';

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

const genericAddresses = new Set([
  'dev@dev.com',
  'test@test.com',
  'demo@demo.com',
  'example@example.com',
]);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({
      valid: false,
      message: 'Method not allowed.',
    });
  }

  const email =
    typeof req.body?.email === 'string'
      ? req.body.email.trim().toLowerCase()
      : '';

  // Validate basic email format.
  if (
    !email ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return res.status(400).json({
      valid: false,
      message: 'Invalid email format.',
    });
  }

  const parts = email.split('@');

  if (parts.length !== 2) {
    return res.status(400).json({
      valid: false,
      message: 'Invalid email format.',
    });
  }

  const rawDomain = parts[1];
  const domain = domainToASCII(rawDomain);

  // Validate domain.
  if (!domain || domain.length > 253) {
    return res.status(400).json({
      valid: false,
      message: 'Invalid domain.',
    });
  }

  const domainRegex =
    /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i;

  if (!domainRegex.test(domain)) {
    return res.status(400).json({
      valid: false,
      message: 'Invalid domain format.',
    });
  }

  // Reject known test and disposable email addresses.
  if (
    blockedDomains.has(domain) ||
    genericAddresses.has(email)
  ) {
    return res.status(422).json({
      valid: false,
      message: 'Test or generic email addresses are not allowed.',
    });
  }

  try {
    // Check whether the domain has valid MX records.
    const records = await resolveMx(domain);

    const hasValidMx = records.some(
      (record) =>
        record.exchange &&
        record.exchange !== '.' &&
        record.exchange.length > 0
    );

    if (!hasValidMx) {
      return res.status(422).json({
        valid: false,
        message: 'This domain does not accept email.',
      });
    }

    return res.status(200).json({
      valid: true,
      message: 'Email domain verified.',
    });
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;

    if (code === 'ENOTFOUND' || code === 'ENODATA') {
      return res.status(422).json({
        valid: false,
        message: 'This domain does not have valid email records.',
      });
    }

    return res.status(503).json({
      valid: false,
      temporary: true,
      message: 'Email verification is temporarily unavailable.',
    });
  }
}

