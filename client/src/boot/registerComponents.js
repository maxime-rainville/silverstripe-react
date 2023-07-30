import Injector from 'lib/Injector';
import { LeftAndMain } from 'components/LeftAndMain';
import ReactAdminDefaultComponent from '../components/ReactAdminDefaultComponent';
import ReactAdminErrorComponent from '../components/ReactAdminErrorComponent';

export default () => {
  Injector.component.registerMany({
    // List your React components here so Injector is aware of them
    LeftAndMain,
    ReactAdminDefaultComponent,
    ReactAdminErrorComponent
  });
};
