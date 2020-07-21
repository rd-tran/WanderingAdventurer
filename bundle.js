/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/arrow.js":
/*!**********************!*\
  !*** ./src/arrow.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Arrow; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Arrow = /*#__PURE__*/function () {
  function Arrow(player, ctx, image) {
    _classCallCheck(this, Arrow);

    this.ctx = ctx;
    this.player = player;
    this.x = player.x;
    this.y = player.y + this.player.height / 2;
    this.srcX = 0;
    this.speed = this.player.runSpeed + 30;
    this.image = image.image;
    this.srcWidth = image.width;
    this.srcHeight = image.height;
    this.frameIndex = 0;
    this.frameSet = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 5], [0, 5], [0, 5], [0, 5], [0, 5], [0, 5], [0, 5], [0, 5], [0, 5], [0, 5], [0, 5], [0, 5], [0, 6], [0, 6], [0, 6], [0, 6], [0, 6], [0, 6], [0, 6], [0, 6], [0, 6], [0, 6], [0, 6], [0, 6], [0, 7], [0, 7], [0, 7], [0, 7], [0, 7], [0, 7], [0, 7], [0, 7], [0, 7], [0, 7], [0, 7], [0, 7], [0, 8], [0, 8], [0, 8], [0, 8], [0, 8], [0, 8], [0, 8], [0, 8], [0, 8], [0, 8], [0, 8], [0, 8], [0, 9], [0, 9], [0, 9], [0, 9], [0, 9], [0, 9], [0, 9], [0, 9], [0, 9], [0, 9], [0, 9], [0, 9], [0, 10], [0, 10], [0, 10], [0, 10], [0, 10], [0, 10], [0, 10], [0, 10], [0, 10], [0, 10], [0, 10], [0, 10], [0, 11], [0, 11], [0, 11], [0, 11], [0, 11], [0, 11], [0, 11], [0, 11], [0, 11], [0, 11], [0, 11], [0, 11], [0, 12], [0, 12], [0, 12], [0, 12], [0, 12], [0, 12], [0, 12], [0, 12], [0, 12], [0, 12], [0, 12], [0, 12], [0, 13], [0, 13], [0, 13], [0, 13], [0, 13], [0, 13], [0, 13], [0, 13], [0, 13], [0, 13], [0, 13], [0, 13], [0, 14], [0, 14], [0, 14], [0, 14], [0, 14], [0, 14], [0, 14], [0, 14], [0, 14], [0, 14], [0, 14], [0, 14]];
  }

  _createClass(Arrow, [{
    key: "isOffMap",
    value: function isOffMap() {
      return this.x >= 928;
    }
  }, {
    key: "isCollideWith",
    value: function isCollideWith(enemy) {
      var topClip = this.yHitboxTop >= enemy.yHitboxTop && this.yHitboxTop <= enemy.yHitboxBottom;
      var bottomClip = this.yHitboxBottom >= enemy.yHitboxTop && this.yHitboxTop <= enemy.yHitboxBottom;
      var frontClip = this.xHitboxFront >= enemy.xHitboxFront && this.xHitboxFront <= enemy.xHitboxBack;
      var backClip = this.xHitboxBack >= enemy.xHitboxFront && this.xHitboxBack <= enemy.xHitboxBack;
      return (topClip || bottomClip) && (frontClip || backClip);
    }
  }, {
    key: "updateHitBox",
    value: function updateHitBox() {
      this.xHitboxFront = this.x + this.srcWidth;
      this.xHitboxBack = this.x;
      this.yHitboxTop = this.y;
      this.yHitboxBottom = this.y + this.srcHeight;
    }
  }, {
    key: "updateFrame",
    value: function updateFrame() {
      var frameSet = this.frameSet,
          srcWidth = this.srcWidth;
      this.frameIndex = (this.frameIndex + 1) % frameSet.length;
      this.srcX = this.frameIndex * srcWidth;
      this.x += this.speed;
      this.updateHitBox();
    }
  }, {
    key: "animate",
    value: function animate() {
      var ctx = this.ctx,
          image = this.image,
          srcX = this.srcX,
          srcWidth = this.srcWidth,
          srcHeight = this.srcHeight;
      ctx.drawImage(image, srcX, 0, srcWidth, srcHeight, this.x, this.y, srcWidth, srcHeight);
      this.updateFrame();
    }
  }]);

  return Arrow;
}();



