const jwt = require('jwt-simple');

const config = require('../config');
const User = require('../models/user');


const defaultEmail = config.defaultUser.email;
const defaultUserName = config.defaultUser.userName;

function sendResult(res, user) {
  return res.send({
    token: tokenForUser(user),
    user: user,
  });
}
function tokenForUser(user) {
  const timestamp = new Date().getTime();

  return jwt.encode({ iat: timestamp, sub: user._id }, config.secret);
}

exports.signin = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'Email and password are obligatory' });
  }

  // Default user
  if (email === defaultEmail) {
    const user = {
      _id: defaultEmail,
      email: defaultEmail,
      userName: defaultUserName,
    };

    return sendResult(res, user);
  }

  // See if a user with a given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return sendResult(res, existingUser);
    } else {
      return res.status(422).send({ error: 'User is not found' });
    }
  });
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const userName = req.body.userName || 'Ghost';

  if (!email || !password) {
    return res.status(422).send({ error: 'Email and password are obligatory' });
  }

  // See if a user with a given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }

    // If a user exists - return an Error
    if (existingUser || email === defaultEmail) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If a user does NOT exist - create and save record
    const user = new User({
      email: email,
      password: password,
      userName: userName,
    });

    user.save(function(err) {
      if (err) { return next(err); }

      res.json({
        token: tokenForUser(user),
        userName: userName,
      });
    });
  });
}
