import { equal } from 'flareon'

export default function willNotExist(value) {
  return equal(value, null)
}
