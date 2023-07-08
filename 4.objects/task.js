function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

new Student("Гуреке", "мужской", 49);
new Student("Нитаа-Пат", "женский", 20)

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  this.marks && (this.marks = [...marksToAdd]);
}

Student.prototype.getAverage = function () {
    return this.marks && +(this.marks.reduce((acc,item) => acc + item, 0)/this.marks.length).toFixed(2) || 0;
  }

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

