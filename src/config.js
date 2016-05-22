import angular from 'angular';
import 'angular-moment';
import moment from 'moment';

// import 'masonry';
const myApp = angular.module('myApp', [require('angular-ui-router'), require('angular-ui-bootstrap'), require('angular-animate'), "angularMoment", "ui.bootstrap", "ngLocale"]);


export default myApp;
