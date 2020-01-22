import { request } from './request'
// 轮播图加下面四个选项的数据
export function getHomeMultiData() {
  return request({
    url:'/home/multidata'
  })
}
