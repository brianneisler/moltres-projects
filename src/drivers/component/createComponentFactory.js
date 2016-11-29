import _ from 'mudash'
import { warning } from 'moltres'
import React from 'react'

export default function createComponentFactory() {

  function factory({ children, module, properties }) {
    const componentFactory = _.get(module, 'default')
    let component = React.createElement(componentFactory, properties, children)
    if (!component) {
      warning('Component did not declare an entry point')
    }
    return component
  }
  return {
    factory
  }
}
