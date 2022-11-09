
import { CachePolicy, GQL_SearchProducts } from '$houdini'
import type { Load } from '@sveltejs/kit'
import { filtersStore } from '$stores/filters'
import { get } from 'svelte/store'

export const load: Load = async event => {
    const { searchTerm } = event.params

    await GQL_SearchProducts.fetch({
        event,
        policy: CachePolicy.CacheAndNetwork,
        variables: {
            input: {
                collectionSlug: '',
                term: searchTerm,
                groupByProduct: true,
                facetValueIds: get(filtersStore),
                take: 24,
                skip: 0,
            },
        },
    })

    return {
        searchTerm,
        event: {
            parent: event?.parent,
        }
    }
}