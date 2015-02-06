ITEM_WEIGHT = 20

module.exports = (scope, el, attrs)->
  scrollPosition = 0
  el.on 'wheel', (ev)->
    ev.stopPropagation()
    ev.preventDefault()
