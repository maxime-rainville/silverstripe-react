/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import JSXAddon from 'storybook-addon-jsx';
import notes from '../README.md';

import LeftAndMain from '../LeftAndMain';


setAddon(JSXAddon);

storiesOf('ReactAdmin/LeftAndMain', module)
  .addDecorator(story => <div>{story()}</div>)
  .addDecorator(withKnobs)
  .addWithJSX(
    'LeftAndMain',
    withNotes(notes)(() => (
      <LeftAndMain fakeProp={text('Fake Property', 'Hello world')}>
        <h1>Lorem ipsum dolor sit amet</h1>

        <p>
          Consectetur adipiscing elit. Suspendisse non volutpat arcu. Mauris id
          gravida nisl. Vestibulum condimentum ligula mi, id lacinia lectus
          vulputate quis. Nam ut odio felis. Nunc sodales augue sit amet
          ullamcorper aliquet. Morbi et mattis nunc, vel aliquet velit. Donec
          fringilla tincidunt neque, at lobortis eros maximus non. Fusce auctor
          turpis vitae purus dapibus feugiat at et orci. Vivamus a ligula vel
          tortor finibus finibus eu et nibh. Sed et est eget diam consectetur
          pharetra vel non magna. Praesent nec metus quam.
        </p>

        <p>
          Morbi tempor vitae lorem in interdum. Ut vel nisl porttitor, fermentum
          nisi eget, ornare nisl. Maecenas est risus, pulvinar et sollicitudin at,
          dictum ut lectus. Donec tristique odio quis metus molestie, eu semper
          risus porttitor. Vestibulum vel fermentum nunc. Duis sodales eget tortor
          eu gravida. Integer facilisis, nisi nec sagittis porttitor, orci odio
          mattis eros, congue vestibulum libero tortor eget tortor. Suspendisse
          id maximus libero. Nunc maximus tortor nec magna rutrum, at fermentum
          enim blandit. Proin et lacus massa. Nullam facilisis porttitor gravida.
          Maecenas bibendum metus ut felis egestas feugiat. Pellentesque nec
          lectus tempor, molestie mauris eu, maximus risus. Donec tellus arcu,
          luctus consequat est sit amet, euismod congue purus. Aliquam erat volutpat.
          Aliquam porttitor, arcu nec feugiat pulvinar, nulla nibh sagittis augue,
          at aliquam nunc dui molestie risus.
        </p>
      </LeftAndMain>
    ))
  );