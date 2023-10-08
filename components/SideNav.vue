
<template>
  <aside class="flex w-64 flex-col px-4 pt-10 pb-6">
    <a
      href="#"
      class="flex items-center gap-x-4 px-8 text-2xl font-medium text-gray-900 dark:text-white focus:outline-none"
    >
      <DashboardIcon class="h-6 w-6 stroke-current" />
      <span>Transfer</span>
    </a>
    <ul class="flex flex-1 flex-col gap-y-10 px-8 pt-14">
      <li v-for="item in menu" :key="item">
        <a
          href="#"
          class="flex items-center gap-x-4 text-gray-900 hover:text-gray-700 dark:text-gray-400 hover:font-medium dark:hover:text-white focus:font-medium focus:text-gray-700 dark:focus:text-white focus:outline-none"
        >
          <component :is="item.icon" class="h-6 w-6 stroke-current" />
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>
    <div
      class="sticky bottom-4 rounded-10 bg-gray-50 dark:bg-gray-900 bg-[url(~/assets/img/line-pattern.svg)] bg-top p-6 drop-shadow-[1px_1px_30px_#cbd5e1] dark:drop-shadow-none"
    >
      <div class="text-gray-900 dark:text-white">
        Refer a friend and get <span class="font-bold">$5</span>
      </div>
      <div class="mt-3 text-sm text-gray-400">The reward of transfer.</div>
      <button
        class="mt-4 w-full rounded-lg bg-gray-700 py-2 text-sm font-normal text-gray-400 hover:text-white"
      >
        Invite
      </button>
    </div>
  </aside>
</template>

<script setup>
import HomeIcon from "~/assets/icons/home.svg";
import BillIcon from "~/assets/icons/bill.svg";
import InvoiceIcon from "~/assets/icons/invoice.svg";
import BuildingIcon from "~/assets/icons/building.svg";
import CardIcon from "~/assets/icons/card.svg";
import SettingsIcon from "~/assets/icons/settings.svg";
import DashboardIcon from "~/assets/icons/dashboard.svg";
import SearchIcon from "~/assets/icons/search.svg";
import MailIcon from "~/assets/icons/mail.svg";
import BellIcon from "~/assets/icons/bell.svg";
import InboxIcon from "~/assets/icons/inbox.svg";
const menu = [
  { name: "Home", icon: HomeIcon },
  { name: "USA Payors", icon: BillIcon },
  { name: "Invoices", icon: InvoiceIcon },
  { name: "My Banks", icon: BuildingIcon },
  { name: "Withdraw", icon: CardIcon },
  { name: "Settings", icon: SettingsIcon },
];
</script>
