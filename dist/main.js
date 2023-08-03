/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller/controller.js":
/*!**************************************!*\
  !*** ./src/controller/controller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _model_gameplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/gameplay */ "./src/model/gameplay.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }
  _createClass(Controller, null, [{
    key: "attachEventListeners",
    value: function attachEventListeners() {
      document.querySelector('#new-game').addEventListener('click', function () {
        Controller.startNewGame();
        Controller.attachSquareEventListeners();
      });
    }
  }, {
    key: "attachSquareEventListeners",
    value: function attachSquareEventListeners() {
      document.querySelectorAll('#enemy-board .square').forEach(function (square) {
        return [square.addEventListener('click', function (e) {
          if (e.target.textContent === '') {
            Controller.playerMakesMove(e.target.dataset.row, e.target.dataset.col);
          }
        })];
      });
    }
  }, {
    key: "startNewGame",
    value: function startNewGame() {
      _model_gameplay__WEBPACK_IMPORTED_MODULE_0__["default"].startGame();
    }
  }, {
    key: "playerMakesMove",
    value: function playerMakesMove(row, col) {
      _model_gameplay__WEBPACK_IMPORTED_MODULE_0__["default"].playerMakesMove(row, col);
    }
  }]);
  return Controller;
}();


/***/ }),

/***/ "./src/model/enemyLogic.js":
/*!*********************************!*\
  !*** ./src/model/enemyLogic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnemyLogic)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EnemyLogic = /*#__PURE__*/function () {
  function EnemyLogic(player) {
    _classCallCheck(this, EnemyLogic);
    this.player = player;
    this.movesDone = [['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', '']];
  }
  _createClass(EnemyLogic, [{
    key: "clearMoves",
    value: function clearMoves() {
      this.movesDone = [['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', '']];
    }
  }, {
    key: "attack",
    value: function attack(enemyBoard) {
      var row = null;
      var col = null;
      var shipLocation = this.findShip(enemyBoard);
      if (shipLocation) {
        var _shipLocation = _slicedToArray(shipLocation, 2),
          shipRow = _shipLocation[0],
          shipCol = _shipLocation[1];
        var move = this.calculateMove(shipRow, shipCol);
        var _ref = move || this.getRandomMove();
        var _ref2 = _slicedToArray(_ref, 2);
        row = _ref2[0];
        col = _ref2[1];
      } else {
        var _this$getRandomMove = this.getRandomMove();
        var _this$getRandomMove2 = _slicedToArray(_this$getRandomMove, 2);
        row = _this$getRandomMove2[0];
        col = _this$getRandomMove2[1];
      }
      var isSuccess = this.player.makeMove(row, col, enemyBoard);
      if (isSuccess) {
        this.movesDone[row][col] = 'ship';
      } else {
        this.movesDone[row][col] = 'miss';
      }
      return [row, col, isSuccess];
    }
  }, {
    key: "isMoveDoneBefore",
    value: function isMoveDoneBefore(row, col) {
      return this.movesDone[row][col] !== '';
    }
  }, {
    key: "findShip",
    value: function findShip(enemyBoard) {
      for (var row = 0; row < this.movesDone.length; row++) {
        for (var col = 0; col < this.movesDone.length; col++) {
          if (this.movesDone[row][col] === 'ship') {
            if (!enemyBoard.getPosition(row, col).isSunk()) {
              return [row, col];
            }
          }
        }
      }
      return null;
    }
  }, {
    key: "getRandomMove",
    value: function getRandomMove() {
      var row = Math.floor(Math.random() * 10);
      var col = Math.floor(Math.random() * 10);
      while (this.isMoveDoneBefore(row, col)) {
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);
      }
      return [row, col];
    }
  }, {
    key: "calculateMove",
    value: function calculateMove(row, col) {
      var move = null;
      // check left
      if (col > 0 && !this.isMoveDoneBefore(row, col - 1)) {
        move = [row, col - 1];
      }
      // check right
      if (col < 9 && !this.isMoveDoneBefore(row, col + 1)) {
        move = [row, col + 1];
      }
      // check up
      if (row > 0 && !this.isMoveDoneBefore(row - 1, col)) {
        move = [row - 1, col];
      }
      // check down
      if (row < 9 && !this.isMoveDoneBefore(row + 1, col)) {
        move = [row + 1, col];
      }
      return move;
    }
  }]);
  return EnemyLogic;
}();


/***/ }),

/***/ "./src/model/gameboard.js":
/*!********************************!*\
  !*** ./src/model/gameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/model/ship.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);
    this.board = [['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', '']];
    this.ships = [];
  }
  _createClass(Gameboard, [{
    key: "getBoard",
    value: function getBoard() {
      return this.board;
    }
  }, {
    key: "clearBoard",
    value: function clearBoard() {
      this.board = [['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', '']];
      this.ships = [];
    }
  }, {
    key: "placeShip",
    value: function placeShip(length, row, col, orientation) {
      if (!(this.board[row][col] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"])) {
        var newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);
        this.ships.push(newShip);
        this.board[row][col] = newShip;
        if (orientation === 'h') {
          for (var i = 1; i < length; i++) {
            this.board[row][col + i] = newShip;
          }
        } else {
          for (var _i = 1; _i < length; _i++) {
            this.board[row + _i][col] = newShip;
          }
        }
      }
    }
  }, {
    key: "doesNotHaveAdjShips",
    value: function doesNotHaveAdjShips(length, row, col, orientation) {
      if (orientation === 'h') {
        // for horizontal ship
        // check left
        if (col > 0 && this.board[row][col - 1] !== '') return false;
        for (var i = 0; i < length; i++) {
          // check above
          if (row > 0 && this.board[row - 1][col + i] !== '') return false;
          // check bellow
          if (row < 9 && this.board[row + 1][col + i] !== '') return false;
        }
        // check right
        if (col + length < 10 && this.board[row][col + length] !== '') return false;
      } else {
        // for vertical ship
        // check above
        if (row > 0 && this.board[row - 1][col] !== '') return false;
        for (var _i2 = 0; _i2 < length; _i2++) {
          // check left
          if (col > 0 && this.board[row + _i2][col - 1] !== '') return false;
          // check right
          if (col < 9 && this.board[row + _i2][col + 1] !== '') return false;
        }
        // check bellow
        if (row + length < 10 && this.board[row + length][col] !== '') return false;
      }
      return true;
    }
  }, {
    key: "placeShipsRandomly",
    value: function placeShipsRandomly() {
      var _this = this;
      var shipLengths = [4, 3, 3, 2, 2, 1, 1, 1];
      var orientations = ['h', 'v'];
      shipLengths.forEach(function (length) {
        var randomRow;
        var randomCol;
        var randomOrient;
        while (true) {
          randomRow = Math.floor(Math.random() * 10);
          randomCol = Math.floor(Math.random() * 10);
          randomOrient = orientations[Math.floor(Math.random() * 2)];
          if (randomOrient === 'v' && randomRow + length - 1 > 9) continue;
          if (randomOrient === 'h' && randomCol + length - 1 > 9) continue;
          if (_this.getPosition(randomRow, randomCol) === '' && _this.doesNotHaveAdjShips(length, randomRow, randomCol, randomOrient)) {
            break;
          }
        }
        _this.placeShip(length, randomRow, randomCol, randomOrient);
      });
    }
  }, {
    key: "getPosition",
    value: function getPosition(row, col) {
      return this.board[row][col];
    }
  }, {
    key: "recieveAttack",
    value: function recieveAttack(row, col) {
      if (this.board[row][col] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        if (!this.board[row][col].isSunk()) {
          this.board[row][col].hit();
        }
      } else if (this.board[row][col] !== 'missed') {
        this.board[row][col] = 'missed';
      }
    }
  }, {
    key: "getRemainingShips",
    value: function getRemainingShips() {
      return this.ships.reduce(function (total, ship) {
        if (!ship.isSunk()) {
          total += 1;
        }
        return total;
      }, 0);
    }
  }, {
    key: "isGameOver",
    value: function isGameOver() {
      for (var i = 0; i < this.ships.length; i++) {
        if (!this.ships[i].isSunk()) {
          return false;
        }
      }
      return true;
    }
  }]);
  return Gameboard;
}();


/***/ }),

