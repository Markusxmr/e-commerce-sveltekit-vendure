import type { Handle, RequestEvent, HandleServerError } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event)
  return response
}

export function getSession(event: RequestEvent) {
  // Give all locals to the session
  return event.locals
}

export const handleError: HandleServerError = ({ error, event }) => {
  // example integration with https://sentry.io/
  // Sentry.captureException(error, { event });

  return {
    message: 'Whoops!',
    code: error.code ?? 'UNKNOWN'
  };
}