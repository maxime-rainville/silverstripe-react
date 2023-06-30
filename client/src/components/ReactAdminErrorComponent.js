import React from 'react';
import { LeftAndMain } from './LeftAndMain';

const breadcrumbs = [
    {
        text: 'Component NOT FOUND',
        href: '#',
    },
];

const ReactAdminErrorComponent = ({ componentName }) => (
  <LeftAndMain breadcrumbs={breadcrumbs}>
    <div className="error-message">
      <h1>404</h1>
      <h2>Component Not Found :(</h2>
    </div>
  </LeftAndMain>
);

export default ReactAdminErrorComponent;
