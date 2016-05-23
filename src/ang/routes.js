import myApp from '../config';

myApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            
            .state('home', {
                url: '/home',
                template: require('ang/views/welcome.html')
            })

            .state('about', {
                url: '/about',
                template: require('ang/views/about.html')
            })

            .state('todos', {
                url: '/todos',
                template: require('ang/views/todos.html'),
                controller: 'todoCtrl',
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks: false
        });
    }
]);

