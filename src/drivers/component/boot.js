import createComponentFactory from './createComponentFactory'

export default ({ engine }) => {
  engine.injection.injectFactory('component', createComponentFactory())
}
