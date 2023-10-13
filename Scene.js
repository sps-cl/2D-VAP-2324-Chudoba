class Scene {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.canvas = document.createElement("canvas");
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      document.body.appendChild(this.canvas);
      this.context = this.canvas.getContext("2d");
    }
  
    draw(...drawables) {
      for (const drawable of drawables) {
        drawable.draw(this.context);
      }
    }
}