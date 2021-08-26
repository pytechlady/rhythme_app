import React from 'react'
import img1 from '../assets/image/Frame 242.png';
import img2 from '../assets/image/Frame 240.png';
import img3 from '../assets/image/Frame 241.png';

const Columns = () => {
  return (
    <div className="mt-5 pb-5" style={{backgroundColor: "rgb(247, 236, 238)"}}>
      <div className="container">
          <h4 className="text-center mb-3 pt-5" style={{color: "#4c6b9f"}}>An Amazing App can change your Daily Music Experience</h4>
          <p className="text-center" style={{color: "rgba(0, 0, 0, 0.5)"}}>Life is good! Enjoy music now</p>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <center>
                <img src={img1} alt="A logo"/>
                <h5 className="mb-4 mt-4">Top Quality Tracks</h5>
                <p className="mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia</p>
                <button className="btn btn-outline-danger my-2 my-sm-0" type="Learn more">Learn more</button>
              </center>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <center>
                <img src={img2} alt="Another logo"/>
                <h5 className="mb-4 mt-4">Best Value Online</h5>
                <p className="mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia</p>
                <button className="btn btn-outline-danger my-2 my-sm-0" type="Learn more">Learn more</button>
              </center>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <center>
                <img src={img3} alt="yet another logo"/>
                <h5 className="mb-4 mt-4">100% of the copyright</h5>
                <p className="mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia</p>
                <button className="btn btn-outline-danger my-2 my-sm-0" type="Learn more">Learn more</button>
              </center>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Columns
