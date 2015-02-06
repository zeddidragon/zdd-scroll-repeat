ITEM_WEIGHT = 20

module.exports = (scope, el, attrs)->
  scrollPosition = 0
  range = scope.zddScrollRepeat
  el.on 'wheel', (ev)->
    ev.stopPropagation()
    newPos = scrollPosition + ev.deltaY
    console.log scrollPosition, ev.deltaY
    maxEnd = (range.collection.length - range.length) * ITEM_WEIGHT
    scrollPosition = Math.max(0, Math.min(maxEnd, newPos))
    range.start = Math.floor(scrollPosition / ITEM_WEIGHT)
    range.translation = scrollPosition % ITEM_WEIGHT
    scope.$apply()
