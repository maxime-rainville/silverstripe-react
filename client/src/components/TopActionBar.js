import React from 'react';

const TopActionBar = ({children}) => {
  return (
    <div className="top-action-bar">
      <div className="fill-width">
        <div className="btn-toolbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TopActionBar;
