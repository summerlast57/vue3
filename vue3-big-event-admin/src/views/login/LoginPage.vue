<script setup>
import { userRegisterService, userLoginService } from '@/api/user.js'
import { User, Lock } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores'

const isRegister = ref(false)
const form = ref()
// 注册
// 整个的用于提交的表单的数据对象
const formModel = ref({
  username: '',
  password: '',
  repassword: ''
})
// 整个表单的校验规则
// 1.非空校验 required：true  mesage消息提示 trigger触发的时机 blur和change
// 2.长度校验 min：xx max：xx
// 3.正则校验 pattern：正则规则
// 4.自定义校验 => 自己写逻辑（逻辑校验）
//   （1）rule 当前校验规则相关的信息
//   （2）value 所校验的表单元素目前的表单值
//   （3）callback 无论成功失败，都需要callback回调
//        callback() 校验成功
//        callback(new Error('xxxx')) 校验失败
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 10, message: '用户名在5-10个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '密码为6-15位非空字符', trigger: 'blur' }
  ],
  repassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '密码为6-15位非空字符', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value === formModel.value.password) {
          callback()
        } else {
          callback(new Error('两次输入密码不一致'))
        }
      },
      trigger: 'blur'
    }
  ]
}

const userStore = useUserStore()
const router = useRouter()

const register = async () => {
  await form.value.validate()
  await userRegisterService(formModel.value)
  ElMessage.success('注册成功')
  isRegister.value = true
}

const login = async () => {
  await form.value.validate()
  const res = await userLoginService(formModel.value)
  userStore.setToken(res.data.token)
  ElMessage.success('登录成功')
  router.push('/')
}

// 切换的时候，重置表单内容
watch(isRegister, () => {
  formModel.value = {
    username: '',
    password: '',
    repassword: ''
  }
})
</script>

<template>
  <!-- 1.结构说明
      el-row 表示一行 一行分24份
      el-col 表示一列
      :span='12' 代表在一行中占12份
      :offset="3" 代表距左侧3份

      el-form 表示表单
      el-form-item 表示表单中的一行
      2.校验相关
      （1）:model="ruleForm" 绑定的整个form的数据对象
      （2）:rules="rules" 绑定整个rules的规则对象
      （3）v-model="ruleForm.region" 给表单元素绑定form的子属性
      （4）prop="name" prop配置生效的是哪个校验规则（和rules中的字段要对应）
    -->
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        v-if="isRegister"
      >
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input
            v-model="formModel.repassword"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入再次密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="register"
            class="button"
            type="primary"
            auto-insert-space
          >
            注册
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = false">
            ← 返回
          </el-link>
        </el-form-item>
      </el-form>
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        v-else
      >
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            name="password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>记住我</el-checkbox>
            <el-link type="primary" :underline="false">忘记密码？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="login"
            class="button"
            type="primary"
            auto-insert-space
            >登录</el-button
          >
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = true">
            注册 →
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;
  .bg {
    background:
      url('@/assets/logo2.png') no-repeat 60% center / 240px auto,
      url('@/assets/login_bg.jpg') no-repeat center / cover;
    border-radius: 0 20px 20px 0;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    .title {
      margin: 0 auto;
    }
    .button {
      width: 100%;
    }
    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
