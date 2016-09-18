import { not } from 'flareon'

export default function willExist(value) {
  return not.equal(value, null)
}
