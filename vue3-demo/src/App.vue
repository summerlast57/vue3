<script setup>
import { storeToRefs } from 'pinia'
import Son1Com from '@/components/Son1-pinia.vue'
import Son2Com from '@/components/Son2-pinia.vue'
import { useCounterStore } from '@/store/counter.js'
import { useChannelStore } from '@/store/channel.js'
const countStore = useCounterStore()
const channelStore = useChannelStore()

// 此时，直接解构，不处理，数据会丢失响应式
// const { count, msg } = useCounterStore()

// 使用storeToRefs可以解决丢失响应式这个问题
const { count, msg } = storeToRefs(countStore)

const { channelList } = storeToRefs(channelStore)
// 对于方法，可以直接解构
const { getList } = channelStore
</script>

<template>
  <div>
    <h1>我是App.vue根组件 - {{ count }} - {{ msg }}</h1>
  </div>
  <Son1Com></Son1Com>
  <Son2Com></Son2Com>
  <hr>
  <button @click="getList">获取频道数据</button>
  <ul>
    <li v-for="item in channelList" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<style scoped>
</style>
