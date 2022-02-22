import React, { useState, useEffect } from 'react';
import Toolbar from 'components/Toolbar/Toolbar';
import { Component as Breadcrumb } from 'components/Breadcrumb/Breadcrumb';

const breadcrumbs = [
  {
    text: 'Innovation Week',
    href: 'innovation-week',
  },
];

const LeftAndMain = ({children}) => {
  return (
    <div className="fill-height">
      <Toolbar className="fill-width">
        <Breadcrumb multiline crumbs={breadcrumbs} />
      </Toolbar>
      {children}
    </div>
  );
};

export default LeftAndMain;
