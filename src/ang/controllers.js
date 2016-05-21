import myApp from '../config';

// Angular Controllers


myApp.controller('navCtrl', ['$scope', '$location',
    ($scope, $location) => {

        // verktoy.verUpdate();
        // var tl = new TimelineMax();
        // var nav = document.getElementById('nbd');
        // tl.from(nav, 1, { opacity: 0, y: -60, ease: Bounce.easeOut }, "+=4");
        // tl.timeScale(3);
        // tl.play();
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };


    }


]);




// End of controllers
