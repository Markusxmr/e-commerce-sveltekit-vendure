<script>
  import XCircleIcon from './icons/x-circle.svelte'
  export let message
</script>

<div class="rounded-md bg-red-50 p-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium text-red-800">
        {JSON.stringify(message)}
      </h3>
    </div>
  </div>
</div>
