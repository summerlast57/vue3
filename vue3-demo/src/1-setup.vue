<!-- <script>
export default {
  // setup
  // 1.执行时机比beforeCreate还要早
  // 2.setup函数中获取不到this（this 是 undefined）
  // 3.数据和函数需要在setup最后return，才能在模板中应用
  setup() {
    // console.log('setup函数', this)
    const message = 'hello vue3'
    const clgMessage = () => {
      console.log(message)
    }
    return {
      message,
      clgMessage
    }
  },
  beforeCreate() {
    console.log('beforeCreate函数')
  },
}
</script> -->

<!--setup的 语法糖 -->
<script setup>
const message = 'hello vue3'
const clgMessage = () => {
  console.log(message);
}
</script>

<template>
  <!-- 不再要求唯一根元素 -->
  <div>{{message}}</div>
  <button @click="clgMessage">按钮</button>
</template>

<style scoped>
</style>
