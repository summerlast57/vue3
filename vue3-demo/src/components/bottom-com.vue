<script setup>

import { inject } from 'vue'

const themeColor = inject('theme-color')
const count = inject('count')

const changeCount = inject('changeCount')
const clickFn = () => {
  changeCount(1000)
}

</script>

<template>
  <div>
    <h3>我是底部组件-{{ themeColor }} - {{ count }}</h3>
    <button @click="clickFn">修改count</button>
  </div>
</template>

<style scoped>
</style>
