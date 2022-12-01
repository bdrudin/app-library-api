"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _promises = _interopRequireDefault(require("fs/promises"));
var _employee = _interopRequireDefault(require("./employee"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var path = "data.json";
var Bootcamp = /*#__PURE__*/function () {
  function Bootcamp() {
    _classCallCheck(this, Bootcamp);
  }
  _createClass(Bootcamp, null, [{
    key: "register",
    value:
    // register method
    function register(input) {
      var _input$split = input.split(","),
        _input$split2 = _slicedToArray(_input$split, 3),
        username = _input$split2[0],
        passwd = _input$split2[1],
        role = _input$split2[2];

      // check data
      _fs["default"].readFile(path, function (err, data) {
        if (err) {
          console.log(err);
        }
        var existingData = JSON.parse(data);
        var employee = new _employee["default"](username, passwd, role);

        // user validation
        var userValidation = existingData.find(function (_ref) {
          var _name = _ref._name;
          return _name === username;
        });
        if (!userValidation) {
          if (employee._role === "trainer") {
            employee._students = [];
          }

          // save to data.json
          existingData.push(employee);
          _fs["default"].writeFile(path, JSON.stringify(existingData), function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log("Berhasil register");
            }
          });
        } else {
          console.log("Username telah terdaftar!");
        }
      });
    }
    // login method
  }, {
    key: "login",
    value: function login(input) {
      var _input$split3 = input.split(","),
        _input$split4 = _slicedToArray(_input$split3, 2),
        username = _input$split4[0],
        passwd = _input$split4[1];
      try {
        _promises["default"].readFile(path).then(function (data) {
          var employees = JSON.parse(data);

          // login validation
          var findUser = employees.find(function (_ref2) {
            var _name = _ref2._name;
            return _name === username;
          });
          var isLogin = employees.find(function (_ref3) {
            var _name = _ref3._name,
              _isLogin = _ref3._isLogin;
            return _name === username && _isLogin === true;
          });
          if (!findUser) {
            console.log("Data tidak ditemukan");
          } else if (findUser._password !== passwd) {
            console.log("Password yang dimasukan salah");
          } else if (isLogin) {
            console.log("Anda sudah melakukan login");
          } else {
            findUser._isLogin = true;
            console.log("Berhasil Login");
            return _promises["default"].writeFile(path, JSON.stringify(employees));
          }
        });
      } catch (err) {
        console.log(err);
      }
    }

    // add siswa method
  }, {
    key: "addSiswa",
    value: function addSiswa(input) {
      var _input$split5 = input.split(","),
        _input$split6 = _slicedToArray(_input$split5, 2),
        studentName = _input$split6[0],
        trainerName = _input$split6[1];
      try {
        _promises["default"].readFile(path).then(function (data) {
          var user = JSON.parse(data);

          // login validation
          var isLogin = user.find(function (_ref4) {
            var _isLogin = _ref4._isLogin;
            return _isLogin === true;
          });

          // admin validation
          var isAdmin = user.find(function (_ref5) {
            var _role = _ref5._role,
              _isLogin = _ref5._isLogin;
            return _role === "admin" && _isLogin === true;
          });

          // trainer validation
          var isTrainer = user.find(function (_ref6) {
            var _role = _ref6._role,
              _name = _ref6._name;
            return _role === "trainer" && _name === trainerName;
          });
          if (!isLogin) {
            console.log("Silahkan melakukan login");
          } else if (!isAdmin) {
            console.log("Anda bukan lah admin");
          } else {
            var student = {
              name: studentName
            };
            if (!isTrainer) {
              console.log("Trainer tidak ditemukan");
            } else {
              isTrainer._students.push(student);
              console.log("Berhasil add siswa");
            }
            return _promises["default"].writeFile(path, JSON.stringify(user));
          }
        });
      } catch (error) {
        console.log(error);
      }
    }

    // logout method
  }, {
    key: "logout",
    value: function logout(input) {
      var _input$split7 = input.split(","),
        _input$split8 = _slicedToArray(_input$split7, 2),
        username = _input$split8[0],
        passwd = _input$split8[1];
      try {
        _promises["default"].readFile(path).then(function (data) {
          var employees = JSON.parse(data);

          // login validation
          var findUser = employees.find(function (_ref7) {
            var _name = _ref7._name;
            return _name === username;
          });
          var isLogin = employees.find(function (_ref8) {
            var _name = _ref8._name,
              _isLogin = _ref8._isLogin;
            return _name === username && _isLogin === true;
          });
          if (!findUser) {
            console.log("Data tidak ditemukan");
          } else if (findUser._password !== passwd) {
            console.log("Password yang dimasukan salah");
          } else if (!isLogin) {
            console.log("Anda belum melakukan login");
          } else {
            findUser._isLogin = false;
            console.log("Berhasil logout");
            return _promises["default"].writeFile(path, JSON.stringify(employees));
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }]);
  return Bootcamp;
}();
var _default = Bootcamp;
exports["default"] = _default;