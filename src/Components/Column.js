import React from 'react'
import Babygirl from '../assets/image/HERO BABE.png';
import apple from '../assets/image/apple.svg';
import google from '../assets/image/google.svg';

const Column = () => {
    return (
        <div>
            <div className="container">
  <div className="row">
    <div className="col">
        <h1 style={{color: "#4c6b9f", marginTop: "180px", fontSize: "40px"}}>You bring the passion,</h1>
        <h1 className="mt-2" style={{color: "#4c6b9f", fontSize: "40px"}}>We bring the music.</h1>
        <p className="mt-5" style={{lineHeight: "0.3", color: "rgba(0, 0, 0, 0.5)"}}>Listen to the best playlists and albums of different genres</p>
        <p className="mb-4" style={{color: "rgba(0, 0, 0, 0.5)"}}>by the best artists for free</p>
        <img className="me-2" src={google} alt="googleapp"/>
        <img src={apple} alt="A girl with headphone"/>
    </div>
    <div className="col">
        <img className="w-100" src={Babygirl} alt="A girl with headphone"/>
    </div>
  </div>
</div>            
        </div>
    )
}

export default Column