/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Background = /*#__PURE__*/function () {
  function Background(ctx, game) {
    _classCallCheck(this, Background);

    this.ctx = ctx;
    this.game = game;
    this.layers = [{
      xPos: 0,
      speed: -8,
      alpha: 0.70,
      image: new Image()
    }, {
      xPos: 0,
      speed: -7,
      alpha: 0.95,
      image: new Image()
    }, {
      xPos: 0,
      speed: -7,
      alpha: 0.70,
      image: new Image()
    }, {
      xPos: 0,
      speed: -6,
      alpha: 0.70,
      image: new Image()
    }, {
      xPos: 0,
      speed: -5,
      alpha: 0.70,
      image: new Image()
    }, {
      xPos: 0,
      speed: -4,
      alpha: 0.70,
      image: new Image()
    }, {
      xPos: 0,
      speed: -3,
      alpha: 0.70,
      image: new Image()
    }, {
      xPos: 0,
      speed: -3,
      alpha: 0.70,
      image: new Image()
    }, {
      xPos: 0,
      speed: -2,
      alpha: 0.70,
      image: new Image()
    }, {
      xPos: 0,
      speed: -1,
      alpha: 0.70,
      image: new Image()
    }];
    this.layers[0].image.src = 'assets/background/layer1.png';
    this.layers[1].image.src = 'assets/background/layer2.png';
    this.layers[2].image.src = 'assets/background/layer3.png';
    this.layers[3].image.src = 'assets/background/layer4.png';
    this.layers[4].image.src = 'assets/background/layer5.png';
    this.layers[5].image.src = 'assets/background/layer6.png';
    this.layers[6].image.src = 'assets/background/layer7.png';
    this.layers[7].image.src = 'assets/background/layer8.png';
    this.layers[8].image.src = 'assets/background/layer9.png';
    this.layers[9].image.src = 'assets/background/layer10.png';
    this.width = 1856;
    this.height = 793;
  }

  _createClass(Background, [{
    key: "animate",
    value: function animate() {
      var ctx = this.ctx,
          width = this.width,
          height = this.height;

      for (var i = this.layers.length - 1; i >= 0; i--) {
        if (this.game.gameOver) {
          this.ctx.globalAlpha = this.layers[i].alpha;
        }

        ctx.drawImage(this.layers[i].image, this.layers[i].xPos, 0, width, height);

        if (this.game.gameOver) {
          if (this.layers[i].speed < 0) {
            this.layers[i].speed = this.layers[i].speed - this.layers[i].speed * .05;

            if (this.layers[i].speed > 0) {
              this.layers[i].speed = 0;
            }
          }
        }

        this.layers[i].xPos += this.layers[i].speed;

        if (this.layers[i].xPos <= -(width / 2)) {
          this.layers[i].xPos = 0;
        }
      }
    }
  }]);

  return Background;
}();



