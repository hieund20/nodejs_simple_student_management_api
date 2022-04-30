import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Duchieu200301",
  database: "student_management",
  multipleStatements: true
});
