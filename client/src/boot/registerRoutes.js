/* global reactAdminConfig */
import reactRouteRegister from 'lib/ReactRouteRegister';
import Config from 'lib/Config';
import ReactAdminBoostrap from 'components/ReactAdminBoostrap';

export default () => {
  const sectionConfig = Config.getSection(reactAdminConfig.configKey);

  reactRouteRegister.add({
    path: `/${sectionConfig.url}`,
    component: ReactAdminBoostrap,
    exact: false
  });
};
