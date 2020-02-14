var express = require('express');
var router = express.Router();

// Require controller modules.
var modelsController = require('../controllers/models');
var modelsStudentController =  require('../controllers/student');

// api Test
router.get('/test', modelsController.modelsTest);

//models/selListModlNm
router.get('/selListModlNm', modelsController.selListModlNm);

//models/selListModlDtl/:id
router.get('/selListModlDtl/:id', modelsController.selListModlDtl);

//models/post
router.post('/post', modelsController.createModels);

//models/updModlDtl
router.delete('/updModlDtl', modelsController.updModlDtl);

//models/updModlDtl
router.put('/updModlDtl', modelsController.updModlDtl);

//models/updModlDtl
router.post('/updModlDtl', modelsController.updModlDtl);

//models/insertStudent
router.post('/insertStudent',modelsStudentController.createModels)
//models/getAllStudent
router.get('/getListStudent',modelsStudentController.getListStudent)

//models/getAllStudentById
router.get('/getAllStudentById/:id',modelsStudentController.getListStudentDtl)
//models/deleteStudent
router.delete('/deleteStudent/:id',modelsStudentController.deleteStudent)
//models/updateStudent
router.put('/updateStudent/:id',modelsStudentController.updateStudent)
module.exports = router;




