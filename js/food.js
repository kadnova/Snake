'use strict';

function Food (options){
  BaseElement.call(this, options);
  this.feed = function() {
    this.isVisible = false;
  }
}