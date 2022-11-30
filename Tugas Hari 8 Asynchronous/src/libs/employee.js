class Employee {
  constructor(name, password, role) {
    this._name = name;
    this._password = password;
    this._role = role;
    this._isLogin = false;
  }
  get name() {
    return this._name;
  }
  set name(strName) {
    this._name = strName;
  }

  get password() {
    return this._password;
  }

  set password(strPassword) {
    this._password = strPassword;
  }

  get role() {
    return this._role;
  }

  set role(strRole) {
    this._role = strRole;
  }

  get isLogin() {
    return this._isLogin;
  }

  set isLogin(strIsLogin) {
    this._isLogin = strIsLogin;
  }
}

export default Employee;
