import React from 'react';
import portfolio from '../../Assets/stats/portfolio.png';
import clock from '../../Assets/stats/clock.png';
import star from '../../Assets/stats/star.png';
import like from '../../Assets/stats/like.png';

function Statistic() {
  return (
    <div className="Statistic">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-4">
          <div className="projects column col-12 col-sm-6 col-lg-3 col-xl-3">
            <img className="image" src={portfolio} />
            <div className="nums">
              <p className="count">548</p>
              <p className="text">Projects completed</p>
            </div>
          </div>

          <div className="hours column col-12 col-sm-6 col-lg-3 col-xl-3">
            <img className="image" src={clock} />
            <div className="nums">
              <p className="count">1465</p>
              <p className="text">Working Hours</p>
            </div>
          </div>

          <div className="feedbacks column col-12 col-sm-6 col-lg-3 col-xl-3">
            <img className="image" src={star} />
            <div className="nums">
              <p className="count">612</p>
              <p className="text">Positive Feedbacks</p>
            </div>
          </div>

          <div className="clients column col-12 col-sm-6 col-lg-3 col-xl-3">
            <img className="image" src={like} />
            <div className="nums">
              <p className="count">735</p>
              <p className="text">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
