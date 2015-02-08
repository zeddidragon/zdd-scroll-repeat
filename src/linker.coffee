template = require './template'
ITEM_WEIGHT = 20
THUMB_CORRECTION = 15

module.exports = ($compile, $document) ->
  (scope, el, attrs) ->
    rail = $compile(template())
    mousedown = false
    scrollPosition = 0
    range = scope.zddScrollRepeat
    lastTouchY = 0
    $rail = rail(scope)
    $thumb = angular.element($rail.children()[0])
    el.append($rail)

    scrollTo = (y) ->
      length = range.collection.length - range.length
      ratio  = (y-$rail[0].getBoundingClientRect().top) / $rail[0].offsetHeight
      index  = Math.floor(ratio * (range.collection.length - range.length))
      range.start = Math.max(0, Math.min(index, length))
      if index < 0
        $thumb.css('top', "0%")
      else if index > length
        $thumb.css('top', "100%")
      else
        $thumb.css('top', "#{ratio * 100}%")
      scope.$apply()

    scroll = (deltaY) ->
      # Calculate range values
      newPos = scrollPosition + deltaY
      maxEnd = (range.collection.length - range.length) * ITEM_WEIGHT
      scrollPosition = Math.max(0, Math.min(maxEnd, newPos))
      range.start = Math.floor(scrollPosition / ITEM_WEIGHT)
      range.translation = scrollPosition % ITEM_WEIGHT

      # Apply transformation style
      offset = range.start / (range.collection.length - range.length)
      $thumb.css('top', "#{offset * 100}%")
      unless range.noTranslate
        el.css('transform', "translateY(#{range.translation}px)")

      scope.$apply()

    $rail.on 'click', (ev) ->
      scrollTo(ev.clientY)

    $document.on 'mousemove', (ev)->
      if mousedown
        ev.preventDefault()
        scrollTo(ev.clientY - THUMB_CORRECTION)

    el.on 'touchstart', (ev) ->
      lastTouchY = ev.changedTouches[0].screenY

    $thumb.on 'mousedown', (ev)->
      lastTouchY = ev.screenY
      mousedown = true

    el.on 'touchmove', (ev) ->
      y = ev.changedTouches[0].screenY
      deltaY = lastTouchY - y
      scroll(deltaY)
      lastTouchY = y

    $document.on 'mouseup', (ev)->
      mousedown = false

    el.on 'wheel', (ev) ->
      # Stop defaults to keep window from scrolling
      ev.stopPropagation()
      ev.preventDefault()

      scroll(ev.deltaY)
