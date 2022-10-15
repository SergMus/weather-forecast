// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseWeatherUrl: 'https://weatherapi-com.p.rapidapi.com/current.json',
  XRapidAPIKeyHeader: 'X-RapidAPI-Key',
  XRapidAPIKeyValue: '15dd7c4d64msh92d62445b7f0f6cp12ae8fjsn07ca8853fa0c',
  XRapidAPIHostHeader: 'X-RapidAPI-Host',
  XRapidAPIHostValue: 'weatherapi-com.p.rapidapi.com',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
