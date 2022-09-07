export default defineComponent({
  render() {
    const route = useRoute()
    const { $print } = useNuxtApp()
    console.log($print(`Error: ${route.params.err}`))
    return <h1>Err : {route.params.err}</h1>
  },
})
