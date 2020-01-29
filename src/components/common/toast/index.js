import Toast from './Toast'
const obj = {}

obj.install = function (Vue) {
  console.log(1)
  const toastCon = Vue.extend(Toast)
  const toast = new toastCon()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast;
}


export default obj
