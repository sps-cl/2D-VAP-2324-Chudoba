class Positionable {
    constructor(position) {
      this.position = position;
    }
  
    get x() {
      return this.position.x;
    }
  
    set x(value) {
      this.position.x = value;
    }
  
    get y() {
      return this.position.y;
    }
  
    set y(value) {
      this.position.y = value;
    }
  }