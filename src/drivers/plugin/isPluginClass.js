import Plugin from './Plugin'

export default function isPluginClass(value) {
  return value.prototype instanceof Plugin
}
