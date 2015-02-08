(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/fireneslo/git/zdd-scroll-repeat/demo/app.coffee":[function(require,module,exports){
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



},{"../src/index":"/home/fireneslo/git/zdd-scroll-repeat/src/index.coffee","./template/body":"/home/fireneslo/git/zdd-scroll-repeat/demo/template/body.jade","./thingies.json":"/home/fireneslo/git/zdd-scroll-repeat/demo/thingies.json"}],"/home/fireneslo/git/zdd-scroll-repeat/demo/template/body.jade":[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<ul zdd-scroll-repeat=\"range\"><li ng-repeat=\"thing in thingies | zddScrollFilter:range\" ng-style=\"{backgroundColor: thing.color}\"><div class=\"id\">{{thing.id}}</div><div class=\"name\">{{thing.name}}</div><div class=\"color\">{{thing.color}}</div></li></ul><ul zdd-scroll-repeat=\"range2 || (range2={length:3})\"><li ng-repeat=\"thing in thingies | zddScrollFilter:range2\" ng-style=\"{backgroundColor: thing.color}\"><div class=\"id\">{{thing.id}}</div><div class=\"name\">{{thing.name}}</div><div class=\"color\">{{thing.color}}</div></li></ul><style type=\"text/css\">ul {\n  list-style-type: none;\n  padding: 0;\n}\nli {\n  padding: 5px;\n  margin: 2px;\n  display: flex;\n}\nli>* {\n  flex: 1;\n}</style>");;return buf.join("");
};
},{"jade/runtime":"/home/fireneslo/git/zdd-scroll-repeat/node_modules/jade/runtime.js"}],"/home/fireneslo/git/zdd-scroll-repeat/demo/thingies.json":[function(require,module,exports){
module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=[
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

},{}],"/home/fireneslo/git/zdd-scroll-repeat/node_modules/browserify/node_modules/browser-resolve/empty.js":[function(require,module,exports){

},{}],"/home/fireneslo/git/zdd-scroll-repeat/node_modules/insert-css/index.js":[function(require,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}],"/home/fireneslo/git/zdd-scroll-repeat/node_modules/jade/runtime.js":[function(require,module,exports){
(function (global){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.jade=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = merge(attrs, a[i]);
    }
    return attrs;
  }
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    a['class'] = ac.concat(bc).filter(nulls);
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {*} val
 * @return {Boolean}
 * @api private
 */

function nulls(val) {
  return val != null && val !== '';
}

/**
 * join array as classes.
 *
 * @param {*} val
 * @return {String}
 */
exports.joinClasses = joinClasses;
function joinClasses(val) {
  return (Array.isArray(val) ? val.map(joinClasses) :
    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
    [val]).filter(nulls).join(' ');
}

/**
 * Render the given classes.
 *
 * @param {Array} classes
 * @param {Array.<Boolean>} escaped
 * @return {String}
 */
exports.cls = function cls(classes, escaped) {
  var buf = [];
  for (var i = 0; i < classes.length; i++) {
    if (escaped && escaped[i]) {
      buf.push(exports.escape(joinClasses([classes[i]])));
    } else {
      buf.push(joinClasses(classes[i]));
    }
  }
  var text = joinClasses(buf);
  if (text.length) {
    return ' class="' + text + '"';
  } else {
    return '';
  }
};


exports.style = function (val) {
  if (val && typeof val === 'object') {
    return Object.keys(val).map(function (style) {
      return style + ':' + val[style];
    }).join(';');
  } else {
    return val;
  }
};
/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = function attr(key, val, escaped, terse) {
  if (key === 'style') {
    val = exports.style(val);
  }
  if ('boolean' == typeof val || null == val) {
    if (val) {
      return ' ' + (terse ? key : key + '="' + key + '"');
    } else {
      return '';
    }
  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
    if (JSON.stringify(val).indexOf('&') !== -1) {
      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
                   'will be escaped to `&amp;`');
    };
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will eliminate the double quotes around dates in ' +
                   'ISO form after 2.0.0');
    }
    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
  } else if (escaped) {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + exports.escape(val) + '"';
  } else {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + val + '"';
  }
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 */
exports.attrs = function attrs(obj, terse){
  var buf = [];

  var keys = Object.keys(obj);

  if (keys.length) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('class' == key) {
        if (val = joinClasses(val)) {
          buf.push(' ' + key + '="' + val + '"');
        }
      } else {
        buf.push(exports.attr(key, val, false, terse));
      }
    }
  }

  return buf.join('');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){
  var result = String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  if (result === '' + html) return html;
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || require('fs').readFileSync(filename, 'utf8')
  } catch (ex) {
    rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1])(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"fs":"/home/fireneslo/git/zdd-scroll-repeat/node_modules/browserify/node_modules/browser-resolve/empty.js"}],"/home/fireneslo/git/zdd-scroll-repeat/src/controller.coffee":[function(require,module,exports){
module.exports = function($scope) {
  return null;
};



},{}],"/home/fireneslo/git/zdd-scroll-repeat/src/index.coffee":[function(require,module,exports){
require('insert-css')(require('./styles'));

module.exports = angular.module('zdd-scrollrepeat', []).directive('zddScrollRepeat', require('./scroll-repeat')).filter('zddScrollFilter', require('./scroll-filter'));



},{"./scroll-filter":"/home/fireneslo/git/zdd-scroll-repeat/src/scroll-filter.coffee","./scroll-repeat":"/home/fireneslo/git/zdd-scroll-repeat/src/scroll-repeat.coffee","./styles":"/home/fireneslo/git/zdd-scroll-repeat/src/styles.styl","insert-css":"/home/fireneslo/git/zdd-scroll-repeat/node_modules/insert-css/index.js"}],"/home/fireneslo/git/zdd-scroll-repeat/src/linker.coffee":[function(require,module,exports){
var ITEM_WEIGHT, THUMB_CORRECTION, template;

template = require('./template');

ITEM_WEIGHT = 20;

THUMB_CORRECTION = 15;

module.exports = function($compile, $document) {
  return function(scope, el, attrs) {
    var $rail, $thumb, lastTouchY, mousedown, rail, range, scroll, scrollPosition, scrollTo;
    rail = $compile(template());
    mousedown = false;
    scrollPosition = 0;
    range = scope.zddScrollRepeat;
    lastTouchY = 0;
    $rail = rail(scope);
    $thumb = angular.element($rail.children()[0]);
    el.append($rail);
    scrollTo = function(y) {
      var index, length, ratio;
      length = range.collection.length - range.length;
      ratio = (y - $rail[0].getBoundingClientRect().top) / $rail[0].offsetHeight;
      index = Math.floor(ratio * (range.collection.length - range.length));
      range.start = Math.max(0, Math.min(index, length));
      if (index < 0) {
        $thumb.css('top', "0%");
      } else if (index > length) {
        $thumb.css('top', "100%");
      } else {
        $thumb.css('top', (ratio * 100) + "%");
      }
      return scope.$apply();
    };
    scroll = function(deltaY) {
      var maxEnd, newPos, offset;
      newPos = scrollPosition + deltaY;
      maxEnd = (range.collection.length - range.length) * ITEM_WEIGHT;
      scrollPosition = Math.max(0, Math.min(maxEnd, newPos));
      range.start = Math.floor(scrollPosition / ITEM_WEIGHT);
      range.translation = scrollPosition % ITEM_WEIGHT;
      offset = range.start / (range.collection.length - range.length);
      $thumb.css('top', (offset * 100) + "%");
      if (!range.noTranslate) {
        el.css('transform', "translateY(" + range.translation + "px)");
      }
      return scope.$apply();
    };
    $rail.on('click', function(ev) {
      return scrollTo(ev.clientY);
    });
    $document.on('mousemove', function(ev) {
      if (mousedown) {
        ev.preventDefault();
        return scrollTo(ev.clientY - THUMB_CORRECTION);
      }
    });
    el.on('touchstart', function(ev) {
      return lastTouchY = ev.changedTouches[0].screenY;
    });
    $thumb.on('mousedown', function(ev) {
      lastTouchY = ev.screenY;
      return mousedown = true;
    });
    el.on('touchmove', function(ev) {
      var deltaY, y;
      y = ev.changedTouches[0].screenY;
      deltaY = lastTouchY - y;
      scroll(deltaY);
      return lastTouchY = y;
    });
    $document.on('mouseup', function(ev) {
      return mousedown = false;
    });
    return el.on('wheel', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      return scroll(ev.deltaY);
    });
  };
};



},{"./template":"/home/fireneslo/git/zdd-scroll-repeat/src/template.jade"}],"/home/fireneslo/git/zdd-scroll-repeat/src/scroll-filter.coffee":[function(require,module,exports){
module.exports = function() {
  return function(arr, range) {
    range.collection = arr;
    range.start || (range.start = 0);
    return arr.slice(range.start, range.start + range.length);
  };
};



},{}],"/home/fireneslo/git/zdd-scroll-repeat/src/scroll-repeat.coffee":[function(require,module,exports){
module.exports = [
  '$compile', '$document', function($compile, $document) {
    return {
      restrict: 'A',
      scope: {
        zddScrollRepeat: '='
      },
      controller: require('./controller'),
      link: require('./linker')($compile, $document)
    };
  }
];



},{"./controller":"/home/fireneslo/git/zdd-scroll-repeat/src/controller.coffee","./linker":"/home/fireneslo/git/zdd-scroll-repeat/src/linker.coffee"}],"/home/fireneslo/git/zdd-scroll-repeat/src/styles.styl":[function(require,module,exports){
module.exports = ".zdd-scrollbar-rail{position:absolute;width:12px;height:100%;background-color:rgba(98,98,98,0.5);right:5px;top:0}.zdd-scrollbar-thumb{position:relative;transform:translateY(-50%);width:150%;height:30px;background-color:#000;border-radius:20%;margin-left:-25%}"

},{}],"/home/fireneslo/git/zdd-scroll-repeat/src/template.jade":[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div ng-click=\"scrollTo($event)\" class=\"zdd-scrollbar-rail\"><div class=\"zdd-scrollbar-thumb\"></div></div>");;return buf.join("");
};
},{"jade/runtime":"/home/fireneslo/git/zdd-scroll-repeat/node_modules/jade/runtime.js"}]},{},["/home/fireneslo/git/zdd-scroll-repeat/demo/app.coffee"]);
