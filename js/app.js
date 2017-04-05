angular.module('assessment', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        //If unkonwn url is reached instead of showing 404 page. It will bring back to the homepage.
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './../views/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: './../views/about.html'
            })
            .state('blog', {
                url: '/blog',
                templateUrl: './../views/blog.html'
            })
            .state('shop', {
                url: '/shop',
                templateUrl: './../views/shop.html',
                controller: 'shopCtrl'
            })
            .state('test', {
                url: '/test',
                templateUrl: './../views/product-tmpl.html',
                controller: 'shopCtrl'
            });

    });