/**
 * Application routes with its version
 * https://github.com/Sairyss/backend-best-practices#api-versioning
 */


// Api Versions
const v1 = 'v1';

// Root
const tickersRoot = 'tickers';

export const routesV1 = {
  version: v1,
  tickers: {
    root: tickersRoot
  },
};
