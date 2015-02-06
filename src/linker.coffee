ITEM_WEIGHT = 20

module.exports = (scope, el, attrs)->
  scrollPosition = 0
  range = scope.zddScrollRepeat
  lastTouchY = 0

  scroll = (deltaY)->
    # Calculate range values
    newPos = scrollPosition + deltaY
    maxEnd = (range.collection.length - range.length) * ITEM_WEIGHT
    scrollPosition = Math.max(0, Math.min(maxEnd, newPos))
    range.start = Math.floor(scrollPosition / ITEM_WEIGHT)
    range.translation = scrollPosition % ITEM_WEIGHT

    # Apply transformation style
    unless range.noTranslate
      el.css('transform', "translateY(#{range.translation}px)")

    scope.$apply()

  el.on 'touchstart', (ev)->
    lastTouchY = ev.changedTouches[0].screenY
  
  el.on 'touchmove', (ev)->
    y = ev.changedTouches[0].screenY
    deltaY = lastTouchY - y
    scroll(deltaY)
    lastTouchY = y

  el.on 'wheel', (ev)->
    # Stop defaults to keep window from scrolling
    ev.stopPropagation()
    ev.preventDefault()

    scroll(ev.deltaY)
