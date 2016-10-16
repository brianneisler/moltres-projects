import { not } from 'magmar'

export default function willExist(value) {
  return not.equal(value, null)
}
