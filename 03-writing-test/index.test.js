import { sum } from './index.js';
import { describe, test } from 'node:test';
import assert from 'node:assert';

describe('Calculator', () => {
  test('Harus bertambah dengan tepat', () => {
    const testValueA = 1;
    const testValueB = 2;

    const sumValue = sum(testValueA, testValueB);

    const expectedValue = 3;
    assert.equal(sumValue, expectedValue);
  });

 
});
