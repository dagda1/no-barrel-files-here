import { assert } from '@cutting/assert';

type O = Record<string, unknown>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isEqual<T>(left: T | T[], right: T | T[]): boolean {
  function getType(obj: T | T[]) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }

  function areArraysEqual() {
    assert(Array.isArray(left) && Array.isArray(right), 'eiter left or right is not an array');

    if (left.length !== right.length) {
      return false;
    }

    for (let i = 0; i < left.length; i++) {
      if (!isEqual(left[i], right[i])) {
        return false;
      }
    }

    return true;
  }

  function areObjectsEqual() {
    assert(!Array.isArray(left) && !Array.isArray(right), 'eiter left or right is an array');

    assert(typeof left !== 'function' && typeof right !== 'function');

    if (Object.keys(left as O).length !== Object.keys(right as O).length) {
      return false;
    }

    for (const key of Object.keys(left as O)) {
      if (!isEqual((left as O)[key] as T, (right as O)[key] as T)) {
        return false;
      }
    }

    return true;
  }

  function areFunctionsEqual() {
    assert(typeof left === 'function' && typeof right === 'function', 'either left or right is not function');
    return left.toString() === right.toString();
  }

  function arePrimativesEqual() {
    return left === right;
  }

  const type = getType(left);

  if (!left) {
    return left === right;
  }

  if (type !== getType(right)) {
    return false;
  }

  if (type === 'array') {
    return areArraysEqual();
  }
  if (type === 'object') {
    return areObjectsEqual();
  }
  if (type === 'function') {
    return areFunctionsEqual();
  }

  return arePrimativesEqual();
}
