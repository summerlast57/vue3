<script setup>
// 注意：由于写了setup，所以无法直接配置props选项
// 所以：此处需要借助于‘编译器宏’函数接收父组件传递的数据
const props = defineProps({
  car:String,
  money:Number
})
console.log(props.car);
const emit = defineEmits(['changeMoney'])
const wasteMoney = () => {
  // 需要emit触发事件
  emit('changeMoney', 50)
}
</script>

<template>
  <div class="son">
    <!-- 基于props传过来的数据，模板中可以直接使用 -->
    我是子组件：{{ car }}-{{ money }}
    <button @click="wasteMoney">花钱</button>
  </div>
</template>

<style scoped>
.son{
  border: 1px solid #222222;
  padding: 30px;
}
</style>
