var app = angular.module('angularJugador', [])

app.controller ('mainController',function($scope, $http) {
	
	$scope.jugadors=[];
	// Cuando se cargue la página, pide del API todos los TODOs
	$http.get('http://localhost:3000/api/jugador/')
		.success(function(data) {
			$scope.jugadors = data;
			console.log(data)
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

}
});

 