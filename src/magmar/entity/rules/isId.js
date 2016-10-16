import { test } from 'magmar'

export default function isId(value) {
  return test(value, /^-[a-zA-Z0-9_-]+$/)
}
