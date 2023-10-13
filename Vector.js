class Vector {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    add(other) {
        this.x += other.x;
        this.y += other.y;
    }

    subtract(other) {
        this.x += other.x;
        this.y += other.y;
    }

    sum(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    difference(other){
        return new Vector(this.x - other.x, this.y - other.y);
    }

    get squareSize(){
        return this.x * other.x, this.y * other.y;
    }
}