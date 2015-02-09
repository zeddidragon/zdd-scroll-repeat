require('insert-css')(require './styles')

module.exports = angular.module 'zddScrollRepeat', []
  .directive 'zddScrollRepeat', require ('./scroll-repeat')
  .filter 'zddScrollFilter', require ('./scroll-filter')
