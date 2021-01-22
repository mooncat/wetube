"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// Global
var HOME = '/';
var JOIN = '/join';
var LOGIN = '/login';
var LOGOUT = '/logout';
var SEARCH = '/search'; // Users

var USERS = '/users';
var USER_DETAIL = '/:id';
var EDIT_PROFILE = '/edit-profile';
var CHANGE_PASSWORD = '/change-password'; // Videos

var VIDEOS = '/videos';
var UPLOAD = '/upload';
var VIDEO_DETAIL = '/:id';
var EDIT_VIDEO = '/:id/edit';
var DELETE_VIDEO = '/:id/delete';
var routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: function userDetail(id) {
    if (id) {
      return "/users/".concat(id);
    }

    return USER_DETAIL;
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: function videoDetail(id) {
    if (id) {
      return "/videos/".concat(id);
    }

    return VIDEO_DETAIL;
  },
  editVideo: function editVideo(id) {
    if (id) {
      return "/videos/".concat(id, "/edit");
    }

    return EDIT_VIDEO;
  },
  // deleteVideo: DELETE_VIDEO
  deleteVideo: function deleteVideo(id) {
    if (id) {
      return "/videos/".concat(id, "/delete");
    }

    return DELETE_VIDEO;
  }
};
var _default = routes;
exports["default"] = _default;
//# sourceMappingURL=routes.dev.js.map
