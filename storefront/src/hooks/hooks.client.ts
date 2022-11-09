import type { HandleClientError } from '@sveltejs/kit';

export const handleError: HandleClientError = ({ error, event }) => {
    // example integration with https://sentry.io/
    // Sentry.captureException(error, { event });

    return {
        message: 'Whoops!',
        code: error.code ?? 'UNKNOWN'
    };
}