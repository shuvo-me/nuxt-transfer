
<template>
  <div class="flex min-h-screen w-full bg-slate-50 dark:bg-gray-700 font-sans">
    <side-nav />
    <main
      class="flex min-h-screen flex-1 flex-col rounded-l-[48px] bg-slate-100 dark:bg-gray-800 p-8"
    >
      <app-nav />
      <slot />
    </main>
  </div>
</template>
