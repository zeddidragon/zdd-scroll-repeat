module.exports = ->
  restrict: 'E'
  scope:
    range: '='
    collection: '='
  controller: require './controller'
  link: require './linker'
