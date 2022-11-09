<script lang="ts">
  import { GQL_GetCollections } from '$houdini'
  import CollectionCard from '$lib/components/collections/collection-card.svelte'
  import BookOpenIcon from '$lib/components/icons/book-open.svelte'

  $: collections =
    $GQL_GetCollections.data?.collections.items.filter(
      item => item.parent.name === '__root_collection__'
    ) ?? []

  const headerImage = collections?.[0]?.featuredAsset?.preview
</script>

<div class="relative">
  <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
    {#if headerImage}
      <img
        class="absolute inset-0 w-full"
        src={headerImage + '?w=800'}
        alt="header"
      />
    {/if}
    <div
      class="absolute inset-0 bg-gradient-to-br from-zinc-400 to-black mix-blend-darken"
    />
  </div>
  <div
    aria-hidden="true"
    class="absolute inset-0 bg-gray-900 opacity-50"
  />
  <div
    class="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0"
  >
    <div class="relative bg-zinc-800 bg-opacity-0 rounded-lg p-0">
      <h1
        class="text-6xl text-transparent bg-clip-text font-extrabold tracking-normal lg:text-6xl bg-gradient-to-r from-yellow-600 via-red-500 to-blue-600"
      >
        Vendure Sveltekit Starter
      </h1>
    </div>

    <p class="mt-4 text-2xl text-white">
      A headless commerce storefront starter kit built with{' '}
      <a
        href="https://www.vendure.io"
        class="text-blue-300 hover:text-blue-500"
      >
        Vendure
      </a>{' '}
      &{' '}
      <a
        href="~/routes/__cart/index"
        class="text-red-300 hover:text-red-500"
      >
        Sveltekit
      </a>
    </p>
    <p class="mt-4 text-gray-300 space-x-1">
      <BookOpenIcon className="w-5 h-5 inline" />
      <span>Read more:</span>
      <a
        class="text-primary-200 hover:text-primary-400"
        href="https://www.vendure.io/blog/2022/05/lightning-fast-headless-commerce-with-vendure-and-sveltekit"
      >
        Lightning Fast Headless Commerce with Vendure and Sveltekit
      </a>
    </p>
  </div>
</div>

<section
  aria-labelledby="category-heading"
  class="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8"
>
  <div class="px-4 sm:px-6 lg:px-8 xl:px-0">
    <h2
      id="category-heading"
      class="text-2xl font-light tracking-tight text-gray-900"
    >
      Shop by Category
    </h2>
  </div>

  <div class="mt-4 flow-root">
    <div class="-my-2">
      <div
        class="box-content py-2 px-2 relative overflow-x-auto xl:overflow-visible"
      >
        <div
          class="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:gap-x-8"
        >
          {#each collections as collection}
            <CollectionCard {collection} />
          {/each}
        </div>
      </div>
    </div>
  </div>

  <div class="mt-6 px-4 sm:hidden">
    <a
      href="~/routes/__cart/index#"
      class="block text-sm font-semibold text-primary-600 hover:text-primary-500"
    >
      Browse all categories
      <span aria-hidden="true"> &rarr;</span>
    </a>
  </div>
</section>
