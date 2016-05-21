import myApp from 'config';


// Angular Directives
myApp

    .directive('navbar', [()=> {
    return {
        template: require('ang/views/layout/navbar.html')
    };
}]);

// myApp

//     .directive('businesslogo', [function() {
//     return {
//         template: require('ang/views/bedrifter/businesslogo.html')
//     };
// }])

// .directive('smallbizcard', [function() {
//     return {
//         template: require('ang/views/bedrifter/smallbizcard.html')
//     };

// }]);




// End of directives
