import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

const NavTab = ({ current, component: TabComponent, className, title, children, ...tabProps }) => {
  const tabClass = classNames(
    'nav-tabs__tab-item',
    { 'nav-tabs__tab-item--current': current },
  );

  const linkClass = classNames(
    className,
    'nav-tabs__link',
    { 'nav-tabs__link--current': current }
  );

  return (
    <li className={tabClass}>
      <TabComponent {...tabProps} role="tab" className={linkClass}>
        {children || title}
      </TabComponent>
    </li>
  );
};

/**
 * Render navigation tabs on CMS
 *
 * @param tabs
 * @returns {JSX.Element}
 * @constructor
 */
const NavTabs = ({ tabs, className, component, current }) => {
  const navTabClass = classNames(className, 'nav-tabs');

  return (
    <ul className={navTabClass} role="tablist">
      {tabs.map(({ key, ...tabProps }) => (
        <NavTab key={key} current={current === key} component={component} {...tabProps} />
      ))}
    </ul>
  );
};

NavTabs.propTypes = {
  component: PropTypes.elementType,
  classNames: PropTypes.string,
  current: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    title: PropTypes.string,
    component: PropTypes.elementType,
  })),
};

NavTabs.defaultProps = {
  component: 'a',
  tabs: [],
};

export default NavTabs;
