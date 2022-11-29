class Kelas {
  constructor(name, level, instructor) {
    this._name = name;
    this._students = [];
    this._level = level;
    this._instructor = instructor;
  }

  get name() {
    return this._name;
  }

  get students() {
    return this._students;
  }

  get level() {
    return this._level;
  }

  get instructor() {
    return this._instructor;
  }

  addStudent(student) {
    this._students.push(student);
  }
}

export default Kelas;
