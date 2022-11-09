<script lang="ts">
  export let data

  let { activeCustomer } = data
  const { firstName, lastName } = activeCustomer!
</script>

<div class="max-w-6xl xl:mx-auto px-4">
  <h2 class="text-3xl sm:text-5xl font-light text-gray-900 my-8">
    My Account
  </h2>
  <p class="text-gray-700 text-lg -mt-4">
    Welcome back, {firstName}
    {lastName}
  </p>
  <form>
    <input type="hidden" name="action" value="logout" />
    <button
      type="submit"
      class="underline my-4 text-primary-600 hover:text-primary-800"
    >
      Sign out
    </button>
  </form>
  <div
    class="h-96 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center"
  >
    <div class="text-xl text-gray-500">
      Account dashboard not done yet.{' '}
      <a
        class="text-primary-600"
        href="https://github.com/vendure-ecommerce/storefront-remix-starter"
      >
        Want to help?
      </a>
    </div>
  </div>
</div>
