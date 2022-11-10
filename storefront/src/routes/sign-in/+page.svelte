<script lang="ts">
  import { goto } from '$app/navigation'

  let email = ''
  let password = ''
  let rememberMe = false

  async function login() {
    const res = await fetch('sign-in', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        rememberMe,
      }),
    })
    const data = await res.json()
    goto(`/account`)
  }
</script>

<div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-center text-3xl text-gray-900">
      Sign in to your account
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Or <a
        class="font-medium text-primary-600 hover:text-primary-500"
        href="/sign-up">register a new account</a
      >
    </p>
  </div>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <div
        class="bg-yellow-50 border border-yellow-400 text-yellow-800 rounded p-4 text-center text-sm"
      >
        <p>Demo credentials</p>
        <p>
          Email address: <span class="font-bold">test@vendure.io</span
          >
        </p>
        <p>Password: <span class="font-bold">test</span></p>
      </div>
      <form on:submit|preventDefault={login} class="space-y-6">
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700"
            >Email address</label
          >
          <div class="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              bind:value={email}
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <div class="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              bind:value={password}
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              bind:checked={rememberMe}
            /><label
              for="rememberMe"
              class="ml-2 block text-sm text-gray-900"
              >Remember me</label
            >
          </div>
          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-primary-600 hover:text-primary-500"
              >Forgot your password?</a
            >
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="btn w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
