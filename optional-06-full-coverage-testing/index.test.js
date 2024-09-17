import sum from './index.js'
import {  test } from 'node:test';
import assert from 'node:assert';


  test('Harus bertambah dengan tepat', () => {
    const testValueA = 1;
    const testValueB = 2;

    const sumValue = sum(testValueA, testValueB);

    const expectedValue = 3;
    assert.equal(sumValue, expectedValue);
  });

  test('Value A harus berbentuk number', () => {

      const operandA = '1';
      const operandB = 2;

      const actual =  sum(operandA, operandB);
  
  

    assert.equal(actual, 0);
  });

  test('Value B harus berbentuk number', () => {
    
      // Arrange
      const operandA = '5';
      const operandB = 4;
  
      // Action
      const actual =  sum(operandA, operandB);
  
  
    // Assert
    assert.equal(actual, 0);
  });

  test('Value A harus lebih dari nol', () => {

    const operandA = -1;
    const operandB = 2;

    const actual =  sum(operandA, operandB);



  assert.equal(actual, 0);
});

test('Value B harus lebih dari nol', () => {
  
    // Arrange
    const operandA = 2;
    const operandB = -2;

    // Action
    const actual =  sum(operandA, operandB);


  // Assert
  assert.equal(actual, 0);
});
