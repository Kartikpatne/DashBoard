import React, { useState } from 'react';
import lineAndBarChart from '../assets/line-and-bar-chart.jpg';
import Commercial from '../assets/Commercial.svg';

const MarketTrend = () => {
  const [activeBtn, setActiveBtn] = useState("Market");
  const [activeDayBtn, setActiveDayBtn] = useState("1st");

  return (
    <div className="bg-white rounded col-lg-12 card" style={{ height: "100%" }}>
      <style>
        {`
          .nav-pills {
            background-color: #F9FAFB;
            border: 1px solid #EAECF0;
          }

          .nav-link {
            margin: 6px;
            color: #667085;
            text-decoration: none;
          }

          a.nav-link.active {
            background-color: white !important;
            font-weight: bold;
            color: #000 !important;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1); 
          }

          a.nav-link:hover {
            cursor: pointer !important;
          }

          .marketTrendFooter {
            background-color: #FFF8ED;
            padding: 0px;
            margin-top: auto;
            border-radius: 0px 0px 5px 5px;
          }

          .innerCard {
            padding: 24px 24px 0px 24px;
          }

          .btnStyle {
            border: 1px solid #D0D5DD;
          }

          .activeBtn {
            background-color: #F9FAFB;
          }
        `}
      </style>
      <div className='innerCard'>
      <div className='d-flex justify-content-end flex-column mt-3'>
        <div className='d-flex marketTrendFooter'>
          <img 
            src={Commercial} 
            alt="Commercial" 
            style={{ width: "50px", height: "50px", objectFit: 'cover', padding: "24px" }} 
          />
          <div style={{ padding: "15px" }}>
            <div className='fs-6 fw-bold'>Your customer market is increasing! Set up an Ad Campaign to reach your customers.</div>
            <p className='text-muted mb-0'>We will guide you through the entire setup of the Campaign.</p>
          </div>
        </div>
      </div>
        <div className="d-flex justify-content-between align-items-baseline">
          <div>
            <h2 className="fs-5 fw-bold">Current Market Trend</h2>
            <p className='text-muted'>Track how your rating compares to your industry average.</p>
          </div>
          <div className="d-flex gap-2">
            <div className="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" className={`btn btn-outline-secondary text-dark btnStyle ${activeDayBtn === '1st' ? 'activeBtn' : ''}`} onClick={() => { setActiveDayBtn('1st') }}>12 Months</button>
              <button type="button" className={`btn btn-outline-secondary text-dark btnStyle ${activeDayBtn === '2nd' ? 'activeBtn' : ''}`} onClick={() => { setActiveDayBtn('2nd') }}>30 Days</button>
              <button type="button" className={`btn btn-outline-secondary text-dark btnStyle ${activeDayBtn === '3rd' ? 'activeBtn' : ''}`} onClick={() => { setActiveDayBtn('3rd') }}>7 Days</button>
            </div>
          </div>
        </div>
        <div className="mt-1">
          <ul className="nav nav-pills rounded">
            <li className="nav-item">
              <a className={`nav-link ${activeBtn === 'Market' ? 'active' : ''}`} onClick={() => { setActiveBtn("Market") }}>Market</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeBtn === 'Category' ? 'active' : ''}`} onClick={() => { setActiveBtn("Category") }}>Category</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeBtn === 'Products' ? 'active' : ''}`} onClick={() => { setActiveBtn("Products") }}>Products</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeBtn === 'Cross Selling' ? 'active' : ''}`} onClick={() => { setActiveBtn("Cross Selling") }}>Cross Selling</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeBtn === 'Geography' ? 'active' : ''}`} onClick={() => { setActiveBtn("Geography") }}>Geography</a>
            </li>
          </ul>
        </div>

        {/* Chart Image with reduced width and height */}
        <div className='row mt-4'>
          <div className='col-12 d-flex justify-content-center'>
            <img 
              className='img-fluid' 
              src={lineAndBarChart} 
              alt="Line and Bar Chart" 
              style={{ width: "80%", maxWidth: "500px", height: "auto" }} 
            />
          </div>
        </div>
      </div>

      {/* <div className='d-flex justify-content-end flex-column mt-3'>
        <div className='d-flex marketTrendFooter'>
          <img 
            src={Commercial} 
            alt="Commercial" 
            style={{ width: "50px", height: "50px", objectFit: 'cover', padding: "24px" }} 
          />
          <div style={{ padding: "15px" }}>
            <div className='fs-6 fw-bold'>Your customer market is increasing! Set up an Ad Campaign to reach your customers.</div>
            <p className='text-muted mb-0'>We will guide you through the entire setup of the Campaign.</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MarketTrend;
