//In the space below each problem, write the code to answer. This page connects to index.html

/* 4.--------
*/

( function () { 'use strict'
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));
paper.view.draw ();
var tool2 = new Tool ();
var c = Shape . Circle ( 200 , 200 , 80 );
c.fillColor = 'black' ;
var text = new PointText ( 200 , 200 );
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';
tool2.onMouseDown = function ( event ) {
  var c = Shape.Circle ( event . point . x , event . point . y , 20 );
  c.fillColor = 'green' ;
};
 }())
