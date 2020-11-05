import React from "react";
import web from "../src/3372237.svg";
const Common = (props) =>{
    return(
        <>
       <section id="header" className="d-flex align-items-center">
            <div className = "container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
    <h1>{props.name} <strong className="brand-name">{props.brand}</strong></h1>
                            <h2 className="my-3">We are the team of talented developers making websites</h2>
                            <div className="mt-3">
                                <a href="/" className="btn btn-outline-primary">Get Started</a>
                            </div>
                        </div>
                     
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web} className="img-fluid animated" alt="home img"/>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    );
};
export default Common;