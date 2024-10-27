import React, { useEffect } from 'react';
import GaugeChart from 'react-gauge-chart';

const Opportunities = () => {
  useEffect(() => {
    const gaugeText = document.querySelector('#gauge-chart text');
    if (gaugeText) {
      gaugeText.style.fill = '#FF5722'; // Change to desired color
      gaugeText.style.fontWeight = 'bold';
      gaugeText.style.fontSize = '1.5em';
    }
  }, []);

  return (
    <div>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={20}
        percent={0.44} 
        colors={['#3ECF8E', '#9CCC65']}
        arcPadding={0.02}
        needleColor="#757575"
        arcWidth={0.3}
        style={{ width: '500px', height: '100px' }} 
        
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p style={{ marginTop: '10px', color: '#333', fontSize: '1.5em', fontWeight:'bold'}}>
        You have achieved {Math.round(Opportunities * 100)}% opportunities in the market
      </p>
      <div className="details-container">
        <ul className="list-unstyled">
          <li className="d-flex align-items-center mb-2">
            <span className="dot"></span>
            <span>Your Position in Market</span>
          </li>
          <li className="d-flex align-items-center mb-2">
            <span className="dot dot-light-green"></span>
            <span>Total Market Opportunities</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="dot dot-dark-green"></span>
            <span>Achievable Market Opportunities</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Opportunities;