/***/ "./src/model/gameplay.js":
/*!*******************************!*\
  !*** ./src/model/gameplay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameplay)
/* harmony export */ });
/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/view */ "./src/view/view.js");
/* harmony import */ var _enemyLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemyLogic */ "./src/model/enemyLogic.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/model/player.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var Gameplay = /*#__PURE__*/function () {
  function Gameplay() {
    _classCallCheck(this, Gameplay);
  }
  _createClass(Gameplay, null, [{
    key: "startGame",
    value: function startGame() {
      Gameplay.player.clearBoard();
      Gameplay.enemy.clearBoard();
      Gameplay.enemyAI.clearMoves();
      Gameplay.player.placeShipsRandomly();
      Gameplay.enemy.placeShipsRandomly();
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].generatePlayerBoard(this.player.getBoard());
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].generateEnemyBoard(this.enemy.getBoard());
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayRemainingEnemyShips(this.enemy.getRemainingShips());
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayRemainingPlayerShips(this.player.getRemainingShips());
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayPlayerTurn();
    }
  }, {
    key: "playerMakesMove",
    value: function playerMakesMove(row, col) {
      var isSuccess = Gameplay.player.makeMove(row, col, Gameplay.enemy.getBoard());
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayPlayerMoveResult(row, col, isSuccess);
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayRemainingEnemyShips(this.enemy.getRemainingShips());
      if (Gameplay.enemy.isGameOver()) {
        _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayPlayerWin();
        return;
      }
      if (!isSuccess) {
        _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayEnemyTurn();
        setTimeout(Gameplay.enemyMakesMove, 500);
      }
    }
  }, {
    key: "enemyMakesMove",
    value: function enemyMakesMove() {
      while (true) {
        var _Gameplay$enemyAI$att = Gameplay.enemyAI.attack(Gameplay.player.getBoard()),
          _Gameplay$enemyAI$att2 = _slicedToArray(_Gameplay$enemyAI$att, 3),
          row = _Gameplay$enemyAI$att2[0],
          col = _Gameplay$enemyAI$att2[1],
          isSuccess = _Gameplay$enemyAI$att2[2];
        _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayEnemyMoveResult(row, col, isSuccess);
        _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayRemainingPlayerShips(Gameplay.player.getRemainingShips());
        if (Gameplay.player.isGameOver()) {
          _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayEnemyWin();
          return;
        }
        if (!isSuccess) {
          _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayPlayerTurn();
          break;
        }
      }
    }
  }]);
  return Gameplay;
}();
_defineProperty(Gameplay, "player", new _player__WEBPACK_IMPORTED_MODULE_2__["default"]());
_defineProperty(Gameplay, "enemy", new _player__WEBPACK_IMPORTED_MODULE_2__["default"]());
_defineProperty(Gameplay, "enemyAI", new _enemyLogic__WEBPACK_IMPORTED_MODULE_1__["default"](Gameplay.enemy));


/***/ }),

/***/ "./src/model/player.js":
/*!*****************************!*\
  !*** ./src/model/player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/model/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/model/ship.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  _createClass(Player, [{
    key: "getBoard",
    value: function getBoard() {
      return this.board;
    }
  }, {
    key: "clearBoard",
    value: function clearBoard() {
      this.board.clearBoard();
    }
  }, {
    key: "placeShips",
    value: function placeShips(coordArr) {
      for (var i = 0; i < coordArr.length; i++) {
        var _this$board;
        (_this$board = this.board).placeShip.apply(_this$board, _toConsumableArray(coordArr[i]));
      }
    }
  }, {
    key: "placeShipsRandomly",
    value: function placeShipsRandomly() {
      this.board.placeShipsRandomly();
    }
  }, {
    key: "makeMove",
    value: function makeMove(row, col, enemyBoard) {
      enemyBoard.recieveAttack(row, col);
      if (enemyBoard.getPosition(row, col) instanceof _ship__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        return true;
      }
      return false;
    }
  }, {
    key: "getRemainingShips",
    value: function getRemainingShips() {
      return this.board.getRemainingShips();
    }
  }, {
    key: "isGameOver",
    value: function isGameOver() {
      return this.board.isGameOver();
    }
  }]);
  return Player;
}();


/***/ }),

/***/ "./src/model/ship.js":
/*!***************************!*\
  !*** ./src/model/ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Ship = /*#__PURE__*/_createClass(function Ship(length) {
  var _this = this;
  _classCallCheck(this, Ship);
  _defineProperty(this, "hit", function () {
    return ++_this.timesHit;
  });
  _defineProperty(this, "isSunk", function () {
    return _this.timesHit >= _this.length;
  });
  this.length = length;
  this.timesHit = 0;
});


/***/ }),

/***/ "./src/view/view.js":
/*!**************************!*\
  !*** ./src/view/view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _model_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/gameboard */ "./src/model/gameboard.js");
/* harmony import */ var _model_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/ship */ "./src/model/ship.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);
  }
  _createClass(View, null, [{
    key: "generateBoard",
    value: function generateBoard(id, board) {
      document.querySelector(id).innerHTML = '';
      var arrBoard = board.getBoard();
      for (var row = 0; row < 10; row++) {
        for (var col = 0; col < 10; col++) {
          var square = document.createElement('div');
          square.classList.add('square');
          square.dataset.row = row;
          square.dataset.col = col;
          if (id === '#player-board' && arrBoard[row][col] !== '') {
            square.classList.add('ship');
          } else {
            square.classList.add('empty');
          }
          document.querySelector(id).appendChild(square);
        }
      }
    }
  }, {
    key: "generatePlayerBoard",
    value: function generatePlayerBoard(board) {
      View.generateBoard('#player-board', board);
    }
  }, {
    key: "generateEnemyBoard",
    value: function generateEnemyBoard(board) {
      View.generateBoard('#enemy-board', board);
    }
  }, {
    key: "displayRemainingEnemyShips",
    value: function displayRemainingEnemyShips(amount) {
      document.querySelector('#enemy-caption .unsinked-ships').textContent = amount;
    }
  }, {
    key: "displayRemainingPlayerShips",
    value: function displayRemainingPlayerShips(amount) {
      document.querySelector('#player-caption .unsinked-ships').textContent = amount;
    }
  }, {
    key: "findSquare",
    value: function findSquare(row, col, id) {
      var result;
      document.querySelectorAll("".concat(id, " .square")).forEach(function (square) {
        if (square.dataset.row === row && square.dataset.col === col) {
          result = square;
        }
      });
      return result;
    }
  }, {
    key: "displayPlayerMoveResult",
    value: function displayPlayerMoveResult(row, col, isSuccess) {
      var square = this.findSquare(row, col, '#enemy-board');
      if (isSuccess) {
        square.classList.remove('empty');
        square.classList.add('ship-hit');
        square.innerHTML = '<span>X</span>';
      } else {
        square.innerHTML = '<span>*</span>';
        square.classList.remove('empty');
        square.classList.add('miss');
      }
    }
  }, {
    key: "displayEnemyMoveResult",
    value: function displayEnemyMoveResult(row, col, isSuccess) {
      var square = this.findSquare(row.toString(), col.toString(), '#player-board');
      if (isSuccess) {
        square.classList.remove('ship');
        square.classList.add('ship-hit');
        square.innerHTML = '<span>X</span>';
      } else {
        square.innerHTML = '<span>*</span>';
        square.classList.remove('empty');
        square.classList.add('miss');
      }
    }
  }, {
    key: "addRedBlinking",
    value: function addRedBlinking() {
      var caption = document.querySelector('#game-caption');
      caption.classList.remove('green-blink');
      caption.classList.add('red-blink');
    }
  }, {
    key: "addGreenBlinking",
    value: function addGreenBlinking() {
      var caption = document.querySelector('#game-caption');
      caption.classList.remove('red-blink');
      caption.classList.add('green-blink');
    }
  }, {
    key: "displayPlayerTurn",
    value: function displayPlayerTurn() {
      View.addGreenBlinking();
      document.querySelector('#game-caption').textContent = 'Your Turn!';
    }
  }, {
    key: "displayEnemyTurn",
    value: function displayEnemyTurn() {
      View.addRedBlinking();
      document.querySelector('#game-caption').textContent = 'Enemy\'s Turn!';
    }
  }, {
    key: "displayPlayerWin",
    value: function displayPlayerWin() {
      View.addGreenBlinking();
      document.querySelector('#game-caption').textContent = 'Your Won!';
    }
  }, {
    key: "displayEnemyWin",
    value: function displayEnemyWin() {
      View.addRedBlinking();
      document.querySelector('#game-caption').textContent = 'You Lost...';
    }
  }]);
  return View;
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/04B_30__.ttf */ "./src/font/04B_30__.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {

    font-family: 'default';
  
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');

    style: normal;

    weight: 600;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'default', sans-serif;
}

