const router = require('express').Router();
const {
  getUser,
  postUser,
  patchUser,
} = require('../controllers/userControllers')

router.get('/:id',getUser);
router.post('/',postUser);
router.patch('/:id',patchUser);

module.exports = router;