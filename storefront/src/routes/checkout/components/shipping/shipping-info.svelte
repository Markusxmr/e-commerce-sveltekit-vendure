<script lang="ts">
  import CountrySelect from './country-select.svelte'
  const inputClass =
    'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-3'
</script>

<form
  method="post"
  action="/api/active-order"
  enctype="application/x-www-form-urlencoded"
>
  <input type="hidden" name="action" value="setCheckoutShipping" />
  <div class="mt-10 border-t border-gray-200 pt-10">
    <h2 class="text-lg font-medium text-gray-900">
      Shipping information
    </h2>
  </div>
  <div
    class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
  >
    <div>
      <label
        for="fullName"
        class="block text-sm font-medium text-gray-700"
        >First name</label
      >
      <div class="mt-1">
        <input
          type="text"
          id="fullName"
          name="fullName"
          autocomplete="given-name"
          class={inputClass}
          value=""
        />
      </div>
    </div>
    <div class="sm:col-span-2">
      <label
        for="company"
        class="block text-sm font-medium text-gray-700">Company</label
      >
      <div class="mt-1">
        <input
          type="text"
          name="company"
          id="company"
          class={inputClass}
          value=""
        />
      </div>
    </div>
    <div class="sm:col-span-2">
      <label
        for="streetLine1"
        class="block text-sm font-medium text-gray-700">Address</label
      >
      <div class="mt-1">
        <input
          type="text"
          name="streetLine1"
          id="streetLine1"
          autocomplete="street-address"
          class={inputClass}
          value=""
        />
      </div>
    </div>
    <div class="sm:col-span-2">
      <label
        for="streetLine2"
        class="block text-sm font-medium text-gray-700"
        >Apartment, suite, etc.</label
      >
      <div class="mt-1">
        <input
          type="text"
          name="streetLine2"
          id="streetLine2"
          class={inputClass}
          value=""
        />
      </div>
    </div>
    <div>
      <label
        for="city"
        class="block text-sm font-medium text-gray-700">City</label
      >
      <div class="mt-1">
        <input
          type="text"
          name="city"
          id="city"
          autocomplete="address-level2"
          class={inputClass}
          value=""
        />
      </div>
    </div>
    <CountrySelect />
    <div>
      <label
        for="province"
        class="block text-sm font-medium text-gray-700"
        >State / Province</label
      >
      <div class="mt-1">
        <input
          type="text"
          name="province"
          id="province"
          autocomplete="address-level1"
          class={inputClass}
          value=""
        />
      </div>
    </div>
    <div>
      <label
        for="postalCode"
        class="block text-sm font-medium text-gray-700"
        >Postal code</label
      >
      <div class="mt-1">
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          autocomplete="postal-code"
          class={inputClass}
          value=""
        />
      </div>
    </div>
    <div class="sm:col-span-2">
      <label
        for="phoneNumber"
        class="block text-sm font-medium text-gray-700">Phone</label
      >
      <div class="mt-1">
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          autocomplete="tel"
          class={inputClass}
          value=""
        />
      </div>
    </div>
  </div>
</form>
