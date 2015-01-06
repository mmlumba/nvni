var app = angular.module("nvniapp", ['ngRoute']);

/*app.controller('nvniCtrl', function($scope){
  $scope.headerUrl = "templates/header.html";
  $scope.footerUrl = "templates/footer.html";
  $scope.showPage = function(){
    $scope.page = 
  };
});

app.config(['$routeProvider', function ($routeProvider){
  $routeProvider.when
}])*/

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'main.html',
      controller: 'RouteController'
    }).
    when('/contact', {
      templateUrl: 'contact.html',
      controller: 'RouteController'
    }).
    when('/apply', {
      templateUrl: 'apply.html',
      controller: 'RouteController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);

app.controller("RouteController", function($scope) {

})

$(function(){
  
  $('#mochiPicker').datepicker();

  var hasBeenClicked = false;
  $('#news-carousel').carousel({
    interval: 4000
  })
    .on('slid.bs.carousel', function(){

      if(!hasBeenClicked)
      {
        var index = +$('.list-group li.active').attr('data-slide-to');
        var listItems = $('.list-group li');
        listItems.removeClass('active');

        if(index >= listItems.size()-1){
          index = 0;
        }
        else{
          index++;
        }

        $('.list-group li[data-slide-to="' + index + '"]').addClass('active');
      }
    });

  $('.list-group li').click(function(){
    hasBeenClicked = true;
    $('.list-group li').removeClass('active');
    $(this).addClass('active');

  });
});