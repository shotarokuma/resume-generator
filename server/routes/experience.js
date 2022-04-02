const router = require('express').Router();
const {
  postExperience,
  getExperiences
} = require('../controllers/experienceControllers');
const validate = require('../vlidators');

router.get('/:id',getExperiences);

router.use(validate.experienceFormValidator);

router.post('/:id',postExperience);

module.exports = router;