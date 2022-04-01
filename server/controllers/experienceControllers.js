const User = require('../models/User');
const Experience = require('../models/Experience');

const postExperience = (req, res) => {
  User.findOne({'_id':req.params.id}).exec((e, user) => {
    if(e||user) {
        res.status(500).send("User is not found");
      }else{
        let newExperience = new Experience(req.body);
        newExperience.save()
        .then(result => {
          user.experience.push(newExperience._id);
          res.set('content-location', `/api/exprience/${newExperience._id}`);
          res.status(201).json({
            data: newExperience,
            url: `/api/educations/${newExperience._id}`
          });
        })
        .catch(error => res.status(500).send(error));
      }
  });
};

const getExperiences = (req, res) =>{
  User.findOne({'_id':req.params.id}).exec((e, user) => {
    if(e||user) {
        res.status(500).send("User is not found");
      }else{
        res.status(200).json(user.experience);
      }
  })
};

module.exports = {
  postExperience,
  getExperiences
};