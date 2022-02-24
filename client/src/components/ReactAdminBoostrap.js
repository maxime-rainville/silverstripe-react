/* global reactAdminConfig */
import React from 'react';
import Injector, { loadComponent } from 'lib/Injector';

const takeComponent = (componentName) => {
  if (typeof componentName === 'string' && componentName !== '') {
    try {
      Injector.component.get(componentName);
      return loadComponent(componentName);
    } catch (error) {
      console.warn(error.message);
      return loadComponent("ReactAdminErrorComponent");
    }
  }
  return loadComponent("ReactAdminErrorComponent");
}

const ReactAdminBoostrap = () => {
  const RootComponent = takeComponent(reactAdminConfig.component);
  const { props } = reactAdminConfig;

  return (
    <RootComponent {...props} />
  );
};

export default ReactAdminBoostrap;
