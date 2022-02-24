import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from 'components/Toolbar/Toolbar';
import { Component as Breadcrumb } from 'components/Breadcrumb/Breadcrumb';
import ActionBar from "./ActionBar";
import NavTabs from "./NavTabs";

const breadcrumbs = [
  {
    text: 'Innovation Week',
    href: 'innovation-week',
  },
];

/**
 * It renders a generic LeftAndMain UI in cms
 *
 * @param children
 * @param topActions Actions that are located at the top bar
 * @param bottomActions Actions that are located at the bottom bar
 * @returns {JSX.Element}
 * @constructor
 */
const LeftAndMain = ({children, topActions, bottomActions, tabs}) => {
  return (
    <div className="left-and-main fill-height">
      <Toolbar className="fill-width">
        <Breadcrumb multiline crumbs={breadcrumbs} />
        { tabs.length > 0 && <NavTabs tabs={tabs}></NavTabs> }
      </Toolbar>
      { topActions.length > 0 && <ActionBar actions={topActions} /> }
      {children}
      Suggested change
      { bottomActions.length > 0 && <ActionBar actions={bottomActions} isBottomActionBar /> }
    </div>
  );
};

LeftAndMain.propTypes = {
  topActions: PropTypes.array,
  bottomActions: PropTypes.array,
  tabs: PropTypes.array
};

LeftAndMain.defaultProps = {
  topActions: [],
  bottomActions: [],
  tabs: []
};

export default LeftAndMain;
