<script setup>
import { useCounterStore } from '@/store/counter.js'
const countStore = useCounterStore()

</script>

<template>
  <div>
    <h3>
      我是Son2-pinia.vue-{{ countStore.count }}-{{ countStore.double }}
      <button @click="countStore.addCount">+</button>
    </h3>
  </div>
</template>

<style scoped>
button{
  width: 22px;
  height: 22px;
}
</style>
