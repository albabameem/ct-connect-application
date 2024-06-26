import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Starter A05e1b',
  entryPointUriPath,
  mcApiUrl: 'https://mc.us-central1.gcp.commercetools.com/honda',
  cloudIdentifier: 'gcp-us',
  headers: {
    csp: {
      'connect-src': [
        'https://api.us-central1.gcp.commercetools.com',
        'https://auth.us-central1.gcp.commercetools.com',
        'https://mc-api.us-central1.gcp.commercetools.com/graphql',
      ],
    },
  },
  env: {
    development: {
      initialProjectKey: 'honda',
    },
    production: {
      applicationId: 'clxvafwyd001m907kugt0x3n7',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Template starter',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'channels',
      defaultLabel: 'Channels',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
