<script lang="ts">
  import { goto } from '$app/navigation'
  import { GQL_GetActiveOrder } from '$houdini'
  import { browser } from '$app/environment'
  import Cart from '$lib/components/cart/cart.svelte'
  import Hero from '$lib/components/hero.svelte'
  import Footer from '$lib/components/footer/footer.svelte'
  import PageTransition from '$lib/components/page-transition.svelte'
  import { onMount } from 'svelte'
  import '../app.css'
  import { userLocale } from '../stores/locale'
  import Header from '$lib/components/header/header.svelte'
  import StripeProvider from '$lib/stripe/stripe-provider.svelte'

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
  <StripeProvider>
    <Header />
    <Hero {key} />
    <main class="">
      <slot />
    </main>
    <Cart />
    <Footer />
  </StripeProvider>
</PageTransition>
