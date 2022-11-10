import {
    CachePolicy,
    GQL_GetCollections,
    GQL_GetCurrencyCode,
    GQL_GetTopSellers,
} from '$houdini'
import type { Load } from '@sveltejs/kit'

export const load: Load = async event => {
    // SSR for these 3 queries
    await GQL_GetTopSellers.fetch({ event, policy: CachePolicy.CacheAndNetwork })
    await GQL_GetCurrencyCode.fetch({ event, policy: CachePolicy.CacheAndNetwork })
    await GQL_GetCollections.fetch({ event, policy: CachePolicy.CacheAndNetwork })

    return { key: event.url.pathname }
}