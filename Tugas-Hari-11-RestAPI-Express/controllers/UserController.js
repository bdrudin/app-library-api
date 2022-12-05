const e = require("express");
const fs = require("fs");
const fsPromises = require("fs/promises");
const { use } = require("../routes");

const path = "data.json";

class UserController {
  static register(req, res) {
    fs.readFile(path, (err, data) => {
      if (err) {
        res.status(400).json({
          error: "Error membaca data",
        });
      } else {
        let existingData = JSON.parse(data);

        let { users } = existingData;
        let { name, role, password } = req.body;

        let newUser = { name, password, role, isLogin: false };

        if (role === "trainer") {
          newUser.students = [];
        }

        users.push(newUser);
        let newData = { ...existingData, users };

        fs.writeFile(path, JSON.stringify(newData), (err) => {
          if (err) {
            res.status(400).json({
              error: "Error menyimpan data",
            });
          } else {
            res.status(201).json({ message: "Berhasil Register" });
          }
        });
      }
    });
  }

  static getAllDataKaryawan(req, res) {
    fs.readFile(path, (err, data) => {
      if (err) {
        res.status(400).json({
          error: "Error membaca data",
        });
      } else {
        let realData = JSON.parse(data);
        res.status(200).json({
          message: "Berhasil get data karyawan",
          data: realData.users,
        });
      }
    });
  }

  static login(req, res) {
    fsPromises
      .readFile(path)
      .then((data) => {
        let employees = JSON.parse(data);

        let { users } = employees;

        let { name, password } = req.body;

        let indexEmp = users.findIndex((user) => user.name == name);

        if (indexEmp == -1) {
          res.status(404).json({ error: "Data users tidak ditemukan" });
        } else {
          let employee = users[indexEmp];
          if (employee.password === password) {
            employee.isLogin = true;
            users.splice(indexEmp, 1, employee);
            return fsPromises.writeFile(path, JSON.stringify(employees));
          } else {
            res.status(400).json({
              errors: "Password yang dimasukan salah",
            });
          }
        }
      })
      .then(() => {
        res.status(200).json({ message: "Login berhasil" });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static addSiswa(req, res) {
    fsPromises
      .readFile(path)
      .then((data) => {
        let employees = JSON.parse(data);

        let { users } = employees;

        let { name, classes } = req.body;

        const isAdmin = users.find(
          ({ role, isLogin }) => role === "admin" && isLogin === true
        );

        const isTrainer = users.find(
          ({ role, name }) =>
            role === "trainer" &&
            name.toLowerCase() === req.params.name.toLowerCase()
        );

        if (!isAdmin) {
          res.status(404).json({ error: "Anda bukanlah admin" });
        } else {
          const student = { name, classes };
          if (!isTrainer) {
            console.log(req.params);
            res.status(404).json({ error: "Trainer tidak ditemukan" });
          } else {
            isTrainer.students.push(student);
            res.status(201).json({ message: "Berhasil add siswa" });
          }
          return fsPromises.writeFile(path, JSON.stringify(employees));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = UserController;
