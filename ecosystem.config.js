module.exports = {
  apps: [
    {
      name: 'nuxt-vuetom',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}