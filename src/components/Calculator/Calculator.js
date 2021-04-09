import { React, useState } from 'react';
import "./Calculator.css";

const Calculator = () => {


  

              const acButton = () => {

                alert('this is ac Button')

              }


              const devideButton = (props) => {

                alert()

              }


              const seven = (props) => {

                alert()

              }

              const eight = (props) => {

                alert()

              }

              const nine = (props) => {

                alert()

              }

              const multiply = () => {

                alert('this is *')

              }



              const four = (props) => {

                alert()

              }
              const five = (props) => {

                alert()

              }
              const six = (props) => {

                alert()

              }
              const minus = () => {

                alert('this is  - ')

              }
              const one = (props) => {

                alert()

              }
              const two = (props) => {

                alert()

              }
              const three = (props) => {

                alert()


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
                <td colSpan="4">
                  <div className='display'> <input type='text' className="form-control display" id='display'  /></div>
                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn br calcBtn' id='ac' onClick={() => acButton('ac')}>AC</button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='div' onClick={() => devideButton('/')}>&#247; </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn  br calcBtn' id='seven' onClick={() => seven(7)} >7 </button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='eight' onClick={() => eight(8)}>8 </button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='nine' onClick={() => nine(9)}>9 </button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='mult' onClick={() => multiply('*')}>x </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn  br calcBtn' id='four' onClick={() => four(4)}> 4</button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='five' onClick={() => five(5)}>5 </button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='six' onClick={() => six(6)}>6 </button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='min' onClick={() => minus('-')}>- </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn  br calcBtn' id='one' onClick={() => one(1)}>1 </button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='two' onClick={() => two(2)}>2 </button>
                </td>
                <td>
                  <button className='btn  br calcBtn' id='three' onClick={() => three(3)}>3 </button>
                </td>
                <td rowSpan="2">
                  <button className='btn  br calcBtn' id='plus' onClick={() => sum('+')}>+</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn  br calcBtn' id='zero' onClick={() => zero(0)}>0 </button>
                </td>

                <td>
                  <button className='btn  br calcBtn' id='equal' onClick={() => equal('=')}>= </button>
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