/* eslint-disable import/no-extraneous-dependencies */
import Injector from 'lib/Injector';
import LeftAndMain from '../components/LeftAndMain';
import DefaultComponent from '../components/DefaultComponent';
import ErrorComponent from '../components/ErrorComponent';

export default () => {
  Injector.component.registerMany({
    // List your React components here so Injector is aware of them
    LeftAndMain,
    DefaultComponent,
    ErrorComponent
  });
};
