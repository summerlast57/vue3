<script setup>

import CenterCom from '@/components/center-com.vue'
import { ref, provide } from 'vue'

// provide 
// 1.跨层传递普通数据
provide('theme-color','pink')
// 2.跨层传递响应式数据
const count = ref(100)
provide('count', count)

setTimeout(() => {
  count.value = 500
}, 2000);

// 3.跨层传递函数 => 给子孙后代传递可以修改数据的方法
provide('changeCount', (newCount) => {
  count.value = newCount
})

</script>

<template>
  <div>
    <h1>我是顶部组件</h1>
  </div>
  <CenterCom></CenterCom>
</template>

<style scoped>
</style>
