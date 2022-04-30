import express from "express";
import {
  createClass,
  getAllClass,
  getClassById,
  deleteClass,
  updateClass,
} from "../controllers/class.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Class:
 *      type: object
 *      required:
 *        - code
 *        - className
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated id of the class
 *        code:
 *          type: string
 *          description: The class code
 *        className:
 *          type: string
 *          description: The class name
 *      example:
 *        id: 5f744a89-54aa-4a89-a845-b84208cbb651
 *        code: DH19IT03
 *        className: IT93 Class
 */

/**
 * @swagger
 * tags:
 *   name: Class
 *   description: The class managing API
 */

/**
 * @swagger
 * /api/class:
 *  get:
 *    summary: Returns the list of all classes
 *    tags: [Class]
 *    responses:
 *      200:
 *        description: The list of the class
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#components/schemas/Class'
 */

router.get("/", getAllClass);

/**
 * @swagger
 * /api/class/{id}:
 *  get:
 *    summary: Get the class by Id
 *    tags: [Class]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The class id
 *    responses:
 *      200:
 *        description: The class by id
 *        contents:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/Class'
 *      404:
 *        description: The class was not found
 */

router.get("/:id", getClassById);

/**
 * @swagger
 * /api/class:
 *  post:
 *    summary: Create the new class
 *    tags: [Class]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - code
 *              - className
 *            properties:
 *              id:
 *                type: string
 *                description: The auto-generated id of the class
 *              code:
 *                type: string
 *                description: The class code
 *              className:
 *                type: string
 *                description: The class name
 *            example:
 *              code: DH19IT03
 *              className: IT93 Class
 *    responses:
 *      200:
 *        description: The class was created success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/Class'
 *      500:
 *        description: Some server error
 */

router.post("/", createClass);

/**
 * @swagger
 * /api/class/{id}:
 *  delete:
 *    summary: Remove the class by id
 *    tags: [Class]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The class id
 *    responses:
 *      200:
 *        description: The class was deleted
 *      404:
 *        description: The class was not found
 */

router.delete("/:id", deleteClass);

/**
 * @swagger
 * /api/class/{id}:
 *  put:
 *    summary: Update the class by the id
 *    tags: [Class]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The class id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - code
 *              - className
 *            properties:
 *              code:
 *                type: string
 *                description: The class code
 *              className:
 *                type: string
 *                description: The class name
 *            example:
 *              code: DH19IT03
 *              className: IT93 Class
 *    responses:
 *      200:
 *        description: The class was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Class'
 *      404:
 *        description: The class was not found
 *      500:
 *        description: Some error happened
 */

router.put("/:id", updateClass);

export default router;
