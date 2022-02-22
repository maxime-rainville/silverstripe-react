import React, { useState, useEffect } from 'react';
import Toolbar from 'components/Toolbar/Toolbar';
import { Component as Breadcrumb } from 'components/Breadcrumb/Breadcrumb';
import TopActionBar from "./TopActionBar";

const breadcrumbs = [
  {
    text: 'Innovation Week',
    href: 'innovation-week',
  },
];

const LeftAndMain = ({children, topActions}) => {
  return (
    <div className="fill-height">
      <Toolbar className="fill-width">
        <Breadcrumb multiline crumbs={breadcrumbs} />
      </Toolbar>
      <TopActionBar>
        {topActions}
      </TopActionBar>
      {children}
    </div>
  );
};

export default LeftAndMain;
