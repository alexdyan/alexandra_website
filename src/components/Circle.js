class Circle {
  constructor(x, y, p) {
    this.x = x
    this.y = y
    this.ySpeed = p.random(0.1, 1)
    this.size = p.random(30, 100)
    this.myColor = p.color(p.random(195, 215), p.random(10, 30), 100)

    //select a starting point on the curve
    this.xOffset = p.random(0, 1000)
  }

  displayAndMove(p) {
    p.noStroke()
    p.fill(this.myColor)
    p.ellipse(this.x, this.y, this.size, this.size)

    if (p.dist(this.x, this.y, p.mouseX, p.mouseY) < 100) {
      if (p.mouseX < this.x) {
        this.x += 1.5
      }
      if (p.mouseX > this.x) {
        this.x -= 1.5
      }
      if (p.mouseY < this.x) {
        this.y += 1.5
      }
      if (p.mouseY > this.x) {
        this.y -= 1.5
      }
    }

    //move the particle using Perlin noise
    var xValue = p.noise(this.xOffset)
    var xMove = p.map(xValue, 0, 1, -2, 2)

    //update particle positions
    this.x += xMove
    this.xOffset += 0.01
    this.y -= this.ySpeed

    //wrap around
    if (this.y <= 0 - this.size) {
      this.y = p.height + this.size
    }

    //constrains
    this.x = p.constrain(this.x, 0, p.width)
  }
}

export default Circle
