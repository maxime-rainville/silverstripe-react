/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import LeftAndMain from '../LeftAndMain';


const topActions = [
  { children: 'Save', color: 'primary', size: 'md' },
  { label: 'Delete', color: 'secondary', size: 'md' },
];

const bottomActions = [
  { children: 'Edit', icon: 'edit', color: 'primary', size: 'md', outline: true },
];

export default {
  title: 'React/LeftAndMain',
  tags: ['autodocs'],
  component: LeftAndMain,
  parameters: {
    docs: {
      description: {
        component: 'Layout a CMS administration section'
      },
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  argTypes: { }
};

export const _LeftAndMain = (args) => (
  <LeftAndMain {...args} topActions={topActions} bottomActions={bottomActions}>
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
  </LeftAndMain>
);
_LeftAndMain.args = {};
