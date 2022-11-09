<script lang="ts">
  import MinusSmIcon from '../icons/minus.svelte'
  import PlusSmIcon from '../icons/plus.svelte'
  import XCircle from '../icons/x-circle.svelte'
  import { FacetFilterTracker } from './facet-filter-tracker'

  export let facetFilterTracker: FacetFilterTracker
  export let mobileFiltersOpen: boolean
  export let setMobileFiltersOpen: (value: boolean) => void

  const submit = () => {}
  let searchParams
  const q = searchParams.getAll('q')

  function handleChange(event) {
    submit(event.currentTarget, { replace: false })
  }
</script>

<div show={mobileFiltersOpen}>
  <div
    as="div"
    class="relative z-40 lg:hidden"
    onClose={setMobileFiltersOpen}
  >
    <div
      enter="transition-opacity ease-linear duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div class="fixed inset-0 bg-black bg-opacity-25" />
    </div>

    <div class="fixed inset-0 flex z-40">
      <div
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div
          class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto"
        >
          <div class="px-4 flex items-center justify-between">
            <h2 class="text-lg font-medium text-gray-900">Filters</h2>
            <button
              type="button"
              class="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
              on:click={() => setMobileFiltersOpen(false)}
            >
              <span class="sr-only"> Close menu </span>
              <span aria-hidden="true">
                <XCircle className="h-6 w-6" />
              </span>
            </button>
          </div>
          <form
            class="mt-4 border-t border-gray-200"
            on:change={handleChange}
          >
            <input
              type="hidden"
              name="q"
              value={q}
              bind:this={searchParams}
            />
            {#each facetFilterTracker.facetsWithValues as facet}
              <div
                as="div"
                defaultOpen={true}
                class="border-t border-gray-200 px-4 py-6"
              >
                <h3 class="-mx-2 -my-3 flow-root">
                  <div
                    class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                  >
                    <span class="font-medium text-gray-900 uppercase">
                      {facet.name}
                    </span>
                    <span class="ml-6 flex items-center">
                      {#if open}
                        <span aria-hidden="true">
                          <MinusSmIcon className="h-5 w-5" />
                        </span>
                      {:else}
                        <span aria-hidden="true">
                          <PlusSmIcon className="h-5 w-5" />
                        </span>
                      {/if}
                    </span>
                  </div>
                </h3>
                <div class="pt-6">
                  <div class="space-y-6">
                    {#each facet.values as value, optionIdx}
                      <div class="flex items-center">
                        <input
                          id={`filter-mobile-${facet.id}-${optionIdx}`}
                          name={`fvid`}
                          value={value.id}
                          type="checkbox"
                          checked={value.selected}
                          on:change={() => {}}
                          class="h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                        />
                        <label
                          for={`filter-mobile-${facet.id}-${optionIdx}`}
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          {value.name}
                        </label>
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            {/each}
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<form class="hidden lg:block" on:change={handleChange}>
  <input type="hidden" name="q" value={q} />
  {#each facetFilterTracker.facetsWithValues as facet}
    <div defaultOpen={true} class="border-b border-gray-200 py-6">
      <h3 class="-my-3 flow-root">
        <div
          class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
        >
          <span class="font-medium text-gray-900 uppercase">
            {facet.name}
          </span>
          <span class="ml-6 flex items-center">
            {#if open}
              <span aria-hidden="true">
                <MinusSmIcon className="h-5 w-5" />
              </span>
            {:else}
              <span aria-hidden="true">
                <PlusSmIcon className="h-5 w-5" />
              </span>
            {/if}
          </span>
        </div>
      </h3>
      <div class="pt-6">
        <div class="space-y-4">
          {#each facet.values as value, optionIdx}
            <div class="flex items-center">
              <input
                id={`filter-${facet.id}-${optionIdx}`}
                name={`fvid`}
                value={value.id}
                type="checkbox"
                checked={value.selected}
                on:change={() => {}}
                class="h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
              />
              <label
                for={`filter-${facet.id}-${optionIdx}`}
                class="ml-3 text-sm text-gray-600"
              >
                {value.name}
              </label>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</form>
