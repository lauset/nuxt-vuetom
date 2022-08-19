export default defineEventHandler((event) => {
  console.log('request api: ' + event.req.url)
})
