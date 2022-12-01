import Bootcamp from "./libs/bootcamp";

const args = process.argv.slice(2);
const command = args[0];
let input = args[1];

switch (command) {
  case "register":
    Bootcamp.register(input);
    break;
  case "login":
    Bootcamp.login(input);
    break;
  case "addSiswa":
    Bootcamp.addSiswa(input);
    break;
  case "logout":
    Bootcamp.logout(input);
    break;
  default:
    console.log(
      "command not found! \ntry again:\n--register\n--login\n--addSiswa"
    );
}
