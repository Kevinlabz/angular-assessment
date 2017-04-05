angular.module('assessment').service('shopService', function ($log, $http) {

    this.getItems = function () {
        var baseUrl = 'http://practiceapi.devmounta.in/products';
        return $http.get(baseUrl).then(function (response) {
            console.info('Master Item is arriving at service');
            console.log(response);
            return (response);
        });
    };
});