import React from 'react';
import ReactAdminDefaultComponent from '../ReactAdminDefaultComponent';

export default {
  title: 'React/ReactAdminDefaultComponent',
  tags: ['autodocs'],
  component: ReactAdminDefaultComponent,
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

export const _ReactAdminDefaultComponent = (args) => <ReactAdminDefaultComponent {...args} />;
_ReactAdminDefaultComponent.args = {};
