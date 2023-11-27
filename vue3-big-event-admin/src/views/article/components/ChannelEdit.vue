<script setup>
import { ref } from 'vue'
import { artAddChannelsService, artEditChannelsService } from '@/api/article.js'
import { ElMessage } from 'element-plus'

const dialogVisible = ref(false)
const formModel = ref({
  cate_name: '',
  cate_alias: ''
})
const formRef = ref()
const rules = {
  cate_name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '分类名必须是1-10位的非空字符',
      trigger: 'blur'
    }
  ],
  cate_alias: [
    { required: true, message: '请输入分类别名', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{1,15}$/,
      message: '分类别名必须是1-15位的字母数字',
      trigger: 'blur'
    }
  ]
}

const emit = defineEmits(['success'])
const onSubmit = async () => {
  await formRef.value.validate()
  if (formModel.value.id) {
    await artEditChannelsService(formModel.value)
  } else {
    await artAddChannelsService(formModel.value)
  }
  ElMessage({
    type: 'success',
    message: formModel.value.id ? '编辑成功' : '添加成功'
  })
  dialogVisible.value = false
  emit('success')
}

// 组件对外暴露一个方法open，基于open传来的参数，区分添加还是编辑
// open({})=> 表单无需渲染，说明是添加
// open({ id, cate_name, ...})=> 表单需要渲染，说明是编辑
// open调用后，可以打开弹窗

const open = (row) => {
  dialogVisible.value = true
  formModel.value = { ...row }
  console.log(formModel.value)
}

// 向外暴露方法
defineExpose({
  open
})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    :title="formModel.id ? '编辑分类' : '添加分类'"
    width="30%"
  >
    <el-form
      :model="formModel"
      :rules="rules"
      ref="formRef"
      label-width="100px"
      style="padding-right: 30px"
    >
      <el-form-item label="分类名称" prop="cate_name">
        <el-input
          v-model="formModel.cate_name"
          placeholder="请输入分类名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_alias">
        <el-input
          v-model="formModel.cate_alias"
          placeholder="请输入分类别名"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
