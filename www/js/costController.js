angular.module('CostSplitter')
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('costs', {
      url: '/costs',
      templateUrl: 'templates/costs.html',
      controller: 'CostController'
    });
  $urlRouterProvider.otherwise('/costs');
})
.controller('CostController', function ($scope, $state) {
  $scope.shouldShowDelete = false;
  $scope.costs = [
    {
      description: 'Carpa',
      value: 1000
    },
    {
      description: 'Mochila',
      value: 600
    }
  ];
  $scope.newCost = function () {
    $state.go('new');
  };
});
