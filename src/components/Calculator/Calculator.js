import React from 'react';
import MyButton from '../MyButtons/MyButton'
import "./Calculator.css";

const Calculator = () => {
    return (
        <>

            <div className="myCalculator" id="mycalculattor">

                <div className="ouptutSection">

                    <p> this is output section</p>

                </div>

                <div className="allButtons ">



                <div className="buttonSection p-2" >

                    <div className="col-4 d-inline-block "><MyButton /></div>

                    <div className="col-4 d-inline-block "><MyButton /></div>

                    <div className="col-4 d-inline-block "><MyButton /></div>


                </div>

                <div className="buttonSection p-2" >

                    <div className="col-4 d-inline-block "><MyButton /></div>

                    <div className="col-4 d-inline-block "><MyButton /></div>

                    <div className="col-4 d-inline-block "><MyButton /></div>


                </div>

                <div className="buttonSection p-2" >

                    <div className="col-4 d-inline-block "><MyButton /></div>

                    <div className="col-4 d-inline-block "><MyButton /></div>

                    <div className="col-4 d-inline-block "><MyButton /></div>


                </div>


                </div>






            </div>


        </>
    );
};

export default Calculator;