/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactAdminErrorComponent from '../ReactAdminErrorComponent';

export default {
  title: 'React/ReactAdminErrorComponent',
  tags: ['autodocs'],
  component: ReactAdminErrorComponent,
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

export const _ReactAdminErrorComponent = (args) => <ReactAdminErrorComponent {...args} />;
_ReactAdminErrorComponent.args = {};
