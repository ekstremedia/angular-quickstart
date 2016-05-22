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

myApp.controller('todoCtrl', ['$scope', '$location',
    ($scope, $location) => {
        let todos = [
            { title: 'test', finished: false },
            { title: 'tast', finished: false },
            { title: 'tust', finished: false }
        ];
        $scope.submitTodo = function() {
            let title = $scope.title;
            if (title && title.length > 0) {
                let todo = { title: title, finished: false };
                $scope.todos.push(todo);
                $scope.title = "";
            }
        }
        $scope.deleteTodo = function(todo) {
            $scope.todos.splice(this.$index, 1);
        }   
         $scope.finishTodo = function(todo) {
            todo.finished = !todo.finished;
        }  

        $scope.todos = todos;
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
