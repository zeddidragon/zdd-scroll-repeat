template = require './template'
ITEM_WEIGHT = 20
THUMB_CORRECTION = 15
SENSITIVITY = 50

module.exports = ($compile, $document) ->
  (scope, el, attrs) ->
    rail = $compile template
    mousedown = false
    scrollPosition = 0
    lastTouchY = 0
    $rail = rail(scope)
    $thumb = angular.element($rail.children()[0])
    el.append($rail)

    containerTop = 0
    containerHeight = 0

    scrollTo = (y) ->
      range = scope.zddScrollRepeat
      scope.$applyAsync ->
        length = range.collection.length - range.length
        ratio  = (y - containerTop) / containerHeight
        index  = Math.floor(ratio * (range.collection.length - range.length))
        range.start = Math.max(0, Math.min(index, length))
        scrollPosition = range.start * ITEM_WEIGHT
        ratio = Math.max(Math.min(ratio, 1.0), 0.0) * 100
        $thumb.css('top', "#{ratio}%")

    scroll = (deltaY) ->
      range = scope.zddScrollRepeat
      scope.$applyAsync ->
        # Calculate range values
        newPos = scrollPosition + deltaY
        maxEnd = (range.collection.length - range.length) * ITEM_WEIGHT
        scrollPosition = Math.max(0, Math.min(maxEnd, newPos))
        range.start = Math.floor(scrollPosition / ITEM_WEIGHT)
        range.translation = scrollPosition % ITEM_WEIGHT

        # Apply transformation style
        offset = range.start / (range.collection.length - range.length)
        $thumb.css('top', "#{offset * 100}%")

    $rail.on 'mousedown', (ev) ->
      containerTop = $rail[0].getBoundingClientRect().top
      containerHeight = $rail[0].offsetHeight
      mousedown = true
      scrollTo(ev.clientY)

    $document.on 'mousemove', (ev)->
      if mousedown
        ev.preventDefault()
        scrollTo(ev.clientY - THUMB_CORRECTION)

    $document.on 'mouseup', (ev)->
      mousedown = false

    el.on 'touchstart', (ev) ->
      lastTouchY = ev.changedTouches[0].screenY

    el.on 'touchmove', (ev) ->
      y = ev.changedTouches[0].screenY
      deltaY = lastTouchY - y
      scroll(deltaY)
      lastTouchY = y

    el.on 'wheel', (ev) ->
      # Stop defaults to keep window from scrolling
      ev.stopPropagation()
      ev.preventDefault()
      scroll (if ev.deltaY > 0 then 1 else -1) * SENSITIVITY
