<script lang="ts">
  import {
    GQL_GetActiveOrder,
    GQL_AddItemToOrder,
    GQL_GetCurrencyCode,
    GQL_GetProductDetail,
    type Variant$data,
    CachePolicy,
  } from '$houdini'
  import { APP_META_TITLE } from '$lib/constants'
  import ScrollableContainer from '$lib/components/products/scrollable-container.svelte'
  import TopReviews from '$lib/components/products/top-reviews.svelte'
  import StockLevelLabel from '$lib/components/products/stock-level-label.svelte'
  import Alert from '$lib/components/alert.svelte'
  import HeartIcon from '$lib/components/icons/heart.svelte'
  import CheckIcon from '$lib/components/icons/checkmark.svelte'
  import Price from '$lib/components/products/price.svelte'
  import Breadcrumbs from '$lib/components/breadcrumbs.svelte'

  export const meta = ({ data }) => {
    return {
      title: data?.product?.name
        ? `${data?.product?.name} - ${APP_META_TITLE}`
        : APP_META_TITLE,
    }
  }
  const findVariantById = (id: string) =>
    product?.variants?.find(v => v.id === id) ?? null

  $: product = $GQL_GetProductDetail?.data?.product
  $: currencyCode =
    $GQL_GetCurrencyCode?.data?.activeChannel?.currencyCode
  let quantity = 1
  let selectedVariantId = product?.variants?.[0].id
  let selectedVariant: Variant$data =
    findVariantById(selectedVariantId)
  const { error } = { error: null }

  const transition: any = { state: 'idle' }
  $: if (!selectedVariant) {
    selectedVariantId = product?.variants?.[0]?.id
  }

  const addItemToOrder = async () => {
    let id = !selectedVariant
      ? product?.variants?.[0].id
      : selectedVariant.id
    let variables = { productVariantId: id, quantity }

    await GQL_AddItemToOrder.mutate({ ...variables })

    // If we never had activeOrder, we need to fetch it again after adding to cart
    // Only once, because we don't want to fetch it every time we add to cart!
    if ($GQL_GetActiveOrder.data?.activeOrder === null) {
      await GQL_GetActiveOrder.fetch({
        policy: CachePolicy.NetworkOnly,
      })
    }
  }

  $: qtyInCart =
    $GQL_GetActiveOrder.data?.activeOrder?.lines.find(
      l => l.productVariant.id === selectedVariantId
    )?.quantity ?? 0

  const asset = product?.assets?.[0]
  const brandName = product?.facetValues.find(
    fv => fv.facet.code === 'brand'
  )?.name

  let featuredAsset = selectedVariant?.featuredAsset
</script>

