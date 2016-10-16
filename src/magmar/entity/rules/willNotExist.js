import { equal } from 'magmar'

export default function willNotExist(value) {
  return equal(value, null)
}
