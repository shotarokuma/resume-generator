const User = require('../models/User');
const Experience = require('../models/Experience');

const postExperience = (req, res) => {
  User.findOne({ '_id': req.params.id }).exec()
    .then((user) => {
      let newExperience = new Experience(req.body);
      newExperience.save()
        .then(() => {
          user.experience.push(newExperience);
          user.save()
            .then(() => {
              res.set('content-location', `/api/exprience/${newExperience._id}`);
              res.status(201).json({
                data: newExperience,
                url: `/api/educations/${newExperience._id}`
              });
            })
            .catch(error => res.status(500).send(error));
        })
    })
    .catch(error => res.status(500).send(error))
};

const getExperiences = (req, res) => {
  User.findOne({ '_id': req.params.id }).exec()
  .then((user) =>{
    res.status(200).json({
      experience: user.experience
    });
  })
  .catch((error) => res.status(200).send(error))
};

module.exports = {
  postExperience,
  getExperiences
};