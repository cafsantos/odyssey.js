
var Trigger = require('../story').Trigger;
var Core = require('../core');

/**
 *
 *
 */
function Keys() {

  KEY_LEFT = 37;
  KEY_UP = 38;
  KEY_RIGHT = 39;
  KEY_DOWN = 40;

  var el = document;

  var keys = {};

  function listenForKey(el, k, callback) {
    el.addEventListener('keydown', function(e) {
       var code = e.keyCode;
       if (code === k) {
         callback();
         e.preventDefault();
         e.stopPropagation()
       }
    });
  }

  keys.left = function() {
    var t = Trigger({});
    listenForKey(el, KEY_LEFT, function() {
      t.trigger();
    });
    return t;
  }

  keys.right = function() {
    var t = Trigger({});
    listenForKey(el, KEY_RIGHT, function() {
      t.trigger();
    });
    return t;
  }

  keys.on = function(element) {
    el = Core.getElement(element);
    return keys;
  }

  return keys;

}

module.exports = Keys;