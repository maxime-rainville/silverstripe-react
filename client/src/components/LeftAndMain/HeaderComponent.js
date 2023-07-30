import React from 'react';
import Toolbar from 'components/Toolbar/Toolbar';
import { Component as Breadcrumb } from 'components/Breadcrumb/Breadcrumb';
import NavTabs from './NavTabs';
import PropTypes from 'prop-types';

/**
 * Actions that happens when user click the back button next to the breadcrumb
 */
const onBackButtonClick = () => {
  // This is hackish as fuck, but we don't really have a way of finding the crumb to click
  const lastCrumb = document.querySelector('.breadcrumb > .breadcrumb__item:last-child > *');
  if (lastCrumb) {
    lastCrumb.click();
  }
};

/**
 * Renders the Header of Left and Main with the breadcrumbs and the tabs.
 */
const HeaderComponent = ({ breadcrumbs, title, tabProps }) => {
  // If no breadcrumbs are provided, we use the title prop instead
  const crumbs = breadcrumbs && breadcrumbs.length > 0 ?
    breadcrumbs :
    [{ text: title }];

  return (
    <Toolbar
      className="fill-width"
      showBackButton={crumbs.length > 1}
      onBackButtonClick={onBackButtonClick}
    >
      <Breadcrumb multiline crumbs={crumbs} />
      { tabProps && <NavTabs {...tabProps} /> }
    </Toolbar>
  );
};

HeaderComponent.propTypes = {
  title: PropTypes.string,
  breadcrumbs: Breadcrumb.propTypes.crumbs,
  tabProps: PropTypes.shape(NavTabs.propTypes)
};

export default HeaderComponent;
