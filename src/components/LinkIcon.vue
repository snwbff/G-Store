<script setup lang="ts">
defineProps<{
  text: string
  route: string
  firstIcon?: string
  secondIcon?: string
}>()
</script>

<template>
  <router-link
    :to="route"
    class="link main-black flex flex_align-center"
  >
    <span
      class="link__span"
      v-if="firstIcon"
    >
      <component
        :is="$route.path !== route ? firstIcon : secondIcon ? secondIcon : firstIcon"
        class="link__icon"
      />
    </span>

    <span>{{ text }}</span>
  </router-link>
</template>

<style scoped>
.link {
  font-size: 16px;
  text-decoration: none;
}
.link__span {
  height: 20px;
  margin-right: 2px;
}

.link__icon {
  height: 100%;
}
.router-link-active {
  color: var(--main-blue);
}
</style>
