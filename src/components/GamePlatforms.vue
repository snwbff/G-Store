<script setup lang="ts">
import { inject } from 'vue'

// TS Interfaces
import { IPlatforms } from '@/ts/platforms.interface'

//Utils
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const props = defineProps<{
  platforms: IPlatforms[]
}>()

let setPlatform = (route.name == 'explore' ? inject('setPlatforms') : '') as Function | string

function goToExplore(platformId: number) {
  if (typeof setPlatform !== 'function') {
    router.push({
      path: '/explore',
      query: {
        platforms: JSON.stringify([platformId])
      }
    })
  } else {
    setPlatform(platformId)
  }
}

const validPlatforms: string[] = ['PC', 'PlayStation', 'Xbox', 'Android', 'iOS', 'Nintendo']
const filteredPlatforms = props.platforms.filter((platform) =>
  validPlatforms.includes(platform['platform']['name'])
)
</script>

<template>
  <div class="game-platforms flex flex_align-center">
    <component
      v-for="platform of filteredPlatforms"
      :key="platform['platform']['id']"
      :is="`icon-${platform['platform']['name'].toLowerCase()}`"
      class="game-platforms__icon cursor-pointer"
      @click="goToExplore(platform['platform']['id'])"
    />
  </div>
</template>

<style scoped>
.game-platforms {
  gap: var(--medium-spacing);
}
.game-platforms__icon {
  height: 100%;
  color: var(--main-white);
}
.game-platforms__icon:hover {
  color: var(--main-blue);
}
</style>
