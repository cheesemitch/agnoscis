<script>

export default {

}
</script>

<template>
  <div>
    <router-view v-slot="{Component}">
      <transition mode="out-in"
          enter-active-class="transition ease-out duration-500" 
          enter-from-class="transform opacity-0 scale-95" 
          enter-to-class="transform opacity-100 scale-100" 
          leave-active-class="transition ease-in duration-200" 
          leave-from-class="transform opacity-100" 
          leave-to-class="transform opacity-0"
          >
            <component :is="Component"></component>
        </transition>
    </router-view>
  </div>
</template>
