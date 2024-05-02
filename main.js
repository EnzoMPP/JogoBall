import Shape from './Shape.js';
import EvilCircle from './EvilCircle.js';
import Ball from './Ball.js';
import { random, randomRGB } from './Util.js';
import { canvas, ctx, width, height } from './Config.js';


let balls = [];
let count = 25;

while (balls.length < count) {
  const size = random(10, 20);
  const color = randomRGB();
  let ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    color,
    size
  );
  balls.push(ball);
}

let evil = new EvilCircle(random(0, width - 10), random(0, height - 10),count);
evil.setControls();

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0, 0, width, height);

  balls.forEach(ball => {
    if (ball.exists) {
      ball.draw();
      ball.update();
      ball.collisionDetect(balls);
      
    }
  });

  evil.draw();
  evil.checkBounds();
  evil.collisionDetect(balls);
  



  requestAnimationFrame(loop);
}

loop();