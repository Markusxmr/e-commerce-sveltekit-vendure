<script lang="ts">
  import { goto } from '$app/navigation'
  import {
    GQL_AdjustOrderLine,
    GQL_GetActiveOrder,
    GQL_GetCurrencyCode,
    GQL_RemoveOrderLine,
  } from '$houdini'
  import { clickOutside } from '$lib/utils'
  import { cartOpen } from '$stores/cart'
  import { fly } from 'svelte/transition'
  import Price from '../products/price.svelte'

  $: activeOrderLines =
    $GQL_GetActiveOrder?.data?.activeOrder?.lines || []
  $: totalWithTax =
    $GQL_GetActiveOrder?.data?.activeOrder?.totalWithTax || 0
  $: shippingWithTax =
    $GQL_GetActiveOrder?.data?.activeOrder?.shippingWithTax || 0
  $: currencyCode =
    $GQL_GetCurrencyCode?.data?.activeChannel?.currencyCode

  const adjustOrder = async (value: number, id: string) => {
    await GQL_AdjustOrderLine.mutate({
      orderLineId: id,
      quantity: value,
    })
  }

  const removeItem = async id => {
    await GQL_RemoveOrderLine.mutate({
      orderLineId: id,
    })
  }

  const handleClickOutside = () => {
    $cartOpen = !$cartOpen
  }
</script>

{#if $cartOpen}
  <div id="headlessui-portal-root">
    <div>
      <div
        class="fixed inset-0 overflow-hidden z-20"
        id="headlessui-dialog-16"
        role="dialog"
        aria-modal="true"
        aria-labelledby="headlessui-dialog-title-20"
      >
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity opacity-100"
            id="headlessui-dialog-overlay-18"
            aria-hidden="true"
          />

          <div
            use:clickOutside
            on:click_outside={handleClickOutside}
            in:fly={{ x: 200, duration: 150 }}
            out:fly={{ x: 400, duration: 150 }}
            class="fixed inset-y-0 right-0 pl-10 max-w-full flex"
          >
            <div class="w-screen max-w-md translate-x-0">
              <div
                class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll"
              >
                <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2
                      class="text-lg font-medium text-gray-900"
                      id="headlessui-dialog-title-13"
                      data-headlessui-state="open"
                    >
                      Shopping cart
                    </h2>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        type="button"
                        class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        tabindex="0"
                        on:click={() => {
                          $cartOpen = !$cartOpen
                        }}
                        ><span class="sr-only">Close panel</span><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                          ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          /></svg
                        ></button
                      >
                    </div>
                  </div>
                  <div class="mt-8">
                    {#if !activeOrderLines.length}
                      <div
                        class="flex items-center justify-center h-48 text-xl text-gray-400"
                      >
                        Your cart is empty
                      </div>
                    {:else}
                      <div class="flow-root">
                        <ul
                          role="list"
                          class="-my-6 divide-y divide-gray-200"
                        >
                          {#each activeOrderLines as line}
                            <li class="py-6 flex">
                              <div
                                class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden"
                              >
                                <img
                                  src="{line?.featuredAsset
                                    ?.preview}?preset=thumb"
                                  alt={line.productVariant.name}
                                  class="w-full h-full object-center object-cover"
                                />
                              </div>
                              <div class="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div
                                    class="flex justify-between text-base font-medium text-gray-900"
                                  >
                                    <h3>
                                      <a
                                        href="/products/curvy-monitor"
                                        >{line.productVariant.name}</a
                                      >
                                    </h3>
                                    <p class="ml-4">
                                      <Price
                                        priceWithTax={line.unitPriceWithTax}
                                        {currencyCode}
                                      />
                                    </p>
                                  </div>
                                </div>
                                <div
                                  class="flex-1 flex items-center text-sm"
                                >
                                  <form>
                                    <label
                                      for="quantity-{line?.id}"
                                      class="mr-2">Quantity</label
                                    >
                                    <select
                                      id="quantity-{line?.id}"
                                      name="quantity-{line?.id}"
                                      value={line.quantity}
                                      on:change={e => {
                                        adjustOrder(
                                          Number(e.target?.value),
                                          line?.id
                                        )
                                      }}
                                      class="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                    >
                                      <option selected
                                        >{line.quantity}</option
                                      >
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                    </select>
                                  </form>
                                  <div class="flex-1" />
                                  <div class="flex">
                                    <button
                                      type="submit"
                                      name="removeItem"
                                      value="2"
                                      on:click={() =>
                                        removeItem &&
                                        removeItem(line.id)}
                                      class="font-medium text-primary-600 hover:text-primary-500"
                                      >Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          {/each}
                        </ul>
                      </div>
                    {/if}
                  </div>
                </div>
                <div
                  class="border-t border-gray-200 py-6 px-4 sm:px-6"
                >
                  <div
                    class="flex justify-between text-base font-medium text-gray-900"
                  >
                    <p>Subtotal</p>
                    <p>
                      <Price
                        priceWithTax={totalWithTax}
                        {currencyCode}
                      />
                    </p>
                  </div>
                  <p class="mt-0.5 text-sm text-gray-500">
                    Shipping will be calculated at checkout.
                  </p>
                  <div class="mt-6">
                    <button
                      style="width: 100%"
                      on:click={() => {
                        $cartOpen = !$cartOpen
                        goto(`/checkout`)
                      }}
                      class="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
                      >Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    body {
      overflow: hidden !important;
      padding-right: 15px;
    }
  </style>
{/if}
