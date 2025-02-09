import React from 'react';
import './404.css';

const NotFound: React.FC = () => {
  return (
    <div className="background-img">
      <div className="space"></div>
      <div className="wrapper">
        <div className="img-wrapper">
          <span>44</span>
        </div>
        <p>
          The page you are trying to search has been <br /> moved to another
          universe.
        </p>
        <button onClick={() => (window.location.href = '/')}>
          GET ME HOME
        </button>
      </div>
    </div>
  );
};

export default NotFound;
