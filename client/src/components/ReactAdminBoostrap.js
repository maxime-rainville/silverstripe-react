/* global reactAdminConfig */
import React from 'react';
import { loadComponent } from 'lib/Injector';

const ReactAdminBoostrap = () => {
  const RootComponent = loadComponent(reactAdminConfig.component);
  const { props } = reactAdminConfig;
  return (
    <RootComponent {...props} />
  );
};

export default ReactAdminBoostrap;
