<div class="my-5">
  <!-- TODO -->
  {#each breadcrumbs as breadcrumb}
    {#if breadcrumb.slug === '__root_collection__'}
      <a
        data-sveltekit-prefetch
        class="link link-primary mr-2 no-underline"
        href="/">Home</a
      >
    {:else}
      <span class="before:mr-2 before:content-['/']" />
      <a
        data-sveltekit-prefetch
        class="link link-primary mr-2 no-underline"
        href={`/category/${breadcrumb.slug}`}
      >
        {breadcrumb.name}
      </a>
    {/if}
  {/each}
</div>

<style>
  .no-underline {
    text-decoration: none;
  }
</style>
