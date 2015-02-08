require('insert-css')(require './styles')

module.exports = angular.module 'zdd-scrollrepeat', []
  .directive 'zddScrollRepeat', require ('./scroll-repeat')
  .filter 'zddScrollFilter', require ('./scroll-filter')
