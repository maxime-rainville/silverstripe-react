import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

/**
 * Render navigation tabs on CMS
 *
 * @param tabs
 * @returns {JSX.Element}
 * @constructor
 */
const NavTabs = ({ tabs, tabComponent: TabComponent }) => {
  const navTabs = tabs.map(({ current, ...tab }, index) => {
    const tabClass = classNames(
      'nav-tabs__tab-item'
    );

    const tabKey = `${tab.title}-${index}`;
    return (
      <li key={tabKey} className={tabClass}>
        <TabComponent role="tab" {...tab} className={classNames(tab.className, 'nav-tabs__link', { 'nav-tabs__link--current': current })} >
          {tab.title}
        </TabComponent>
      </li>
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
  tabComponent: 'a',
  tabs: [],
};

export default NavTabs;
