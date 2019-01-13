# a11yclick

Easily handle keyboard click events on non semantic button elements.

This is a fork from the blog post entitled "[Ridiculously easy trick for keyboard accessibility](http://www.karlgroves.com/2014/11/24/ridiculously-easy-trick-for-keyboard-accessibility/)" by Karl Groves.

The script weighs in at 20 bytes gzipped and has no dependencies.

## Installation

Install with [Bower](http://bower.io):

```
bower install --save a11yclick
```

Add a ```script``` tag at the bottom of the page, before your application logic.

```html
<script src="a11yclick.js"></script>
<script src="app.js"></script>
```

## Usage

Wrap the event logic with a conditional statement, checking the return value of the a11yclick() function. Make sure to pass in the event object.

```javascript
$('#fake-button').on('click keydown', function(event) {
    if (a11yClick(event)) {
        // Event logic
    }
});
```

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 7+

## License

This project and its source code is licensed under the [MIT](LICENSE.txt) license.
