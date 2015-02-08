module.exports =  ['$compile', '$document', ($compile, $document) ->
  restrict: 'A'
  scope:
    zddScrollRepeat: '='
  controller: require './controller'
  link: require('./linker')($compile, $document)
]
