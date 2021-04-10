import React from 'react';
import './section.css';

const Section = () => {
    return (
        <div>
            <div className="container-fluid" style={{ backgroundColor: "#F5F5F5", height: "400px" }}>



                <div className="row sectionRow">

                    <div className="contentSection d-inline-flex">

                        <div className="col-sm-12 col-md-3 mr-4   cardSections" >

                            <div className="innercardSection">

                                <div className="cardIcon">
                                <i class="fas fa-home text-lg"></i>

                                </div>

                                <div className="cardName">

                          
                                </div>
                               
                            </div>


                        </div>


                        <div className="col-sm-12 col-md-3 mr-4   cardSections" >

                            <div className="innercardSection">
                            <i class="fas fa-home text-lg"></i>
                      </div>


                        </div>
                        <div className="col-sm-12 col-md-3 mr-4   cardSections" >

                            <div className="innercardSection">
                            <i class="fas fa-home text-lg"></i>
                      </div>


                        </div>
                        <div className="col-sm-12 col-md-3 mr-4   cardSections" >

                            <div className="innercardSection">
                            <i class="fas fa-home text-lg"></i>
                      </div>


                        </div>

                    </div>






                </div>


            </div>
        </div>
    );
};

export default Section;