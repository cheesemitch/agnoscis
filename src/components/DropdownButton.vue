<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

export default {

  components: {Menu, MenuButton, MenuItems, MenuItem}
}
</script>
<template>
  <div>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="flex justify-center rounded-full px-2 py-2 text-sm font-medium text-gray-800 dark:text-gray-500 hover:bg-black/30 dark:hover:bg-gray-700/50  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" />
        </svg>

        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-gray-700/50 rounded-md bg-white dark:bg-gray-800/40 dark:backdrop-blur-xl shadow-lg ring-1 ring-black/5 dark:ring-white/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-agnoscis-300 text-white' : 'text-gray-900 dark:text-gray-100',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                Edit
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-agnoscis-300 text-white' : 'text-gray-900 dark:text-gray-100',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                Duplicate
              </button>
            </MenuItem>
          </div>
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-agnoscis-300 text-white' : 'text-gray-900 dark:text-gray-100',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                Archive
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-agnoscis-300 text-white' : 'text-gray-900 dark:text-gray-100',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                Move
              </button>
            </MenuItem>
          </div>

          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-agnoscis-300 text-white' : 'text-gray-900 dark:text-gray-100',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                Delete
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>


