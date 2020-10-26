// 객체 지향 프로그래밍
// class: template
// object: instance of a class

// JS classes
// introduced in ES6

// 1. Class decalrations
class Person {
  // constructor, 생성자
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: Hello!`);
  }
}

const haneul = new Person("Haneul", 26);
console.log(haneul.name);
console.log(haneul.age);
haneul.speak();

// 2. Getter and Setter
class User {
  constructor(name, age) {
    this.name = name;
    // get을 정의하면 this.age는 get을 호출하게 된다.
    // set을 정의하면 = age는(값을 할당할 때) set을 호출하게 된다.
    // 그래서 무한 콜스택을 방지하기 위해 변수명을 다르게 설정한다.
    this.age = age;
  }
  // get을 이용해서 값을 리턴하고,
  get age() {
    return this._age;
  }

  // set을 이용해서 값을 설정할 수 있다.
  // 값을 설정하기 때문에 값을 받아와야 한다.
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const john = new User("John", -1);
console.log(john.age);

// 3. Fields (public, private)
// 매우 최근에 추가된 개념

// 4. Static properties and methods
// 오브젝트와 상관없이 쓰이는 클래스 고유의 속성
class Article {
  static publisher = "Lazy Sky";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
console.log(article1.publisher); // undefined
console.log(Article.publisher);
Article.printPublisher();
// article1.printPublisher(); // error

// 5. Inheritance
// a way for one clss to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // overriding
  draw() {
    // 부모 속성 그대로 받아오기
    super.draw();
    console.log("이건 삼각형만의 새로운 특성");
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle1 = new Rectangle(20, 20, "red");
const triangle1 = new Triangle(20, 20, "blue");
rectangle1.draw();
console.log(rectangle1.getArea()); // 400
console.log(triangle1.getArea()); // 200
triangle1.draw();

// 6. Class checking: instanceOf
console.log(rectangle1 instanceof Rectangle); // true
console.log(rectangle1 instanceof Shape); // true
console.log(rectangle1 instanceof Triangle); // false
// 모든 오브젝트는 기본적으로 자바스크립트 오브젝트를 상속한 것이다.
// 따라서 오브젝트 안에서 정의된 기본적 메쏘드를 사용하거나 오버라이딩할 수 있다.
console.log(rectangle1 instanceof Object); // true
