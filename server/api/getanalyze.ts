import analyjson from '~/assets/json/analyze.json'
export default defineEventHandler(async (event) => {
  return analyjson;
});
