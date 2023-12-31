<script setup>
import ChevronDownIcon from "~/assets/icons/chevron-down.svg";
import CreditCardIcon from "~/assets/icons/credit-card.svg";
import EyeIcon from "~/assets/icons/eye.svg";
import StatisticChart from "~/assets/charts/statistic.svg";
import RevenueIcon from "~/assets/icons/revenue.svg";
import ExpenseIcon from "~/assets/icons/expense.svg";
import SendIcon from "~/assets/icons/send.svg";
import ReceiveIcon from "~/assets/icons/receive.svg";
import CalendarIcon from "~/assets/icons/calendar.svg";
import PlusIcon from "~/assets/icons/plus.svg";
import InvestmentIcon from "~/assets/icons/investment.svg";
import FundIcon from "~/assets/icons/fund.svg";
import DotsCircleIcon from "~/assets/icons/dots-circle.svg";
import DoughnutChart from "~/assets/charts/doughnut.svg";
import Avatar2 from "~/assets/img/avatar-2.jpeg";
import Avatar3 from "~/assets/img/avatar-3.jpeg";

const recentTransactions = [
  {
    icon: SendIcon,
    type: "Send transaction",
    date: "Dec 24, 2021",
    amount: "$ 123.00",
    balance: "$ 334.00",
  },
  {
    icon: ReceiveIcon,
    type: "Receive fund",
    date: "Jul 20. 2021",
    amount: "$ 322.00",
    balance: "$ 658.00",
  },
];

const invoices = [
  {
    no: "#BCS101",
    date: "Jun 21, 2020",
    avatar: Avatar2,
    name: "Alexandar Parkinson",
    amount: "$ 13435.50",
    status: "Successful",
  },
  {
    no: "#BSD133",
    date: "Jun 21, 2020",
    avatar: Avatar3,
    name: "Natasha Analington",
    amount: "$ 1654.50",
    status: "Pending",
  },
];
</script>

