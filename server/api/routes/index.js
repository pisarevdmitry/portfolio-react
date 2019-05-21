var express = require('express');
var router = express.Router();

var multer  = require('multer');
var upload= multer({ dest:"public/assets/images/upload" });

const ctrlBlog = require('../controllers/blog');
const ctrlSkills = require('../controllers/skills');
const ctrlWork = require('../controllers/work');
const ctrlUser = require('../controllers/user');
const checkAuth = require('../../middlewares/checkAuth')


router.get('/blog', ctrlBlog.getArticles);
router.post('/blog',checkAuth, ctrlBlog.createArticle);
router.get('/skills', ctrlSkills.getSkills);
router.post('/skills',checkAuth, ctrlSkills.createSkill);
router.put('/skills',checkAuth, ctrlSkills.updateSkills);
router.delete('/skills/:id',checkAuth, ctrlSkills.deleteSkill);
router.get('/work', ctrlWork.getWork);
router.post('/work', checkAuth, upload.single("file"), ctrlWork.createWork);
router.post('/contacts',checkAuth, ctrlWork.sendEmail);
router.post('/auth', ctrlUser.Auth);


module.exports = router;