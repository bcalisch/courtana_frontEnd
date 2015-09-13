'use strict';

/* Services */

var courtanaServices = angular.module('courtanaServices', ['ngResource']);

courtanaServices.factory('Api',
 function($resource){
	return {


	Citation: $resource('http://localhost:7878/citations/:drivers_license_number', {drivers_license_number:'@driversLicense'}, {
		get:{method:'GET',params:{drivers_license_number:'@driversLicense'}, isArray:true}
	}),
	VerifyUser: $resource('http://localhost:7878/parsingplayground', {}, {
		get:{method:'POST', params:{}}
	})
}
});	

 
  
// angular.module('myApp.services', ['ngResource']).
//   factory("geoProvider", function($resource) {
//     return {
//       states: $resource('../data/states.json', {}, {
//         query: { method: 'GET', params: {}, isArray: false }
//       }),
//       countries: $resource('../data/countries.json', {}, {
//         query: { method: 'GET', params: {}, isArray: false }
//       })
//     };
//   });