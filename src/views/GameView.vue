<script setup lang="ts">
import { shallowRef, onMounted, computed } from 'vue'

// TS Interfaces
import { IGame } from '@/ts/game.interface'

//Components
import MetacriticScore from '@/components/MetacriticScore.vue'
import GamePlatforms from '@/components/GamePlatforms.vue'

//Composables
import fetchGameDetails from '@/composables/fetchGameDetails'

//Utils
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const game = shallowRef<IGame | any>({})

store.commit('loading/setLoading', true)

function fetching() {
  fetchGameDetails(game, route.params.id).then(() => {
    store.commit('loading/setLoading', false)
  })
}
onMounted(() => {
  fetching()
})

const loading = computed<boolean>(() => store.state.loading.isLoading)
</script>

<template>
  <v-lazy-image
    class="page__img"
    v-if="!loading"
    :imgSrc="game.background_image"
    :alt="game.name"
  />

  <section
    class="game-block large-container flex"
    v-if="!loading"
  >
    <div class="title-block flex flex_column">
      <h1 class="title-block__name main-blue">{{ game.name }}</h1>

      <h3 class="title-block__release second-white">
        🎯{{ game.released || 'Date is coming soon' }}
      </h3>

      <metacritic-score
        class="title-block__score"
        :score="game.metacritic"
      >
        Metacritic:
      </metacritic-score>
    </div>

    <nav class="game-block__buttons buttons-block flex flex_column">
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

    <div class="game-details flex flex_column">
      <div class="game-description">
        <h2 class="game-description__title main-white">About</h2>
        <p class="game-description__info second-white">
          {{ game.description_raw }}
        </p>
      </div>

      <div class="game-platforms">
        <h2 class="game-platforms main-white">Platforms</h2>
        <game-platforms
          v-if="!!game.parent_platforms"
          class="game-platforms__icons main-white"
          :platforms="game.parent_platforms"
        />
      </div>
    </div>

    <ul class="details-list">
      <li class="details-list__title main-white">
        <h3>Developers</h3>
      </li>
      <li
        class="details-list__subtitle second-white"
        v-for="developer in game.developers"
        :key="developer.id"
      >
        {{ developer.name }}
      </li>
      <li class="details-list__title main-white">
        <h3>Publisher</h3>
      </li>
      <li
        class="details-list__subtitle second-white"
        v-for="publisher in game.publishers"
        :key="publisher.id"
      >
        {{ publisher.name }}
      </li>
      <li class="details-list__title main-white">
        <h3>Release Date</h3>
      </li>
      <li class="details-list__subtitle second-white">
        {{ game.released || 'Date is coming soon' }}
      </li>
      <li class="details-list__title main-white">
        <h3>Genres</h3>
      </li>
      <li
        class="details-list__subtitle second-white"
        v-for="genre in game.genres"
        :key="genre.name"
      >
        {{ genre.name }}
      </li>
      <li class="details-list__title main-white">
        <h3>Achievements</h3>
      </li>
      <li class="details-list__subtitle second-white">
        {{ game.achievements_count || 'None' }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
.page__img {
  aspect-ratio: 3 / 1;
  object-position: top center;
}

.game-block {
  flex-wrap: wrap;
  row-gap: var(--extra-large-spacing);
}

.title-block {
  width: 80%;
  align-items: flex-start;
  gap: var(--medium-spacing);
}

.title-block__score {
  font-size: 19px;
}

.game-block__buttons {
  width: 20%;
  align-items: flex-end;
}

.buttons-block {
  gap: var(--small-spacing);
}

.buttons-block__price-bttn,
.buttons-block__like-bttn {
  width: 100%;
}

.game-details {
  width: 80%;
  gap: var(--medium-spacing);
}

.game-platforms__icons {
  height: 30px;
  margin-top: var(--small-spacing);
}

.details-list {
  width: 20%;
  text-align: end;
  list-style: none;
}

.details-list__title {
  margin-top: 8px;
}

.details-list__title:nth-child(1) {
  margin: 0;
}

@media screen and (max-width: 768px) {
  .title-block,
  .game-details {
    width: 65%;
  }
  .game-block__buttons,
  .details-list {
    width: 35%;
  }
}

@media screen and (max-width: 550px) {
  .game-block {
    flex-flow: column;
  }
  .title-block,
  .game-details,
  .game-block__buttons,
  .details-list {
    width: 100%;
  }
  .buttons-block {
    gap: var(--small-spacing);
    flex-flow: row;
    align-items: stretch;
  }

  .buttons-block__price-bttn,
  .buttons-block__like-bttn {
    width: 50%;
  }
  .details-list {
    text-align: start;
  }
}
</style>
