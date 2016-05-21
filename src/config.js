import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-moment';
import moment from 'moment';
import 'angular-ui-bootstrap';

// import 'masonry';
const myApp = angular.module('myApp', [uiRouter, require('angular-animate'), "angularMoment", "ui.bootstrap", "ngLocale"]);


export default myApp;
