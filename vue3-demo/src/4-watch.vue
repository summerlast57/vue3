<script setup>
// watch
import { watch, ref } from 'vue'
 const count =ref(0) 
 const name =ref('张三')
 const addFn = () => {
  count.value++
 }
 const changeName = () => {
  name.value = '李四'
 }
//  1.watch 监听单个数据
// watch(count, (newCount,oldCount) => {
//   console.log(newCount,oldCount);
// })

// 2.监听多个对象
// watch([count,name],(newArr, oldArr) => {
//   console.log(newArr,oldArr);
// })

// 3.immediate 立刻执行
// watch(count, (newCount,oldCount) => {
//   console.log(newCount,oldCount);
// },{
//   immediate: true
// })

// 4.deep:true 深度监视 默认watch进行的是浅层监视
//   const ref1 = ref(简单类型) 可以直接监视
//   const ref2 = red(复杂类型) 监视不到复杂类型内部数据的变化
const userInfo = ref({
  name: '小明',
  age: 18
})
const setUserInfo = () => {
  // 修改了userInfo.value 修改了对象的地址，才能监视到
  // userInfo.value = { name: '小红', age: 39 }

  userInfo.value.age++
}

// deep深度监视
// watch(userInfo, (newValue,olValue) => {
//   console.log(newValue);
// },{
//   deep: true
// })

// 5.对对象中的某个属性进行监视
watch(() => userInfo.value.age, (newValue,oldValue) => {
  console.log(newValue,oldValue);
})
</script>

<template>
    <div>{{ count }}</div>
    <button @click="addFn">修改数字</button>
    <div>{{ name }}</div>
    <button @click="changeName">修改名字</button>
    <hr>
    <div>{{ userInfo }}</div>
    <button @click="setUserInfo">修改对象</button>
</template>

<style scoped>
</style>