<template>
  <div class="flex gap-x-6 py-8">
    <div class="flex w-3/5 flex-col gap-y-8">
      <div
        class="flex items-center justify-between rounded-10 bg-gray-50 dark:bg-gray-900 bg-[url('~/assets/img/line-pattern.svg')] p-7"
      >
        <div class="flex items-center gap-x-4">
          <div class="rounded-full bg-gray-100 dark:bg-gray-700 p-3">
            <CreditCardIcon class="h-5 w-5 fill-current text-indigo-400" />
          </div>
          <div>
            <div class="text-sm text-gray-400">CARD NUMBER</div>
            <div class="pt-1 text-gray-700 dark:text-white">
              5540 2280 8647 5687
            </div>
          </div>
        </div>
        <div class="h-full w-px bg-gray-200 dark:bg-gray-700" />
        <div>
          <div class="text-sm text-gray-400">EXPIRE DATE</div>
          <div class="pt-1 text-gray-700 dark:text-white">08/28</div>
        </div>
        <div class="h-full w-px bg-gray-200 dark:bg-gray-700" />
        <div>
          <div class="text-sm text-gray-400">CVC</div>
          <div class="flex items-center gap-x-2 text-gray-700 dark:text-white">
            <div class="pt-1">****</div>
            <button>
              <EyeIcon class="h-6 w-6 stroke-current" />
            </button>
          </div>
        </div>
        <div class="h-full w-px bg-gray-200 dark:bg-gray-700" />
        <div>
          <div class="text-sm text-gray-400">STATUS</div>
          <div class="pt-1 text-gray-700 dark:text-white">Active</div>
        </div>
      </div>
      <div
        class="flex flex-col justify-between rounded-10 bg-gray-50 dark:bg-gray-900 p-7"
      >
        <div class="flex items-center justify-between">
          <h2 class="text-[20px] font-medium text-gray-700 dark:text-white">
            Statistics of costs
          </h2>
          <button
            class="inline-flex items-center gap-x-1 rounded-10 dark:bg-gray-700 bg-gray-100 py-2 px-4 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-white"
          >
            <span>Jan - Aug</span>
            <ChevronDownIcon class="h-6 w-6 stroke-current" />
          </button>
        </div>
        <div class="flex gap-x-8 pt-8">
          <StatisticChart class="w-full" />
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-x-3 rounded-10 bg-indigo-400 p-4">
              <div class="rounded-full bg-gray-900 p-2 text-indigo-700">
                <RevenueIcon class="h-6 w-6 fill-current" />
              </div>
              <div>
                <div class="text-sm text-indigo-700">Revenue</div>
                <div class="font-normal">$10.576</div>
              </div>
            </div>
            <div class="flex items-center gap-x-3 rounded-10 bg-green-400 p-4">
              <div class="rounded-full bg-gray-900 p-2 text-green-700">
                <ExpenseIcon class="h-6 w-6 fill-current" />
              </div>
              <div>
                <div class="text-sm text-green-700">Expenses</div>
                <div class="font-normal">$8.576</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col justify-between rounded-10 bg-gray-50 dark:bg-gray-900 p-7"
      >
        <div class="flex items-center justify-between">
          <h2 class="text-[20px] font-medium text-gray-700 dark:text-white">
            Recent transactions
          </h2>
          <button
            class="inline-flex items-center gap-x-1 rounded-10 bg-gray-100 dark:bg-gray-700 py-2 px-4 text-sm text-gray-600 dark:text-gray-400 dark:hover:text-white hover:text-gray-500"
          >
            View All
          </button>
        </div>
        <table>
          <tbody>
            <tr
              v-for="transaction in recentTransactions"
              class="border-b dark:border-gray-700 border-gray-100 last:border-none"
              :key="transaction"
            >
              <td class="py-4">
                <div class="flex items-center gap-x-4">
                  <div
                    class="flex items-center justify-center rounded-full p-2"
                    :class="
                      transaction.type === 'Send transaction'
                        ? 'bg-indigo-700'
                        : 'bg-green-400'
                    "
                  >
                    <Component
                      :is="transaction.icon"
                      class="h-5 w-5 fill-current dark:text-gray-900 text-white"
                    />
                  </div>
                  <span class="text-sm dark:text-white text-gray-700">
                    {{ transaction.type }}
                  </span>
                </div>
              </td>
              <td class="py-4">
                <div class="flex items-center gap-x-2">
                  <div
                    class="flex items-center justify-center rounded-full dark:bg-gray-700 bg-gray-100 p-2"
                  >
                    <CalendarIcon
                      class="h-6 w-6 stroke-current text-gray-400"
                    />
                  </div>
                  <span class="text-sm text-gray-400">
                    {{ transaction.date }}
                  </span>
                </div>
              </td>
              <td class="p-4">
                <span class="text-sm dark:text-white text-gray-700">
                  {{ transaction.amount }}
                </span>
              </td>
              <td class="p-4">
                <span class="text-sm dark:text-white text-gray-700">
                  {{ transaction.balance }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="flex flex-col justify-between rounded-10 bg-gray-50 dark:bg-gray-900 p-7"
      >
        <div class="flex items-center justify-between">
          <h2 class="text-[20px] font-medium text-gray-700 dark:text-white">
            Invoices
          </h2>
          <button
            class="inline-flex items-center gap-x-1 rounded-10 bg-gray-100 dark:bg-gray-700 py-2 px-4 text-sm text-gray-400 dark:hover:text-white hover:text-gray-600"
          >
            <PlusIcon class="h-6 w-6 stroke-current" />
            <span>New Invoices</span>
          </button>
        </div>
        <table class="mt-4">
          <thead>
            <tr>
              <td class="py-1 text-sm text-gray-400">No</td>
              <td class="py-1 text-sm text-gray-400">Date</td>
              <td class="py-1 text-sm text-gray-400">Client</td>
              <td class="py-1 text-sm text-gray-400">Amount</td>
              <td class="py-1 text-sm text-gray-400">Status</td>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="invoice in invoices"
              class="border-b border-gray-100 dark:border-gray-700 last:border-none"
              :key="invoice"
            >
              <td class="py-4">
                <span class="text-sm font-medium text-gray-700 dark:text-white">
                  {{ invoice.no }}
                </span>
              </td>
              <td class="py-4">
                <span class="text-sm text-gray-700 dark:text-white">
                  {{ invoice.date }}
                </span>
              </td>
              <td class="py-4">
                <div class="flex items-center gap-x-2">
                  <img
                    :src="invoice.avatar"
                    alt=""
                    class="h-7 w-7 rounded-full object-cover"
                  />
                  <span class="text-sm text-gray-700 dark:text-white">
                    {{ invoice.name }}
                  </span>
                </div>
              </td>
              <td class="py-4">
                <span class="text-sm text-gray-700 dark:text-white">
                  {{ invoice.amount }}
                </span>
              </td>
              <td class="py-4">
                <div
                  class="flex items-center justify-center gap-x-2 rounded-10 border py-2 px-1"
                  :class="
                    invoice.status === 'Successful'
                      ? 'border-green-400/10 bg-green-700/20 text-green-400'
                      : 'border-indigo-400/10 bg-indigo-700/20 text-indigo-400'
                  "
                >
                  <span
                    class="h-2 w-2 rounded-full"
                    :class="
                      invoice.status === 'Successful'
                        ? 'bg-green-400'
                        : 'bg-indigo-400'
                    "
                  />
                  <span class="text-xs">
                    {{ invoice.status }}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex w-2/5 flex-col gap-y-8">
      <div
        class="flex flex-col justify-between rounded-10 bg-gray-50 dark:bg-gray-900 p-7"
      >
        <div class="flex items-center justify-between">
          <h2 class="text-[20px] font-medium text-gray-700 dark:text-white">
            Scheduled transfer
          </h2>
          <button
            class="inline-flex items-center gap-x-1 rounded-10 bg-gray-100 dark:bg-gray-700 py-2 px-4 text-sm text-gray-400 dark:hover:text-white hover:text-gray-500"
          >
            <PlusIcon class="h-6 w-6 stroke-current" />
            <span>Add new</span>
          </button>
        </div>
        <div class="grid grid-cols-3 gap-x-4 pt-4">
          <div class="rounded-10 bg-gray-100 dark:bg-gray-700 p-3">
            <img src="~/assets/img/youtube.png" alt="youtube" class="w-16" />
            <div class="pt-6 text-sm dark:text-white text-gray-700">
              $39.9/m
            </div>
          </div>
          <div class="rounded-10 dark:bg-gray-700 bg-gray-100 p-3">
            <img src="~/assets/img/netflix.png" alt="netflix" class="w-16" />
            <div class="pt-6 text-sm dark:text-white text-gray-700">
              $45.2/m
            </div>
          </div>
          <div class="rounded-10 bg-gray-100 dark:bg-gray-700 p-3">
            <img src="~/assets/img/spotify.png" alt="spotify" class="w-16" />
            <div class="pt-6 text-sm text-gray-700 dark:text-white">
              $59.5/m
            </div>
          </div>
        </div>
        <button
          class="mt-4 w-full rounded-10 dark:bg-gray-700 bg-gray-100 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
        >
          Get Started
        </button>
      </div>
      <div
        class="flex flex-col justify-between rounded-10 bg-gray-50 dark:bg-gray-900 p-7"
      >
        <div class="flex items-center justify-between">
          <h2 class="text-[20px] font-medium dark:text-white text-gray-700">
            My savings
          </h2>
          <button
            class="inline-flex items-center gap-x-1 rounded-10 bg-gray-100 dark:bg-gray-700 py-2 px-4 text-sm text-gray-700 dark:text-gray-400 dark:hover:text-white hover:text-gray-500"
          >
            <span>Weekly</span>
            <ChevronDownIcon class="h-6 w-6 stroke-current" />
          </button>
        </div>
        <div class="flex flex-col gap-y-4 pt-4">
          <div
            class="flex w-full items-start gap-x-4 rounded-10 bg-gray-100 dark:bg-gray-700 p-4"
          >
            <div
              class="flex items-center justify-center rounded-full bg-indigo-800 p-2"
            >
              <InvestmentIcon
                class="h-5 w-5 fill-current dark:text-gray-900 text-white"
              />
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between leading-none">
                <span class="dark:text-white text-gray-700">Investment</span>
                <span class="font-medium dark:text-white text-gray-700"
                  >$2.350.02</span
                >
              </div>
              <span class="text-sm leading-3 text-gray-400">
                2 months income 80%
              </span>
              <div
                class="mt-3 h-2 w-full rounded-full dark:bg-gray-900 bg-gray-50"
              >
                <div
                  class="h-2 rounded-full bg-indigo-400"
                  style="width: 80%"
                />
              </div>
            </div>
          </div>
          <div
            class="flex w-full items-start gap-x-4 rounded-10 bg-gray-100 dark:bg-gray-700 p-4"
          >
            <div
              class="flex items-center justify-center rounded-full bg-green-400 p-2"
            >
              <FundIcon
                class="h-5 w-5 fill-current text-white dark:text-gray-900"
              />
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between leading-none">
                <span class="text-gray-700 dark:text-white">Mutual fund</span>
                <span class="font-medium text-gray-700 dark:text-white"
                  >$1,450.02</span
                >
              </div>
              <span class="text-sm leading-3 text-gray-400">
                3 months income 50%
              </span>
              <div
                class="mt-3 h-2 w-full rounded-full bg-gray-50 dark:bg-gray-900"
              >
                <div class="h-2 rounded-full bg-green-400" style="width: 50%" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col justify-between rounded-10 bg-gray-50 dark:bg-gray-900 p-7"
      >
        <div class="flex items-center justify-between">
          <h2 class="text-[20px] font-medium text-gray-700 dark:text-white">
            Revenue statistic
          </h2>
          <button
            class="p-2 text-gray-400 dark:hover:text-white hover:text-gray-700"
          >
            <DotsCircleIcon class="h-6 w-6 fill-current" />
          </button>
        </div>
        <div class="flex items-center gap-x-4 pt-4">
          <div class="rounded-10 bg-gray-100 dark:bg-gray-700 p-4">
            <DoughnutChart />
          </div>
          <div class="flex flex-1 flex-col gap-4">
            <div class="flex items-center gap-x-3 rounded-10 bg-indigo-400 p-4">
              <div class="rounded-full bg-gray-900 p-2 text-indigo-700">
                <InvestmentIcon class="h-6 w-6 fill-current" />
              </div>
              <div>
                <div class="text-sm text-indigo-700">Investment</div>
                <div class="font-normal">$10.576</div>
              </div>
            </div>
            <div class="flex items-center gap-x-3 rounded-10 bg-green-400 p-4">
              <div class="rounded-full bg-gray-900 p-2 text-green-700">
                <FundIcon class="h-6 w-6 fill-current" />
              </div>
              <div>
                <div class="text-sm text-green-700">Mutual Fund</div>
                <div class="font-normal">$8.576</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>