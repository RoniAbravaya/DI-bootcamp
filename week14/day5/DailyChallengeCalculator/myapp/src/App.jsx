import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let calculatedResult;

    switch (operation) {
      case '+':
        calculatedResult = number1 + number2;
        break;
      case '-':
        calculatedResult = number1 - number2;
        break;
      case '*':
        calculatedResult = number1 * number2;
        break;
      case '/':
        calculatedResult = number1 / number2;
        break;
      default:
        calculatedResult = '';
        break;
    }

    setResult(calculatedResult);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <select value={operation} onChange={handleOperationChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={calculate}>Add Them</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;