/***/ }),

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Character; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Character = /*#__PURE__*/function () {
  function Character(ctx, player, image) {
    _classCallCheck(this, Character);

    this.ctx = ctx;
    this.player = player;
    this.useImg = image.image;
    this.image = image.image;
    this.image2 = image.image2;
    this.srcX = 0;
    this.srcY = 0;
    this.frameIndex = 0;
    this.srcWidth = image.width;
    this.srcHeight = image.height;
    this.width = player.width;
    this.height = player.height;
    this.animation = 'idle';
    this.slashing = false;
    this.frameSets = {
      idle: [[5, 3], [5, 3], [5, 3], [5, 4], [5, 4], [5, 4], [5, 5], [5, 5], [5, 5], [5, 6], [5, 6], [5, 6]],
      run: [[0, 7], [0, 7], [0, 8], [0, 8], [0, 9], [0, 9], [0, 10], [0, 10], [0, 11], [0, 11], [0, 12], [0, 12]],
      jump: [[2, 0], [2, 0], [2, 1], [2, 1], [2, 2], [2, 2], [2, 3], [2, 3], [2, 4], [2, 4], [2, 5], [2, 5], [2, 6], [2, 6], [3, 0], [3, 0], [3, 1], [3, 1], [3, 2], [3, 2]],
      slide: [[3, 3], [3, 3], [3, 3], [3, 4], [3, 4], [3, 4], [3, 5], [3, 5], [3, 5], [3, 6], [3, 6], [3, 6], [4, 0], [4, 0], [4, 0]],
      attack: [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [8, 0], [8, 1], [8, 2]],
      shoot: [[0, 0], [0, 1], [0, 2], [2, 1], [2, 2], [2, 3], [3, 0], [3, 1], [1, 3], [1, 3], [1, 3], [3, 2]],
      die: [[8, 6], [8, 6], [9, 0], [9, 0], [9, 1], [9, 1], [9, 1], [9, 2], [9, 2], [9, 2], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 5], [9, 5], [9, 5], [9, 5], [9, 5], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 5], [9, 5], [9, 5], [9, 5], [9, 5], [9, 5], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 5], [9, 5], [9, 5], [9, 5], [9, 5], [9, 5], [9, 5], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4]]
    };
    this.adjHboxPos = {
      // [xHboxFront, xHboxBack, yHboxTop, yHboxBottom]
      idle: [[-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0]],
      run: [[-15, 20, 10, 0], [-15, 20, 10, 0], [-15, 21, 10, 0], [-15, 21, 10, 0], [-15, 24, 10, 0], [-15, 24, 10, 0], [-15, 20, 10, 0], [-15, 20, 10, 0], [-15, 21, 10, 0], [-15, 21, 10, 0], [-15, 24, 10, 0], [-15, 24, 10, 0]],
      jump: [[-15, 15, 12, 0], [-15, 15, 12, 0], [-17, 15, 12, 0], [-17, 15, 12, 0], [-15, 20, 7, -2], [-15, 20, 7, -2], [-15, 15, 7, -8], [-15, 15, 7, -8], [-15, 22, 7, -8], [-15, 22, 7, -8], [-13, 15, 14, -9], [-13, 15, 14, -9], [-17, 20, 11, -6], [-17, 20, 11, -6], [-17, 15, 13, 10], [-17, 15, 13, 10], [-16, 23, 7, -4], [-16, 23, 7, -4], [-16, 23, 7, -4], [-16, 23, 7, -4]],
      slide: [[-12, 15, 22, 0], [-12, 15, 22, 0], [-12, 15, 22, 0], [-12, 15, 22, 0], [-12, 15, 22, 0], [-12, 15, 22, 0], [-12, 15, 21, 0], [-12, 15, 21, 0], [-12, 15, 21, 0], [-12, 16, 20, 0], [-12, 16, 20, 0], [-12, 16, 20, 0], [-15, 18, 20, 0], [-15, 18, 20, 0], [-15, 18, 20, 0]],
      attack: [[-17, 16, 15, 0], [-18, 16, 17, 0], [-1, 22, 0, 0], [-1, 22, 0, 0], [-1, 22, 0, 0], [-18, 16, 12, 0], [-20, 16, 12, 0], [-20, 16, 12, 0], [-3, 11, 7, 0], [-3, 11, 7, 0], [-3, 11, 7, 0], [-15, 21, 11, 0], [-15, 22, 11, 0], [0, 2, 13, 0], [0, 2, 13, 0], [0, 2, 13, 0], [-17, 16, 17, 0]],
      shoot: [[-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0]]
    };
  }

  _createClass(Character, [{
    key: "changeAnimation",
    value: function changeAnimation(animation) {
      if (this.animation !== animation) {
        this.frameIndex = -1;
        this.animation = animation;

        if (this.animation === 'shoot') {
          this.useImg = this.image2;
        } else {
          this.useImg = this.image;
        }
      }
    }
  }, {
    key: "updateHitbox",
    value: function updateHitbox() {
      this.xHitboxFront = this.player.x + this.width + this.adjHboxPos[this.animation][this.frameIndex][0] * 3;
      this.xHitboxBack = this.player.x + this.adjHboxPos[this.animation][this.frameIndex][1] * 3;
      this.yHitboxTop = this.player.y + this.adjHboxPos[this.animation][this.frameIndex][2] * 3;
      this.yHitboxBottom = this.player.y + this.height + this.adjHboxPos[this.animation][this.frameIndex][3] * 3;
    }
  }, {
    key: "updateFrame",
    value: function updateFrame() {
      var frameSets = this.frameSets,
          srcWidth = this.srcWidth,
          srcHeight = this.srcHeight;

      if (this.animation === 'jump') {
        this.frameIndex += 1;

        if (this.frameIndex > frameSets[this.animation].length - 1) {
          this.frameIndex = frameSets[this.animation].length - 4;
        }
      } else if (this.animation === 'attack') {
        this.frameIndex += 1;

        if (this.frameIndex === frameSets[this.animation].length) {
          this.player.attacking = false;
          this.slashing = false;

          if (this.player.jumping) {
            this.changeAnimation('jump');
            this.frameIndex = frameSets['jump'].length - 4;
          } else {
            this.frameIndex = 0;
          }
        } else if ([2, 3, 4, 8, 9, 10, 13, 14, 15, 16].includes(this.frameIndex)) {
          this.slashing = true;
        } else {
          this.slashing = false;
        }
      } else if (this.animation === 'shoot') {
        this.frameIndex += 1;

        if (this.frameIndex === frameSets[this.animation].length) {
          this.player.shooting = false;

          if (this.player.jumping) {
            this.changeAnimation('jump');
            this.frameIndex = frameSets['jump'].length - 4;
          } else {
            this.frameIndex = 0;
          }
        } else if (this.frameIndex === frameSets[this.animation].length - 5) {
          this.player.shoot();
        }
      } else if (this.animation === 'slide') {
        this.frameIndex += 1;

        if (this.frameIndex >= frameSets['slide'].length) {
          this.player.sliding = false;
          this.frameIndex = 0;
        }
      } else if (this.animation === 'die') {
        if (this.frameIndex < frameSets['die'].length - 1) {
          this.frameIndex += 1;
        } else {
          this.frameIndex = frameSets['die'].length - 1;
        }
      } else {
        this.frameIndex = (this.frameIndex + 1) % frameSets[this.animation].length;
      }

      var _frameSets$this$anima = _slicedToArray(frameSets[this.animation][this.frameIndex], 2),
          yInd = _frameSets$this$anima[0],
          xInd = _frameSets$this$anima[1];

      this.srcX = xInd * srcWidth;
      this.srcY = yInd * srcHeight;
      this.player.run();
      this.player.jump();
      this.player.slide();
    }
  }, {
    key: "animate",
    value: function animate() {
      var useImg = this.useImg,
          srcX = this.srcX,
          srcY = this.srcY,
          srcWidth = this.srcWidth,
          srcHeight = this.srcHeight,
          width = this.width,
          height = this.height,
          player = this.player;

      if (player.dead) {
        if (!player.jumping && player.land) {
          this.changeAnimation('die');
        }
      } else if (player.jumping) {
        var attackShootOrJump = player.attacking ? 'attack' : player.shooting ? 'shoot' : 'jump';
        this.changeAnimation(attackShootOrJump);
      } else if (player.attacking) {
        this.changeAnimation('attack');
      } else if (player.shooting) {
        this.changeAnimation('shoot');
      } else if (player.running) {
        this.changeAnimation('run');
      } else if (player.sliding) {
        this.changeAnimation('slide');
      } else {
        this.changeAnimation('idle');
      }

      this.updateFrame();

      if (this.animation !== 'die') {
        this.updateHitbox();
      }

      this.ctx.drawImage(useImg, srcX, srcY, srcWidth - 1, srcHeight - 1, player.x, player.y, width, height);
    }
  }]);

  return Character;
}();



