<template>
  <nav class="flex items-center gap-x-6">
    <div class="flex w-3/5 items-center justify-between">
      <h1 class="text-[30px] font-bold text-gray-700 dark:text-white">
        Overview
      </h1>
      <div class="flex items-center gap-x-2">
        <div class="relative">
          <span
            class="pointer-events-none absolute inset-y-0 flex items-center px-3"
          >
            <SearchIcon class="h-6 w-6 stroke-current text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search"
            class="rounded-10 bg-gray-50 dark:bg-gray-900 focus:drop-shadow-sm py-3 pr-4 pl-10 text-sm text-gray-400 focus:text-gray-700 dark:focus:text-white focus:outline-none"
          />
        </div>
        <button
          class="rounded-10 bg-gray-50 dark:bg-gray-900 py-3 px-4 text-sm text-gray-600 dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:drop-shadow-sm"
        >
          Add Account
        </button>
      </div>
    </div>
    <div class="flex w-2/5 items-center justify-between">
      <div class="flex items-center gap-x-2.5">
        <button class="btn">
          <MailIcon class="h-7 w-7 stroke-current" />
        </button>
        <button class="btn relative">
          <BellIcon class="h-7 w-7 stroke-current" />
          <div class="absolute top-3 right-3 flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"
            />
            <span class="inline-flex h-2 w-2 rounded-full bg-indigo-400" />
          </div>
        </button>
        <button class="btn">
          <InboxIcon class="h-7 w-7 stroke-current" />
        </button>
        <button
          @click="
            $colorMode.value === 'dark'
              ? ($colorMode.preference = 'light')
              : ($colorMode.preference = 'dark')
          "
          class="btn"
        >
          <MoonIcon
            class="h-6 w-6 stroke-current"
            v-if="$colorMode.value === 'light'"
          />
          <SunIcon class="h-6 w-6 stroke-current" v-else />
        </button>
      </div>
      <button
        class="flex h-11 items-center justify-center rounded-full bg-gray-900 px-2 text-gray-400 hover:text-white"
      >
        <img
          src="~/assets/img/avatar-1.jpeg"
          alt=""
          class="h-8 w-8 rounded-full object-cover"
        />
        <span class="pl-2 text-sm">Alexander</span>
        <ChevronDownIcon class="h-6 w-6 stroke-current" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import SearchIcon from "~/assets/icons/search.svg";
import MailIcon from "~/assets/icons/mail.svg";
import BellIcon from "~/assets/icons/bell.svg";
import InboxIcon from "~/assets/icons/inbox.svg";
import ChevronDownIcon from "~/assets/icons/chevron-down.svg";
import MoonIcon from "~/assets/icons/moon.svg";
import SunIcon from "~/assets/icons/sun.svg";
</script>