(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/tony/git/angular-scrollrepeat/demo/app.coffee":[function(require,module,exports){
angular.module('scrollrepeatDemo', [require('../src/index').name]).directive('body', function() {
  return {
    template: require('./template/body'),
    controller: function($scope) {
      $scope.thingies = require('./thingies.json');
      $scope.things = {};
      return $scope.range = {
        length: 20
      };
    }
  };
});

angular.bootstrap(document.body, ['scrollrepeatDemo']);



},{"../src/index":"/home/tony/git/angular-scrollrepeat/src/index.coffee","./template/body":"/home/tony/git/angular-scrollrepeat/demo/template/body.haml","./thingies.json":"/home/tony/git/angular-scrollrepeat/demo/thingies.json"}],"/home/tony/git/angular-scrollrepeat/demo/template/body.haml":[function(require,module,exports){
module.exports = function(options) {
return (function() {
var $o;

$o = [];

$o.push("<ul zdd-scroll-repeat='range' ng-style=\"{transform: 'translateY(' + range.translation + 'px)'}\">\n  <li ng-repeat='thing in thingies | zddScrollFilter:range' ng-style='{backgroundColor: thing.color}'>\n    <div class='id'>{{thing.id}}</div>\n    <div class='name'>{{thing.name}}</div>\n    <div class='color'>{{thing.color}}</div>\n  </li>\n</ul>\n<style>\n  ul {\n    list-style-type: none;\n    padding: 0;\n  }\n  li {\n    padding: 5px;\n    margin: 2px;\n    display: flex;\n  }\n  li>* {\n    flex: 1;\n  }\n</style>");

return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");

}).call(options)
};
},{}],"/home/tony/git/angular-scrollrepeat/demo/thingies.json":[function(require,module,exports){
module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=[
	{
		"id": 1,
		"name": "Lev Bright",
		"color": "rgba(0, 0, 200, 0.5)"
	},
	{
		"id": 2,
		"name": "Bruno Rush",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 3,
		"name": "Nehru Rojas",
		"color": "rgba(0, 0, 200, 0.5)"
	},
	{
		"id": 4,
		"name": "Libby Heath",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 5,
		"name": "Montana Robbins",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 6,
		"name": "Moses Beck",
		"color": "rgba(0, 0, 200, 0.5)"
	},
	{
		"id": 7,
		"name": "Eagan Burton",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 8,
		"name": "Kelly Martinez",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 9,
		"name": "Isadora Dickson",
		"color": "rgba(238, 238, 130, 0.5)"
	},
	{
		"id": 10,
		"name": "Cole Wilcox",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 11,
		"name": "Desirae Wise",
		"color": "rgba(0, 0, 200, 0.5)"
	},
	{
		"id": 12,
		"name": "Iliana Clay",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 13,
		"name": "Hanae Cunningham",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 14,
		"name": "Ignacia Decker",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 15,
		"name": "Madaline Vaughn",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 16,
		"name": "Shelly Hebert",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 17,
		"name": "Halla Parsons",
		"color": "rgba(238, 238, 130, 0.5)"
	},
	{
		"id": 18,
		"name": "Valentine Duncan",
		"color": "rgba(0, 0, 200, 0.5)"
	},
	{
		"id": 19,
		"name": "Owen Kirby",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 20,
		"name": "Ruby Simpson",
		"color": "rgba(0, 0, 200, 0.5)"
	},
	{
		"id": 21,
		"name": "Colorado Dixon",
		"color": "rgba(238, 238, 130, 0.5)"
	},
	{
		"id": 22,
		"name": "Kyra Huffman",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 23,
		"name": "Shay Bauer",
		"color": "rgba(130, 238, 238, 0.5)"
	},
	{
		"id": 24,
		"name": "Ariana Vaughan",
		"color": "rgba(238, 238, 130, 0.5)"
	},
	{
		"id": 25,
		"name": "Jordan Hopkins",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 26,
		"name": "Dakota Mccarty",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 27,
		"name": "Tiger Melendez",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 28,
		"name": "Autumn Nielsen",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 29,
		"name": "Diana Sanders",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 30,
		"name": "Kadeem Hays",
		"color": "rgba(238, 238, 130, 0.5)"
	},
	{
		"id": 31,
		"name": "Ulla Langley",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 32,
		"name": "Briar Massey",
		"color": "rgba(238, 238, 130, 0.5)"
	},
	{
		"id": 33,
		"name": "Fletcher Page",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 34,
		"name": "Hasad Berger",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 35,
		"name": "Cherokee Anderson",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 36,
		"name": "Cassidy Fletcher",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 37,
		"name": "Genevieve Farmer",
		"color": "rgba(130, 238, 238, 0.5)"
	},
	{
		"id": 38,
		"name": "Duncan Russo",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 39,
		"name": "Vernon Hess",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 40,
		"name": "Chantale Hewitt",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 41,
		"name": "Gannon Griffith",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 42,
		"name": "Amelia Buckner",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 43,
		"name": "Yoshi Chambers",
		"color": "rgba(238, 238, 130, 0.5)"
	},
	{
		"id": 44,
		"name": "Bo Clements",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 45,
		"name": "Courtney Martin",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 46,
		"name": "Sybil Foster",
		"color": "rgba(238, 238, 130, 0.5)"
	},
	{
		"id": 47,
		"name": "Brett Mercado",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 48,
		"name": "Lucius Avila",
		"color": "rgba(0, 0, 200, 0.5)"
	},
	{
		"id": 49,
		"name": "Oliver Burns",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 50,
		"name": "Piper Camacho",
		"color": "rgba(130, 238, 238, 0.5)"
	},
	{
		"id": 51,
		"name": "Joel Weiss",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 52,
		"name": "Ramona Curry",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 53,
		"name": "Iliana Francis",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 54,
		"name": "Angela Stanton",
		"color": "rgba(0, 0, 200, 0.5)"
	},
	{
		"id": 55,
		"name": "Jolene Rasmussen",
		"color": "rgba(0, 0, 200, 0.5)"
	},
	{
		"id": 56,
		"name": "Alana Parks",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 57,
		"name": "Bryar Ford",
		"color": "rgba(130, 238, 238, 0.5)"
	},
	{
		"id": 58,
		"name": "Cedric Glenn",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 59,
		"name": "Ashely Gallegos",
		"color": "rgba(238, 238, 130, 0.5)"
	},
	{
		"id": 60,
		"name": "Illiana Ayala",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 61,
		"name": "Nita Santos",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 62,
		"name": "Ila Blevins",
		"color": "rgba(130, 238, 238, 0.5)"
	},
	{
		"id": 63,
		"name": "Finn Morton",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 64,
		"name": "Imani Wong",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 65,
		"name": "Cailin Hill",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 66,
		"name": "Lance Sexton",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 67,
		"name": "Hasad Townsend",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 68,
		"name": "Desirae Juarez",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 69,
		"name": "Brody Cummings",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 70,
		"name": "Kiara Sampson",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 71,
		"name": "Eve Gibson",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 72,
		"name": "Ann Meyer",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 73,
		"name": "Jamalia Hatfield",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 74,
		"name": "Connor Rush",
		"color": "rgba(0, 0, 200, 0.5)"
	},
	{
		"id": 75,
		"name": "Tate Howe",
		"color": "rgba(130, 238, 238, 0.5)"
	},
	{
		"id": 76,
		"name": "Kimberley Hayes",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 77,
		"name": "Elaine Noel",
		"color": "rgba(130, 238, 238, 0.5)"
	},
	{
		"id": 78,
		"name": "Yasir Hodge",
		"color": "rgba(238, 238, 130, 0.5)"
	},
	{
		"id": 79,
		"name": "Athena Valentine",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 80,
		"name": "Caesar Horton",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 81,
		"name": "Macon Bird",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 82,
		"name": "Elijah Head",
		"color": "rgba(0, 0, 200, 0.5)"
	},
	{
		"id": 83,
		"name": "Haley Richards",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 84,
		"name": "Justine Ashley",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 85,
		"name": "Karly Moon",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 86,
		"name": "Gareth Perry",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 87,
		"name": "Gage Olson",
		"color": "rgba(130, 238, 238, 0.5)"
	},
	{
		"id": 88,
		"name": "Benedict Briggs",
		"color": "rgba(0, 0, 200, 0.5)"
	},
	{
		"id": 89,
		"name": "Damon Hess",
		"color": "rgba(130, 238, 238, 0.5)"
	},
	{
		"id": 90,
		"name": "Chester Frank",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 91,
		"name": "Quinn Tanner",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 92,
		"name": "Bertha Paul",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 93,
		"name": "Howard French",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 94,
		"name": "Halee Benjamin",
		"color": "rgba(238, 130, 238, 0.5)"
	},
	{
		"id": 95,
		"name": "Felicia Kidd",
		"color": "rgba(75, 0, 130, 0.5)"
	},
	{
		"id": 96,
		"name": "Hayley Humphrey",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 97,
		"name": "Caesar Willis",
		"color": "rgba(0, 0, 200, 0.5)"
	},
	{
		"id": 98,
		"name": "Donna Powers",
		"color": "rgba(200, 0, 0, 0.5)"
	},
	{
		"id": 99,
		"name": "Lionel Bates",
		"color": "rgba(0, 200, 0, 0.5)"
	},
	{
		"id": 100,
		"name": "Hillary Mccarthy",
		"color": "rgba(238, 130, 238, 0.5)"
	}
]

},{}],"/home/tony/git/angular-scrollrepeat/src/controller.coffee":[function(require,module,exports){
module.exports = function($scope) {
  return null;
};



},{}],"/home/tony/git/angular-scrollrepeat/src/index.coffee":[function(require,module,exports){
module.exports = angular.module('zdd-scrollrepeat', []).directive('zddScrollRepeat', require('./scroll-repeat')).filter('zddScrollFilter', require('./scroll-filter'));



},{"./scroll-filter":"/home/tony/git/angular-scrollrepeat/src/scroll-filter.coffee","./scroll-repeat":"/home/tony/git/angular-scrollrepeat/src/scroll-repeat.coffee"}],"/home/tony/git/angular-scrollrepeat/src/linker.coffee":[function(require,module,exports){
var ITEM_WEIGHT;

ITEM_WEIGHT = 20;

module.exports = function(scope, el, attrs) {
  var range, scrollPosition;
  scrollPosition = 0;
  range = scope.zddScrollRepeat;
  return el.on('wheel', function(ev) {
    var maxEnd, newPos;
    ev.stopPropagation();
    newPos = scrollPosition + ev.deltaY;
    console.log(scrollPosition, ev.deltaY);
    maxEnd = (range.collection.length - range.length) * ITEM_WEIGHT;
    scrollPosition = Math.max(0, Math.min(maxEnd, newPos));
    range.start = Math.floor(scrollPosition / ITEM_WEIGHT);
    range.translation = scrollPosition % ITEM_WEIGHT;
    return scope.$apply();
  });
};



},{}],"/home/tony/git/angular-scrollrepeat/src/scroll-filter.coffee":[function(require,module,exports){
module.exports = function() {
  return function(arr, range) {
    range.collection = arr;
    range.start || (range.start = 0);
    return arr.slice(range.start, range.start + range.length);
  };
};



},{}],"/home/tony/git/angular-scrollrepeat/src/scroll-repeat.coffee":[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    scope: {
      zddScrollRepeat: '='
    },
    controller: require('./controller'),
    link: require('./linker')
  };
};



},{"./controller":"/home/tony/git/angular-scrollrepeat/src/controller.coffee","./linker":"/home/tony/git/angular-scrollrepeat/src/linker.coffee"}]},{},["/home/tony/git/angular-scrollrepeat/demo/app.coffee"]);
