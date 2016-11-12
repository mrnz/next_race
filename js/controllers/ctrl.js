angular.module('app')
	
	.controller('Ctrl', ['$scope', 'dataFactory', function($scope, dataFactory){

		var allData = [],
				activeFilters = {},
				gbpToEur = 1.2,
				filterData;

		filterData = function() {
			
			var filteredData = angular.copy( allData ).filter( function( item ) {
				return activeFilters[ item.race_type ] === true;
			});

			return filteredData.reduce( function( prev, curr ) {
					
					var thisValue = curr.purse.amount,
							prevValue = prev.purse.amount;

					if(curr.purse.currency === "GBP"){
						thisValue *= gbpToEur;
					}
					if(prev.purse.currency === "GBP"){
						prevValue *= gbpToEur;
					}					

					return thisValue > prevValue ? curr : prev;

				}, filteredData[0] );

		};

		$scope.data = [];

		$scope.filterClicked = function( allFilters ) {
			activeFilters = allFilters;
			$scope.data = filterData();
		};

		dataFactory.getData().then( function( result ) {
			allData = result.data.races;
			$scope.data = filterData();
		});

	}]);