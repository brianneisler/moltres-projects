import createDriverFactory from './createDriverFactory'

export default ({ engine }) => {
  engine.injection.injectFactory('driver', createDriverFactory())
}
