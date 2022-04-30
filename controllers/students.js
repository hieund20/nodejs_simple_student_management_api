import { v4 as uuidv4 } from "uuid";
import { connection } from "../db/dbUtils.js";

export const getAllStudent = (req, res) => {
  const sql = "SELECT * FROM student";
  let resultQuery = {
    responseData: { count: 0, rows: [] },
    status: "",
    message: "",
  };
  connection.query(sql, (err, result) => {
    if (err) {
      resultQuery = {
        ...resultQuery,
        status: "failed",
        message: "Thao tác thất bại",
      };
      connection.end();
      throw err;
    } else {
      resultQuery = {
        ...resultQuery,
        responseData: {
          count: result.length,
          rows: JSON.parse(JSON.stringify(result)),
        },
        status: "success",
        message: "Thao tác thành công",
      };
      console.log("Query success !", resultQuery);
    }
    res.send(resultQuery);
  });
};

export const createStudent = (req, res) => {
  try {
    const newStudent = req.body;
    const newStudentWithId = { ...newStudent, id: uuidv4() };
    let resultQuery = {
      status: "",
      message: "",
    };
    const sql = 
      `INSERT INTO student(id, firstName, lastName, age, classId) 
        VALUES ("${newStudentWithId?.id}", "${newStudentWithId?.firstName}", "${newStudentWithId?.lastName}", "${newStudentWithId?.age}", "${newStudentWithId?.classId}")`;
    connection.query(sql, (err, result) => {
      if (err) {
        resultQuery = {
          status: "failed",
          message: "Thao tác thất bại",
        };
        connection.end();
        throw err;
      } else {
        resultQuery = {
          status: "success",
          message: "Thao tác thành công",
        };
      }
      res.send(resultQuery);
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getStudentById = (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM student WHERE id="${id}"`;
  let resultQuery = {
    responseData: {},
    status: "",
    message: "",
  };
  connection.query(sql, (err, result) => {
    if (err) {
      resultQuery = {
        status: "failed",
        message: "Thao tác thất bại",
      };
      connection.end();
      throw err;
    } else {
      if (result.length === 0) {
        res.sendStatus(404);
        return;
      }
      resultQuery = {
        status: "success",
        message: "Thao tác thành công",
        responseData: JSON.parse(JSON.stringify(result)),
      };
    }
    res.send(resultQuery);
  });
};

export const deleteStudent = (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM student WHERE id="${id}"`;
  let resultQuery = {
    status: "",
    message: "",
  };
  connection.query(sql, (err, result) => {
    if (err) {
      resultQuery = {
        status: "failed",
        message: "Thao tác thất bại",
      };
      connection.end();
      throw err;
    } else {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
        return;
      }
      resultQuery = {
        status: "success",
        message: "Thao tác thành công",
      };
    }
    res.send(resultQuery);
  });
};

export const updatedStudent = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age, classId } = req.body;
  const sql = `UPDATE student SET firstName="${firstName}", lastName="${lastName}", age="${age}", classId="${classId}" WHERE id="${id}"`;
  let resultQuery = {
    status: "",
    message: "",
  };
  try {
    connection.query(sql, (err, result) => {
      if (err) {
        resultQuery = {
          status: "failed",
          message: "Thao tác thất bại",
        };
        connection.end();
        throw err;
      } else {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
          return;
        }
        resultQuery = {
          status: "success",
          message: "Thao tác thành công",
        };
      }
      res.send(resultQuery);
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
