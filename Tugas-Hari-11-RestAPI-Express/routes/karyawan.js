var express = require("express");
var router = express.Router();

//
const userController = require("../controllers/UserController");

/* GET users listing. */
router.post("/register", userController.register);
router.get("/karyawan", userController.getAllDataKaryawan);
router.post("/login", userController.login);
router.post("/karyawan/:name/siswa", userController.addSiswa);

module.exports = router;
