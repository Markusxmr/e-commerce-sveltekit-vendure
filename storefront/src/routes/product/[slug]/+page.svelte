<script lang="ts">
  import {
    GQL_GetActiveOrder,
    GQL_AddToCart,
    GQL_GetCurrencyCode,
    GQL_GetProductDetail,
    type Variant$data,
    CachePolicy,
  } from '$houdini'
  import { formatCurrency } from '$lib/utils'
  import Breadcrumbs from './components/breadcrumbs.svelte'
  import ShippingInfo from './components/shipping-info.svelte'

  export let data

  $: product = $GQL_GetProductDetail?.data?.product

  $: currencyCode =
    $GQL_GetCurrencyCode?.data?.activeChannel?.currencyCode

  $: breadcrumbs =
    product &&
    product.collections &&
    product.collections[product.collections.length - 1].breadcrumbs

  let selected: Variant$data = product?.variants?.[0]
  let quantity = 1

  const addToCart = async () => {
    let id = !selected ? product.variants[0].id : selected.id
    let variables = { productVariantId: id, quantity }

    await GQL_AddToCart.mutate({ ...variables })

    // If we never had activeOrder, we need to fetch it again after adding to cart
    // Only once, because we don't want to fetch it every time we add to cart!
    if ($GQL_GetActiveOrder.data?.activeOrder === null) {
      await GQL_GetActiveOrder.fetch({
        policy: CachePolicy.NetworkOnly,
      })
    }
  }
</script>

{#if product}
  <div class="my-5">
    <Breadcrumbs {breadcrumbs} />
  </div>

  <div class="flex">
    <div class="basis-full">
      <img
        src={product.featuredAsset.preview}
        alt={product.featuredAsset.name}
      />
    </div>
    <div class="basis-full ml-8">
      <h2 class="text-5xl text-neutral mb-8">{product.name}</h2>
      {#if product.variants.length > 1}
        <select
          bind:value={selected}
          class="select select-bordered select-primary w-full max-w-xs mb-2"
          name=""
          id=""
        >
          {#each product.variants as variant}
            <option value={variant}>
              {variant.name}
            </option>
          {/each}
        </select>
      {/if}
      <div class="flex items-center justify-between my-4">
        <div class="flex items-center">
          <p
            class="inline-block align-bottom text-2xl text-neutral mr-4"
          >
            {formatCurrency(
              currencyCode,
              selected?.priceWithTax ||
                product.variants[0].priceWithTax
            ) || 0}
          </p>
          <div>
            <input
              type="number"
              min="0"
              max="99"
              placeholder="1"
              class="input input-primary input-bordered caret-primary"
              bind:value={quantity}
            />
            <button
              disabled={$GQL_GetActiveOrder.data === null}
              on:click={addToCart}
              class="rounded-lg btn btn-primary"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div class="text-lg">
        {product.description}
      </div>

      <div class="mt-2 flex items-center space-x-2">
        <span class="text-gray-500">
          {selected?.sku || product.variants[0].sku}
        </span><span
          class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800"
          >In stock</span
        >
      </div>

      <ShippingInfo />
    </div>
  </div>
{/if}
