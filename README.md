# ZDD Scroll Repeat

This is a directive for angular that simulates a scrollview. You can have
thousands of elements in the view, but only a selected amount of them will
actually be rendered. This increases responsiveness a lot!

## Installation

```bash
$ bower install zdd-scroll-repeat
```

In your module declaration:
```js
angular.module('YourAwesomeModule', ['zddScrollRepeat', ...])
```

The module uses the 'deltaY' event of 'mousewheel' for the sake of scrolling.
If you're using jQuery, you'll have to add this property to the event object:
```js
jQuery.event.props.push('deltaY')
```

## Usage

HTML
```html
<ANY zdd-scroll-repeat="range || (range={length:20})" style="position:relative">
  <ANY ng-repeat="item in items | zddScrollFilter:range">
    {{item.whatever}}
  </ANY>
</ANY>
```

The directive takes a configuration object we call *range*.
*range* is primarily used to determine how many items you want displayed.
zddScrollFilter will bind the collection, so it's necessary for the magic
to work.

If you want to style the rail and the thumb, the classes for these are
```css
.zdd-scrollbar-rail
.zdd-scrollbar-thumb
```
Mess around with them to your liking. :)

The rail might look wrong initially unless the container has position:relative.

## Demo

http://zeddidragon.github.io/zdd-scroll-repeat/

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

9/2/2015 - Initial release

Some stuff happened

18/3/2015 - Fixed scoping issue

## Credits

- Tony Sæle - Helmsman
- Øystein Olsen - Navigator

## License
Copyright © 2000 Tony Sæle <tony@globalit.no>
This work is free. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the LICENSE file for more details.
