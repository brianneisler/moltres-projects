import { applyHigherOrder } from 'duxtape'
export default (state) => {
  const higherOrders = _.get(state, 'higherOrders')
  return applyHigherOrder(...higherOrders)
}
