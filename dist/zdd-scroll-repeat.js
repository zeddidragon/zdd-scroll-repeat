(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
require('insert-css')(require('./styles'));

module.exports = angular.module('zddScrollRepeat', []).directive('zddScrollRepeat', require('./scroll-repeat')).filter('zddScrollFilter', require('./scroll-filter'));



},{"./scroll-filter":4,"./scroll-repeat":5,"./styles":6,"insert-css":1}],3:[function(require,module,exports){
var ITEM_WEIGHT, SENSITIVITY, THUMB_CORRECTION, template;

template = require('./template');

ITEM_WEIGHT = 20;

THUMB_CORRECTION = 15;

SENSITIVITY = 50;

module.exports = function($compile, $document) {
  return function(scope, el, attrs) {
    var $rail, $thumb, containerHeight, containerTop, lastTouchY, mousedown, rail, scroll, scrollPosition, scrollTo;
    rail = $compile(template);
    mousedown = false;
    scrollPosition = 0;
    lastTouchY = 0;
    $rail = rail(scope);
    $thumb = angular.element($rail.children()[0]);
    el.append($rail);
    containerTop = 0;
    containerHeight = 0;
    scrollTo = function(y) {
      var range;
      range = scope.zddScrollRepeat;
      return scope.$applyAsync(function() {
        var index, length, ratio;
        length = range.collection.length - range.length;
        ratio = (y - containerTop) / containerHeight;
        index = Math.floor(ratio * (range.collection.length - range.length));
        range.start = Math.max(0, Math.min(index, length));
        scrollPosition = range.start * ITEM_WEIGHT;
        ratio = Math.max(Math.min(ratio, 1.0), 0.0) * 100;
        return $thumb.css('top', ratio + "%");
      });
    };
    scroll = function(deltaY) {
      var range;
      range = scope.zddScrollRepeat;
      return scope.$applyAsync(function() {
        var maxEnd, newPos, offset;
        newPos = scrollPosition + deltaY;
        maxEnd = (range.collection.length - range.length) * ITEM_WEIGHT;
        scrollPosition = Math.max(0, Math.min(maxEnd, newPos));
        range.start = Math.floor(scrollPosition / ITEM_WEIGHT);
        range.translation = scrollPosition % ITEM_WEIGHT;
        offset = range.start / (range.collection.length - range.length);
        return $thumb.css('top', (offset * 100) + "%");
      });
    };
    $rail.on('mousedown', function(ev) {
      containerTop = $rail[0].getBoundingClientRect().top;
      containerHeight = $rail[0].offsetHeight;
      mousedown = true;
      return scrollTo(ev.clientY);
    });
    $document.on('mousemove', function(ev) {
      if (mousedown) {
        ev.preventDefault();
        return scrollTo(ev.clientY - THUMB_CORRECTION);
      }
    });
    $document.on('mouseup', function(ev) {
      return mousedown = false;
    });
    el.on('touchstart', function(ev) {
      return lastTouchY = ev.changedTouches[0].screenY;
    });
    el.on('touchmove', function(ev) {
      var deltaY, y;
      y = ev.changedTouches[0].screenY;
      deltaY = lastTouchY - y;
      scroll(deltaY);
      return lastTouchY = y;
    });
    return el.on('wheel', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      return scroll((ev.deltaY > 0 ? 1 : -1) * SENSITIVITY);
    });
  };
};



},{"./template":7}],4:[function(require,module,exports){
module.exports = function() {
  return function(arr, range) {
    var end, start;
    if (!arr) {
      return [];
    }
    range.collection = arr;
    range.start || (range.start = 0);
    end = Math.min(range.start + range.length, arr.length);
    start = Math.max(0, end - range.length);
    return arr.slice(start, end);
  };
};



},{}],5:[function(require,module,exports){
module.exports = [
  '$compile', '$document', function($compile, $document) {
    return {
      restrict: 'A',
      scope: {
        zddScrollRepeat: '='
      },
      link: require('./linker')($compile, $document)
    };
  }
];



},{"./linker":3}],6:[function(require,module,exports){
module.exports = ".zdd-scrollbar-rail{position:absolute;width:12px;height:100%;background-color:rgba(98,98,98,0.5);right:5px;top:0;user-select:none}.zdd-scrollbar-thumb{position:relative;transform:translateY(-50%);width:150%;height:30px;background-color:#000;border-radius:20%;margin-left:-25%;user-select:none}"

},{}],7:[function(require,module,exports){
module.exports = "<div\n  class=\"zdd-scrollbar-rail\"\n  ng-show=\"zddScrollRepeat.collection.length > zddScrollRepeat.length\">\n  <div class=\"zdd-scrollbar-thumb\"></div>\n</div>\n";

},{}]},{},[2]);
