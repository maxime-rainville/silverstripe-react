/* global reactAdminConfig */
import reactRouteRegister from 'lib/ReactRouteRegister';
import Config from 'lib/Config';
import ReactAdminBoostrap from 'components/ReactAdminBoostrap';

export default () => {
  if (typeof reactAdminConfig === 'undefined') {
    // We are probably not in an ReactAdmin section ... let's bail
    return;
  }

  const sectionConfig = Config.getSection(reactAdminConfig.configKey);

  reactRouteRegister.add({
    path: `/${sectionConfig.reactRoutePath}`,
    component: ReactAdminBoostrap,
    exact: false
  });
};
