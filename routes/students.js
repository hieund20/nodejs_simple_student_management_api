import express from "express";
import {
  createStudent,
  getAllStudent,
  getStudentById,
  deleteStudent,
  updatedStudent,
} from "../controllers/students.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Student:
 *      type: object
 *      required:
 *        - firstName
 *        - lastName
 *        - age
 *        - classId
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated id of the student
 *        firstName:
 *          type: string
 *          description: The student first name
 *        lastName:
 *          type: string
 *          description: The student last name
 *        age:
 *          type: number
 *          description: The student age
 *        classId:
 *          type: string
 *          description: Class id of student
 *      example:
 *        id: 22ace041-6386-483c-82b6-9aba0fbbc61e
 *        firstName: John
 *        lastName: Doe
 *        age: 17
 *        classId: 5f744a89-54aa-4a89-a845-b84208cbb651
 */

/**
 * @swagger
 * tags:
 *   name: Student
 *   description: The student managing API
 */

/**
 * @swagger
 * /api/student:
 *  get:
 *    summary: Returns the list of all students
 *    tags: [Student]
 *    responses:
 *      200:
 *        description: The list of the students
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#components/schemas/Student'
 */

router.get("/", getAllStudent);

/**
 * @swagger
 * /api/student/{id}:
 *  get:
 *    summary: Get the student by Id
 *    tags: [Student]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The student id
 *    responses:
 *      200:
 *        description: The student by id
 *        contents:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/Student'
 *      404:
 *        description: The student was not found
 */

router.get("/:id", getStudentById);

/**
 * @swagger
 * /api/student:
 *  post:
 *    summary: Create the new student
 *    tags: [Student]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - firstName
 *              - lastName
 *              - age
 *              - classId
 *            properties:
 *              id:
 *                type: string
 *                description: The auto-generated id of the student
 *              firstName:
 *                type: string
 *                description: The student first name
 *              lastName:
 *                type: string
 *                description: The student last name
 *              age:
 *                type: number
 *                description: The student age
 *              classId:
 *                type: string
 *                description: Class id of student
 *            example:
 *              firstName: John
 *              lastName: Doe
 *              age: 17
 *              classId: 5f744a89-54aa-4a89-a845-b84208cbb651
 *    responses:
 *      200:
 *        description: The student was created success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/Student'
 *      500:
 *        description: Some server error
 */

router.post("/", createStudent);

/**
 * @swagger
 * /api/student/{id}:
 *  delete:
 *    summary: Remove the student by id
 *    tags: [Student]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The student id
 *    responses:
 *      200:
 *        description: The student was deleted
 *      404:
 *        description: The student was not found
 */

router.delete("/:id", deleteStudent);

/**
 * @swagger
 * /api/student/{id}:
 *  put:
 *    summary: Update the student by the id
 *    tags: [Student]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The student id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - firstName
 *              - lastName
 *              - age
 *              - classId
 *            properties:
 *              firstName:
 *                type: string
 *                description: The student first name
 *              lastName:
 *                type: string
 *                description: The student last name
 *              age:
 *                type: number
 *                description: The student age
 *              classId:
 *                type: string
 *                description: The student class id
 *            example:
 *              firstName: John
 *              lastName: Doe
 *              age: 17
 *              classId: 5f744a89-54aa-4a89-a845-b84208cbb651
 *    responses:
 *      200:
 *        description: The student was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Student'
 *      404:
 *        description: The student was not found
 *      500:
 *        description: Some error happened
 */

router.put("/:id", updatedStudent);

export default router;
