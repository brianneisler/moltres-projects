import _ from 'mudash'
import React, { Children } from 'react'
import { Driver } from 'moltres'
import { StyduxProvider } from 'react-stydux'
import { createStydux, createStyduxMiddleware } from 'stydux'

export default class StyduxDriver extends Driver {

  constructor(info) {
    super(info)
    this.selectStyles = this.selectStyles.bind(this)
    this.stydux = createStydux(this.selectStyles)
  }

  createMiddleware() {
    return createStyduxMiddleware(this.stydux)
  }

  renderDriver(child) {
    console.log('child:', child)
    const children = child ? Children.only(child) : null
    console.log('children:', children, 'this.stydux:', this.stydux)
    return (
      <StyduxProvider stydux={this.stydux}>
        {children}
      </StyduxProvider>
    )
  }

  selectStyles(state) {
    //TODO BRN: allow for other drivers to extend the selection process
    return _.get(state, 'styles')
  }
}
