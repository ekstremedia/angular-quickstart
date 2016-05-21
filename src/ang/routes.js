import myApp from '../config';
// 
// console.log(myApp)

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
            });

        // $locationProvider.html5Mode(true);
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks: false
        });
    }
]);

