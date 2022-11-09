import {
    CachePolicy, GQL_SearchProducts, GQL_GetCollection
} from '$houdini'
import { filtersStore } from '$stores/filters'
import { get } from 'svelte/store'
import { error, json } from '@sveltejs/kit';
import type { Load } from './__types/[slug]'

export const load: Load = async event => {
    const { slug } = event.params
    const { data } = await GQL_GetCollection.fetch({
        event,
        policy: CachePolicy.CacheAndNetwork,
        variables: {
            slug: slug,
        },
    })
    const collection = data?.collection;

    await GQL_SearchProducts.fetch({
        event,
        policy: CachePolicy.CacheAndNetwork,
        variables: {
            input: {
                collectionSlug: slug,
                groupByProduct: true,
                facetValueIds: get(filtersStore),
                take: 24,
                skip: 0,
            },
        },
    })

    if (!collection) {
        throw error(404, 'Not Found');
    }

    return {
        slug,
        collection,
        event: {
            parent: event?.parent,
        }
    }
}