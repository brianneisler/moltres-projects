
//-------------------------------------------------------------------------------
// Util
//-------------------------------------------------------------------------------

type Array<T> {
  $index: ArrayIndex<T>
}

type ArrayIndex<T> extends T {
  validate() { isNumberString($index) }
}

type EmptyPush {
  validate() { isEmptyPush(this) }
}

type EmptyString extends String {
  validate() { isEmptyString(this) }
}

type Id extends String {
  validate() { isId(this) }
}



type DeletedEntity extends Entity {
  deleted: String
}

//NOTE BRN: This does not work. key() == 'id' in this scenario. Can switch up to using this if https://github.com/firebase/bolt/issues/95 is ever fixed.
/*type PrimaryId extends Id {
  validate() = this == key();
}*/

function doesExist(value) {
  return prior(value) != null;
}

function doesNotExist(value) {
  return prior(value) == null;
}

function escapePathPart(pathPart) {
  return pathPart
    .replace('.', '(P)')
    .replace('$', '(D)')
    .replace('#', '(H)')
    .replace('[', '(OB)')
    .replace(']', '(CB)')
    .replace('/', '(FS)');
}

function isEmptyPush(value) {
  return doesNotExistAndWillNotExist(value);
}

function isEmptyString(value) {
  return value == "";
}

function isDeletedEntity(value) {
  return value.deleted != null;
}


function isNumberString(value) {
  return value.test(/^[0-9]+$/);
}

function doesNotExistAndWillNotExist(value) {
  return (doesNotExist(value) && willNotExist(value));
}

function unescapePathPart(pathPart) {
  return pathPart
    .replace('(P)', '.')
    .replace('(D)', '$')
    .replace('(H)', '#')
    .replace('(OB)', '[')
    .replace('(CB)', ']')
    .replace('(FS)', '/');
}
