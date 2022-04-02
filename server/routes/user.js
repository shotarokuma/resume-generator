const router = require('express').Router();
const {
  getUser,
  postUser,
  loginUser
} = require('../controllers/userControllers');
const validate = require('../vlidators');

router.get('/:id',getUser);

router.use(validate.userFormValidator);

router.post('/',postUser);
router.post('/login', loginUser);

module.exports = router;