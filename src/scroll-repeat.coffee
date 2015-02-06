module.exports = ->
  restrict: 'A'
  scope:
    zddScrollRepeat: '='
  controller: require './controller'
  link: require './linker'
