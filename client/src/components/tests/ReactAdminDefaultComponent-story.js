/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import JSXAddon from 'storybook-addon-jsx';
import notes from '../README.md';

import ReactAdminDefaultComponent from '../ReactAdminDefaultComponent';

setAddon(JSXAddon);

storiesOf('ReactAdmin/ReactAdminDefaultComponent', module)
  .addDecorator(story => <div>{story()}</div>)
  .addDecorator(withKnobs)
  .addWithJSX(
    'ReactAdminDefaultComponent',
    withNotes(notes)(() => (
      <ReactAdminDefaultComponent />
    ))
  );
