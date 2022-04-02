const User = require('../models/User');
const Education = require('../models/Education')

const postEducation = (req, res) => {
  if (res.local != null) {
    res.status(400).json({ validationErrors: res.local });
  } else {
    User.findOne({ '_id': req.params.id }).exec()
      .then((user) => {
        let newEducation = new Education(req.body);
        newEducation.save()
          .then(() => {
            user.education.push(newEducation);
            user.save()
              .then(() => {
                res.set('content-location', `/api/educations/${newEducation._id}`);
                res.status(201).json({
                  data: newEducation,
                  url: `/api/educations/${newEducation._id}`
                });
              })
              .catch(error => res.status(500).send(error));
          })
      })
      .catch(error => res.status(500).send(error))
  }
};

const getEducations = (req, res) => {
  User.findOne({ '_id': req.params.id }).exec()
    .then((user) => {
      res.status(200).json({
        education: user.education
      });
    })
    .catch((error) => res.status(200).send(error))
};

module.exports = {
  postEducation,
  getEducations,
};