<script>
  import Link from '../link.svelte'
  import Price from './price.svelte'

  export let currencyCode
  export let item
</script>

<Link class="flex flex-col" to={`/products/${item?.slug}`}>
  <img
    class="rounded-xl flex-grow object-cover aspect-[7/8]"
    alt=""
    src={item?.productAsset?.preview + '?w=300&h=400'}
  />
  <div class="h-2" />
  <div class="text-sm text-gray-700">
    {item?.productName}
  </div>
  <div class="text-sm font-medium text-gray-900">
    <Price priceWithTax={item?.priceWithTax} {currencyCode} />
  </div>
</Link>
