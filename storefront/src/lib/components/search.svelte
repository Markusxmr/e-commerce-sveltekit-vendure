<script>
  import { goto } from '$app/navigation'
  import { cubicOut } from 'svelte/easing'
  import { tweened } from 'svelte/motion'

  let searchTerm = ''

  const submitSearchTerm = () => {
    goto(`/search/${searchTerm}`)
  }

  const width = tweened(0, {
    duration: 200,
    easing: cubicOut,
  })
</script>

<div class="flex-1 md:pr-8">
  <form
    class="mb-3 xl:w-96"
    on:submit|preventDefault={submitSearchTerm}
    style="width: 100%"
  >
    <div class="relative">
      <input
        class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        mt-3
        "
        placeholder="Search"
        name="search_product"
        bind:value={searchTerm}
        type="text"
      />
    </div>
  </form>
</div>
