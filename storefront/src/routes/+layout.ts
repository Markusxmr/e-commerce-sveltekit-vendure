import {
    GQL_GetCollections,
    GQL_GetCurrencyCode,
    GQL_GetTopSellers,
} from '$houdini'
import type { Load } from '@sveltejs/kit'

export const load: Load = async event => {
    // SSR for these 3 queries
    await GQL_GetTopSellers.fetch({ event })
    await GQL_GetCurrencyCode.fetch({ event })
    await GQL_GetCollections.fetch({ event })

    return { key: event.url.pathname }
}