import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'components/Button/Button';

const Action = ({ current, component: ActionComponent, className, title, children, ...props }) => {
  const actionClassName = classNames(
    className,
    'action-bar__action',
  );

  return (
    <ActionComponent {...props} className={actionClassName}>
      {children || title}
    </ActionComponent>
  );
};

/**
 * It is used to ship action buttons
 *
 * @param actions A array of actions that will be rendered as buttons
 * @param isBottomActionBar Whether this bar should be placed at the bottom =
 * @returns {JSX.Element}
 * @constructor
 */
const ActionBar = ({ actions, className, component, position }) => {
  if (!actions || actions.length === 0) {
    return false;
  }

  const actionBarClass = classNames(
    'action-bar',
    'fill-width',
    className,
    { 'action-bar--bottom': position === 'bottom' },
  );

  return (
    <div className={actionBarClass}>
      <div className="btn-toolbar fill-width">
        {actions.map(({ key, ...props }) => (
          <Action key={key} component={component} {...props} />
        ))}
      </div>
    </div>
  );
};

ActionBar.propTypes = {
  component: PropTypes.elementType,
  className: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    title: PropTypes.string,
    component: PropTypes.elementType,
  })),
  position: PropTypes.oneOf(['top', 'bottom']),
};

ActionBar.defaultProps = {
  component: Button,
  actions: [],
  position: 'top'
};

export default ActionBar;
