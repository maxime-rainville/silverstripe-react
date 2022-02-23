import React from 'react';

const TopActionBar = ({children}) => {
  return (
    <div className="top-action-bar fill-width">
      <div className="btn-toolbar">
        {children}
      </div>
    </div>
  );
};

export default TopActionBar;