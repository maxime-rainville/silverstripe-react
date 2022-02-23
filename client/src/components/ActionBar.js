import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import Button from 'components/Button/Button';

/**
 * It is used to ship action buttons
 *
 * @param actions A array of actions that will be rendered as buttons
 * @param isBottomActionBar Whether this bar should be placed at the bottom =
 * @returns {JSX.Element}
 * @constructor
 */
const ActionBar = ({actions, isBottomActionBar}) => {
  const actionBarClass = classNames({
    "action-bar": true,
    "fill-width": true,
    "action-bar--bottom": isBottomActionBar
  });

  const actionButtons = actions.map((action) => (
      <Button key={action.value} {...action}>
        {action.label}
      </Button>
    )
  );

  return (
    <div className={actionBarClass}>
      <div className="btn-toolbar">
        {actionButtons}
      </div>
    </div>
  );
};

ActionBar.propTypes = {
  ...Button.propTypes,
  actions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  isBottomActionBar: PropTypes.bool
};

ActionBar.defaultProps = {
  ...Button.defaultProps,
  actions: [],
  isBottomActionBar: false
};

export default ActionBar;
