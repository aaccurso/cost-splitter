angular.module('CostSplitter')
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('newCost', {
      url: '/newCost',
      templateUrl: 'templates/new-cost.html',
      controller: 'NewCostController'
    });
})
.controller('NewCostController', function ($scope) {
  
});