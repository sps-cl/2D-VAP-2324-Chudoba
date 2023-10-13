class CollisionDetection {
    static checkRectCollision(rect1, rect2) {
      return (
        rect1.rightEdge > rect2.leftEdge &&
        rect2.rightEdge > rect1.leftEdge &&
        rect1.bottomEdge > rect2.topEdge &&
        rect2.bottomEdge > rect1.topEdge);
    }
  
    static checkCircleCollision(circle1, circle2) {
      let dist = circle1.center.difference(circle2.center);
      let radius = circle1.radius + circle2.radius;
      return dist.squareSize < radius * radius;
    }
  
    static checkRectCircleCollision(rect, circle) {
      let center = circle.center;
      let closePoint = new Vector(center.x, center.y);
      
      if (closePoint.x < rect.leftEdge) closePoint.x = rect.leftEdge;
      else if (closePoint.x > rect.rightEdge) closePoint.x = rect.rightEdge;
      if (closePoint.y < rect.topEdge) closePoint.y = rect.topEdge;
      else if (closePoint.y > rect.bottomEdge) closePoint.y = rect.bottomEdge;
      
      closePoint.subtract(center);
      return closePoint.squareSize < circle.radius * circle.radius;
    }
  }