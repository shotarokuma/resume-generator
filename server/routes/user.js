const router = require('express').Router();
const {
  getUser,
  postUser,
  loginUser
} = require('../controllers/userControllers')

router.get('/:id',getUser);
router.post('/',postUser);
router.post('/login', loginUser);

module.exports = router;