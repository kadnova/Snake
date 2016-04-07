'use strict';

function Part (options){
  var allowedDirection = ['up','down','right','left'];
  var appliedDirection='right';
  if (options['direction'] !== undefined) {
    allowedDirection.forEach(function(element){
      if (options['direction'] === element) {
        appliedDirection = element; 
      }   
    });
  }
 this.direction = appliedDirection;
BaseElement.call(this, options);
  
this.move = function(steps) {
    switch(this.direction) {
      case "right":
          this.x = this.x + steps;
          break;
      case "left":
          this.x = this.x - steps;
        break;
      case "up":
          this.y = this.y + steps;
        break;
      case "down":
          this.y = this.y - steps;
        break;
    }
  }
};


//var part = new Part({direction:"up"});
//part.move(2);
//console.log(part);