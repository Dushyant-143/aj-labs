// Base class Shape
class Shape {
    constructor(name) {
        this.name = name;
    }
}

// Circle subclass
class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Rectangle subclass
class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

// RightTriangle subclass
class RightTriangle extends Shape {
    constructor(base, height) {
        super("RightTriangle");
        this.base = base;
        this.height = height;
    }

    area() {
        return 0.5 * this.base * this.height;
    }

    perimeter() {
        const hypotenuse = Math.sqrt(this.base ** 2 + this.height ** 2);
        return this.base + this.height + hypotenuse;
    }
}

// Create and test shapes
const c = new Circle(5);
console.log("Circle - Area:", c.area(), "Perimeter:", c.perimeter());

const r = new Rectangle(10, 5);
console.log("Rectangle - Area:", r.area(), "Perimeter:", r.perimeter());

const t = new RightTriangle(3, 4);
console.log("Right Triangle - Area:", t.area(), "Perimeter:", t.perimeter());