/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller(player) {
    _classCallCheck(this, Controller);

    this.player = player;
    this.keys = {
      KeyW: false,
      KeyA: false,
      KeyS: false,
      KeyD: false,
      KeyJ: false,
      KeyK: false
    };
  }

  _createClass(Controller, [{
    key: "keyDown",
    value: function keyDown(e) {
      if (Object.keys(this.keys).includes(e.code)) {
        e.preventDefault();
        this.keys[e.code] = e.type == 'keydown';

        if (this.keys['KeyW']) {
          this.player.jumping = true;
        }

        if (this.keys['KeyA']) {
          if (!this.player.sliding) {
            this.player.running = true;
            this.player.x -= this.player.runSpeed;
            this.player.runDirection = 'backward';
          }
        }

        if (this.keys['KeyS']) {
          this.player.sliding = true;
          this.player.running = false;
        }

        if (this.keys['KeyD']) {
          if (!this.player.sliding) {
            this.player.running = true;
            this.player.runDirection = 'forward';
          }
        }

        if (this.keys['KeyJ']) {
          if (!this.player.shooting) {
            this.player.attacking = true;
          }
        }

        if (this.keys['KeyK']) {
          if (!this.player.attacking) {
            this.player.shooting = true;
          }
        }
      }
    }
  }, {
    key: "keyUp",
    value: function keyUp(e) {
      if (Object.keys(this.keys).includes(e.code)) {
        e.preventDefault();
        this.keys[e.code] = e.type == 'keydown';
      }

      switch (e.code) {
        case 'KeyD':
          if (this.keys['KeyA']) {
            this.player.runDirection = 'backward';
          }

        case 'KeyA':
          if (this.keys['KeyD']) {
            this.player.running = true;
            this.player.runDirection = 'forward';
          } else if (this.keys['KeyA']) {
            this.player.running = true;
            this.player.runDirection = 'backward';
          }

        case 'KeyS':
          if (this.keys['KeyD']) {
            this.player.running = true;
            this.player.runDirection = 'forward';
          } else if (this.keys['KeyA']) {
            this.player.running = true;
            this.player.runDirection = 'backward';
          }

      }

      if (!this.keys['KeyA'] && !this.keys['KeyD']) {
        this.player.running = false;
      }

      if (!this.keys['KeyS']) {
        this.player.sliding = false;
      }
    }
  }]);

  return Controller;
}();



