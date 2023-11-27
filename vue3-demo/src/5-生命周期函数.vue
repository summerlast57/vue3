<script setup>

import { onMounted } from 'vue'
// beforeCreate和created的相关代码一律放在setup中
const getList= () => {
  console.log('发送请求，获取数据');
}
// 一进入页面的请求
getList()

// 如果有些代码需要放在mounted生命周期中执行
onMounted(() => {
  console.log('mounted生命周期函数-逻辑一')
})

// 写成函数的调用方式，可以调用多次，并不会冲突，而是按照顺序依次执行
onMounted(() => {
  console.log('mounted生命周期函数-逻辑二')
})

</script>

<template>

</template>

<style scoped>
</style>
