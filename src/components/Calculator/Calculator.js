import { React, useState } from 'react';
import "./Calculator.css";

const Calculator = () => {


  const [outPut, SetOutput] = useState(15);

              const acButton = () => {

                alert('this is ac Button')

              }


              const devideButton = () => {

                alert('this is / ')

              }


              const seven = () => {

                alert('this is 7 button ')

              }

              const eight = () => {

                alert('this is seven 8 ')

              }

              const nine = () => {

                alert('this is  9 ')

              }

              const multiply = () => {

                alert('this is  * ')

              }



              const four = () => {

                alert('this is  4 ')

              }
              const five = () => {

                alert('this is  5 ')

              }
              const six = () => {

                alert('this is  6 ')

              }
              const minus = () => {

                alert('this is  - ')

              }
              const one = () => {

                alert('this is  1 ')

              }
              const two = () => {

                alert('this is  2 ')

              }
              const three = () => {

                alert('this is  3 ')


              }


              const sum = () => {

                alert('this is  + ')

              }


              const zero = () => {

                alert('this is  0 ')

              }

              const equal = () => {

                alert('this is  = ')

              }

            


  return (

    <div>

      <div className="container" id="myCalculator">
        <div className="calculator text-center rounded-top rounded-bottom">
          <div className="calculatorName">
            <h1>Khan Calculation Service</h1>
          </div>

          <div className='buttons'>
            <table>
              <tr>
                <td colspan="4">
                  <div className='display'> <input type='text' className="form-control display" id='display' value={outPut} /></div>
                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn br calcBtn' id='ac' onClick={() => acButton()}>AC</button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='div' onClick={() => devideButton()}>&#247; </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn  br calcBtn' id='seven' onClick={() => seven()} >7 </button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='eight' onClick={() => eight()}>8 </button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='nine' onClick={() => nine()}>9 </button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='mult' onClick={() => multiply()}>x </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn  br calcBtn' id='four' onClick={() => four()}> 4</button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='five' onClick={() => five()}>5 </button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='six' onClick={() => six()}>6 </button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='min' onClick={() => minus()}>- </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn  br calcBtn' id='one' onClick={() => one()}>1 </button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='two' onClick={() => two()}>2 </button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='three' onClick={() => three()}>3 </button>
                </td>
                <td rowspan="2">
                  <button className='btn  br calcBtn' id='plus' onClick={() => sum()}>+</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn  br calcBtn' id='zero' onClick={() => zero()}>0 </button>
                </td>

                <td>
                  <button className='btn  br calcBtn' id='equal' onClick={() => equal()}>= </button>
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