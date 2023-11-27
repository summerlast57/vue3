<script setup>
import { useCounterStore } from '@/store/counter.js'
const countStore = useCounterStore()
</script>

<template>
  <div>
    <h3>
      我是Son1-pinia.vue-{{ countStore.count }}-{{ countStore.double }}
      <button @click="countStore.subCount"> - </button>
    </h3>
  </div>
</template>

<style scoped>
button{
  width: 22px;
  height: 22px;
}
</style>
