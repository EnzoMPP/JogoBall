import Shape from './Shape.js';
import { random, randomRGB } from './Util.js';
import { canvas, ctx, width, height } from './Config.js';

class Ball extends Shape {
  constructor(x, y, velX, velY, color, size) {
    super(x, y, velX, velY);
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
      this.velX = -this.velX;
    }

    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect(balls) {
    balls.forEach(vizinha => {
      if (vizinha.exists && this !== vizinha) {
        const dx = this.x - vizinha.x;
        const dy = this.y - vizinha.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < (this.size + vizinha.size)) {
          vizinha.color = randomRGB();
          this.velX *= -1;
          this.velY *= -1;
          vizinha.velX *= -1;
          vizinha.velY *= -1;
        }
      }
    });
  }
}

export default Ball;