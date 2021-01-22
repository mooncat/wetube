"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteVideo = exports.postEditVideo = exports.getEditVideo = exports.videoDetail = exports.postUpload = exports.getUpload = exports.search = exports.home = void 0;

var _routes = _interopRequireDefault(require("../routers/routes"));

var _Video = _interopRequireDefault(require("../models/Video"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// home
var home = function home(req, res) {
  var videos;
  return regeneratorRuntime.async(function home$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_Video["default"].find({}));

        case 3:
          videos = _context.sent;
          res.render('home', {
            pageTitle: 'Home',
            videos: videos
          });
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.render('home', {
            pageTitle: 'Home',
            videos: []
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // search


exports.home = home;

var search = function search(req, res) {
  var searchingBy, videos;
  return regeneratorRuntime.async(function search$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          searchingBy = req.query.term;
          videos = [];
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(_Video["default"].find({
            title: {
              $regex: searchingBy,
              $options: 'i'
            }
          }));

        case 5:
          videos = _context2.sent;
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          console.log(_context2.t0);

        case 11:
          res.render('search', {
            pageTitle: 'Search',
            searchingBy: searchingBy,
            videos: videos
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 8]]);
};

exports.search = search;

var getUpload = function getUpload(req, res) {
  return res.render('upload', {
    pageTitle: 'Upload'
  });
};

exports.getUpload = getUpload;

var postUpload = function postUpload(req, res) {
  var _req$body, title, description, path, newVideo;

  return regeneratorRuntime.async(function postUpload$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, title = _req$body.title, description = _req$body.description, path = req.file.path;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Video["default"].create({
            fileUrl: path,
            title: title,
            description: description
          }));

        case 3:
          newVideo = _context3.sent;
          // res.render("upload", {pageTitle: "Upload"});
          res.redirect(_routes["default"].videoDetail(newVideo.id));

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.postUpload = postUpload;

var videoDetail = function videoDetail(req, res) {
  var id, video;
  return regeneratorRuntime.async(function videoDetail$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_Video["default"].findById(id));

        case 4:
          video = _context4.sent;
          res.render('videoDetail', {
            pageTitle: 'Video Detail',
            video: video
          });
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          res.redirect(_routes["default"].home);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.videoDetail = videoDetail;

var getEditVideo = function getEditVideo(req, res) {
  var id, video;
  return regeneratorRuntime.async(function getEditVideo$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_Video["default"].findById(id));

        case 4:
          video = _context5.sent;
          res.render('editVideo', {
            pageTitle: "Edit ".concat(video.title),
            video: video
          });
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          res.redirect(_routes["default"].home);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.getEditVideo = getEditVideo;

var postEditVideo = function postEditVideo(req, res) {
  var id, _req$body2, title, description;

  return regeneratorRuntime.async(function postEditVideo$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id, _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description;
          _context6.prev = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(_Video["default"].findOneAndUpdate({
            _id: id
          }, {
            title: title,
            description: description
          }));

        case 4:
          _context6.next = 9;
          break;

        case 6:
          _context6.prev = 6;
          _context6.t0 = _context6["catch"](1);
          res.redirect(_routes["default"].home);

        case 9:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 6]]);
};

exports.postEditVideo = postEditVideo;

var deleteVideo = function deleteVideo(req, res) {
  var id;
  return regeneratorRuntime.async(function deleteVideo$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _context7.prev = 1;
          _context7.next = 4;
          return regeneratorRuntime.awrap(_Video["default"].findOneAndRemove({
            _id: id
          }));

        case 4:
          res.redirect(_routes["default"].home);
          _context7.next = 11;
          break;

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](1);
          console.error(_context7.t0);
          res.redirect(_routes["default"].home);

        case 11:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.deleteVideo = deleteVideo;
//# sourceMappingURL=videoController.dev.js.map
