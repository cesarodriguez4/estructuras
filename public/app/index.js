angular.module('estructuras', ['ngMaterial'])
    .controller('header', ['$scope', '$mdSidenav', '$timeout', header])
    .controller('LeftCtrl', ['$scope', '$timeout', '$mdSidenav', '$log' , LeftCtrl]);

function LeftCtrl($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function() {
        	console.log('clous');
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('left').close()
                .then(function() {
                    $log.debug("close LEFT is done");
                });

        };
    }

function header($scope, $mdSidenav, $timeout) {
    this.toggleLeft = buildDelayedToggler('left');

function buildDelayedToggler(navID) {
    return debounce(function() {
        $mdSidenav(navID)
            .toggle()
    }, 200);
}

function debounce(func, wait, context) {
    var timer;

    return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
            timer = undefined;
            func.apply(context, args);
        }, wait || 10);
    };

    function buildToggler(navID) {
        return function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function() {
                    $log.debug("toggle " + navID + " is done");
                });
        };
    }
   }
}
