import Shape from './Shape.js';
import { random, randomRGB } from './Util.js';
import { canvas, ctx, width, height } from './Config.js';

class EvilCircle extends Shape {
    constructor(x, y,count) {
      super(x, y, 20, 20);
      this.color = 'white';
      this.size = 10;
      this.count = count;
    }
  
    draw() {
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 3;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.stroke();
    }
  
    checkBounds() {
      if ((this.x + this.size) >= width) {
        this.x -= this.size;
      }
  
      if ((this.x + this.size) <= 0) {
        this.x += this.size;
      }
  
      if ((this.y + this.size) >= height) {
        this.y -= this.size;
      }
  
      if ((this.y + this.size) <= 0) {
        this.y += this.size;
      }
    }
  
    setControls() {
      const _this = this;
  
      window.onkeydown = function (e) {
        if (e.key === 'a') {
          _this.x -= _this.velX;
        } else if (e.key === 'd') {
          _this.x += _this.velX;
        } else if (e.key === 'w') {
          _this.y -= _this.velY;
        } else if (e.key === 's') {
          _this.y += _this.velY;
        }
      };
    }
  
    collisionDetect(balls,count) {
        balls.forEach( vizinha => {
            if (vizinha.exists){
              const dx = this.x - vizinha.x;
              const dy = this.y - vizinha.y;
              const distance = Math.sqrt(dx*dx+dy*dy);
        
              if (distance < (this.size + vizinha.size)){
                vizinha.exists = false;
                this.size+= 5; 
                this.count--;
                document.querySelector("h1").innerText= ` Faltam ${this.count} bolas`;          
              }
            }          
          });
    }

    setContador(contador) {
        this.count = contador;
    }
  }
  
  export default EvilCircle