<div>
  <div class="max-w-6xl mx-auto px-4">
    <h2
      class="text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8"
    >
      {product?.name}
    </h2>
    <Breadcrumbs
      items={product?.collections?.[product?.collections?.length - 1]
        ?.breadcrumbs ?? []}
    />
    <div
      class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12"
    >
      <div class="w-full max-w-2xl mx-auto sm:block lg:max-w-none">
        <span class="rounded-md overflow-hidden">
          <div
            class="w-full h-full object-center object-cover rounded-lg"
          >
            <img
              src={(featuredAsset?.preview ||
                product.featuredAsset?.preview) + '?w=800'}
              alt={product?.name}
              class="w-full h-full object-center object-cover rounded-lg"
            />
          </div>
        </span>

        {#if product?.assets.length > 1}
          <ScrollableContainer>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            {#each product.assets as asset}
              <div
                class={`basis-1/3 md:basis-1/4 flex-shrink-0 select-none touch-pan-x rounded-lg ${
                  featuredAsset?.id == asset.id
                    ? 'outline outline-2 outline-primary outline-offset-[-2px]'
                    : ''
                }`}
                on:click={() => {
                  featuredAsset = asset
                }}
              >
                <!-- svelte-ignore a11y-missing-attribute -->
                <img
                  draggable="false"
                  class="rounded-lg select-none h-24 w-full object-cover"
                  src={asset.preview + '?preset=full'}
                />
              </div>
            {/each}
          </ScrollableContainer>
        {/if}
      </div>

      <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
        <div class="">
          <h3 class="sr-only">Description</h3>

          <div class="text-base text-gray-700">
            {@html product?.description}
          </div>
        </div>
        <div>
          <input type="hidden" name="action" value="addItemToOrder" />
          {#if 1 < product?.variants.length}
            <div class="mt-4">
              <label
                for="option"
                class="block text-sm font-medium text-gray-700"
              >
                Select option
              </label>
              <select
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                id="productVariant"
                value={selectedVariantId}
                name="variantId"
                on:change={e => {
                  selectedVariantId = e.target?.value
                  selectedVariant = findVariantById(selectedVariantId)

                  if (selectedVariant) {
                    featuredAsset = selectedVariant?.featuredAsset
                  }
                }}
              >
                {#each product?.variants ?? [] as variant}
                  <option value={variant.id}>
                    {variant?.name}
                  </option>
                {/each}
              </select>
            </div>
          {:else}
            <input
              type="hidden"
              name="variantId"
              bind:value={selectedVariantId}
            />
          {/if}

          <div
            class="mt-10 flex flex-col sm:flex-row sm:items-center"
          >
            <p class="text-3xl text-gray-900 mr-4">
              <Price
                priceWithTax={selectedVariant?.priceWithTax ||
                  product?.variants?.[0]?.priceWithTax ||
                  0}
                currencyCode={selectedVariant?.currencyCode ??
                  currencyCode}
              />
            </p>
            <div class="flex sm:flex-col1 align-baseline">
              <button
                type="button"
                on:click={addItemToOrder}
                class={`btn max-w-xs flex-1 ${
                  transition?.state !== 'idle'
                    ? 'bg-gray-400'
                    : qtyInCart === 0
                    ? 'bg-primary-600 hover:bg-primary-700'
                    : 'bg-green-600 active:bg-green-700 hover:bg-green-700'
                }
                                     transition-colors border border-transparent rounded-md py-3 px-8 flex items-center
                                      justify-center text-base font-medium text-white focus:outline-none
                                      focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500 sm:w-full`}
                disabled={transition?.state !== 'idle'}
              >
                {#if qtyInCart}
                  <span class="flex items-center">
                    <CheckIcon
                      className="w-5 h-5 mr-1 text-white"
                    />{' '}
                    {qtyInCart} in cart
                  </span>
                {:else}
                  Add to cart
                {/if}
              </button>

              <button
                type="button"
                class="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <HeartIcon
                  class="h-6 w-6 flex-shrink-0"
                  aria-hidden="true"
                />
                <span class="sr-only"> Add to favorites </span>
              </button>
            </div>
          </div>

          {#if selectedVariant?.stockLevel}
            <div class="mt-2 flex items-center space-x-2">
              <span class="text-gray-500">
                {selectedVariant?.sku}
              </span>
              <StockLevelLabel
                stockLevel={selectedVariant?.stockLevel}
              />
            </div>
          {/if}
          {#if $GQL_GetActiveOrder.errors}
            <div class="mt-4">
              <Alert message={$GQL_GetActiveOrder.errors} />
            </div>
          {/if}

          <section class="mt-12 pt-12 border-t text-xs">
            <h3 class="text-gray-600 font-bold mb-2">
              Shipping & Returns
            </h3>
            <div class="text-gray-500 space-y-1">
              <p>
                Standard shipping: 3 - 5 working days. Express
                shipping: 1 - 3 working days.
              </p>
              <p>
                Shipping costs depend on delivery address and will be
                calculated during checkout.
              </p>
              <p>
                Returns are subject to terms. Please see the{' '}
                <span class="underline"> returns page </span>{' '}
                for further information.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-24">
    <TopReviews />
  </div>
</div>
