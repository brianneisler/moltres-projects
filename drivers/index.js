const app = {
  default: require('./app').default,
  info: require('./app/driver.json')
}
const router = {
  default: require('./router').default,
  info: require('./router/driver.json')
}
const stydux = {
  default: require('./stydux').default,
  info: require('./stydux/driver.json')
}
export {
  app,
  router,
  stydux
}
