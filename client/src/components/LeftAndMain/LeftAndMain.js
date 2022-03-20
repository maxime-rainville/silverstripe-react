import React from 'react';
import PropTypes from 'prop-types';
import HeaderComponent from './HeaderComponent';
import ActionBar from "./ActionBar";

/**
 * It renders a generic LeftAndMain UI in cms
 *
 * @param children
 * @param topActions Actions that are located at the top bar
 * @param bottomActions Actions that are located at the bottom bar
 * @returns {JSX.Element}
 * @constructor
 */
const LeftAndMain = ({ children, topActions, bottomActions, title, breadcrumbs, tabProps }) => (
  <div className="left-and-main fill-height">
    <HeaderComponent breadcrumbs={breadcrumbs} title={title} tabProps={tabProps} />
    <div className="panel panel--padded panel--scrollable">
      {topActions.length > 0 && <ActionBar actions={topActions} />}
      {children}
      {bottomActions.length > 0 && <ActionBar actions={bottomActions} isBottomActionBar />}
    </div>
  </div>
);

LeftAndMain.propTypes = {
  ...HeaderComponent.propTypes,
  topActions: PropTypes.array,
  bottomActions: PropTypes.array,
};

LeftAndMain.defaultProps = {
  topActions: [],
  bottomActions: [],
  tabs: [],
  breadcrumbs: [],
};

export default LeftAndMain;
