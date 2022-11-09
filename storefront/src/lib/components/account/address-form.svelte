<script lang="ts">
  type AvailableCountriesQuery = any
  type OrderAddress = any

  export let address: OrderAddress | null,
    defaultFullName: string,
    availableCountries: AvailableCountriesQuery['availableCountries']
</script>

<div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
  <div>
    <label
      for="fullName"
      class="block text-sm font-medium text-gray-700"
    >
      First name
    </label>
    <div class="mt-1">
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={defaultFullName}
        autoComplete="given-name"
        class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      />
    </div>
  </div>

  <div class="sm:col-span-2">
    <label
      for="company"
      class="block text-sm font-medium text-gray-700"
    >
      Company
    </label>
    <div class="mt-1">
      <input
        type="text"
        name="company"
        id="company"
        value={address?.company ?? ''}
        class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      />
    </div>
  </div>

  <div class="sm:col-span-2">
    <label
      for="streetLine1"
      class="block text-sm font-medium text-gray-700"
    >
      Address
    </label>
    <div class="mt-1">
      <input
        type="text"
        name="streetLine1"
        id="streetLine1"
        value={address?.streetLine1 ?? ''}
        autoComplete="street-address"
        class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      />
    </div>
  </div>

  <div class="sm:col-span-2">
    <label
      for="streetLine2"
      class="block text-sm font-medium text-gray-700"
    >
      Apartment, suite, etc.
    </label>
    <div class="mt-1">
      <input
        type="text"
        name="streetLine2"
        id="streetLine2"
        value={address?.streetLine2 ?? ''}
        class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      />
    </div>
  </div>

  <div>
    <label for="city" class="block text-sm font-medium text-gray-700">
      City
    </label>
    <div class="mt-1">
      <input
        type="text"
        name="city"
        id="city"
        autoComplete="address-level2"
        value={address?.city ?? ''}
        class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      />
    </div>
  </div>

  <div>
    <label
      for="countryCode"
      class="block text-sm font-medium text-gray-700"
    >
      Country
    </label>
    <div class="mt-1">
      {#if availableCountries}
        {#each availableCountries as item}
          <select
            id="countryCode"
            name="countryCode"
            value={address?.countryCode ?? 'US'}
            class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          >
            <option value={item.code}>
              {item.name}
            </option>
          </select>
        {/each}
      {/if}
    </div>
  </div>

  <div>
    <label
      for="province"
      class="block text-sm font-medium text-gray-700"
    >
      State / Province
    </label>
    <div class="mt-1">
      <input
        type="text"
        name="province"
        id="province"
        value={address?.province ?? ''}
        autoComplete="address-level1"
        class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      />
    </div>
  </div>

  <div>
    <label
      for="postalCode"
      class="block text-sm font-medium text-gray-700"
    >
      Postal code
    </label>
    <div class="mt-1">
      <input
        type="text"
        name="postalCode"
        id="postalCode"
        value={address?.postalCode ?? ''}
        autoComplete="postal-code"
        class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      />
    </div>
  </div>

  <div class="sm:col-span-2">
    <label
      for="phoneNumber"
      class="block text-sm font-medium text-gray-700"
    >
      Phone
    </label>
    <div class="mt-1">
      <input
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        value={address?.phoneNumber ?? ''}
        autoComplete="tel"
        class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      />
    </div>
  </div>
</div>
); }
