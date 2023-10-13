const scene = new Scene(1000, 700);
const background = new Background(scene.width, scene.height);
scene.draw(background);

let circle1 = new CircleCollider(new Vector(0, 0), 50);
let circle2 = new CircleCollider(new Vector(50, 50), 70);
let rect1 = new RectCollider(new Vector(110, 110), 50, 100);
let rect2 = new RectCollider(new Vector(150, 150), 100, 50);
console.log(circle1.collideWith(circle2));
console.log(rect1.collideWith(rect2));
console.log(circle2.collideWith(rect1));
console.log(rect1.collideWith(circle1));