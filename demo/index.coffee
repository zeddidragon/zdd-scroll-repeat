require('insert-css')(require('./styles'))

angular.module 'scrollrepeatDemo', [require('../src/index').name]
  .directive 'body', ->
    template: require('./template/body')
    controller: ($scope)->
      $scope.thingies = require('./thingies.json')
      $scope.things = {}
      $scope.range = {length: 20}
      $scope.limit = 8

angular.bootstrap document.body, ['scrollrepeatDemo']
