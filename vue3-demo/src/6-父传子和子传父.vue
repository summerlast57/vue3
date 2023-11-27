<script setup>
// 父传子
// 1.给子组件添加属性的方式传值
// 2.在子组件通过props来接收

// 子传父
// 1.在子组件内部，通过emit触发事件（编译器宏获得）
// 2.在父组件，通过@监听

// 局部组件，导入进来就能用
import SonCom from '@/components/son-com.vue'
import { ref } from 'vue'

const money = ref(100)
const getMoney = () => {
  money.value += 100
}
const changeFn = (num) => {
  money.value -= num
}
</script>

<template>
  <div>
    <h3>
      父组件-{{ money }}
      <button @click="getMoney">赚钱</button>
    </h3>
    <!-- 给子组件添加属性的方式传值 -->
    <SonCom 
      car="宝马"
      :money="money" 
      @changeMoney="changeFn">
    </SonCom>
  </div>
</template>

<style scoped>
</style>
