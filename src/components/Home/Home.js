import React from 'react';
import MyButton from '../MyButtons/MyButton';
import './Home.css'
const Home = () => {
    return (
        <div>

            <div className="container">
                <div className="row">

                        <div className="buttonSection d-block" >


                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch"><MyButton /></div>
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch"><MyButton /></div>
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch"><MyButton /></div>


                        </div>

                    </div>

                </div>

            </div>
    );
};

export default Home;