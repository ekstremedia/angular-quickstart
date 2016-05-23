import myApp from 'config';


// Angular Directives

myApp
    .directive('navbar', [()=> {
    return {
        template: require('ang/views/layout/navbar.html')
    };
}]);



// End of directives
