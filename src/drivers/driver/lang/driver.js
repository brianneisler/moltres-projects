import { EVALUATOR, KEYWORD, PAYLOAD } from 'stutter'

function map(statements) {
  return {
    [KEYWORD]: 'map',
    [PAYLOAD]: { statements },
    [EVALUATOR]: evalMap
  }
}

function keywordMap(payload) {
  return {
    [KEYWORD]: 'map',
    [PAYLOAD]: payload,
    [EVALUATOR]: evalMap
  }
}

function* evalDriver({ statements }) {
  for (var i = 0, size = statements.length; i < size; i++) {
    yield
  }
}

export default {
  [EVALUATOR]: evalMap,
  [KEYWORD]: 'driver',
  [PAYLOAD]: { statements }
}
