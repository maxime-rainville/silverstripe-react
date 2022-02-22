/* eslint-disable import/no-extraneous-dependencies */
import Injector from 'lib/Injector';
import LeftAndMain from '../components/LeftAndMain';

export default () => {
  Injector.component.registerMany({
    // List your React components here so Injector is aware of them
    LeftAndMain
  });
};
