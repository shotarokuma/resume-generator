const router = require('express').Router({mergeParams:true});


const UserRouter = require('./user');
const ExperienceRouter = require('./experience');
const EducationRouter = require('./education');


router.use('/users', UserRouter);
router.use('/experiences',ExperienceRouter);
router.use('/educations',EducationRouter);


module.exports = router;