<script lang="ts">
  export let to
  export let className = ''
  export let prefetch = null
</script>

{#if prefetch}
  <a class={className} href={to} data-sveltekit-prefetch><slot /></a>
{:else}
  <a class={className} href={to}><slot /></a>
{/if}
