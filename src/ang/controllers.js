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

        // Define todo's and put them into scope 

        let todos = [
            { title: 'Washing laundry', finished: false },
            { title: 'Taking the dog for a walk', finished: false },
            { title: 'Write better code', finished: false }
        ];

        $scope.todos = todos;

        // Todo functions inserted into the scope

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

        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };


        // Greensock animations 

        var tl = new TimelineMax();
        var todotitle = document.getElementById('todotitle');
        var todolabel = document.getElementById('todolabel');
        var todoinput = document.getElementById('todoinput');
        var alltodos = document.getElementById('alltodos');
        var todosubmit = document.getElementById('todosubmit');
        tl.from(todolabel, 1, { opacity: 0, x: -600, ease: Power4.easeOut }, "+=0.6");
        tl.from(todoinput, 1, { opacity: 0, x: 600, ease: Power4.easeOut }, "-=0.6");
        tl.from(alltodos, 2, { opacity: 0, y: -300, ease: Bounce.easeOut  }, "-=.5");
        tl.from(todosubmit, 1, { opacity: 0, ease: Bounce.easeOut }, "-=.2");
        tl.play();

    }


]);




// End of controllers