:root {
    --font-color: rgb(233, 233, 233);
    --secondary-color: #3d3d3d;
    --primary-color: #303030;
    --green: #2bc557;
    --red: #e23636;
}

.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background-color: var(--secondary-color);
    color: var(--font-color);
    display: flex;
    justify-content: center;
    padding: 25px;
    font-size: 1.2rem;
}

.header-container {
    align-items: center;
}

#new-game {
    padding: 10px 30px;
    font-size: 1.4rem;
    color: var(--font-color);
    border: none;
    border-radius: 5px;
    background-color: var(--primary-color);
    cursor: pointer;
    transition: transform 200ms ease-in-out;
}

#new-game:hover {
    transform: translate(0, -5px);
}

main{
    flex: 1;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    background-color: var(--primary-color)
}

.main-container, .header-container {
    width: 1000px;
    display: flex;
}

.header-container {
    justify-content: space-between;

}

.main-container {
    justify-content: center;
    gap: 20px;
    color: var(--font-color);
    height: 100%;
}



.board {
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-template-rows: 20px 1fr;
    gap: 8px;
}

.board .columns {
    grid-row: 1/2;
    grid-column: 2/3;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.board .rows {
    
    grid-column: 1/2;
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

#player-board, #enemy-board {
    border: 4px #002c66 solid;
    grid-column: 2/3;
    grid-row: 2/3;
}

#game-caption {
    border: 2px black solid;
}

#game-caption {
    padding: 15px;
    width: 200px;
    text-align: center;
}

#player-caption, #enemy-caption {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    padding-top: 10px;
}

#player-caption, #player-caption>hr {
    color: var(--green);
}

#enemy-caption, #enemy-caption>hr {
    color: var(--red);
}

hr {
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
}

.square {
    height: 2.5rem;
    width: 2.5rem;
    font-size: 2.5rem;
    
}

#enemy-board .square, #player-board .square {
    text-align: center;
    position: relative;
    cursor: default;
}

#enemy-board .empty {
    cursor: crosshair;
}

#enemy-board .empty:hover{
    background-color: rgb(87, 52, 180);
}

#enemy-board .miss span, #player-board .miss span{
    font-size: 4rem;
    position: absolute;
    left: 5px;
}

.empty {
    background-color: #2389da;

}

.ship {
    background-color: #808080;
}

.ship-hit {
    background-color: #e23636;
}

.miss {
    background-color: #2389da;
}

#player-board, #enemy-board {
    background-color: #002c66;
    display: grid;
    gap: 5px 5px;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
}

.caption-wrapper {
    display: flex;
    align-items: center;
}

@keyframes blinking-red {
    0% {
      color: #FFF;
      border-color: #FFF;
    }
    100% {
        color: var(--red);
        border-color: var(--red);
    }
}

.red-blink {
    animation: blinking-red 1s infinite;
}

@keyframes blinking-green {
    0% {
      color: #FFF;
      border-color: #FFF;
    }
    100% {
        color: var(--green);
        border-color: var(--green);
    }
}

.green-blink {
    animation: blinking-green 1s infinite;
}

@media only screen and (max-width: 1000px) {

    .main-container, .header-container {
        width: 100%;
    }

    .square {
        height: 1.8rem;
        width: 1.8rem;
        font-size: 1.8rem;
    }

    main {
        padding-top: 10px;
    }

    .main-container {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    #enemy-board .miss span, #player-board .miss span{
        font-size: 2.2rem;
        position: absolute;
        bottom: -10px;
    }
    
}

