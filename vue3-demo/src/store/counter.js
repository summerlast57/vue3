import { defineStore } from "pinia";
import { computed, ref } from 'vue'
// 定义store
// defineStore('仓库的唯一标识', ()=> {...})
export const useCounterStore = defineStore('counter', ()=> {
  // 声明数据 state
  const count = ref(100)
  // 声明操作数据的方法 actions
  const addCount = () => count.value++
  const subCount = () => count.value--
  // 声明基于数据派生的计算属性 getters
  const double = computed(() => {
    return count.value * 2
  } )
  // 声明数据 state msg
  const msg = ref('hello,pinia')

  return {
    count,
    addCount,
    subCount,
    double,
    msg
  }
},{
  persist: {
    key: 'hm-counter',
    paths: ['count']
  }
})