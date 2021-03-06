import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Stats = ({ maxStats, barWidth, animationStart }) => {
  return (
    <div className="stats-block">
      {Object.keys(maxStats).map((item, index) => (
        <div key={index}>
          <div className="stat-bar" key={index}>
            <CSSTransition in={animationStart} timeout={1000} classNames="my-node">
              <span
                style={{
                  width: `${barWidth(index)}%`,
                  background: `hsl(${(barWidth(index) * 110) / 90}deg, 80%, 45%)`
                }}
              />
            </CSSTransition>
          </div>
          <h5>{item}</h5>
        </div>
      ))}
    </div>
  );
};

export default Stats;
