import React, { useState, useEffect } from 'react';
import Toolbar from 'components/Toolbar/Toolbar';
import { Component as Breadcrumb } from 'components/Breadcrumb/Breadcrumb';
import TopActionBar from "./TopActionBar";
import BottomActionBar from "./BottomActionBar";

const breadcrumbs = [
  {
    text: 'Innovation Week',
    href: 'innovation-week',
  },
];

const LeftAndMain = ({children, topActions, bottomActions}) => {
  return (
    <div className="left-and-main fill-height">
      <Toolbar className="fill-width">
        <Breadcrumb multiline crumbs={breadcrumbs} />
      </Toolbar>
      <TopActionBar>
        {topActions()}
      </TopActionBar>
      {children}
      <BottomActionBar>
        {bottomActions()}
      </BottomActionBar>
    </div>
  );
};

export default LeftAndMain;
