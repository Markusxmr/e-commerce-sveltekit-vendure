<script lang="ts">
  import type { Stripe } from '@stripe/stripe-js'
  import { loadStripe } from '@stripe/stripe-js'
  import { onMount, setContext } from 'svelte'

  const key = 'stripe'
  const STRIPE_PUBLISHABLE_KEY = import.meta.env
    .VITE_STRIPE_PUBLISHABLE_KEY

  if (typeof STRIPE_PUBLISHABLE_KEY !== 'string') {
    throw new Error('STRIPE_PUBLISHABLE_KEY must be added to .env')
  }

  // ID of the connected stripe account
  export let stripeAccount: string | undefined = undefined
  let stripe: Stripe | null

  setContext(key, {
    getStripe: () => stripe,
  })

  onMount(async () => {
    stripe = await loadStripe(STRIPE_PUBLISHABLE_KEY)
  })
</script>

{#if stripe}
  <slot />
{/if}
