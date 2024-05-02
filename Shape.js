import { random, randomRGB } from './Util.js';
import { canvas, ctx, width, height } from './Config.js';
class Shape {
    constructor(x, y, velX, velY) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.exists = true;
    }
  }

  export default Shape;