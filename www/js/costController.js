angular.module('CostSplitter')
.controller('CostController', function ($scope) {
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
});
