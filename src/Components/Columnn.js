import React from 'react'
import Hero from '../assets/image/babygirl.png';

const Columnn = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-5 col-lg-6">
                    <img className="w-100" src={Hero} alt="A lady"/>
                </div>
                <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0" style={{marginTop: "220px"}}>
                    <h4 style={{color: "#4c6b9f"}}>Listen to your favourite <br/>Music Artist</h4>
                    <p className="mt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br/>Velit officia Amet 
                    minim mollit non deserunt ullamco est 
                    sit aliqua dolor do<br/>amet sint. Velit officia</p>
                    <button className="btn btn-outline-danger my-2 my-sm-0" type="Learn more">Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Columnn
