<script setup>
// 1.reactive：接受对象类型数据的参数传入并返回一个响应式的对象
// import { reactive } from 'vue'
// const state = reactive({
//   count: 100
// })
// const setCount = () => {
//   state.count++
// }

// 2.ref:接受简单类型或复杂类型数据的参数传入并返回一个响应式的对象
// 本质：是在原有传入数据的基础上，外层包了一层对象，包成了复杂对象
// 底层：包成复杂类型之后，再借助reactive实现的响应式
// 注意点：
// 1，脚本中访问数据，需要通过.value
// 2. 在template中，.value不需要加（帮我们扒了一层）
import { ref } from 'vue'
const count = ref(0)
const setCount = () => {
  count.value++
}
</script>

<template>
    <div>{{ count }}</div>
    <button @click="setCount">+1</button>
</template>

<style scoped>
</style>
