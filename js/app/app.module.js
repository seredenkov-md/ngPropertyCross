(function() {
    'use strict';

    angular
        .module('PropertyCross', [
            'ngMessages',
            'ui.router'
        ])
        .config(function($stateProvider,
                         //$locationProvider,
                         $urlRouterProvider){

            $urlRouterProvider.otherwise('/search');
            //$locationProvider.html5Mode(true);

            $stateProvider
                .state('search', {
                    url: '/search',
                    templateUrl: 'js/app/layout/search.html',
                    controller: 'SearchController'
                })
                .state('results', {
                    url: '/results',
                    templateUrl: 'js/app/layout/results.html',
                    controller: 'ResultController'
                })
                .state('property', {
                    url: '/property/:id',
                    templateUrl: 'js/app/layout/property.html',
                    controller: 'PropertyController'
                });
        })
        .run(function ($rootScope, $state, $stateParams) {
            $rootScope.overlay = false;
        //    $rootScope.$state = $state;
        //    $rootScope.$stateParams = $stateParams;
        })
})();
