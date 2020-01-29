export default {
  addCount(state, payload) {
    payload.count += 1
  },
  pushCarList(state, payload) {
    state.carList.push(payload)
  }
}
