"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadVideo = exports.localsMiddleware = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _routes = _interopRequireDefault(require("./routers/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var multerVideo = (0, _multer["default"])({
  dest: "uploads/videos/"
});

var localsMiddleware = function localsMiddleware(req, res, next) {
  res.locals.siteName = "WeTube";
  res.locals.routes = _routes["default"];
  res.locals.user = {
    isAuthenticated: false,
    id: 1
  };
  next();
};

exports.localsMiddleware = localsMiddleware;
var uploadVideo = multerVideo.single("videoFile");
exports.uploadVideo = uploadVideo;
//# sourceMappingURL=middlewares.dev.js.map
