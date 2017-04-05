angular.module('assessment').controller('productDetailsCtrl', function ($scope, shopService, $stateParams) {
    var items = '';
    console.log('Showing ID: ', $scope.id);

    $scope.getItemsCont = function () {
        shopService.getItems().then(function (response) {
            items = response.data;
            console.info('Master we are storing data into Item at PdetailCtrl: ', items);
        });
    };

    $scope.getItemsCont();

    $scope.singleItem = items.filter(function (data) {
        console.log('hey');
        return data.id === parseInt($stateParams.id);
    });

    console.log('Showing singleItem: ', $scope.singleItem);
    

});