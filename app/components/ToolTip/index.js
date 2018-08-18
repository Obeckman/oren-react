import React from 'react';
import './style.scss';

const ToolTip = ({ children, tiptext, position = 't-t' }) => (
  <div data-tiptext={tiptext} className={`tooltip ${position}`}>
    {children}
  </div>
);

export default ToolTip;