@media only screen and (max-width: 500px) {
    * {
        font-size: 1rem;
    }

    .columns span, .rows span{
        font-size: 0.8rem;
    }

    .board {
        gap: 2px;
    }

    .square {
        height: 1rem;
        width: 1rem;
        font-size: 1rem;

    }

    #new-game {
        padding: 5px 20px;
        font-size: 0.9rem;
    }

    #enemy-board .miss span,  #player-board .miss span{
        font-size: 2rem;
        position: static;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap');\n\n\n@font-face {\n\n    font-family: 'default';\n  \n    src: url('./font/04B_30__.ttf') format('truetype');\n\n    style: normal;\n\n    weight: 600;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    list-style: none;\n    font-family: 'default', sans-serif;\n}\n\n:root {\n    --font-color: rgb(233, 233, 233);\n    --secondary-color: #3d3d3d;\n    --primary-color: #303030;\n    --green: #2bc557;\n    --red: #e23636;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nheader {\n    background-color: var(--secondary-color);\n    color: var(--font-color);\n    display: flex;\n    justify-content: center;\n    padding: 25px;\n    font-size: 1.2rem;\n}\n\n.header-container {\n    align-items: center;\n}\n\n#new-game {\n    padding: 10px 30px;\n    font-size: 1.4rem;\n    color: var(--font-color);\n    border: none;\n    border-radius: 5px;\n    background-color: var(--primary-color);\n    cursor: pointer;\n    transition: transform 200ms ease-in-out;\n}\n\n#new-game:hover {\n    transform: translate(0, -5px);\n}\n\nmain{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    padding-top: 50px;\n    background-color: var(--primary-color)\n}\n\n.main-container, .header-container {\n    width: 1000px;\n    display: flex;\n}\n\n.header-container {\n    justify-content: space-between;\n\n}\n\n.main-container {\n    justify-content: center;\n    gap: 20px;\n    color: var(--font-color);\n    height: 100%;\n}\n\n\n\n.board {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    grid-template-rows: 20px 1fr;\n    gap: 8px;\n}\n\n.board .columns {\n    grid-row: 1/2;\n    grid-column: 2/3;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.board .rows {\n    \n    grid-column: 1/2;\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n#player-board, #enemy-board {\n    border: 4px #002c66 solid;\n    grid-column: 2/3;\n    grid-row: 2/3;\n}\n\n#game-caption {\n    border: 2px black solid;\n}\n\n#game-caption {\n    padding: 15px;\n    width: 200px;\n    text-align: center;\n}\n\n#player-caption, #enemy-caption {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 1.2rem;\n    padding-top: 10px;\n}\n\n#player-caption, #player-caption>hr {\n    color: var(--green);\n}\n\n#enemy-caption, #enemy-caption>hr {\n    color: var(--red);\n}\n\nhr {\n    width: 100%;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.square {\n    height: 2.5rem;\n    width: 2.5rem;\n    font-size: 2.5rem;\n    \n}\n\n#enemy-board .square, #player-board .square {\n    text-align: center;\n    position: relative;\n    cursor: default;\n}\n\n#enemy-board .empty {\n    cursor: crosshair;\n}\n\n#enemy-board .empty:hover{\n    background-color: rgb(87, 52, 180);\n}\n\n#enemy-board .miss span, #player-board .miss span{\n    font-size: 4rem;\n    position: absolute;\n    left: 5px;\n}\n\n.empty {\n    background-color: #2389da;\n\n}\n\n.ship {\n    background-color: #808080;\n}\n\n.ship-hit {\n    background-color: #e23636;\n}\n\n.miss {\n    background-color: #2389da;\n}\n\n#player-board, #enemy-board {\n    background-color: #002c66;\n    display: grid;\n    gap: 5px 5px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.caption-wrapper {\n    display: flex;\n    align-items: center;\n}\n\n@keyframes blinking-red {\n    0% {\n      color: #FFF;\n      border-color: #FFF;\n    }\n    100% {\n        color: var(--red);\n        border-color: var(--red);\n    }\n}\n\n.red-blink {\n    animation: blinking-red 1s infinite;\n}\n\n@keyframes blinking-green {\n    0% {\n      color: #FFF;\n      border-color: #FFF;\n    }\n    100% {\n        color: var(--green);\n        border-color: var(--green);\n    }\n}\n\n.green-blink {\n    animation: blinking-green 1s infinite;\n}\n\n@media only screen and (max-width: 1000px) {\n\n    .main-container, .header-container {\n        width: 100%;\n    }\n\n    .square {\n        height: 1.8rem;\n        width: 1.8rem;\n        font-size: 1.8rem;\n    }\n\n    main {\n        padding-top: 10px;\n    }\n\n    .main-container {\n        flex-direction: column;\n        align-items: center;\n        gap: 15px;\n    }\n\n    #enemy-board .miss span, #player-board .miss span{\n        font-size: 2.2rem;\n        position: absolute;\n        bottom: -10px;\n    }\n    \n}\n\n@media only screen and (max-width: 500px) {\n    * {\n        font-size: 1rem;\n    }\n\n    .columns span, .rows span{\n        font-size: 0.8rem;\n    }\n\n    .board {\n        gap: 2px;\n    }\n\n    .square {\n        height: 1rem;\n        width: 1rem;\n        font-size: 1rem;\n\n    }\n\n    #new-game {\n        padding: 5px 20px;\n        font-size: 0.9rem;\n    }\n\n    #enemy-board .miss span,  #player-board .miss span{\n        font-size: 2rem;\n        position: static;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/font/04B_30__.ttf":
/*!*******************************!*\
  !*** ./src/font/04B_30__.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb829af0ad882093769c.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/controller */ "./src/controller/controller.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


