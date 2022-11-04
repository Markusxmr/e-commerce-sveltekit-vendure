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
        <span>Shipping</span><svg
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
        <span aria-current="page" class="text-primary-600"
          >Payment</span
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
      <li class="flex items-center"><span>Confirmation</span></li>
    </ol>
  </nav>
  <div class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
    <div class="">
      <div
        class="flex flex-col items-center divide-gray-200 divide-y"
      >
        <div class="py-12">
          <div class="flex flex-col items-center">
            <p class="text-gray-600 text-sm p-6">
              This is a dummy payment for demonstration purposes only
            </p>
            <form
              method="post"
              action="/checkout/payment"
              enctype="application/x-www-form-urlencoded"
            >
              <input
                type="hidden"
                name="paymentMethodCode"
                value="standard-payment"
              /><button
                type="submit"
                class="btn flex px-6 bg-primary-600 hover:bg-primary-700 items-center justify-center space-x-2 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-5 h-5"
                >
                  <path
                    d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                  /><path
                    fill-rule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Pay with Standard Payment</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 lg:mt-0">
      <h2 class="text-lg font-medium text-gray-900 mb-4">
        Order summary
      </h2>
      <div class="flow-root">
        <ul role="list" class="-my-6 divide-y divide-gray-200">
          <li class="py-6 flex">
            <div
              class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden"
            >
              <img
                src="https://readonlydemo.vendure.io/assets/preview/5b/alex-rodriguez-santibanez-200278-unsplash__preview.jpg?preset=thumb"
                alt="Hanging Plant"
                class="w-full h-full object-center object-cover"
              />
            </div>
            <div class="ml-4 flex-1 flex flex-col">
              <div>
                <div
                  class="flex justify-between text-base font-medium text-gray-900"
                >
                  <h3>
                    <a href="/products/hanging-plant">Hanging Plant</a
                    >
                  </h3>
                  <p class="ml-4">$23.94</p>
                </div>
              </div>
              <div class="flex-1 flex items-center text-sm">
                <div class="text-gray-800">
                  <span class="mr-1">Quantity</span><span
                    class="font-medium">1</span
                  >
                </div>
                <div class="flex-1" />
                <div class="flex" />
              </div>
            </div>
          </li>
          <li class="py-6 flex">
            <div
              class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden"
            >
              <img
                src="https://readonlydemo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg?preset=thumb"
                alt="Laptop 13 inch 8GB"
                class="w-full h-full object-center object-cover"
              />
            </div>
            <div class="ml-4 flex-1 flex flex-col">
              <div>
                <div
                  class="flex justify-between text-base font-medium text-gray-900"
                >
                  <h3>
                    <a href="/products/laptop">Laptop 13 inch 8GB</a>
                  </h3>
                  <p class="ml-4">$1,558.80</p>
                </div>
              </div>
              <div class="flex-1 flex items-center text-sm">
                <div class="text-gray-800">
                  <span class="mr-1">Quantity</span><span
                    class="font-medium">1</span
                  >
                </div>
                <div class="flex-1" />
                <div class="flex" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <dl class="border-t mt-6 border-gray-200 py-6 space-y-6">
        <div class="flex items-center justify-between">
          <dt class="text-sm">Subtotal</dt>
          <dd class="text-sm font-medium text-gray-900">$1,582.74</dd>
        </div>
        <div class="flex items-center justify-between">
          <dt class="text-sm">Shipping</dt>
          <dd class="text-sm font-medium text-gray-900">$10.00</dd>
        </div>
        <div
          class="flex items-center justify-between border-t border-gray-200 pt-6"
        >
          <dt class="text-base font-medium">Total</dt>
          <dd class="text-base font-medium text-gray-900">
            $1,592.74
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
