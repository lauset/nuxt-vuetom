export default defineNuxtPlugin(() => {
  return {
    provide: {
      print: (msg: string) => `${msg}`
    }
  }
})
