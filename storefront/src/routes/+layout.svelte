<script lang="ts">
  import { goto } from '$app/navigation'
  import { GQL_GetActiveOrder } from '$houdini'
  import { browser } from '$app/environment'
  import Cart from '$lib/components/cart.svelte'
  import Footer from '$lib/components/footer.svelte'
  import Hero from '$lib/components/hero.svelte'
  import PageTransition from '$lib/components/page-transition.svelte'
  import { onMount } from 'svelte'
  import '../app.css'
  import { userLocale } from '../stores/locale'
  import Header from '$lib/components/header.svelte'

  export let data
  $: ({ key } = data)

  // Only browser side because depending on the localstorage
  $: browser && GQL_GetActiveOrder.fetch()

  onMount(async () => {
    userLocale.set(navigator.languages[0] as any)
  })
</script>

<svelte:head>
  <title>Vendure & SvelteKit & KitQL & Houdini</title>
</svelte:head>

<PageTransition refresh={key}>
  <Cart />
  <Header />
  <Hero {key} />
  <main class="container-fluid max-w-6xl mx-auto px-4 mb-20">
    <slot />
  </main>
  <Footer />
</PageTransition>
