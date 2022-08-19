export default defineComponent({
  name: 'Default',
  components: {},
  setup(props, { slots }) {
    const route = useRoute()
    const toCustom = () => {
      route.meta.layout = 'custom'
    }
    return () => (
      <div>
        <div class='p-2'>
          Default Layout
          <button
            class='border-2 border-gray rounded m-2 p-2 bg-gray-100'
            onClick={toCustom}
          >
            To Custom Layout
          </button>
        </div>
        {slots.default()}
        {slots.footer({
          kind: 'default layout footer',
        })}
      </div>
    )
  },
})
