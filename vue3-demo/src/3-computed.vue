<script setup>
// computed
import { computed, ref } from 'vue'
 const list =ref([1,2,3,4,5,6,7,8]) 
 const computedList = computed(() => {
  return list.value.filter(item => item >4)
 })
 const addFn = () => {
  list.value.push(666)
 }
</script>

<template>
    <div>{{ list }}</div>
    <div>修改后数据：{{ computedList }}</div>
    <button @click="addFn">+666</button>
</template>

<style scoped>
</style>
