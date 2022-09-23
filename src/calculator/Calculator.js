// import logo from './logo.svg';
import "./Calculator.css";
import { useState } from "react";

function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  return (
    <div className="Calculator">
      <div className="container">
        <div className="display">
          {result ? <span>({result})</span> : ""}&nbsp;
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>:</button>
          <button onClick={() => updateCalc("*")}>x</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
//calculator yang ke
// import React from "react";
// import { useState } from "react";
// import "./home.css";

// const Calculator = () => {
//   const [result, setResult] = useState("");

//   const handlerClick = (e) => {
//     setResult(result.concat(e.target.name));
//   };
//   const clear = () => {
//     setResult("");
//   };
//   const backspace = () => {
//     setResult(result.slice(0, -1)); // or -1
//   };
//   const hasil = () => {
//     try {
//       setResult(eval(result).toString());
//     } catch (err) {
//       setResult("Error");
//     }
//   };
//   return (
//     <>
//       <div className="container">
//         <form>
//           <input className="input1" type="text" value={result} />
//         </form>
//         <div className="keypad">
//           <button className="highlight" onClick={clear} id="clear">
//             Clear
//           </button>
//           <button className="highlight" onClick={backspace} id="backspace">
//             c
//           </button>
//           <button className="highlight" name="/" onClick={handlerClick}>
//             &divide;
//           </button>
//           <button name="7" onClick={handlerClick}>
//             7
//           </button>
//           <button name="8" onClick={handlerClick}>
//             8
//           </button>
//           <button name="9" onClick={handlerClick}>
//             9
//           </button>
//           <button className="highlight" name="*" onClick={handlerClick}>
//             &times;
//           </button>
//           <button name="4" onClick={handlerClick}>
//             4
//           </button>
//           <button name="5" onClick={handlerClick}>
//             5
//           </button>
//           <button name="6" onClick={handlerClick}>
//             6
//           </button>
//           <button className="highlight" name="-" onClick={handlerClick}>
//             &ndash;
//           </button>
//           <button name="1" onClick={handlerClick}>
//             1
//           </button>
//           <button name="2" onClick={handlerClick}>
//             2
//           </button>
//           <button name="3" onClick={handlerClick}>
//             3
//           </button>
//           <button className="highlight" name="+" onClick={handlerClick}>
//             +
//           </button>
//           <button name="0" onClick={handlerClick}>
//             0
//           </button>
//           <button name="." onClick={handlerClick}>
//             .
//           </button>
//           <button className="highlight" onClick={hasil} id="result">
//             =
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Calculator;
