// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const API_URL: string = 'https://backend-js.azurewebsites.net/graphql/';
export const BASE_API_URL: string = 'https://backend-js.azurewebsites.net/';
export const SUBSCRIPTION_URL: string = 'https://backend-js.service.signalr.net/client';
export const SUBSCRIPTION_HUB_NAME = 'graphql';
export const SUBSCRIPTION_ACCESS_KEY = 'D9rmsEgejPwyN7czfJi/JYiDYKPjiL2fXr4Ax7HE/CU=';

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
