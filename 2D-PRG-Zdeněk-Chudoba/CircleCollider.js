class CircleCollider extends Positionable {
    
    constructor(position, radius) {
      super(position);
      this.radius = radius;
    }
  
    collideWith(other) {
      return other.collideWithCircle(this);
    }
  
    collideWithRect(other) {
      return CollisionDetection.checkRectCircleCollision(other, this);
    }
  
    collideWithCircle(other) {
      return CollisionDetection.checkCircleCollision(other, this);
    }
  
    get leftEdge() {
      return this.x;
    }
  
    set leftEdge(value) {
      this.x = value;
    }
  
    get rightEdge() {
      return this.x + this.radius * 2;
    }
  
    set rightEdge(value) {
      this.x = value - this.radius * 2;
    }
  
    get topEdge() {
      return this.y;
    }
  
    set topEdge(value) {
      this.y = value;
    }
  
    get bottomEdge() {
      return this.y + this.radius * 2;
    }
  
    set bottomEdge(value) {
      this.y = value - this.radius * 2;
    }
  
    get center() {
      return new Vector(this.x + this.radius, this.y + this.radius);
    }
  }