import { type } from 'flareon'
import Id from './Id'
import TimeStamped from './TimeStamped'

export default type('Entity', {
  id: Id
}).extends(TimeStamped)
