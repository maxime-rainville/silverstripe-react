import React from 'react';
import Toolbar from 'components/Toolbar/Toolbar';
import { Component as Breadcrumb } from 'components/Breadcrumb/Breadcrumb';
import NavTabs from './NavTabs';

const HeaderComponent = ({ breadcrumbs, tabs, tabComponent }) => (
  <Toolbar className="fill-width">
    <Breadcrumb multiline crumbs={breadcrumbs} />
    { tabs.length > 0 && <NavTabs tabs={tabs} tabComponent={tabComponent} />}
  </Toolbar>
);

export default HeaderComponent;
