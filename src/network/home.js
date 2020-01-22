import { request } from './request'
// 轮播图加下面四个选项的数据
export function getHomeMultiData() {
  return request({
    url:'/home/multidata'
  })
}
//商品详情的数据
export function getHomeGoodsData(type,page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