/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Enemy = /*#__PURE__*/function () {
  function Enemy(ctx, image) {
    _classCallCheck(this, Enemy);

    this.ctx = ctx;
    this.x = 923 + 200 + Math.floor(Math.random() * 200);
    this.y = 793 - 125 - Math.floor(Math.random() * 100);
    this.srcX = 0;
    this.speed = 15;
    this.neutralMoveSpeed = 10;
    this.attackMoveSpeed = 15;
    this.jumpSpeed = 25;
    this.neutralJumpSpeed = 25;
    this.attackJumpSpeed = 28;
    this.gravity = 3;
    this.ground = 678;
    this.land = true;
    this.image = image.image;
    this.srcWidth = image.width;
    this.srcHeight = image.height;
    this.width = this.srcWidth * 2;
    this.height = this.srcHeight * 2;
    this.animation = 'idle';
    this.frameIndex = 0;
    this.frameSets = {
      idle: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3]],
      attack: [[0, 4], [0, 4], [0, 5], [0, 5], [0, 6], [0, 6], [0, 7], [0, 7]]
    };
  }

  _createClass(Enemy, [{
    key: "isOffMap",
    value: function isOffMap() {
      return this.x <= -this.srcWidth;
    }
  }, {
    key: "isCollideWith",
    value: function isCollideWith(player) {
      var topClip = this.yHitboxTop >= player.yHitboxTop && this.yHitboxTop <= player.yHitboxBottom;
      var bottomClip = this.yHitboxBottom >= player.yHitboxTop && this.yHitboxTop <= player.yHitboxBottom;
      var frontClip = this.xHitboxFront <= player.xHitboxFront && this.xHitboxFront >= player.xHitboxBack;
      var backClip = this.xHitboxBack <= player.xHitboxFront && this.xHitboxBack >= player.xHitboxBack;
      return (topClip || bottomClip) && (frontClip || backClip);
    }
  }, {
    key: "attack",
    value: function attack() {}
  }, {
    key: "jump",
    value: function jump() {
      this.y -= this.jumpSpeed;
      this.jumpSpeed -= this.gravity;

      if (this.y >= this.ground) {
        this.y = this.ground;
        this.jumpSpeed = this.neutralJumpSpeed;
        this.land = true;
      } else {
        this.x -= this.speed;
        this.land = false;
      }
    }
  }, {
    key: "changeAnimation",
    value: function changeAnimation(animation) {
      if (this.animation !== animation) {
        this.frameIndex = 0;
        this.animation = animation;
      }
    }
  }, {
    key: "updateHitBox",
    value: function updateHitBox() {
      this.xHitboxFront = this.x + 20;
      this.xHitboxBack = this.x + (this.width - 10);
      this.yHitboxTop = this.y;
      this.yHitboxBottom = this.y + this.height;
    }
  }, {
    key: "updateFrame",
    value: function updateFrame() {
      var frameSets = this.frameSets,
          width = this.width;
      this.frameIndex = (this.frameIndex + 1) % frameSets[this.animation].length;

      var _frameSets$this$anima = _slicedToArray(frameSets[this.animation][this.frameIndex], 2),
          _ = _frameSets$this$anima[0],
          xInd = _frameSets$this$anima[1];

      this.srcX = xInd * width;

      if (this.animation !== 'die') {
        this.jump();
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var ctx = this.ctx,
          image = this.image,
          srcX = this.srcX,
          x = this.x,
          y = this.y,
          srcWidth = this.srcWidth,
          srcHeight = this.srcHeight,
          width = this.width,
          height = this.height;
      this.updateHitBox();
      ctx.scale(-1, 1);
      ctx.drawImage(image, srcX, 0, srcWidth, srcHeight, -x - width, y, width, height);
      ctx.scale(-1, 1);
      this.updateFrame();
    }
  }]);

  return Enemy;
}();



/***/ }),

