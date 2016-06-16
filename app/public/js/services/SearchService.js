(function() {
    'use strict';


    /**
     * Angular definition.
     */
    alTayer.factory('SearchService', SearchService);


    /**
     * Dependencies.
     */
    SearchService.$inject = [
        '$http',
        'config'
    ];


    /**
     * Search service.
     */
    function SearchService($http, config) {
        var SearchService = {};

        SearchService.search = function(keyword, callback) {
            $http.get(config.API_URL + '/search/optimized-search?keyword=' + keyword).success(function(data) {
                callback && callback(data);
            });
        };

        SearchService.abort = function() {
            $http.pendingRequests.forEach(function(request) {
                if (request.cancel) {
                    request.cancel.resolve('Cancel!');
                }
            });
        };

        return SearchService;
    }
})();
