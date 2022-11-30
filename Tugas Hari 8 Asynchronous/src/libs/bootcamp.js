import fs from "fs";
import fsPromises from "fs/promises";
import Employee from "./employee";

const path = "data.json";

class Bootcamp {
  // register method
  static register(input) {
    let [username, passwd, role] = input.split(",");

    // check data
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
      }

      let existingData = JSON.parse(data);

      const userValidation = existingData.find(
        ({ _name }) => _name === username
      );

      let employee = new Employee(username, passwd, role);

      // create user validation
      if (!userValidation) {
        if (employee._role === "trainer") {
          employee._students = [];
        }

        existingData.push(employee);

        fs.writeFile(path, JSON.stringify(existingData), (err) => {
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
  static login(input) {
    let [username, passwd] = input.split(",");

    try {
      fsPromises.readFile(path).then((data) => {
        let employees = JSON.parse(data);

        const findUser = employees.find(({ _name }) => _name === username);

        if (!findUser) {
          console.log("Data tidak ditemukan");
        } else if (findUser._password !== passwd) {
          console.log("Password yang dimasukan salah");
        } else {
          findUser._isLogin = true;

          console.log("Berhasil Login");

          return fsPromises.writeFile(path, JSON.stringify(employees));
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  // add siswa method
  static addSiswa(input) {
    let [studentName, trainerName] = input.split(",");

    try {
      fsPromises.readFile(path).then((data) => {
        const user = JSON.parse(data);

        const isAdmin = user.find(
          ({ _isLogin, _role }) => _isLogin === true && _role === "admin"
        );

        const isTrainer = user.find(
          ({ _role, _name }) => _role === "trainer" && _name === trainerName
        );

        if (!isAdmin) {
          console.log("Silahkan login admin!");
        } else {
          const student = {
            name: studentName,
          };
          if (!isTrainer) {
            console.log("Trainer tidak ditemukan");
          } else {
            isTrainer._students.push(student);
            console.log("Berhasil add siswa");
          }
          return fsPromises.writeFile(path, JSON.stringify(user));
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  // login method
  static login(input) {
    let [username, passwd] = input.split(",");

    try {
      fsPromises.readFile(path).then((data) => {
        let employees = JSON.parse(data);

        const findUser = employees.find(({ _name }) => _name === username);

        if (!findUser) {
          console.log("Data tidak ditemukan");
        } else if (findUser._password !== passwd) {
          console.log("Password yang dimasukan salah");
        } else {
          findUser._isLogin = true;

          console.log("Berhasil Login");

          return fsPromises.writeFile(path, JSON.stringify(employees));
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default Bootcamp;
