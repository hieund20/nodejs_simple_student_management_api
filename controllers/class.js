import { v4 as uuidv4 } from "uuid";
import { connection } from "../db/dbUtils.js";

export const getAllClass = (req, res) => {
  const sql = `SELECT class.*, count(student.id)  as 'student_count'
      FROM class, student 
      WHERE class.id = student.classId
      GROUP BY class.id`;
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
    }
    res.send(resultQuery);
  });
};

export const createClass = (req, res) => {
  const newClass = req.body;
  const newClassWithId = { ...newClass, id: uuidv4() };
  let resultQuery = {
    status: "",
    message: "",
  };
  const sql = `INSERT INTO class(id, code, className) VALUES ("${newClassWithId?.id}", "${newClassWithId?.code}", "${newClassWithId?.className}")`;
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

export const getClassById = (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM class WHERE id="${id}"`;
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

export const deleteClass = (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM class WHERE id="${id}"`;
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

export const updateClass = (req, res) => {
  const { id } = req.params;
  const { code, className } = req.body;
  const sql = `UPDATE class SET code="${code}", className="${className}" WHERE id="${id}"`;
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
