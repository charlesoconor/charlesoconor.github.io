app.controller('navController', ['$state', function($state){

    var controller = this;

    // pass state to view
    controller.state = $state;

    // follow the dot rule
    controller.data = {};

    controller.data.title = "Nav Page"; 

    console.log('Nav Controller');
}]);
