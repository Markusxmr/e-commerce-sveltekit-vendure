import {
    GQL_SearchProducts,
} from '$houdini'
import { filtersStore } from '$stores/filters'
import { get } from 'svelte/store'
import type { Load } from './__types/[slug]'

export const load: Load = async event => {
    const { slug } = event.params

    await GQL_SearchProducts.fetch({
        event,
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

    return {
        slug,
        event: {
            parent: event?.parent,
        }
    }
}