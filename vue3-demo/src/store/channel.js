import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useChannelStore = defineStore('channel', () => {
  // 声明数据 state
  const channelList = ref([])
  // 声明操作数据的方法 actions
  const getList = async () => {
    // 支持异步
    const { data: { data } } = await axios.get('http://geek.itheima.net/v1_0/channels')
    channelList.value = data.channels
  }
  // 声明基于数据派生的计算属性 getters

  // 声明数据 state msg

  return {
    channelList,
    getList
  }
},{
  persist: true // 开启当前模块的持久化
})