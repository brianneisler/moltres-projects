const app = {
  factory: require('./app').default,
  info: require('./app/driver.json')
}
const router = {
  factory: require('./router').default,
  info: require('./router/driver.json')
}
const stydux = {
  factory: require('./stydux').default,
  info: require('./stydux/driver.json')
}
export {
  app,
  router,
  stydux
}
