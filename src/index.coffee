module.exports = angular.module 'zdd-scrollrepeat', []
  .directive 'zddScrollRepeat', require ('./scroll-repeat')
  .filter 'zddScrollFilter', require ('./scroll-filter')
