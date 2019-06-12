import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Stats = ({ maxStats, animationStart, barWidth }) => {
  return (
    <div className="stats-block">
      {Object.keys(maxStats).map((item, index) => (
        <span key={index}>
          <div>
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
            <div className="stat-name">{item}</div>
          </div>
        </span>
      ))}
    </div>
  );
};

export default Stats;
