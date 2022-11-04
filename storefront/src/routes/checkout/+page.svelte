<script>
  import ContactInfo from './components/shipping/contact-info.svelte'
  import DeliveryMethod from './components/shipping/delivery-method.svelte'
  import OrderSummary from './components/shipping/order-summary.svelte'
  import ShippingInfo from './components/shipping/shipping-info.svelte'
</script>

<main class="">
  <div class="bg-gray-50">
    <div
      class="lg:max-w-7xl max-w-2xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:px-8"
    >
      <h2 class="sr-only">Checkout</h2>
      <nav
        aria-label="Progress"
        class="hidden sm:block pb-8 mb-8 border-b"
      >
        <ol role="list" class="flex space-x-4 justify-center">
          <li class="flex items-center">
            <span aria-current="page" class="text-primary-600"
              >Shipping</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              class="w-5 h-5 text-gray-300 ml-4"
              ><path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              /></svg
            >
          </li>
          <li class="flex items-center">
            <span>Payment</span><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              class="w-5 h-5 text-gray-300 ml-4"
              ><path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              /></svg
            >
          </li>
          <li class="flex items-center"><span>Confirmation</span></li>
        </ol>
      </nav>
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        <div class="">
          <div>
            <ContactInfo />
            <ShippingInfo />
            <DeliveryMethod />
            <button
              type="button"
              disabled=""
              class="bg-gray-400 flex w-full items-center justify-center space-x-2 mt-24 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                class="w-5 h-5"
                ><path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                /></svg
              ><span>Proceed to payment</span></button
            >
          </div>
        </div>
        <OrderSummary />
      </div>
    </div>
  </div>
</main>