_controller_controller__WEBPACK_IMPORTED_MODULE_0__["default"].attachEventListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxFQUFFLEVBQUUsQ0FBQyxFQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUMzQztFQUNMO0VBQUN2QixZQUFBLENBQUFxQixVQUFBO0lBQUFwQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBc0IsV0FBQSxFQUFhO01BQ1QsSUFBSSxDQUFDRCxTQUFTLEdBQUcsQ0FDYixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUMzQztJQUNMO0VBQUM7SUFBQXRCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1QixPQUFPQyxVQUFVLEVBQUU7TUFDZixJQUFJVCxHQUFHLEdBQUcsSUFBSTtNQUNkLElBQUlDLEdBQUcsR0FBRyxJQUFJO01BRWQs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QUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQzNDO01BQ0QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNuQjtFQUFDO0lBQUFuRCxHQUFBO0lBQUFD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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsYUFBYSxjQUFjLFlBQVksVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVks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O1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQWlEO0FBQzVCO0FBRXJCN0UsOERBQVUsQ0FBQ0ssb0JBQW9CLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbC9lbmVteUxvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWwvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWwvZ2FtZXBsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbC9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlldy92aWV3LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lcGxheSBmcm9tICcuLi9tb2RlbC9nYW1lcGxheSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBhdHRhY2hFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1nYW1lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBDb250cm9sbGVyLnN0YXJ0TmV3R2FtZSgpO1xuICAgICAgICAgICAgQ29udHJvbGxlci5hdHRhY2hTcXVhcmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXR0YWNoU3F1YXJlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNlbmVteS1ib2FyZCAuc3F1YXJlJykuZm9yRWFjaCgoc3F1YXJlKSA9PiBbXG4gICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgQ29udHJvbGxlci5wbGF5ZXJNYWtlc01vdmUoZS50YXJnZXQuZGF0YXNldC5yb3csIGUudGFyZ2V0LmRhdGFzZXQuY29sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHN0YXJ0TmV3R2FtZSgpIHtcbiAgICAgICAgR2FtZXBsYXkuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHBsYXllck1ha2VzTW92ZShyb3csIGNvbCkge1xuICAgICAgICBHYW1lcGxheS5wbGF5ZXJNYWtlc01vdmUocm93LCBjb2wpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15TG9naWMge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5tb3Zlc0RvbmUgPSBbXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGNsZWFyTW92ZXMoKSB7XG4gICAgICAgIHRoaXMubW92ZXNEb25lID0gW1xuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBhdHRhY2soZW5lbXlCb2FyZCkge1xuICAgICAgICBsZXQgcm93ID0gbnVsbDtcbiAgICAgICAgbGV0IGNvbCA9IG51bGw7XG5cbiAgICAgICAgbGV0IHNoaXBMb2NhdGlvbiA9IHRoaXMuZmluZFNoaXAoZW5lbXlCb2FyZCk7XG5cbiAgICAgICAgaWYgKHNoaXBMb2NhdGlvbikge1xuICAgICAgICAgICAgbGV0IFtzaGlwUm93LCBzaGlwQ29sXSA9IHNoaXBMb2NhdGlvbjtcbiAgICAgICAgICAgIGxldCBtb3ZlID0gdGhpcy5jYWxjdWxhdGVNb3ZlKHNoaXBSb3csIHNoaXBDb2wpO1xuICAgICAgICAgICAgW3JvdywgY29sXSA9IG1vdmUgfHwgdGhpcy5nZXRSYW5kb21Nb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBbcm93LCBjb2xdID0gdGhpcy5nZXRSYW5kb21Nb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNTdWNjZXNzID0gdGhpcy5wbGF5ZXIubWFrZU1vdmUocm93LCBjb2wsIGVuZW15Qm9hcmQpO1xuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVzRG9uZVtyb3ddW2NvbF0gPSAnc2hpcCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVzRG9uZVtyb3ddW2NvbF0gPSAnbWlzcyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbCwgaXNTdWNjZXNzXTtcbiAgICB9XG5cbiAgICBpc01vdmVEb25lQmVmb3JlKHJvdywgY29sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVzRG9uZVtyb3ddW2NvbF0gIT09ICcnO1xuICAgIH1cblxuICAgIGZpbmRTaGlwKGVuZW15Qm9hcmQpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5tb3Zlc0RvbmUubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5tb3Zlc0RvbmUubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmVzRG9uZVtyb3ddW2NvbF0gPT09ICdzaGlwJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVuZW15Qm9hcmQuZ2V0UG9zaXRpb24ocm93LCBjb2wpLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21Nb3ZlKCkge1xuICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB3aGlsZSAodGhpcy5pc01vdmVEb25lQmVmb3JlKHJvdywgY29sKSkge1xuICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcm93LCBjb2xdO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZU1vdmUocm93LCBjb2wpIHtcbiAgICAgICAgbGV0IG1vdmUgPSBudWxsO1xuICAgICAgICAvLyBjaGVjayBsZWZ0XG4gICAgICAgIGlmIChjb2wgPiAwICYmICF0aGlzLmlzTW92ZURvbmVCZWZvcmUocm93LCBjb2wgLSAxKSkge1xuICAgICAgICAgICAgbW92ZSA9IFtyb3csIGNvbCAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIHJpZ2h0XG4gICAgICAgIGlmIChjb2wgPCA5ICYmICF0aGlzLmlzTW92ZURvbmVCZWZvcmUocm93LCBjb2wgKyAxKSkge1xuICAgICAgICAgICAgbW92ZSA9IFtyb3csIGNvbCArIDFdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIHVwXG4gICAgICAgIGlmIChyb3cgPiAwICYmICF0aGlzLmlzTW92ZURvbmVCZWZvcmUocm93IC0gMSwgY29sKSkge1xuICAgICAgICAgICAgbW92ZSA9IFtyb3cgLSAxLCBjb2xdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGRvd25cbiAgICAgICAgaWYgKHJvdyA8IDkgJiYgIXRoaXMuaXNNb3ZlRG9uZUJlZm9yZShyb3cgKyAxLCBjb2wpKSB7XG4gICAgICAgICAgICBtb3ZlID0gW3JvdyArIDEsIGNvbF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vdmU7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIH1cblxuICAgIGdldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICB9XG5cbiAgICBjbGVhckJvYXJkKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbikge1xuICAgICAgICBpZiAoISh0aGlzLmJvYXJkW3Jvd11bY29sXSBpbnN0YW5jZW9mIFNoaXApKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gbmV3U2hpcDtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sICsgaV0gPSBuZXdTaGlwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JvdyArIGldW2NvbF0gPSBuZXdTaGlwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvZXNOb3RIYXZlQWRqU2hpcHMobGVuZ3RoLCByb3csIGNvbCwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgIC8vIGZvciBob3Jpem9udGFsIHNoaXBcbiAgICAgICAgICAgIC8vIGNoZWNrIGxlZnRcbiAgICAgICAgICAgIGlmIChjb2wgPiAwICYmIHRoaXMuYm9hcmRbcm93XVtjb2wgLSAxXSAhPT0gJycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhYm92ZVxuICAgICAgICAgICAgICAgIGlmIChyb3cgPiAwICYmIHRoaXMuYm9hcmRbcm93IC0gMV1bY29sICsgaV0gIT09ICcnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYmVsbG93XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IDkgJiYgdGhpcy5ib2FyZFtyb3cgKyAxXVtjb2wgKyBpXSAhPT0gJycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNoZWNrIHJpZ2h0XG4gICAgICAgICAgICBpZiAoKGNvbCArIGxlbmd0aCkgPCAxMCAmJiB0aGlzLmJvYXJkW3Jvd11bY29sICsgbGVuZ3RoXSAhPT0gJycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZvciB2ZXJ0aWNhbCBzaGlwXG4gICAgICAgICAgICAvLyBjaGVjayBhYm92ZVxuICAgICAgICAgICAgaWYgKHJvdyA+IDAgJiYgdGhpcy5ib2FyZFtyb3cgLSAxXVtjb2xdICE9PSAnJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGxlZnRcbiAgICAgICAgICAgICAgICBpZiAoY29sID4gMCAmJiB0aGlzLmJvYXJkW3JvdyArIGldW2NvbCAtIDFdICE9PSAnJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIHJpZ2h0XG4gICAgICAgICAgICAgICAgaWYgKGNvbCA8IDkgJiYgdGhpcy5ib2FyZFtyb3cgKyBpXVtjb2wgKyAxXSAhPT0gJycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNoZWNrIGJlbGxvd1xuICAgICAgICAgICAgaWYgKChyb3cgKyBsZW5ndGgpIDwgMTAgJiYgdGhpcy5ib2FyZFtyb3cgKyBsZW5ndGhdW2NvbF0gIT09ICcnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs0LCAzLCAzLCAyLCAyLCAxLCAxLCAxXTtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb25zID0gWydoJywgJ3YnXTtcbiAgICAgICAgc2hpcExlbmd0aHMuZm9yRWFjaCgobGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tUm93O1xuICAgICAgICAgICAgbGV0IHJhbmRvbUNvbDtcbiAgICAgICAgICAgIGxldCByYW5kb21PcmllbnQ7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICByYW5kb21Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgcmFuZG9tT3JpZW50ID0gb3JpZW50YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tT3JpZW50ID09PSAndicgJiYgKHJhbmRvbVJvdyArIGxlbmd0aCAtIDEpID4gOSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbU9yaWVudCA9PT0gJ2gnICYmIChyYW5kb21Db2wgKyBsZW5ndGggLSAxKSA+IDkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy5nZXRQb3NpdGlvbihyYW5kb21Sb3csIHJhbmRvbUNvbCkgPT09ICcnKVxuICAgICAgICAgICAgICAgICYmIHRoaXMuZG9lc05vdEhhdmVBZGpTaGlwcyhsZW5ndGgsIHJhbmRvbVJvdywgcmFuZG9tQ29sLCByYW5kb21PcmllbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwKGxlbmd0aCwgcmFuZG9tUm93LCByYW5kb21Db2wsIHJhbmRvbU9yaWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKHJvdywgY29sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICB9XG5cbiAgICByZWNpZXZlQXR0YWNrKHJvdywgY29sKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtyb3ddW2NvbF0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS5oaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSAhPT0gJ21pc3NlZCcpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gJ21pc3NlZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSZW1haW5pbmdTaGlwcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHMucmVkdWNlKCh0b3RhbCwgc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b3RhbDtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgaXNHYW1lT3ZlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi4vdmlldy92aWV3JztcbmltcG9ydCBFbmVteUxvZ2ljIGZyb20gJy4vZW5lbXlMb2dpYyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXBsYXkge1xuICAgIHN0YXRpYyBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG5cbiAgICBzdGF0aWMgZW5lbXkgPSBuZXcgUGxheWVyKCk7XG5cbiAgICBzdGF0aWMgZW5lbXlBSSA9IG5ldyBFbmVteUxvZ2ljKHRoaXMuZW5lbXkpO1xuXG4gICAgc3RhdGljIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgR2FtZXBsYXkucGxheWVyLmNsZWFyQm9hcmQoKTtcbiAgICAgICAgR2FtZXBsYXkuZW5lbXkuY2xlYXJCb2FyZCgpO1xuICAgICAgICBHYW1lcGxheS5lbmVteUFJLmNsZWFyTW92ZXMoKTtcbiAgICAgICAgR2FtZXBsYXkucGxheWVyLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgICAgICBHYW1lcGxheS5lbmVteS5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICAgICAgVmlldy5nZW5lcmF0ZVBsYXllckJvYXJkKHRoaXMucGxheWVyLmdldEJvYXJkKCkpO1xuICAgICAgICBWaWV3LmdlbmVyYXRlRW5lbXlCb2FyZCh0aGlzLmVuZW15LmdldEJvYXJkKCkpO1xuICAgICAgICBWaWV3LmRpc3BsYXlSZW1haW5pbmdFbmVteVNoaXBzKHRoaXMuZW5lbXkuZ2V0UmVtYWluaW5nU2hpcHMoKSk7XG4gICAgICAgIFZpZXcuZGlzcGxheVJlbWFpbmluZ1BsYXllclNoaXBzKHRoaXMucGxheWVyLmdldFJlbWFpbmluZ1NoaXBzKCkpO1xuICAgICAgICBWaWV3LmRpc3BsYXlQbGF5ZXJUdXJuKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHBsYXllck1ha2VzTW92ZShyb3csIGNvbCkge1xuICAgICAgICBjb25zdCBpc1N1Y2Nlc3MgPSBHYW1lcGxheS5wbGF5ZXIubWFrZU1vdmUocm93LCBjb2wsIEdhbWVwbGF5LmVuZW15LmdldEJvYXJkKCkpO1xuICAgICAgICBWaWV3LmRpc3BsYXlQbGF5ZXJNb3ZlUmVzdWx0KHJvdywgY29sLCBpc1N1Y2Nlc3MpO1xuICAgICAgICBWaWV3LmRpc3BsYXlSZW1haW5pbmdFbmVteVNoaXBzKHRoaXMuZW5lbXkuZ2V0UmVtYWluaW5nU2hpcHMoKSk7XG4gICAgICAgIGlmIChHYW1lcGxheS5lbmVteS5pc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIFZpZXcuZGlzcGxheVBsYXllcldpbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICBWaWV3LmRpc3BsYXlFbmVteVR1cm4oKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoR2FtZXBsYXkuZW5lbXlNYWtlc01vdmUsIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZW5lbXlNYWtlc01vdmUoKSB7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sLCBpc1N1Y2Nlc3NdID0gR2FtZXBsYXkuZW5lbXlBSS5hdHRhY2soR2FtZXBsYXkucGxheWVyLmdldEJvYXJkKCkpO1xuICAgICAgICAgICAgVmlldy5kaXNwbGF5RW5lbXlNb3ZlUmVzdWx0KHJvdywgY29sLCBpc1N1Y2Nlc3MpO1xuICAgICAgICAgICAgVmlldy5kaXNwbGF5UmVtYWluaW5nUGxheWVyU2hpcHMoR2FtZXBsYXkucGxheWVyLmdldFJlbWFpbmluZ1NoaXBzKCkpO1xuICAgICAgICAgICAgaWYgKEdhbWVwbGF5LnBsYXllci5pc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgICAgICBWaWV3LmRpc3BsYXlFbmVteVdpbigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgVmlldy5kaXNwbGF5UGxheWVyVHVybigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIH1cblxuICAgIGdldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICB9XG5cbiAgICBjbGVhckJvYXJkKCkge1xuICAgICAgICB0aGlzLmJvYXJkLmNsZWFyQm9hcmQoKTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXBzKGNvb3JkQXJyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucGxhY2VTaGlwKC4uLmNvb3JkQXJyW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICB9XG5cbiAgICBtYWtlTW92ZShyb3csIGNvbCwgZW5lbXlCb2FyZCkge1xuICAgICAgICBlbmVteUJvYXJkLnJlY2lldmVBdHRhY2socm93LCBjb2wpO1xuICAgICAgICBpZiAoZW5lbXlCb2FyZC5nZXRQb3NpdGlvbihyb3csIGNvbCkgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0UmVtYWluaW5nU2hpcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldFJlbWFpbmluZ1NoaXBzKCk7XG4gICAgfVxuXG4gICAgaXNHYW1lT3ZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuaXNHYW1lT3ZlcigpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy50aW1lc0hpdCA9IDA7XG4gICAgfVxuXG4gICAgaGl0ID0gKCkgPT4gKyt0aGlzLnRpbWVzSGl0O1xuXG4gICAgaXNTdW5rID0gKCkgPT4gdGhpcy50aW1lc0hpdCA+PSB0aGlzLmxlbmd0aDtcbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi4vbW9kZWwvZ2FtZWJvYXJkJztcbmltcG9ydCBTaGlwIGZyb20gJy4uL21vZGVsL3NoaXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgICBzdGF0aWMgZ2VuZXJhdGVCb2FyZChpZCwgYm9hcmQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IGFyckJvYXJkID0gYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmRhdGFzZXQucm93ID0gcm93O1xuICAgICAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LmNvbCA9IGNvbDtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT09ICcjcGxheWVyLWJvYXJkJyAmJiBhcnJCb2FyZFtyb3ddW2NvbF0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2VuZXJhdGVQbGF5ZXJCb2FyZChib2FyZCkge1xuICAgICAgICBWaWV3LmdlbmVyYXRlQm9hcmQoJyNwbGF5ZXItYm9hcmQnLCBib2FyZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlRW5lbXlCb2FyZChib2FyZCkge1xuICAgICAgICBWaWV3LmdlbmVyYXRlQm9hcmQoJyNlbmVteS1ib2FyZCcsIGJvYXJkKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheVJlbWFpbmluZ0VuZW15U2hpcHMoYW1vdW50KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmVteS1jYXB0aW9uIC51bnNpbmtlZC1zaGlwcycpLnRleHRDb250ZW50ID0gYW1vdW50O1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5UmVtYWluaW5nUGxheWVyU2hpcHMoYW1vdW50KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItY2FwdGlvbiAudW5zaW5rZWQtc2hpcHMnKS50ZXh0Q29udGVudCA9IGFtb3VudDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmluZFNxdWFyZShyb3csIGNvbCwgaWQpIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtpZH0gLnNxdWFyZWApLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNxdWFyZS5kYXRhc2V0LnJvdyA9PT0gcm93ICYmIHNxdWFyZS5kYXRhc2V0LmNvbCA9PT0gY29sKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gc3F1YXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheVBsYXllck1vdmVSZXN1bHQocm93LCBjb2wsIGlzU3VjY2Vzcykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSB0aGlzLmZpbmRTcXVhcmUocm93LCBjb2wsICcjZW5lbXktYm9hcmQnKTtcbiAgICAgICAgaWYgKGlzU3VjY2Vzcykge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1oaXQnKTtcbiAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSAnPHNwYW4+WDwvc3Bhbj4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9ICc8c3Bhbj4qPC9zcGFuPic7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheUVuZW15TW92ZVJlc3VsdChyb3csIGNvbCwgaXNTdWNjZXNzKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuZmluZFNxdWFyZShyb3cudG9TdHJpbmcoKSwgY29sLnRvU3RyaW5nKCksICcjcGxheWVyLWJvYXJkJyk7XG4gICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1oaXQnKTtcbiAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSAnPHNwYW4+WDwvc3Bhbj4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9ICc8c3Bhbj4qPC9zcGFuPic7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUmVkQmxpbmtpbmcoKSB7XG4gICAgICAgIGNvbnN0IGNhcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1jYXB0aW9uJyk7XG4gICAgICAgIGNhcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnZ3JlZW4tYmxpbmsnKTtcbiAgICAgICAgY2FwdGlvbi5jbGFzc0xpc3QuYWRkKCdyZWQtYmxpbmsnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkR3JlZW5CbGlua2luZygpIHtcbiAgICAgICAgY29uc3QgY2FwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLWNhcHRpb24nKTtcbiAgICAgICAgY2FwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZWQtYmxpbmsnKTtcbiAgICAgICAgY2FwdGlvbi5jbGFzc0xpc3QuYWRkKCdncmVlbi1ibGluaycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5UGxheWVyVHVybigpIHtcbiAgICAgICAgVmlldy5hZGRHcmVlbkJsaW5raW5nKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLWNhcHRpb24nKS50ZXh0Q29udGVudCA9ICdZb3VyIFR1cm4hJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheUVuZW15VHVybigpIHtcbiAgICAgICAgVmlldy5hZGRSZWRCbGlua2luZygpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1jYXB0aW9uJykudGV4dENvbnRlbnQgPSAnRW5lbXlcXCdzIFR1cm4hJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheVBsYXllcldpbigpIHtcbiAgICAgICAgVmlldy5hZGRHcmVlbkJsaW5raW5nKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLWNhcHRpb24nKS50ZXh0Q29udGVudCA9ICdZb3VyIFdvbiEnO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5RW5lbXlXaW4oKSB7XG4gICAgICAgIFZpZXcuYWRkUmVkQmxpbmtpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtY2FwdGlvbicpLnRleHRDb250ZW50ID0gJ1lvdSBMb3N0Li4uJztcbiAgICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250LzA0Ql8zMF9fLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuXG4gICAgZm9udC1mYW1pbHk6ICdkZWZhdWx0JztcbiAgXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuXG4gICAgc3R5bGU6IG5vcm1hbDtcblxuICAgIHdlaWdodDogNjAwO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdkZWZhdWx0Jywgc2Fucy1zZXJpZjtcbn1cblxuOnJvb3Qge1xuICAgIC0tZm9udC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjM2QzZDNkO1xuICAgIC0tcHJpbWFyeS1jb2xvcjogIzMwMzAzMDtcbiAgICAtLWdyZWVuOiAjMmJjNTU3O1xuICAgIC0tcmVkOiAjZTIzNjM2O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI25ldy1nYW1lIHtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuI25ldy1nYW1lOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNXB4KTtcbn1cblxubWFpbntcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcilcbn1cblxuLm1haW4tY29udGFpbmVyLCAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggMWZyO1xuICAgIGdhcDogOHB4O1xufVxuXG4uYm9hcmQgLmNvbHVtbnMge1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib2FyZCAucm93cyB7XG4gICAgXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQge1xuICAgIGJvcmRlcjogNHB4ICMwMDJjNjYgc29saWQ7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBncmlkLXJvdzogMi8zO1xufVxuXG4jZ2FtZS1jYXB0aW9uIHtcbiAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcbn1cblxuI2dhbWUtY2FwdGlvbiB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcGxheWVyLWNhcHRpb24sICNlbmVteS1jYXB0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuI3BsYXllci1jYXB0aW9uLCAjcGxheWVyLWNhcHRpb24+aHIge1xuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XG59XG5cbiNlbmVteS1jYXB0aW9uLCAjZW5lbXktY2FwdGlvbj5ociB7XG4gICAgY29sb3I6IHZhcigtLXJlZCk7XG59XG5cbmhyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc3F1YXJlIHtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogMi41cmVtO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIFxufVxuXG4jZW5lbXktYm9hcmQgLnNxdWFyZSwgI3BsYXllci1ib2FyZCAuc3F1YXJlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuI2VuZW15LWJvYXJkIC5lbXB0eSB7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG5cbiNlbmVteS1ib2FyZCAuZW1wdHk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA1MiwgMTgwKTtcbn1cblxuI2VuZW15LWJvYXJkIC5taXNzIHNwYW4sICNwbGF5ZXItYm9hcmQgLm1pc3Mgc3BhbntcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDVweDtcbn1cblxuLmVtcHR5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM4OWRhO1xuXG59XG5cbi5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xufVxuXG4uc2hpcC1oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjM2MzY7XG59XG5cbi5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM4OWRhO1xufVxuXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJjNjY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDVweCA1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5jYXB0aW9uLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQGtleWZyYW1lcyBibGlua2luZy1yZWQge1xuICAgIDAlIHtcbiAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjRkZGO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcmVkKTtcbiAgICB9XG59XG5cbi5yZWQtYmxpbmsge1xuICAgIGFuaW1hdGlvbjogYmxpbmtpbmctcmVkIDFzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5raW5nLWdyZWVuIHtcbiAgICAwJSB7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGRjtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICAgIH1cbn1cblxuLmdyZWVuLWJsaW5rIHtcbiAgICBhbmltYXRpb246IGJsaW5raW5nLWdyZWVuIDFzIGluZmluaXRlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXG4gICAgLm1haW4tY29udGFpbmVyLCAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5zcXVhcmUge1xuICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcbiAgICAgICAgd2lkdGg6IDEuOHJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgfVxuXG4gICAgbWFpbiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTVweDtcbiAgICB9XG5cbiAgICAjZW5lbXktYm9hcmQgLm1pc3Mgc3BhbiwgI3BsYXllci1ib2FyZCAubWlzcyBzcGFue1xuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC0xMHB4O1xuICAgIH1cbiAgICBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICoge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgLmNvbHVtbnMgc3BhbiwgLnJvd3Mgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxuXG4gICAgLmJvYXJkIHtcbiAgICAgICAgZ2FwOiAycHg7XG4gICAgfVxuXG4gICAgLnNxdWFyZSB7XG4gICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcblxuICAgIH1cblxuICAgICNuZXctZ2FtZSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG5cbiAgICAjZW5lbXktYm9hcmQgLm1pc3Mgc3BhbiwgICNwbGF5ZXItYm9hcmQgLm1pc3Mgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7O0lBRUksc0JBQXNCOztJQUV0QiwrREFBa0Q7O0lBRWxELGFBQWE7O0lBRWIsV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQywwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCOztBQUVsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSTtNQUNFLFdBQVc7TUFDWCxrQkFBa0I7SUFDcEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQiwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTs7SUFFSTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxhQUFhO1FBQ2IsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGFBQWE7SUFDakI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7O0lBRW5COztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzUwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuQGZvbnQtZmFjZSB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnZGVmYXVsdCc7XFxuICBcXG4gICAgc3JjOiB1cmwoJy4vZm9udC8wNEJfMzBfXy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuXFxuICAgIHN0eWxlOiBub3JtYWw7XFxuXFxuICAgIHdlaWdodDogNjAwO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ2RlZmF1bHQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZm9udC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzNkM2QzZDtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMzAzMDMwO1xcbiAgICAtLWdyZWVuOiAjMmJjNTU3O1xcbiAgICAtLXJlZDogI2UyMzYzNjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3LWdhbWUge1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNuZXctZ2FtZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01cHgpO1xcbn1cXG5cXG5tYWlue1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpXFxufVxcblxcbi5tYWluLWNvbnRhaW5lciwgLmhlYWRlci1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjBweCAxZnI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uYm9hcmQgLmNvbHVtbnMge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIC5yb3dzIHtcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQge1xcbiAgICBib3JkZXI6IDRweCAjMDAyYzY2IHNvbGlkO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4jZ2FtZS1jYXB0aW9uIHtcXG4gICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxufVxcblxcbiNnYW1lLWNhcHRpb24ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllci1jYXB0aW9uLCAjZW5lbXktY2FwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuI3BsYXllci1jYXB0aW9uLCAjcGxheWVyLWNhcHRpb24+aHIge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4jZW5lbXktY2FwdGlvbiwgI2VuZW15LWNhcHRpb24+aHIge1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuaHIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIFxcbn1cXG5cXG4jZW5lbXktYm9hcmQgLnNxdWFyZSwgI3BsYXllci1ib2FyZCAuc3F1YXJlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuI2VuZW15LWJvYXJkIC5lbXB0eSB7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4jZW5lbXktYm9hcmQgLmVtcHR5OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDUyLCAxODApO1xcbn1cXG5cXG4jZW5lbXktYm9hcmQgLm1pc3Mgc3BhbiwgI3BsYXllci1ib2FyZCAubWlzcyBzcGFue1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNXB4O1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM4OWRhO1xcblxcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XFxufVxcblxcbi5zaGlwLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjM2MzY7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzODlkYTtcXG59XFxuXFxuI3BsYXllci1ib2FyZCwgI2VuZW15LWJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmM2NjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1cHggNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5jYXB0aW9uLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5raW5nLXJlZCB7XFxuICAgIDAlIHtcXG4gICAgICBjb2xvcjogI0ZGRjtcXG4gICAgICBib3JkZXItY29sb3I6ICNGRkY7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgfVxcbn1cXG5cXG4ucmVkLWJsaW5rIHtcXG4gICAgYW5pbWF0aW9uOiBibGlua2luZy1yZWQgMXMgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmtpbmctZ3JlZW4ge1xcbiAgICAwJSB7XFxuICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjRkZGO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICB9XFxufVxcblxcbi5ncmVlbi1ibGluayB7XFxuICAgIGFuaW1hdGlvbjogYmxpbmtpbmctZ3JlZW4gMXMgaW5maW5pdGU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuXFxuICAgIC5tYWluLWNvbnRhaW5lciwgLmhlYWRlci1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnNxdWFyZSB7XFxuICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjhyZW07XFxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgfVxcblxcbiAgICBtYWluIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTVweDtcXG4gICAgfVxcblxcbiAgICAjZW5lbXktYm9hcmQgLm1pc3Mgc3BhbiwgI3BsYXllci1ib2FyZCAubWlzcyBzcGFue1xcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IC0xMHB4O1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgICoge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5jb2x1bW5zIHNwYW4sIC5yb3dzIHNwYW57XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgfVxcblxcbiAgICAuYm9hcmQge1xcbiAgICAgICAgZ2FwOiAycHg7XFxuICAgIH1cXG5cXG4gICAgLnNxdWFyZSB7XFxuICAgICAgICBoZWlnaHQ6IDFyZW07XFxuICAgICAgICB3aWR0aDogMXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgfVxcblxcbiAgICAjbmV3LWdhbWUge1xcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgfVxcblxcbiAgICAjZW5lbXktYm9hcmQgLm1pc3Mgc3BhbiwgICNwbGF5ZXItYm9hcmQgLm1pc3Mgc3BhbntcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci9jb250cm9sbGVyJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5Db250cm9sbGVyLmF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOlsiR2FtZXBsYXkiLCJDb250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJhdHRhY2hFdmVudExpc3RlbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydE5ld0dhbWUiLCJhdHRhY2hTcXVhcmVFdmVudExpc3RlbmVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic3F1YXJlIiwiZSIsInRhcmdldCIsInRleHRDb250ZW50IiwicGxheWVyTWFrZXNNb3ZlIiwiZGF0YXNldCIsInJvdyIsImNvbCIsInN0YXJ0R2FtZSIsImRlZmF1bHQiLCJFbmVteUxvZ2ljIiwicGxheWVyIiwibW92ZXNEb25lIiwiY2xlYXJNb3ZlcyIsImF0dGFjayIsImVuZW15Qm9hcmQiLCJzaGlwTG9jYXRpb24iLCJmaW5kU2hpcCIsIl9zaGlwTG9jYXRpb24iLCJfc2xpY2VkVG9BcnJheSIsInNoaXBSb3ciLCJzaGlwQ29sIiwibW92ZSIsImNhbGN1bGF0ZU1vdmUiLCJfcmVmIiwiZ2V0UmFuZG9tTW92ZSIsIl9yZWYyIiwiX3RoaXMkZ2V0UmFuZG9tTW92ZSIsIl90aGlzJGdldFJhbmRvbU1vdmUyIiwiaXNTdWNjZXNzIiwibWFrZU1vdmUiLCJpc01vdmVEb25lQmVmb3JlIiwibGVuZ3RoIiwiZ2V0UG9zaXRpb24iLCJpc1N1bmsiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJTaGlwIiwiR2FtZWJvYXJkIiwiYm9hcmQiLCJzaGlwcyIsImdldEJvYXJkIiwiY2xlYXJCb2FyZCIsInBsYWNlU2hpcCIsIm9yaWVudGF0aW9uIiwibmV3U2hpcCIsInB1c2giLCJpIiwiZG9lc05vdEhhdmVBZGpTaGlwcyIsInBsYWNlU2hpcHNSYW5kb21seSIsIl90aGlzIiwic2hpcExlbmd0aHMiLCJvcmllbnRhdGlvbnMiLCJyYW5kb21Sb3ciLCJyYW5kb21Db2wiLCJyYW5kb21PcmllbnQiLCJyZWNpZXZlQXR0YWNrIiwiaGl0IiwiZ2V0UmVtYWluaW5nU2hpcHMiLCJyZWR1Y2UiLCJ0b3RhbCIsInNoaXAiLCJpc0dhbWVPdmVyIiwiVmlldyIsIlBsYXllciIsImVuZW15IiwiZW5lbXlBSSIsImdlbmVyYXRlUGxheWVyQm9hcmQiLCJnZW5lcmF0ZUVuZW15Qm9hcmQiLCJkaXNwbGF5UmVtYWluaW5nRW5lbXlTaGlwcyIsImRpc3BsYXlSZW1haW5pbmdQbGF5ZXJTaGlwcyIsImRpc3BsYXlQbGF5ZXJUdXJuIiwiZGlzcGxheVBsYXllck1vdmVSZXN1bHQiLCJkaXNwbGF5UGxheWVyV2luIiwiZGlzcGxheUVuZW15VHVybiIsInNldFRpbWVvdXQiLCJlbmVteU1ha2VzTW92ZSIsIl9HYW1lcGxheSRlbmVteUFJJGF0dCIsIl9HYW1lcGxheSRlbmVteUFJJGF0dDIiLCJkaXNwbGF5RW5lbXlNb3ZlUmVzdWx0IiwiZGlzcGxheUVuZW15V2luIiwiX2RlZmluZVByb3BlcnR5IiwicGxhY2VTaGlwcyIsImNvb3JkQXJyIiwiX3RoaXMkYm9hcmQiLCJhcHBseSIsIl90b0NvbnN1bWFibGVBcnJheSIsInRpbWVzSGl0IiwiZ2VuZXJhdGVCb2FyZCIsImlkIiwiaW5uZXJIVE1MIiwiYXJyQm9hcmQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJhbW91bnQiLCJmaW5kU3F1YXJlIiwicmVzdWx0IiwiY29uY2F0IiwicmVtb3ZlIiwidG9TdHJpbmciLCJhZGRSZWRCbGlua2luZyIsImNhcHRpb24iLCJhZGRHcmVlbkJsaW5raW5nIl0sInNvdXJjZVJvb3QiOiIifQ==