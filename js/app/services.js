angular.module('PropertyCross')
    .factory('SearchService', function($http, $q) {
        var data = {
            total_results: null,
            listings: null
        };
        return {
            getListings: function() { return data.listings },
            getData: function() { return data },
            getProperty: function(id) {
                var property;
                if (data.listings && data.listings.length > 0) {
                    for (var i = 0; i < data.listings.length; i++){
                        if (data.listings[i].guid == id){
                            property = data.listings[i];
                            break;
                        }
                    }
                }

                // todo расширить возможности сервиса:
                // если искомое объявление не удалось найти в загруженном списке,
                // можно добавить запрос на сервер...

                return property;
            },
            search: function(searchText) {
                var q = $q.defer(),
                    url = 'http://api.nestoria.co.uk/api?country=uk' +
                        '&pretty=1&action=search_listings&encoding=json' +
                        '&listing_type=buy&page=1&place_name=' + searchText +
                        '&callback=JSON_CALLBACK';

                $http.jsonp(url)
                    .then(function (response) {
                        var res = response.data.response;
                        console.log(response);
                        if (res.listings && res.listings.length > 0) {
                            data.totalResults  = res.total_results;
                            data.listings = res.listings;
                            q.resolve(data);
                        } else {
                            q.reject('Uncaught error');
                        }
                    }, function (reason) {
                        q.reject(reason);
                    });
                return q.promise;
            }
        };
    });
