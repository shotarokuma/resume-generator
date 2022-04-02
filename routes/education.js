const router = require('express').Router();
const {
  postEducation,
  getEducations,
} = require('../controllers/educationControllers');
const validate = require('../vlidators');

router.get('/:id',getEducations);

router.use(validate.educationFormValidator);

router.post('/:id',postEducation);

module.exports = router;