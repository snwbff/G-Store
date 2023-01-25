import axios from 'axios'

export default async function fetchGames(
  arr,
  page,
  { date, size, sort, search, platforms, rating, tags = [], genres = [] },
  totalGamesCount
) {
  try {
    const response = await axios.get('https://api.rawg.io/api/games?', {
      params: {
        page: page,

        dates: date,
        page_size: size,
        ordering: sort,
        metacritic: rating.join(','),
        parent_platforms: platforms.join(',') || '1,2,3,4,7,8',
        tags: tags.join(',') || null,
        genres: genres.join(',') || null,
        search: search,

        key: '6be3bec5eec246719e96cc8c4b02ca8f',
        exclude_additions: true,

        search_precise: true,
      },
    })
    arr.value = response.data.results

    if (totalGamesCount) {
      totalGamesCount.value = response.data.count
    }
  } catch (error) {
    console.warn(error)
  }
}
