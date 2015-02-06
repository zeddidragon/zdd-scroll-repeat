require 'angular'

angular.module 'scrollrepeatDemo', [require('../src/index').name]
  .directive 'body', ->
    template: require('./template/body')
    controller: ($scope)->
      $scope.thingies = require('./thingies.json')

angular.bootstrap document.body, ['scrollrepeatDemo']
