module.exports = ->
  restrict: 'A'
  scope:
    range: '='
    collection: '='
  controller: require './controller'
  link: require './linker'
