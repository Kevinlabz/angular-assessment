angular.module('assessment').controller('shopCtrl', function ($scope, shopService, $stateParams) {
    $scope.items = '';

    $scope.getItemsCont = function () {
        shopService.getItems().then(function (response) {
            $scope.items = response.data;
            console.info('Master we are storing data into Item at controller: ', $scope.items);
        });
    };

    $scope.getItemsCont();

});