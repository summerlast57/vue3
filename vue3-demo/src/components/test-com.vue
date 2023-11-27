<script setup>
import { ref } from 'vue'
const count = ref(999)
const sayHi = () => {
  console.log('hello');
}
defineExpose({
  count,
  sayHi
})
</script>

<template>
  <div>
    <h3>我是测试组件-{{ count }}</h3>
  </div>
</template>

<style scoped></style>
