import React from 'react';
import { LeftAndMain } from './LeftAndMain';

const breadcrumbs = [
    {
        text: 'React Admin Default Component',
        href: '#',
    },
];

const ReactAdminDefaultComponent = () => (
  <LeftAndMain breadcrumbs={breadcrumbs}>
    To create new component, you should to do the following...
  </LeftAndMain>
);

export default ReactAdminDefaultComponent;
