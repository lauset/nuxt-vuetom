export default defineComponent({
  name: 'Custom',
  render(props, { slots }) {
    const route = useRoute()
    const toDefault = () => {
      route.meta.layout = 'default'
    }
    return (
      <div>
        <div class='p-2'>
          Custom Layout
          <button
            class='border-2 border-gray rounded m-2 p-2 bg-gray-100'
            onClick={toDefault}
          >
            To Default Layout
          </button>
        </div>
        {this.$slots.default()}
        {this.$slots.footer({
          kind: 'custom layout footer',
        })}
      </div>
    )
  },
})
