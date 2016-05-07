import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoFactory from 'factories/todo-factory';
import todosController from 'todos/todos';
 
const app = angular.module('app', [uiRouter, todoFactory.name]);
app.controller('ngo', ['$scope', function($scope) {
  $scope.double = function(value) { return value * 2+1 ; };
}]);
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('todos', {
            url: '/',
            template: require('todos/todos.html'),
            controller: todosController
        })
        .state('about', {
            url: '/about',
            template: require('about/about.html')
        });

    $locationProvider.html5Mode(true);
});

export default app;