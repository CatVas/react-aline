const passport = require('passport');

const Auth = require('./controllers/auth');
const Messages = require('./controllers/messages');
const passportService = require('./services/passport');


const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res, next) {
    res.send({ message: 'Super secret code is: 123' });
  });

  app.post('/sendMessage', Messages.sendMessage);

  app.post('/signin', requireSignin, Auth.signin);

  app.post('/signup', Auth.signup);
}
