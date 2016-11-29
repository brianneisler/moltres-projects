import createPluginFactory from './createPluginFactory'

export default ({ engine }) => {
  engine.injection.injectFactory('plugin', createPluginFactory())
}
