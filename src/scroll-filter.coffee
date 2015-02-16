module.exports = ->
  (arr, range)->
    return [] unless arr
    range.collection = arr
    range.start ||= 0
    end = Math.min range.start + range.length, arr.length
    start = Math.max 0, end - range.length
    arr.slice start, end
