class Drop{

  constructor(){
    this.x  = random(0, width);
    this.y  = random(-500, -100);
    this.z  = random(0, 20);

    this.yspeed = 1;
  }


  fall(){
    this.yspeed += map(this.z, 0, 20, 0.01, 0.1);
    this.y += this.yspeed;

    if (this.y >= height) {
      this.y = random(-100, -300);
      this.yspeed = 1;

      this.z  = random(0, 20);
    }
  }


  show(){
    strokeWeight(map(this.z, 0, 20, 0.5, 3));
    stroke(153, 27, 179);
    line(this.x, this.y, this.x, this.y + 20);
  }


}
