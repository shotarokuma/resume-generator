const User = require('../models/User');
const Education = require('../models/Education')

const postEducation = (req, res) => {
  User.findOne({'_id':req.params.id}).exec((e, user) => {
    if(e||user) {
        res.status(500).send("User is not found");
      }else{
        let newEducation = new Education(req.body);
        newEducation.save()
        .then(result => {
          user.education.push(newEducation._id);
          res.set('content-location', `/api/educations/${newEducation._id}`);
          res.status(201).json({
            data: newEducation,
            url: `/api/educations/${newEducation._id}`
          });
        })
        .catch(error => res.status(500).send(error));
      }
  });
};

const getEducations = (req, res) =>{
  User.findOne({'_id':req.params.id}).exec((e, user) => {
    if(e||user) {
        res.status(500).send("User is not found");
      }else{
        res.status(200).json(user.education);
      }
  })
};

module.exports = {
  postEducation,
  getEducations,
};