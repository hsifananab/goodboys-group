import React from 'react';

import './Chevron.scss';

const Chevron = ({ height, borderSize, rotate }) => {
  return (
    <div
      className="chevron"
      style={{
        height,
        borderTop: `${borderSize} solid #1f1f1f`,
        borderLeft: `${borderSize} solid #1f1f1f`,
        transform: `rotate(${rotate})`,
      }}
    ></div>
  );
};

export default Chevron;
