!function(){"use strict";angular.module("PropertyCross",["ngMessages","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(r,t){t.otherwise("/search"),r.state("search",{url:"/search",templateUrl:"js/app/layout/search.html",controller:"SearchController"}).state("results",{url:"/results",templateUrl:"js/app/layout/results.html",controller:"ResultController"}).state("property",{url:"/property/:id",templateUrl:"js/app/layout/property.html",controller:"PropertyController"})}]).run(["$rootScope","$state","$stateParams",function(r,t,e){r.overlay=!1}])}(),angular.module("PropertyCross").controller("SearchController",["$scope","$rootScope","$state","$http","SearchService",function(r,t,e,o,s){r.searchText="",r.search=function(){t.overlay=!0,s.search(r.searchText).then(function(r){e.go("results")},function(t){console.error("There was a problem with your search."),r.error="There was a problem with your search."})["finally"](function(){t.overlay=!1})}}]).controller("ResultController",["$scope","$state","SearchService",function(r,t,e){r.data=e.getData()}]).controller("PropertyController",["$scope","$stateParams","SearchService",function(r,t,e){r.property=e.getProperty(t.id)}]),angular.module("PropertyCross").factory("SearchService",["$http","$q",function(r,t){var e={total_results:null,listings:null};return{getListings:function(){return e.listings},getData:function(){return e},getProperty:function(r){var t;if(e.listings&&e.listings.length>0)for(var o=0;o<e.listings.length;o++)if(e.listings[o].guid==r){t=e.listings[o];break}return t},search:function(o){var s=t.defer(),l="http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name="+o+"&callback=JSON_CALLBACK";return r.jsonp(l).then(function(r){var t=r.data.response;console.log(r),t.listings&&t.listings.length>0?(e.totalResults=t.total_results,e.listings=t.listings,s.resolve(e)):s.reject("Uncaught error")},function(r){s.reject(r)}),s.promise}}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJjb250cm9sbGVycy5qcyIsInNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsIm90aGVyd2lzZSIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwicnVuIiwiJHJvb3RTY29wZSIsIiRzdGF0ZSIsIiRzdGF0ZVBhcmFtcyIsIm92ZXJsYXkiLCIkc2NvcGUiLCIkaHR0cCIsIlNlYXJjaFNlcnZpY2UiLCJzZWFyY2hUZXh0Iiwic2VhcmNoIiwidGhlbiIsInJlc3BvbnNlIiwiZ28iLCJyZWFzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJkYXRhIiwiZ2V0RGF0YSIsInByb3BlcnR5IiwiZ2V0UHJvcGVydHkiLCJpZCIsImZhY3RvcnkiLCIkcSIsInRvdGFsX3Jlc3VsdHMiLCJsaXN0aW5ncyIsImdldExpc3RpbmdzIiwibGVuZ3RoIiwiaSIsImd1aWQiLCJxIiwiZGVmZXIiLCJqc29ucCIsInJlcyIsImxvZyIsInRvdGFsUmVzdWx0cyIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9taXNlIl0sIm1hcHBpbmdzIjoiQ0FBQSxXQUNBLFlBRUFBLFNBQ0FDLE9BQUEsaUJBQ0EsYUFDQSxjQUVBQyxRQUFBLGlCQUFBLHFCQUFBLFNBQUFDLEVBRUFDLEdBRUFBLEVBQUFDLFVBQUEsV0FHQUYsRUFDQUcsTUFBQSxVQUNBQyxJQUFBLFVBQ0FDLFlBQUEsNEJBQ0FDLFdBQUEscUJBRUFILE1BQUEsV0FDQUMsSUFBQSxXQUNBQyxZQUFBLDZCQUNBQyxXQUFBLHFCQUVBSCxNQUFBLFlBQ0FDLElBQUEsZ0JBQ0FDLFlBQUEsOEJBQ0FDLFdBQUEsMEJBR0FDLEtBQUEsYUFBQSxTQUFBLGVBQUEsU0FBQUMsRUFBQUMsRUFBQUMsR0FDQUYsRUFBQUcsU0FBQSxRQ2pDQWQsUUFBQUMsT0FBQSxpQkFDQVEsV0FBQSxvQkFBQSxTQUFBLGFBQUEsU0FBQSxRQUFBLGdCQUFBLFNBQUFNLEVBQUFKLEVBQUFDLEVBQUFJLEVBQUFDLEdBQ0FGLEVBQUFHLFdBQUEsR0FDQUgsRUFBQUksT0FBQSxXQUNBUixFQUFBRyxTQUFBLEVBQ0FHLEVBQ0FFLE9BQUFKLEVBQUFHLFlBQ0FFLEtBQUEsU0FBQUMsR0FDQVQsRUFBQVUsR0FBQSxZQUNBLFNBQUFDLEdBQ0FDLFFBQUFDLE1BQUEseUNBQ0FWLEVBQUFVLE1BQUEsMENBTkFSLFdBUUEsV0FDQU4sRUFBQUcsU0FBQSxRQUlBTCxXQUFBLG9CQUFBLFNBQUEsU0FBQSxnQkFBQSxTQUFBTSxFQUFBSCxFQUFBSyxHQUNBRixFQUFBVyxLQUFBVCxFQUFBVSxhQUVBbEIsV0FBQSxzQkFBQSxTQUFBLGVBQUEsZ0JBQUEsU0FBQU0sRUFBQUYsRUFBQUksR0FDQUYsRUFBQWEsU0FBQVgsRUFBQVksWUFBQWhCLEVBQUFpQixPQ3RCQTlCLFFBQUFDLE9BQUEsaUJBQ0E4QixRQUFBLGlCQUFBLFFBQUEsS0FBQSxTQUFBZixFQUFBZ0IsR0FDQSxHQUFBTixJQUNBTyxjQUFBLEtBQ0FDLFNBQUEsS0FFQSxRQUNBQyxZQUFBLFdBQUEsTUFBQVQsR0FBQVEsVUFDQVAsUUFBQSxXQUFBLE1BQUFELElBQ0FHLFlBQUEsU0FBQUMsR0FDQSxHQUFBRixFQUNBLElBQUFGLEVBQUFRLFVBQUFSLEVBQUFRLFNBQUFFLE9BQUEsRUFDQSxJQUFBLEdBQUFDLEdBQUEsRUFBQUEsRUFBQVgsRUFBQVEsU0FBQUUsT0FBQUMsSUFDQSxHQUFBWCxFQUFBUSxTQUFBRyxHQUFBQyxNQUFBUixFQUFBLENBQ0FGLEVBQUFGLEVBQUFRLFNBQUFHLEVBQ0EsT0FTQSxNQUFBVCxJQUVBVCxPQUFBLFNBQUFELEdBQ0EsR0FBQXFCLEdBQUFQLEVBQUFRLFFBQ0FqQyxFQUFBLDZIQUVBVyxFQUNBLHlCQWdCQSxPQWRBRixHQUFBeUIsTUFBQWxDLEdBQ0FhLEtBQUEsU0FBQUMsR0FDQSxHQUFBcUIsR0FBQXJCLEVBQUFLLEtBQUFMLFFBQ0FHLFNBQUFtQixJQUFBdEIsR0FDQXFCLEVBQUFSLFVBQUFRLEVBQUFSLFNBQUFFLE9BQUEsR0FDQVYsRUFBQWtCLGFBQUFGLEVBQUFULGNBQ0FQLEVBQUFRLFNBQUFRLEVBQUFSLFNBQ0FLLEVBQUFNLFFBQUFuQixJQUVBYSxFQUFBTyxPQUFBLG1CQUVBLFNBQUF2QixHQUNBZ0IsRUFBQU8sT0FBQXZCLEtBRUFnQixFQUFBUSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdQcm9wZXJ0eUNyb3NzJywgW1xuICAgICAgICAgICAgJ25nTWVzc2FnZXMnLFxuICAgICAgICAgICAgJ3VpLnJvdXRlcidcbiAgICAgICAgXSlcbiAgICAgICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyRsb2NhdGlvblByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICR1cmxSb3V0ZXJQcm92aWRlcil7XG5cbiAgICAgICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9zZWFyY2gnKTtcbiAgICAgICAgICAgIC8vJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXG4gICAgICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgICAgIC5zdGF0ZSgnc2VhcmNoJywge1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvc2VhcmNoJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdqcy9hcHAvbGF5b3V0L3NlYXJjaC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NlYXJjaENvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhdGUoJ3Jlc3VsdHMnLCB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9yZXN1bHRzJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdqcy9hcHAvbGF5b3V0L3Jlc3VsdHMuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdSZXN1bHRDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXRlKCdwcm9wZXJ0eScsIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3Byb3BlcnR5LzppZCcsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnanMvYXBwL2xheW91dC9wcm9wZXJ0eS5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1Byb3BlcnR5Q29udHJvbGxlcidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnJ1bihmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgICRyb290U2NvcGUub3ZlcmxheSA9IGZhbHNlO1xuICAgICAgICAvLyAgICAkcm9vdFNjb3BlLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICAgICAgLy8gICAgJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG4gICAgICAgIH0pXG59KSgpO1xuIiwiYW5ndWxhci5tb2R1bGUoJ1Byb3BlcnR5Q3Jvc3MnKVxuICAgIC5jb250cm9sbGVyKCdTZWFyY2hDb250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRodHRwLCBTZWFyY2hTZXJ2aWNlKSB7XG4gICAgICAgICRzY29wZS5zZWFyY2hUZXh0ID0gJyc7XG4gICAgICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRyb290U2NvcGUub3ZlcmxheSA9IHRydWU7XG4gICAgICAgICAgICBTZWFyY2hTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLnNlYXJjaCgkc2NvcGUuc2VhcmNoVGV4dClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdyZXN1bHRzJyk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB5b3VyIHNlYXJjaC4nKTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVycm9yID0gJ1RoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB5b3VyIHNlYXJjaC4nO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUub3ZlcmxheSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuY29udHJvbGxlcignUmVzdWx0Q29udHJvbGxlcicsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCBTZWFyY2hTZXJ2aWNlKSB7XG4gICAgICAgICRzY29wZS5kYXRhID0gU2VhcmNoU2VydmljZS5nZXREYXRhKCk7XG4gICAgfSlcbiAgICAuY29udHJvbGxlcignUHJvcGVydHlDb250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGVQYXJhbXMsIFNlYXJjaFNlcnZpY2UpIHtcbiAgICAgICAgJHNjb3BlLnByb3BlcnR5ID0gU2VhcmNoU2VydmljZS5nZXRQcm9wZXJ0eSgkc3RhdGVQYXJhbXMuaWQpXG4gICAgfSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnUHJvcGVydHlDcm9zcycpXG4gICAgLmZhY3RvcnkoJ1NlYXJjaFNlcnZpY2UnLCBmdW5jdGlvbigkaHR0cCwgJHEpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICB0b3RhbF9yZXN1bHRzOiBudWxsLFxuICAgICAgICAgICAgbGlzdGluZ3M6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldExpc3RpbmdzOiBmdW5jdGlvbigpIHsgcmV0dXJuIGRhdGEubGlzdGluZ3MgfSxcbiAgICAgICAgICAgIGdldERhdGE6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZGF0YSB9LFxuICAgICAgICAgICAgZ2V0UHJvcGVydHk6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5O1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxpc3RpbmdzICYmIGRhdGEubGlzdGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGlzdGluZ3MubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGlzdGluZ3NbaV0uZ3VpZCA9PSBpZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgPSBkYXRhLmxpc3RpbmdzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdG9kbyDRgNCw0YHRiNC40YDQuNGC0Ywg0LLQvtC30LzQvtC20L3QvtGB0YLQuCDRgdC10YDQstC40YHQsDpcbiAgICAgICAgICAgICAgICAvLyDQtdGB0LvQuCDQuNGB0LrQvtC80L7QtSDQvtCx0YrRj9Cy0LvQtdC90LjQtSDQvdC1INGD0LTQsNC70L7RgdGMINC90LDQudGC0Lgg0LIg0LfQsNCz0YDRg9C20LXQvdC90L7QvCDRgdC/0LjRgdC60LUsXG4gICAgICAgICAgICAgICAgLy8g0LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMINC30LDQv9GA0L7RgSDQvdCwINGB0LXRgNCy0LXRgC4uLlxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlYXJjaDogZnVuY3Rpb24oc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgICAgIHZhciBxID0gJHEuZGVmZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gJ2h0dHA6Ly9hcGkubmVzdG9yaWEuY28udWsvYXBpP2NvdW50cnk9dWsnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcmcHJldHR5PTEmYWN0aW9uPXNlYXJjaF9saXN0aW5ncyZlbmNvZGluZz1qc29uJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnJmxpc3RpbmdfdHlwZT1idXkmcGFnZT0xJnBsYWNlX25hbWU9JyArIHNlYXJjaFRleHQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyZjYWxsYmFjaz1KU09OX0NBTExCQUNLJztcblxuICAgICAgICAgICAgICAgICRodHRwLmpzb25wKHVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzID0gcmVzcG9uc2UuZGF0YS5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMubGlzdGluZ3MgJiYgcmVzLmxpc3RpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRvdGFsUmVzdWx0cyAgPSByZXMudG90YWxfcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxpc3RpbmdzID0gcmVzLmxpc3RpbmdzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5yZWplY3QoJ1VuY2F1Z2h0IGVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHEucmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBxLnByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
