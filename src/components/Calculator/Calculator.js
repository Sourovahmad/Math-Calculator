import React from 'react';
import "./Calculator.css";

const Calculator = () => {
    return (

     <div>

<div class="container" id="myCalculator">
  <div class="calculator text-center rounded-top rounded-bottom">
    <div class="calculatorName">
      <h1>FreeCodeCamp</h1>      
      <h3>ELECTRONIC CALCULATOR</h3>
    </div>
    
    <div class='buttons'>
      <table>
        <tr>
          <td colspan="4">
            <div class='display'>      <input type='text' class="form-control display" id='display' value="0" /></div>
          </td>
        </tr>
        <tr>
          <td>
            <button class='btn br calcBtn' id='ac' onclick="clearDisplay()">AC</button>
          </td>
          <td>
            <button class='btn  br calcBtn' id='ce' onclick="clearDisplay()">CE</button>
          </td>
          <td>
            <button class='btn  br calcBtn' id='mod' onclick="inputSign('%')">%</button>
          </td>
          <td>
            <button class='btn  br calcBtn' id='div' onclick="inputSign('/')">&#247; </button>
          </td>
        </tr>
        <tr>
          <td>
            <button class='btn  br calcBtn' id='seven' onclick="inputDisplay('7')">7 </button>
          </td>
          <td>
            <button class='btn  br calcBtn' id='eight' onclick="inputDisplay('8')">8 </button>
          </td>
          <td>
            <button class='btn  br calcBtn' id='nine' onclick="inputDisplay('9')">9 </button>
          </td>
          <td>
            <button class='btn  br calcBtn' id='mult' onclick="inputSign('X')">x </button>
          </td>
        </tr>
        <tr>
          <td>
            <button class='btn  br calcBtn' id='four'  onclick="inputDisplay('4')">
            4</button>
          </td>
          <td>
            <button class='btn  br calcBtn' id='five' onclick="inputDisplay('5')">5 </button>
          </td>
          <td>
            <button class='btn  br calcBtn' id='six' onclick="inputDisplay('6')">6 </button>
          </td>
          <td>
            <button class='btn  br calcBtn' id='min' onclick="inputSign('-')">- </button>
          </td>
        </tr>
        <tr>
          <td>
            <button class='btn  br calcBtn' id='one' onclick="inputDisplay('1')">1 </button>
          </td>
          <td>
            <button class='btn  br calcBtn' id='two'  onclick="inputDisplay('2')">2 </button>
          </td>
          <td>
            <button class='btn  br calcBtn' id='three' onclick="inputDisplay('3')">3 </button>
          </td>
          <td rowspan="2">
            <button class='btn  br calcBtn' id='plus' onclick="calculate(display,'+')">+</button>
          </td>
        </tr>
        <tr>
          <td>
            <button class='btn  br calcBtn' id='zero' onclick="inputDisplay('0')">0 </button>
          </td>
          <td>
            <button class='btn  br calcBtn' id='dot' onclick="inputDisplay('7')">. </button>
          </td>
          <td>
            <button class='btn  br calcBtn' id='equal' onclick="getResult()">= </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</div>


     </div>
    );
};

export default Calculator;