<script lang="ts">
  // import { CurrencyCode } from '$houdini'

  type ProductCardProps = {
    productAsset
    productName
    slug
    priceWithTax
    currencyCode
  }

  export let priceWithTax: number | ProductCardProps['priceWithTax'],
    currencyCode: ProductCardProps['currencyCode']

  export function formatPrice(value: number, currency: string) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(value / 100)
  }
</script>

{#if priceWithTax == null || !currencyCode}
  <span />
{:else if typeof priceWithTax === 'number'}
  <span>{formatPrice(priceWithTax, currencyCode)}</span>
{:else if 'value' in priceWithTax}
  <span>{formatPrice(priceWithTax.value, currencyCode)}</span>
{:else if priceWithTax.min === priceWithTax.max}
  <span>{formatPrice(priceWithTax.min, currencyCode)}</span>
{:else}
  <span>
    {formatPrice(priceWithTax.min, currencyCode)} -{' '}
    {formatPrice(priceWithTax.max, currencyCode)}
  </span>
{/if}
