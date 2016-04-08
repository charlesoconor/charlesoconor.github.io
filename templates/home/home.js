app.controller('homeController', ['$state', function($state){

    var controller = this;

    // pass state to view
    controller.state = $state;

    // follow the dot rule
    controller.data = {};

}]);
