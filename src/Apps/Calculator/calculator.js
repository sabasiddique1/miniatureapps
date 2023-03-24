import React, { useState } from "react";
import "./calculator.css";
import * as math from "mathjs";

function Calculator() {
  const [expression, setExpression] = useState("");
  
  const handleDigitClick = (digit) => {
    setExpression(expression + digit);
  };
  const handleOperatorClick = (operator) => {
    if (expression.length === 0) {
      return;
    }
    const lastChar = expression[expression.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      setExpression(expression.slice(0, -1) + operator);
    } else {
      setExpression(expression + operator);
    }
  };
  const handleBracketClick = (bracket) => {
    setExpression(expression + bracket);
  };
  const handleDeleteClick = () => {
    setExpression(expression.slice(0, -1));
  };
  const handleClearClick = () => {
    setExpression("");
  };
  const handleDecimalClick = () => {
    if (!expression.includes(".")) {
      setExpression((prev) => prev + ".");
    }
  };
  const calculateResult = () => {
    try {
      const result = math.evaluate(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  return (
    <>
    <h1 className="calculator-app-heading">Calculator App</h1>
    <div className="App-cal">
      <div className="display-cal">{expression}</div>
      <div className="buttons-cal">
        <button className="delete" onClick={() => handleDeleteClick()}>
          <i class="fa-solid fa-delete-left"></i>
        </button>

        <button className="clear" onClick={() => handleClearClick()}>
          C
        </button>
        <button className="bracket" onClick={() => handleBracketClick("(")}>
          (&nbsp;
        </button>
        <button className="bracket" onClick={() => handleBracketClick(")")}>
          &nbsp;)
        </button>
        <button className="cal-digits" onClick={() => handleDigitClick("7")}>
          7
        </button>
        <button className="cal-digits" onClick={() => handleDigitClick("8")}>
          8
        </button>

        <button className="cal-digits" onClick={() => handleDigitClick("9")}>
          9
        </button>
        <button className="operator" onClick={() => handleOperatorClick("*")}>
          *
        </button>

        <button className="cal-digits" onClick={() => handleDigitClick("4")}>
          4
        </button>
        <button className="cal-digits" onClick={() => handleDigitClick("5")}>
          5
        </button>
        <button className="cal-digits" onClick={() => handleDigitClick("6")}>
          6
        </button>
        <button className="operator" onClick={() => handleOperatorClick("+")}>
          +
        </button>

        <button className="cal-digits" onClick={() => handleDigitClick("1")}>
          1
        </button>
        <button className="cal-digits" onClick={() => handleDigitClick("2")}>
          2
        </button>
        <button className="cal-digits" onClick={() => handleDigitClick("3")}>
          3
        </button>
        <button className="operator" onClick={() => handleOperatorClick("-")}>
          -
        </button>
        <button className="cal-digits" onClick={() => handleDigitClick("0")}>
          0
        </button>
        <button className="decimal-button" onClick={handleDecimalClick}>
          .
        </button>
        <button className="equals" onClick={() => calculateResult()}>
          =
        </button>
        <button className="operator" onClick={() => handleOperatorClick("/")}>
          /
        </button>
      </div>
    </div></>
  );
}

export default Calculator;
