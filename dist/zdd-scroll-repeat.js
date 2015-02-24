(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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
},{"fs":1}],4:[function(require,module,exports){
module.exports = function($scope) {
  return null;
};



},{}],5:[function(require,module,exports){
require('insert-css')(require('./styles'));

module.exports = angular.module('zddScrollRepeat', []).directive('zddScrollRepeat', require('./scroll-repeat')).filter('zddScrollFilter', require('./scroll-filter'));



},{"./scroll-filter":7,"./scroll-repeat":8,"./styles":9,"insert-css":2}],6:[function(require,module,exports){
var ITEM_WEIGHT, THUMB_CORRECTION, template;

template = require('./template');

ITEM_WEIGHT = 20;

THUMB_CORRECTION = 15;

module.exports = function($compile, $document) {
  return function(scope, el, attrs) {
    var $rail, $thumb, containerHeight, containerTop, lastTouchY, mousedown, rail, range, scroll, scrollPosition, scrollTo;
    rail = $compile(template());
    mousedown = false;
    scrollPosition = 0;
    range = scope.zddScrollRepeat;
    lastTouchY = 0;
    $rail = rail(scope);
    $thumb = angular.element($rail.children()[0]);
    el.append($rail);
    containerTop = 0;
    containerHeight = 0;
    scrollTo = function(y) {
      return scope.$applyAsync(function() {
        var index, length, ratio;
        length = range.collection.length - range.length;
        ratio = (y - containerTop) / containerHeight;
        index = Math.floor(ratio * (range.collection.length - range.length));
        range.start = Math.max(0, Math.min(index, length));
        ratio = Math.max(Math.min(ratio, 1.0), 0.0) * 100;
        return $thumb.css('top', ratio + "%");
      });
    };
    scroll = function(deltaY) {
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
      return scroll(ev.deltaY);
    });
  };
};



},{"./template":10}],7:[function(require,module,exports){
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



},{}],8:[function(require,module,exports){
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



},{"./controller":4,"./linker":6}],9:[function(require,module,exports){
module.exports = ".zdd-scrollbar-rail{position:absolute;width:12px;height:100%;background-color:rgba(98,98,98,0.5);right:5px;top:0}.zdd-scrollbar-thumb{position:relative;transform:translateY(-50%);width:150%;height:30px;background-color:#000;border-radius:20%;margin-left:-25%}"

},{}],10:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div ng-show=\"zddScrollRepeat.collection.length &gt; zddScrollRepeat.length\" class=\"zdd-scrollbar-rail\"><div class=\"zdd-scrollbar-thumb\"></div></div>");;return buf.join("");
};
},{"jade/runtime":3}]},{},[5]);
