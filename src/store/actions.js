export default {
   addCar(context, payload) {
    return new Promise((resolve, reject) => {
        const oldList = context.state.carList.find(item => item.iid === payload.iid)
        // console.log(oldList)
        if (oldList) {
          // oldList.count += 1
          context.commit('addCount', oldList)
          resolve('商品数量+1')
        } else {
          payload.count = 1
          // context.state.carList.push(payload)
          context.commit('pushCarList', payload)
          resolve('添加新商品')
        }
        //  console.log(context.state.carList)
    })
   }
}