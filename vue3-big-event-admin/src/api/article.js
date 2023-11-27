import request from '@/utils/request'

// 分类
// 获取文章分类
export const artGetChannelsService = () => request.get('/my/cate/list')
// 添加文章分类
export const artAddChannelsService = (data) =>
  request.post('/my/cate/add', data)
// 编辑文章分类
export const artEditChannelsService = (data) =>
  request.put('/my/cate/info', data)
// 删除文章分类
export const artDelChannelsService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })

// 文章
// 获取文章列表
export const artGetListService = (params) =>
  request.get('/my/article/list', {
    params
  })
// 添加文章
export const artPublishService = (data) => {
  request.post('/my/article/add', data)
}
// 获取文章详情
export const artGetDetailService = (id) =>
  request.get('/my/article/info', {
    params: { id }
  })
// 编辑文章详情
export const artEditService = (data) => request.put('/my/article/info', data)
// 删除文章
export const artDelService = (id) =>
  request.delete('my/article/info', { params: { id } })
