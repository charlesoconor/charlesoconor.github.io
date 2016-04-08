app.controller('navController', ['$state', '$location',
        function($state, $location){

    var controller = this;

    // pass state to view
    controller.state = $state;

    // follow the dot rule
    controller.data = {};
    controller.data.pages = [
        { link:'/nav/home', displayName:'Home'},
        { link:'/nav/projects', displayName:'Projects'}
    ]; 

    //controller.data.pages = $state.get().filter( function(element){

    //    // if it has a parent of nav it belongs in the bar
    //    return element.parent === 'nav'; 
    //});

    controller.isActive = function(viewLocation){
        return $location.path().indexOf(viewLocation) >= 0;
    };

}]);
