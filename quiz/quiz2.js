// const data = {
//   name: "Bondra",
//   nilai: 70,
//   kelas: "Adonis",
//   isLogin: true,
// };

// const updateData = (update) => {
//   const result = { ...data };
//   const key = Object.getOwnPropertyNames(update);

//   for (let i = 0; i < key.length; i++) {
//     const updatedKey = key[i];
//     const updatedValues = update[updatedKey];
//     result[updatedKey] = updatedValues;
//   }

//   return result;
// };

// // TEST CASES
// console.log(updateData({ isLogin: false }));
// // Output : { name: 'Bondra', nilai: 70, kelas: 'Adonis', isLogin: false }

// console.log(updateData({ nilai: 65, kelas: "Laravel" }));
// // Output: { name: 'Bondra', nilai: 65, kelas: 'Laravel', isLogin: true }

// class OlahString {
//   static palindrome(str) {
//     const letter = "abcdefghijklmnopqrstuvwxyz".split("");
//     let oldStr = str.toLowerCase().split("");
//     let newStr = [];

//     oldStr.forEach((string) => {
//       if (letter.indexOf(string) > -1) newStr.push(string);
//     });

//     const result = newStr.join("") === newStr.reverse().join("");

//     console.log(result);
//   }

//   static ubahKapital(str) {
//     const oldStr = str.split(" ");

//     for (let i = 0; i < oldStr.length; i++) {
//       oldStr[i] = oldStr[i].charAt(0).toUpperCase() + oldStr[i].slice(1);
//     }

//     const str2 = oldStr.join(" ");
//     console.log(str2);
//   }
// }

// OlahString.palindrome("katak"); // Output: true

// OlahString.palindrome("sanbers"); // Output: false

// OlahString.ubahKapital("asep"); // Output : Asep

// OlahString.ubahKapital("abduh"); // Output: Abduh1
// OlahString.ubahKapital("sultan iskandar muda");
// OlahString.ubahKapital("tuanku imam bonjol");

// Tulislah sintaks SQL untuk membuat tabel-tabel berikut:

// table customers ( id integer auto increment primary key, name varchar(255), email varchar 255),
// password varchar(255);
// table orders (id integer auto increment primary key, amount integer,
//     customer_id integer foreign key references id on customers).

// CREATE TABLE customers (
//     id int AUTO_INCREMENT,
//     name varchar(255),
//     email varchar(255),
//     password varchar(255),
//     PRIMARY KEY (id)
// );
// CREATE TABLE orders (
//     id int AUTO_INCREMENT,
//     amount int,
//     customer_id int,
//     PRIMARY KEY (id),
//     FOREIGN KEY (customer_id) REFERENCES customers(id)
// );
// INSERT INTO customers (name, email, password)
// VALUES ("John Doe",	"john@doe.com",	"john123"),("Jane Doe", "jane@doe.com", "jenita123");

// INSERT INTO orders (amount, customer_id)
// VALUES (500, 1),(200, 2),(750, 2),(250, 1),(400, 2);

// SELECT customers.name AS customer_name, SUM(orders.amount) AS total_amount FROM customers
// INNER JOIN orders ON orders.customer_id = customers.id
// GROUP BY(customers.id);
