import { describe, it, expect } from 'vitest';
import { startCase } from './startCase';

describe('startCase', () => {
  it('upper cases add spaces before each upper case letter', () => {
    expect(startCase('helloWorld')).toBe('Hello World');
    expect(startCase('hello-world')).toBe('Hello World');
    expect(startCase('hello_world')).toBe('Hello World');
  });
});
