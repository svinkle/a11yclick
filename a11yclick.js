/**
 * a11yclick - Easily handle keyboard click events on non semantic button elements.
 *
 * @param {Object} event Click/keyboard event object.
 * @returns {Boolean} Returns true or false depending on event type and code.
 */
var a11yclick = function(event) {
    'use strict';

    var code = event.charCode || event.keyCode,
        type = event.type;

    if (type === 'click') {
        return true;
    } else if (type === 'keydown') {
        if (code === 32 || code === 13) {
            return true;
        }
    } else {
        return false;
    }
};
