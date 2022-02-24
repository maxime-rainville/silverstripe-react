/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import JSXAddon from 'storybook-addon-jsx';
import notes from '../README.md';

import DefaultComponent from '../DefaultComponent';

setAddon(JSXAddon);

storiesOf('ReactAdmin/DefaultComponent', module)
  .addDecorator(story => <div>{story()}</div>)
  .addDecorator(withKnobs)
  .addWithJSX(
    'DefaultComponent',
    withNotes(notes)(() => (
      <DefaultComponent />
    ))
  );
