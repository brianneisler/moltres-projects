import createAppFactory from './createAppFactory'

export default ({ engine }) => {
  engine.injection.injectFactory('app', createAppFactory())
}
