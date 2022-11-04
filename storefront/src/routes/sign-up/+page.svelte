<div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-center text-3xl text-gray-900">
      Create a new account
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Or <a
        class="font-medium text-primary-600 hover:text-primary-500"
        href="/sign-in">login to your existing account</a
      >
    </p>
  </div>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <div
        class="bg-yellow-50 border border-yellow-400 text-yellow-800 rounded p-4 text-center text-sm"
      >
        <p>
          Account registration is not supported by the demo Vendure
          instance. In order to use it, please connect the Remix
          storefront to your own local / production instance.
        </p>
      </div>
      <form
        method="post"
        action="/sign-up?index"
        enctype="application/x-www-form-urlencoded"
        class="space-y-6"
      >
        <input type="hidden" name="redirectTo" value="" />
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700"
            >Email address
          </label>
          <div class="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            for="firstName"
            class="block text-sm font-medium text-gray-700"
            >First name
          </label>
          <div class="mt-1">
            <input
              id="firstName"
              name="firstName"
              type="text"
              autocomplete="given-name"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            for="lastName"
            class="block text-sm font-medium text-gray-700"
            >Last name
          </label>
          <div class="mt-1">
            <input
              id="lastName"
              name="lastName"
              type="text"
              autocomplete="family-name"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-gray-700"
            >Password
          </label>
          <div class="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            for="repeatPassword"
            class="block text-sm font-medium text-gray-700"
          >
            Repeat Password
          </label>
          <div class="mt-1">
            <input
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              autocomplete="current-password"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="btn w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
