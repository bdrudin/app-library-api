const Kelas = require("./kelas").default;

class Bootcamp {
  constructor(name) {
    this._name = name;
    this._classes = [];
  }

  get name() {
    return this._name;
  }

  get classes() {
    return this._classes;
  }

  createClass(kelas_name, level, instructor) {
    const kelas = new Kelas(kelas_name, level, instructor);
    this._classes.push(kelas);
  }

  register(kelas_name, student_name) {
    let findClass = this._classes.find(
      (classes) => classes.name === kelas_name
    );

    findClass.addStudent(student_name);
  }
}

export default Bootcamp;
