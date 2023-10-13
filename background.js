class Background {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.image = document.getElementById("background");
    }
  
    draw(context) {
    context.drawImage(this.image, 0, 0, this.width, this.height);
    }
}