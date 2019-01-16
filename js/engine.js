var app = angular.module('dragApp', []);

app.service("draggable", function() {

  let move = function(el){
  	let x=0;
  	let y=0; 
    let fX=0;
    let fY=0;   
  		el.onmousedown = function(event) {
  			x= event.clientX;
  			y= event.clientY;
        fY = parseInt(el.style.top.split('px')[0]);
        fX = parseInt(el.style.left.split('px')[0]);   
  		}
  		document.onmouseup = function(event) {
  			x= event.clientX-x;
  			y= event.clientY-y;
        el.style.top = fY+y+'px';
        el.style.left = fX+x+'px';
  		}   
  }
  
  this.Move = function(el) {
    return move(el);
  }
   
});

app.directive("notepad", function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/notes.htm'
	}
});

app.directive("drag", function(draggable) {
	return {
		restrict: 'A',
		link: function($scope,element,attr){
			$scope.draggable = draggable;
			draggable.Move(element[0]);
		},
	}
});

app.controller('DragCtrl', function DragCtrl($scope, $compile, draggable) {
	let addloc = angular.element(document.getElementsByClassName("add"))[0];
	addloc.onclick = function (){
		let el=$compile("<notepad></notepad>")($scope);
		angular.element(document).find("body").append(el);
	}
});
