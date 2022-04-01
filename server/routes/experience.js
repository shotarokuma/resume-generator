const router = require('express').Router();
const {
  postExperience,
  getExperiences
} = require('../controllers/experienceControllers');

router.get('/:id',getExperiences);
router.post('/:id',postExperience);

module.exports = router;