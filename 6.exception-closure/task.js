function parseCount(value) {
  if(+value) {
    return Number.parseFloat(value)
  } else {throw new Error("Невалидное значение")}
}
function validateCount(arg) {
  try {
    return parseCount(arg);
  }
  catch (error) {
    return error
  }  
}
class Triangle {
  constructor(a, b, c) {
    this.sideOne = a;
    this.sideTwo = b;
    this.sideThree = c;
    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  get perimeter () {
    return this.sideOne + this.sideTwo + this.sideThree;
  }
  get area () {
    let a = this.sideOne, b = this.sideTwo, c = this.sideThree, p = this.perimeter/2;
    return +((p * (p - a) * (p - b) * (p - c))**0.5).toFixed(3);
  }
}
function getTriangle (sideOne, sideTwo, sideThree) {
  try {
    return new Triangle (sideOne, sideTwo, sideThree);
  } catch {
    return {
      get perimeter () {
        return "Ошибка! Треугольник не существует";
      },
      get area () {
        return "Ошибка! Треугольник не существует";
      }
    }
  }
}