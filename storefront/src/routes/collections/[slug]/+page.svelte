<script lang="ts">
  import { page } from '$app/stores'
  import {
    GQL_GetCollections,
    GQL_GetCurrencyCode,
    GQL_SearchProducts,
    GQL_GetCollection,
  } from '$houdini'
  import Breadcrumbs from '$lib/components/breadcrumbs.svelte'
  import CollectionCard from '$lib/components/collections/collection-card.svelte'
  import FacetFilterControls from '$lib/components/facet-filter/facet-filter-controls.svelte'
  import FiltersButton from '$lib/components/filters-button.svelte'
  import Filters from '$lib/components/filters.svelte'
  import ProductCard from '$lib/components/products/product-card.svelte'
  import { filtersStore } from '$stores/filters'
  import { get } from 'svelte/store'

  export let data
  $: ({ slug, event } = data)

  let mobileFiltersOpen = false
  let prevFiltersStore = $filtersStore
  $: collection = $GQL_GetCollection?.data?.collection
  $: currencyCode =
    $GQL_GetCurrencyCode?.data?.activeChannel?.currencyCode
  $: collections =
    $GQL_GetCollections.data?.collections?.items?.filter(
      item => item?.parent?.slug === slug
    ) ?? []

  $: products = $GQL_SearchProducts?.data?.search?.items
  $: facetValues = $GQL_SearchProducts?.data?.search?.facetValues

  $: if (prevFiltersStore !== $filtersStore) {
    GQL_SearchProducts.fetch({
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
    }).then(() => (prevFiltersStore = $filtersStore))
  }
</script>

<div class="max-w-6xl mx-auto px-4">
  <div class="flex justify-between items-center">
    <h2
      class="text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8"
    >
      {collection?.name}
    </h2>

    <FiltersButton
      filterCount={get(filtersStore).length}
      onClick={() => (mobileFiltersOpen = true)}
    />
  </div>

  <Breadcrumbs items={collection?.breadcrumbs} />

  {#if collection?.children}
    <div
      class="max-w-2xl mx-auto py-16 sm:py-16 lg:max-w-none border-b mb-16"
    >
      <h2 class="text-2xl font-light text-gray-900">Collections</h2>
      <div
        class="mt-6 grid max-w-xs sm:max-w-none mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4"
      >
        {#each collection.children ?? [] as child}
          <CollectionCard collection={child} />
        {/each}
      </div>
    </div>
  {/if}

  <div class="mt-6 grid sm:grid-cols-5 gap-x-4">
    <!-- <FacetFilterControls
        facetFilterTracker={facetValuesTracker.current}
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={(val) => { mobileFiltersOpen = val }}
    /> -->
    {#if Object.entries(facetValues ?? {}).length >= 1}
      <div class="lg:block">
        <div class="border-b border-gray-200 py-6">
          <Filters {facetValues} />
        </div>
      </div>
    {/if}
    <div class="sm:col-span-5 lg:col-span-4">
      <div
        class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        {#if products?.length >= 1}
          {#each products as item}
            <ProductCard {currencyCode} {item} />
          {/each}
        {/if}
      </div>
    </div>
  </div>
</div>
