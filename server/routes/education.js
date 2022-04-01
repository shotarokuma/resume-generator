const router = require('express').Router();
const {
  postEducation,
  getEducations,
} = require('../controllers/educationControllers');

router.get('/:id',getEducations);
router.post('/:id',postEducation);

module.exports = router;