/***/ "./src/explosion.js":
/*!**************************!*\
  !*** ./src/explosion.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Explosion; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Explosion = /*#__PURE__*/function () {
  function Explosion(enemy, ctx, image) {
    _classCallCheck(this, Explosion);

    this.ctx = ctx;
    this.x = enemy.x;
    this.y = enemy.y;
    this.srcX = 0;
    this.image = image.image;
    this.width = image.width;
    this.height = image.height;
    this.frameIndex = 0;
    this.frameSets = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [0, 10], [0, 11]];
  }

  _createClass(Explosion, [{
    key: "updateFrame",
    value: function updateFrame() {
      this.frameIndex += 1;
      if (this.frameIndex >= this.frameSets.length) return;

      var _this$frameSets$this$ = _slicedToArray(this.frameSets[this.frameIndex], 2),
          _ = _this$frameSets$this$[0],
          xInd = _this$frameSets$this$[1];

      this.srcX = xInd * this.width;
    }
  }, {
    key: "animate",
    value: function animate() {
      var ctx = this.ctx,
          image = this.image,
          srcX = this.srcX,
          width = this.width,
          height = this.height;
      ctx.drawImage(image, srcX, 0, width, height, this.x, this.y, width / 1.5, height / 1.5);
      this.updateFrame();
    }
  }]);

  return Explosion;
}();



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character */ "./src/character.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background */ "./src/background.js");
/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemy.js */ "./src/enemy.js");
/* harmony import */ var _explosion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explosion */ "./src/explosion.js");
/* harmony import */ var _start_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start_menu */ "./src/start_menu.js");
/* harmony import */ var _gameover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gameover */ "./src/gameover.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var Game = /*#__PURE__*/function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    var characterImg = {
      image: new Image(),
      image2: new Image(),
      width: 50,
      height: 37
    };
    characterImg.image.src = 'assets/adventurer-Sheet.png';
    characterImg.image2.src = 'assets/adventurer-bow-Sheet.png';
    this.characterImg = characterImg;
    var arrowImg = {
      image: new Image(),
      width: 100,
      height: 30
    };
    arrowImg.image.src = 'assets/arrow.png';
    this.arrowImg = arrowImg;
    var enemyImg = {
      image: new Image(),
      width: 32,
      height: 35
    };
    enemyImg.image.src = 'assets/big-monster.png';
    this.enemyImg = enemyImg;
    var explosionImg = {
      image: new Image(),
      width: 128,
      height: 128
    };
    explosionImg.image.src = 'assets/explosion-4.png';
    this.explosionImg = explosionImg;
    this.startMenu = new _start_menu__WEBPACK_IMPORTED_MODULE_6__["default"](this);
    this.startMenu.display();
    this.gameOverScreen = new _gameover__WEBPACK_IMPORTED_MODULE_7__["default"](this.ctx, this); // this.gameOverChoice = this.gameOverScreen.keyDown;
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      var _this = this;

      var timeStamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.animationDelayStart = timeStamp;
      this.spawnDelayStart = timeStamp;
      this.spawnTimeStart = timeStamp;
      this.spawnRate = 2000;
      this.arrows = [];
      this.enemies = [];
      this.explosions = [];
      this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](this, this.ctx, this.characterImg);
      this.characterSprite = new _character__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, this.player, this.characterImg);
      this.controller = new _controller__WEBPACK_IMPORTED_MODULE_2__["default"](this.player);
      this.createObject(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.ctx, this.enemyImg));
      this.background = new _background__WEBPACK_IMPORTED_MODULE_3__["default"](this.ctx, this);
      this.gameOver = false;

      this.keyDownListener = function (e) {
        _this.controller.keyDown(e);
      };

      this.keyUpListener = function (e) {
        _this.controller.keyUp(e);
      };

      document.addEventListener('keydown', this.keyDownListener);
      document.addEventListener('keyup', this.keyUpListener);
      this.animate(timeStamp);
    }
  }, {
    key: "initiateGameOver",
    value: function initiateGameOver() {
      this.gameOver = true;
      document.removeEventListener('keydown', this.keyDownListener);
      document.removeEventListener('keyup', this.keyUpListener);
      this.gameOverScreen.display(); // document.addEventListener('keydown', this.gameOverChoice);
    }
  }, {
    key: "createObject",
    value: function createObject(object) {
      if (object.constructor.name === 'Arrow') {
        this.arrows.push(object);
      } else if (object.constructor.name === 'Enemy') {
        this.enemies.push(object);
      } else if (object.constructor.name === 'Explosion') {
        this.explosions.push(object);
      }
    }
  }, {
    key: "removeObject",
    value: function removeObject(object) {
      if (object.constructor.name === 'Arrow') {
        var idx = this.arrows.indexOf(object);
        this.arrows.splice(idx, 1);
      } else if (object.constructor.name === 'Enemy') {
        var _idx = this.enemies.indexOf(object);

        this.enemies.splice(_idx, 1);
      } else if (object.constructor.name === 'Explosion') {
        var _idx2 = this.explosions.indexOf(object);

        this.explosions.splice(_idx2, 1);
      }
    }
  }, {
    key: "animateArrows",
    value: function animateArrows() {
      if (!this.gameOver) {
        for (var i = 0; i < this.arrows.length; i++) {
          var arrow = this.arrows[i];

          if (arrow.isOffMap()) {
            this.removeObject(arrow);
            i -= 1;
          } else {
            var continueAnimation = true;

            for (var j = 0; j < this.enemies.length; j++) {
              var enemy = this.enemies[j];

              if (arrow.isCollideWith(enemy)) {
                this.removeObject(arrow);
                this.removeObject(enemy);
                this.createObject(new _explosion__WEBPACK_IMPORTED_MODULE_5__["default"](enemy, this.ctx, this.explosionImg));
                continueAnimation = false;
                i -= 1;
                break;
              }
            }

            if (continueAnimation) {
              arrow.animate();
            }
          }
        }
      }
    }
  }, {
    key: "animateEnemies",
    value: function animateEnemies() {
      if (!this.gameOver) {
        for (var i = 0; i < this.enemies.length; i++) {
          var enemy = this.enemies[i];

          if (enemy.isOffMap()) {
            this.removeObject(enemy);
            i -= 1;
          } else if (enemy.isCollideWith(this.characterSprite)) {
            if (this.characterSprite.slashing) {
              this.removeObject(enemy);
              this.createObject(new _explosion__WEBPACK_IMPORTED_MODULE_5__["default"](enemy, this.ctx, this.explosionImg));
            } else {
              this.player.die();
              this.initiateGameOver();
            }
          } else {
            enemy.animate();
          }
        }
      }
    }
  }, {
    key: "animateExplosions",
    value: function animateExplosions() {
      if (!this.gameOver) {
        for (var i = 0; i < this.explosions.length; i++) {
          var explosion = this.explosions[i];
          explosion.animate();

          if (explosion.frameIndex >= explosion.frameSets.length) {
            this.removeObject(explosion);
          }
        }
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this2 = this;

      var timeStamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!this.gameOver) {
        var animationDelay = timeStamp - this.animationDelayStart;
        var spawnDelay = timeStamp - this.spawnDelayStart;
        var increaseSpawnRate = timeStamp - this.spawnTimeStart >= 10000;

        if (increaseSpawnRate && this.spawnRate !== 750) {
          this.spawnRate -= 250;
          this.spawnTimeStart = timeStamp;
        }

        if (spawnDelay >= this.spawnRate) {
          this.spawnDelayStart = timeStamp;
          this.createObject(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.ctx, this.enemyImg));
        }

        if (animationDelay >= 32) {
          this.animationDelayStart = timeStamp;
          this.ctx.clearRect(0, 0, 928, 793);
          this.background.animate();
          this.animateArrows();
          this.animateEnemies();
          this.animateExplosions();
          this.characterSprite.animate();
        }

        this.reqId = requestAnimationFrame(function (timeStamp) {
          _this2.animate(timeStamp);
        });
      } else {
        var _animationDelay = timeStamp - this.animationDelayStart;

        if (_animationDelay >= 32) {
          this.animationDelayStart = timeStamp;
          this.ctx.clearRect(0, 0, 928, 793);
          this.background.animate();
          this.characterSprite.animate(timeStamp);
          this.gameOverScreen.animate();
        }

        this.reqId = requestAnimationFrame(function (timeStamp) {
          _this2.animate(timeStamp);
        });
      }
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/gameover.js":
/*!*************************!*\
  !*** ./src/gameover.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameOverScreen; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameOverScreen = /*#__PURE__*/function () {
  function GameOverScreen(ctx, game) {
    _classCallCheck(this, GameOverScreen);

    this.ctx = ctx;
    this.game = game;
    this.alpha = 0;
    this.image = new Image();
    this.image.src = 'assets/GameOver.png';
    this.width = 576;
    this.height = 432;
    this.srcX = 0;
    this.choice = 'yes';
    this.frameIndex = 0;
    this.frameSets = {
      yes: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]],
      no: [[0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3]]
    };
    this.display = this.display.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  _createClass(GameOverScreen, [{
    key: "display",
    value: function display() {
      document.addEventListener('keydown', this.keyDown);
    }
  }, {
    key: "keyDown",
    value: function keyDown(e) {
      if (e.code === 'KeyA' || e.code === 'KeyD') {
        var choice = this.choice === 'yes' ? 'no' : 'yes';
        this.changeAnimation(choice);
      } else if (e.code === 'Enter') {
        document.removeEventListener('keydown', this.keyDown);

        if (this.choice === 'yes') {
          console.log('something');
          this.game.start(e.timeStamp);
        } else {
          this.game.startMenu.display();
        }
      }
    }
  }, {
    key: "changeAnimation",
    value: function changeAnimation(choice) {
      if (this.choice !== choice) {
        this.frameIndex = -1;
        this.choice = choice;
      }
    }
  }, {
    key: "updateFrame",
    value: function updateFrame() {
      var choice = this.choice,
          frameSets = this.frameSets,
          width = this.width;
      this.frameIndex = (this.frameIndex + 1) % frameSets[choice].length;

      var _frameSets$choice$thi = _slicedToArray(frameSets[choice][this.frameIndex], 2),
          _ = _frameSets$choice$thi[0],
          xInd = _frameSets$choice$thi[1];

      this.srcX = xInd * width;
      this.alpha += this.alpha * 0.10 || .05;

      if (this.alpha > 1) {
        this.alpha = 1;
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var ctx = this.ctx,
          srcX = this.srcX,
          width = this.width,
          height = this.height;
      this.updateFrame();
      this.ctx.globalAlpha = this.alpha;
      ctx.drawImage(this.image, srcX, 0, width, height, 176, 180.5, width, height);
    }
  }]);

  return GameOverScreen;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _start_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_menu */ "./src/start_menu.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");


document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('gameDisplay');
  canvas.width = 928;
  canvas.height = 793;
  var ctx = canvas.getContext('2d');
  var startMenu = new _start_menu__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](ctx); // game.start();

  var count = 0;
  count++;

  if (count === 10000000) {
    game.stop();
  }
});

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow */ "./src/arrow.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Player = /*#__PURE__*/function () {
  function Player(game, ctx, sprite) {
    _classCallCheck(this, Player);

    this.game = game;
    this.ctx = ctx;
    this.x = 0;
    this.y = 662;
    this.width = 50 * 3;
    this.height = 37 * 3; // this.y = 793 - sprite.height * 3 - 20; // 662

    this.land = true;
    this.ground = this.y;
    this.jumping = false;
    this.jumpSpeed = 35;
    this.gravity = 3;
    this.running = false;
    this.runDirection = '';
    this.runSpeed = 20;
    this.sliding = false;
    this.attacking = false;
    this.shooting = false;
    this.idle = true;
    this.dead = false;
  }

  _createClass(Player, [{
    key: "run",
    value: function run() {
      if (this.running) {
        if (this.dead) {
          if (this.runSpeed > 0) {
            this.runSpeed = this.runSpeed - this.runSpeed * .1;

            if (this.runSpeed < 0) {
              this.runSpeed = 0;
            }
          }
        }

        if (this.runDirection === 'forward') {
          this.x = this.x + this.runSpeed >= 828 ? 828 : this.x + this.runSpeed;
        }

        if (this.runDirection === 'backward') {
          this.x = this.x - this.runSpeed <= -50 ? -50 : this.x - this.runSpeed;
        }
      }
    }
  }, {
    key: "jump",
    value: function jump() {
      if (this.jumping) {
        if (this.dead) {
          if (this.gravity >= 0.5) {
            this.gravity = this.gravity - this.gravity * .025;

            if (this.gravity < 0.5) {
              this.gravity = 0.5;
            }
          }
        }

        this.y -= this.jumpSpeed;
        this.jumpSpeed -= this.gravity;
        this.land = false;

        if (this.y >= this.ground) {
          this.x += 7;
          this.y = this.ground;
          this.land = true;
          this.jumpSpeed = 35;
          this.jumping = false;
        }
      }
    }
  }, {
    key: "slide",
    value: function slide() {
      if (this.sliding) {
        this.x = this.x + this.runSpeed >= 828 ? 828 : this.x + this.runSpeed;
      }
    }
  }, {
    key: "shoot",
    value: function shoot() {
      this.game.createObject(new _arrow__WEBPACK_IMPORTED_MODULE_0__["default"](this, this.ctx, this.game.arrowImg));
    }
  }, {
    key: "die",
    value: function die() {
      this.dead = true;
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/start_menu.js":
/*!***************************!*\
  !*** ./src/start_menu.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartMenu; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StartMenu = /*#__PURE__*/function () {
  function StartMenu(game) {
    _classCallCheck(this, StartMenu);

    this.game = game;
    this.startMenu = document.getElementById('start-menu');
    this.display = this.display.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  _createClass(StartMenu, [{
    key: "display",
    value: function display() {
      this.startMenu.classList.remove('hidden');
      document.addEventListener('keydown', this.keyDown);
    }
  }, {
    key: "keyDown",
    value: function keyDown(e) {
      if (e.code === 'Enter') {
        this.startMenu.classList.add('hidden');
        document.removeEventListener('keydown', this.keyDown);
        this.game.start(e.timeStamp);
      }
    }
  }]);

  return StartMenu;
}();



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map