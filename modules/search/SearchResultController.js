

angular
    .module('CouchCommerceApp')
    .controller('SearchResultController',
    [
        '$scope', 'searchService', 'searchUiState', 'navigationService',
        function SearchResultController($scope, searchService, searchUiState, navigationService) {

            var vm = this;

            vm.searchUiState = searchUiState;
            vm.navigationService = navigationService;

            vm.createGroupText = function(grouping){
                return grouping.items.length === 1 ?
                       '1 ' + $scope.ln.searchProductFoundIn + ' ' + grouping.groupText :
                       grouping.items.length + ' ' + $scope.ln.searchProductsFoundIn + ' ' + grouping.groupText;
            };

            vm.goToCategory = function(result){
                searchUiState.closeSearch();
                navigationService.navigateToCategory(result.groupKey);
            };

            vm.goToProduct = function(item){
                searchUiState.closeSearch();
                navigationService.navigateToProduct({
                    categoryUrlId: item.categoryUrlKey,
                    urlKey: item.productUrlKey
                });
            };

        }
    ]);