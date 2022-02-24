import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import { loadComponent } from 'lib/Injector';

/**
 * Render navigation tabs on CMS
 *
 * @param tabs
 * @returns {JSX.Element}
 * @constructor
 */
const NavTabs = ({tabs, tabComponent}) => {
  const navTabs = tabs.map((tab, index) => {

    const tabClass = classNames(
      "nav-tabs__tab-item",
    );

    const tabKey = `${tab.title}-${index}`;
    const TabComponent = tabComponent ? loadComponent(tabComponent) : "a";

    return (
      <TabComponent className={tabClass} key={tabKey} role="tab" {...tab}>{tab.title}</TabComponent>
    );
  });

  const navTabClass = classNames("nav-tabs");

  return (
    <ul className={navTabClass} role="tablist">
      {navTabs}
    </ul>
  );
};

NavTabs.propTypes = {
  tabComponent: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })),
};

NavTabs.defaultProps = {
  tabComponent: "",
  tabs: [],
};

export default NavTabs;
