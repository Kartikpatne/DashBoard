import React from 'react';
import ChartImage from '../assets/Piechart.jpg'; // Adjust the path according to your folder structure

const Trending = () => {
  return (
    <div className="dashboard-container">
      <h3>Trending in your Industry</h3>

      {/* Chart Image */}
      <div style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
        <img
          src={ChartImage} // Your chart image here
          alt="Chart Representation"
          style={{ width: '50%', height: 'auto' }} // Responsive styling
        />
      </div>

      <div className="trending-info" style={{ marginTop: '20px', fontSize: '14px' }}>
        <p>
          <span style={{ fontWeight: 'bold' }}>Wooden Floor is trending</span>, set up a campaign for wooden tiles to reach these users.
        </p>
      </div>
    </div>
  );
};

export default Trending;
