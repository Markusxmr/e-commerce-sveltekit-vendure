<script lang="ts">
  import FilterIcon from './icons/filter.svelte'

  export let filterCount: number
  export let onClick: () => void
</script>

<button
  type="button"
  class="flex space-x-2 items-center border rounded p-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
  on:click={onClick}
>
  {#if !!filterCount}
    <span
      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-200 text-primary-800"
    >
      {filterCount}
    </span>
  {/if}
  <span>Filters</span>
  <div aria-hidden="true">
    <FilterIcon className="w-5 h-5" />
  </div>
</button>
