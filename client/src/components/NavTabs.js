import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from "classnames";

/**
 * Render navigation tabs on CMS
 *
 * @param tabs
 * @returns {JSX.Element}
 * @constructor
 */
const NavTabs = ({tabs}) => {
  const navTabs = tabs.map((tab, index) => {
    const [currentPath, setCurrentPath] = useState(tab.currentPath);

    const isCurrent = currentPath === tab.link;

    const tabClass = classNames({
      "left-and-main__nav-tabs__tab-item": true,
      "left-and-main__nav-tabs__tab-item--current": isCurrent,
    });

    const tabKey = `${tab.title}-${index}`;

    return (
      <li className={tabClass} key={tabKey} tabIndex={index} role="tab" aria-selected={isCurrent} onClick={() => setCurrentPath(tab.link)}>
        <Link to={tab.link}>{tab.title}</Link>
      </li>
    );
  });

  const navTabClass = classNames({
    "left-and-main__nav-tabs": true,
  });

  return (
    <ul className={navTabClass} role="tablist">
      {navTabs}
    </ul>
  );
};

NavTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    currentPath: PropTypes.string.isRequired,
  })),
};

NavTabs.defaultProps = {
  tabs: [],
};

export default NavTabs;
