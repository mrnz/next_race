angular.module('app').component('filter', {
  templateUrl: 'templates/filter.html',
  bindings: {
    filterChanged: '&'
  },
  controller: function() {
    
    this.filters = {
      T: true,
      G: true,
      D: false,
      J: true
    };

    this.click = function(key) {
      this.filters[key] = !this.filters[key];
      this.filterChanged({ allFilters: this.filters });
    };

    this.$onInit = function() {
      this.filterChanged({ allFilters: this.filters });
    };
    
  }
});