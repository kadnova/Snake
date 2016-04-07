'use strict';

function Snake (options){
  var i=0,j=0;
  this.parts = [];
  
  if (options['length'] === undefined) {
    this.length = 0;
      }   
  else {
    this.length = options["length"];
  }
  
this.parts.length=this.length;

        switch(this.direction) {
          case "right":
  
  for (i=this.length; i>=0; i--){
          this.parts[j]= new Part({x:i, y:0});
          if(j===i){
            break;
          }
          else{
          j++;
        }
  }
        break;
      case "left":
          console.log("nooooooooooooooooooooooo");
        break;
      case "up":
          console.log("nooooooooooooooooooooooo");
        break;
      case "down":
          console.log("nooooooooooooooooooooooo");
        break;
  }
    
   
  this.head = this.parts[0];
  this.direction = options['direction'];
  
  this.eat = function(){
    this.parts.push(new Part({}));
    // this.length=this.length+1;
    this.parts[this.length].direction = this.parts[this.length-1].direction;
    // this.length=this.length+1;
  }
  
 
  this.move = function(steps){
    if (steps === undefined) {
      steps = 1;
    }
    this.head.direction = this.direction;
    
  }
  
  
}
