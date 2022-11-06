<script lang="ts">
  import { GQL_GetActiveOrder, GQL_GetCollections } from '$houdini'
  import { cartOpen } from '$stores/cart'
  import ShoppingCart from './icons/shopping-cart.svelte'
  import Search from './search.svelte'

  $: collections =
    $GQL_GetCollections.data?.collections.items.filter(
      item => item?.parent?.name === '__root_collection__'
    ) || []
</script>

<header
  class="bg-gradient-to-r from-zinc-700 to-gray-900 shadow-lg transform shadow-xl sticky top-0 z-30 m-0"
>
  <div
    class="bg-zinc-100 text-gray-600 shadow-inner text-center text-sm py-2 px-2 xl:px-0"
  >
    <div
      class="max-w-6xl mx-2 md:mx-auto flex items-center justify-between"
    >
      <div>
        <p class="hidden sm:block">
          Exclusive: Get your own<!-- -->
          <!-- svelte-ignore security-anchor-rel-noreferrer -->
          <a
            href="https://github.com/Markusxmr/e-commerce-sveltekit-vendure"
            target="_blank"
            class="underline">FREE storefront starter kit</a
          >
        </p>
      </div>
      <div>
        <a class="flex space-x-1" href="/sign-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            class="w-4 h-4"
            ><path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg><span>Sign In</span>
        </a>
      </div>
    </div>
  </div>
  <div class="max-w-6xl mx-auto p-4 flex items-center space-x-4">
    <h1 class="text-white w-10">
      <a href={`/`}>
        <img
          class="h-8"
          src="/cube-logo-line-icon-nostroke.png"
          alt="vendure logo"
        />
      </a>
    </h1>
    <div class="flex space-x-4 hidden sm:block">
      {#each collections as collection}
        <a
          href={`/category/${collection.slug}`}
          class="text-sm md:text-base text-gray-200 hover:text-whit"
        >
          {collection.name}
        </a>
      {/each}
    </div>
    <Search />

    <div class="hidden px-2 mx-2 navbar-center lg:flex" />
    <div class="">
      <button
        class="relative w-9 h-9 bg-white bg-opacity-20 rounded text-white p-1"
        aria-label="Open cart tray"
        on:click={() => {
          $cartOpen = !$cartOpen
        }}
      >
        <div
          class="absolute rounded-full -top-2 -right-2 bg-primary-600 w-6 h-6 bg-secondary text-secondary-content rounded-2xl"
        >
          {$GQL_GetActiveOrder?.data?.activeOrder?.totalQuantity || 0}
        </div>

        <ShoppingCart />
      </button>
    </div>
  </div>
</header>
