import React from 'react';

const BottomActionBar = ({children}) => {
  return (
    <div className="bottom-action-bar fill-width">
      <div className="btn-toolbar">
        {children}
      </div>
    </div>
  );
};

export default BottomActionBar;
