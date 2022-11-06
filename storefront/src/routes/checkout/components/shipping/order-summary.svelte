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
                <a href="/products/hanging-plant">Hanging Plant</a>
              </h3>
              <p class="ml-4">$23.94</p>
            </div>
          </div>
          <div class="flex-1 flex items-center text-sm">
            <form
              method="get"
              action="/checkout"
              enctype="application/x-www-form-urlencoded"
            >
              <label for="quantity-7" class="mr-2">Quantity</label>
              <select
                id="quantity-7"
                name="quantity-7"
                class="select select-bordered select-primary w-full max-w-xs mb-2"
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
                value="7"
                class="font-medium text-primary-600 hover:text-primary-500"
                >Remove</button
              >
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <dl class="border-t mt-6 border-gray-200 py-6 space-y-6">
    <div class="flex items-center justify-between">
      <dt class="text-sm">Subtotal</dt>
      <dd class="text-sm font-medium text-gray-900">$23.94</dd>
    </div>
    <div class="flex items-center justify-between">
      <dt class="text-sm">Shipping</dt>
      <dd class="text-sm font-medium text-gray-900">$0.00</dd>
    </div>
    <div
      class="flex items-center justify-between border-t border-gray-200 pt-6"
    >
      <dt class="text-base font-medium">Total</dt>
      <dd class="text-base font-medium text-gray-900">$23.94</dd>
    </div>
  </dl>
</div>
