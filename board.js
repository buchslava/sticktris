function drawSquare(x, y, g) {
  g.clear()
    .setStrokeStyle(3)
    .beginStroke("#FF0000").moveTo(x, y).lineTo(x + 20, y)
    .beginStroke("#00FF00").moveTo(x + 20, y).lineTo(x + 20, y + 20)
    .beginStroke("#0000FF").moveTo(x + 20, y + 20).lineTo(x, y + 20)
    .beginStroke("#FFFF00").moveTo(x, y + 20).lineTo(x, y)
    .closePath();
}

(function (window) {

  function Board() {
    this.Container_constructor();
    this.actor = new createjs.Shape();
    this.addChild(this.actor);
    this.makeShape();
  }

  var p = createjs.extend(Board, createjs.Container);

  p.makeShape = function () {
    drawSquare(0, 0, this.actor.graphics);
  }

  p.tick = function (event) {
    this.actor.x = 10;
    this.actor.y += 20;
  }

  window.Board = createjs.promote(Board, "Container");
}(window));