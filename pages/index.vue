<template>
  <div>
    <span @click="q">Query</span>
    data: {{data}}
    <Tutorial/>
  </div>
</template>
<script setup>
import { ref } from 'vue'
definePageMeta({
  layout: 'default',
})
const data = ref()
const q = async () => {
  let res = await $fetch('/api/hello');
  console.log('res: ', res);
  data.value = res
}
</script>
