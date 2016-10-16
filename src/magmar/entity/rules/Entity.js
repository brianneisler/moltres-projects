import { type } from 'magmar'
import Id from './Id'
import TimeStamped from './TimeStamped'

export default type('Entity', {
  id: Id
}).extends(TimeStamped)
