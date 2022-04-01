const User = require('../models/User');

const postUser = (req, res) => {
  let newUser = new User({
    name: req.body.name,
    passward: req.body.passward,
    email: req.body.email,
    tel: req.body.tel,
    education: [],
    experience: [],
  });
  newUser.save()
    .then(result => {
      res.set('content-location', `/api/users/${newUser._id}`);
      res.status(201).json({
        data: newUser,
        url: `/api/users/${newUser._id}`
      });
    })
    .catch(error => res.status(500).send(error));
};


const getUser = (req, res) => {
  User.find({ '_id': req.params.id }).exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => res.status(500).send(error));
};

const patchUser = (req, res) => {
  User.find({ '_id': req.params.id }).exec()
    .then(result => {
      let renewUser = {
        name: req.body.name,
        passward: req.body.passward,
        email: req.body.email,
        tel: req.body.tel,
        education: [],
        experience: [],
      };
      result.data = renewUser;
      renewUser.save()
        .then(result => {
          res.set('content-location', `/api/users/${req.params.id}`);
          res.status(201).json({
            data: renewUser,
            url: `/api/users/${req.params.id}`
          });
        })
        .catch(error => res.status(500).send(error));
    })

    .catch(error => res.status(500).send(error));
  };


module.exports = {
  getUser,
  postUser,
  patchUser,
};