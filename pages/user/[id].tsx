import { useRoute } from 'vue-router'

export default defineComponent({
  render () {
    const route = useRoute()
    if (!route.params.id) {
      console.log('Warning! Make sure user is authenticated!')
    }
    return <h1>id : { route.params.id }</h1>
  }
})
