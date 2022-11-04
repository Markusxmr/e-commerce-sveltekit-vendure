<script lang="ts">
  import { GQL_GetCurrencyCode, GQL_SearchProducts } from '$houdini'
  import Filters from '$lib/components/filters.svelte'
  import SadFace from '$lib/components/icons/sad-face.svelte'
  import ProductCard from '$lib/components/product-card.svelte'
  import { filtersStore } from '$stores/filters'
  import { get } from 'svelte/store'

  export let data
  $: ({ event, searchTerm } = data)
  let prevFiltersStore = $filtersStore

  let currencyCode =
    $GQL_GetCurrencyCode?.data?.activeChannel?.currencyCode

  $: products = $GQL_SearchProducts?.data?.search?.items || []
  $: facetValues =
    $GQL_SearchProducts?.data?.search?.facetValues || []

  $: if (prevFiltersStore !== $filtersStore) {
    GQL_SearchProducts.fetch({
      event,
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
    }).then(() => (prevFiltersStore = $filtersStore))
  }
</script>

<div class="flex">
  {#if Object.entries(products).length >= 1}
    <Filters {facetValues} />
    <div
      class="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      {#each products as item}
        <ProductCard {currencyCode} {item} />
      {/each}
    </div>
  {:else}
    <h3 class="text-5xl text-neutral mb-8">No results</h3>
    <SadFace height={200} width={200} />
  {/if}
</div>
