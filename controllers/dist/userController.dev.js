"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePassword = exports.userDetail = exports.logout = exports.postLogin = exports.getLogin = exports.postJoin = exports.getJoin = exports.editProfile = exports.users = void 0;

var _routes = _interopRequireDefault(require("../routers/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var users = function users(req, res) {
  return res.render('users', {
    pageTitle: 'Users'
  });
};

exports.users = users;

var editProfile = function editProfile(req, res) {
  return res.render('editProfile', {
    pageTitle: 'Edit Profile'
  });
};

exports.editProfile = editProfile;

var getJoin = function getJoin(req, res) {
  res.render('join', {
    pageTitle: 'Join'
  });
};

exports.getJoin = getJoin;

var postJoin = function postJoin(req, res) {
  var _req$body = req.body,
      password = _req$body.password,
      password2 = _req$body.password2;

  if (password !== password2) {
    res.status(400);
    res.render('join', {
      pageTitle: 'Join'
    });
  } else {
    // To Do: Register User
    // To Do: Log user in
    res.redirect(_routes["default"].home);
  }
};

exports.postJoin = postJoin;

var getLogin = function getLogin(req, res) {
  return res.render('login', {
    pageTitle: 'Login'
  });
};

exports.getLogin = getLogin;

var postLogin = function postLogin(req, res) {
  res.redirect(_routes["default"].home);
};

exports.postLogin = postLogin;

var logout = function logout(req, res) {
  // To Do: Process Log Out
  res.redirect(_routes["default"].home);
};

exports.logout = logout;

var userDetail = function userDetail(req, res) {
  return res.render('userDetail', {
    pageTitle: 'User Detail'
  });
};

exports.userDetail = userDetail;

var changePassword = function changePassword(req, res) {
  return res.render('changePassword', {
    pageTitle: 'Change Password'
  });
};

exports.changePassword = changePassword;
//# sourceMappingURL=userController.dev.js.map
