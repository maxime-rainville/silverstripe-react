/* eslint-disable import/no-extraneous-dependencies */
import Injector from 'lib/Injector';

export default () => {
  Injector.component.registerMany({
    // List your React components here so Injector is aware of them
  });
};
