module.exports =  ['$compile', '$document', ($compile, $document) ->
  restrict: 'A'
  scope:
    zddScrollRepeat: '='
  link: require('./linker')($compile, $document)
]
