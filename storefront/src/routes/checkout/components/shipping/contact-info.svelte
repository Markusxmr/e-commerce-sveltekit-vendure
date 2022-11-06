<script lang="ts">
  const inputClass =
    'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-3'
</script>

<div>
  <h2 class="text-lg font-medium text-gray-900">
    Contact information
  </h2>
  <form
    class="mb-3"
    method="post"
    action="/api/active-order"
    enctype="application/x-www-form-urlencoded"
  >
    <input
      type="hidden"
      name="action"
      value="setOrderCustomer"
      class="form-control"
    />
    <div class="mt-4">
      <label
        for="emailAddress"
        class="block text-sm font-medium text-gray-700"
        >Email address</label
      >
      <div class="mt-1">
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          autocomplete="email"
          class={inputClass}
          value=""
        />
      </div>
    </div>
    <div
      class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
    >
      <div>
        <label
          for="firstName"
          class="block text-sm font-medium text-gray-700"
          >First name</label
        >
        <div class="mt-1">
          <input
            type="text"
            id="firstName"
            name="firstName"
            autocomplete="given-name"
            class={inputClass}
            value=""
          />
        </div>
      </div>
      <div>
        <label
          for="lastName"
          class="block text-sm font-medium text-gray-700"
          >Last name</label
        >
        <div class="mt-1">
          <input
            type="text"
            id="lastName"
            name="lastName"
            autocomplete="family-name"
            class={inputClass}
            value=""
          />
        </div>
      </div>
    </div>
  </form>
</div>
