<script setup lang="ts">
// TS Interfaces
import { IGame } from '@/ts/game.interface'

//Components
import MetacriticScore from '@/components/MetacriticScore.vue'
import GamePlatforms from '@/components/GamePlatforms.vue'
import GameTitle from '@/components/GameTitle.vue'

defineProps<{
  game: IGame
}>()
</script>

<template>
  <article class="game-item">
    <v-lazy-image
      class="game-item__pic cursor-pointer"
      :alt="game.name"
      :imgSrc="game.background_image"
      :gameId="game.id"
      @click="$router.push(`/game/${game.id}`)"
    />

    <div class="game-nav-bar flex flex_column">
      <div class="game-info flex flex_align-center">
        <game-platforms
          class="game-info__platform"
          :platforms="game.parent_platforms"
        />

        <metacritic-score
          class="game-info__score"
          :score="game.metacritic"
        />
      </div>

      <game-title
        class="game-nav-bar__title"
        :gameId="game.id"
        :gameName="game.name"
      />

      <nav class="game-nav-bar__buttons buttons-block flex">
        <v-price-button
          class="buttons-block__price-bttn"
          :price="game.suggestions_count / 10"
          :gameName="game.name"
          :gameId="game.id"
        />

        <v-like-button
          class="buttons-block__like-bttn"
          :gameId="game.id"
          :gameName="game.name"
        />
      </nav>
    </div>
  </article>
</template>

<style scoped>
.game-item {
  width: 100%;
  border-radius: var(--medium-radius);
  background-color: var(--second-black);
}

.game-item__pic {
  aspect-ratio: 9 / 5;
  width: 100%;
  border-radius: var(--medium-radius) var(--medium-radius) 0 0;
}

.game-nav-bar {
  padding: var(--medium-spacing);
  gap: var(--medium-spacing);
}

.game-nav-bar__title {
  align-self: flex-start;
}

.game-info {
  height: 26px;
}

.game-info__platform {
  height: 17px;
}

.game-info__score {
  margin-left: auto;
}

.buttons-block {
  gap: var(--small-spacing);
}

.buttons-block__price-bttn {
  width: 50%;
  height: 100;
}

.buttons-block__like-bttn {
  width: 50%;
}
</style>
