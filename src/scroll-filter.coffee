module.exports = ->
  (arr, range)->
    range.collection = arr
    range.start ||= 0
    arr.slice range.start, range.start + range.length
