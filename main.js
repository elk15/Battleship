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
/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/view */ "./src/view/view.js");
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
      _view_view__WEBPACK_IMPORTED_MODULE_1__["default"].generateBoard('#place-ships-board');
      document.querySelector('#new-game').addEventListener('click', function () {
        Controller.startNewGame();
      });
      document.querySelector('#play-again-btn').addEventListener('click', function () {
        Controller.startNewGame();
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
      Controller.attachSquareEventListeners();
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
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].hideOverlay();
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].hidePlayAgain();
    }
  }, {
    key: "playerMakesMove",
    value: function playerMakesMove(row, col) {
      var isSuccess = Gameplay.player.makeMove(row, col, Gameplay.enemy.getBoard());
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayPlayerMoveResult(row, col, isSuccess);
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayRemainingEnemyShips(this.enemy.getRemainingShips());
      if (Gameplay.enemy.isGameOver()) {
        _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayPlayerWin();
        _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].showOverlay();
        _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].showPlayAgain('p');
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
          _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].showOverlay();
          _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].showPlayAgain('e');
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
    value: function generateBoard(id) {
      var board = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      document.querySelector(id).innerHTML = '';
      for (var row = 0; row < 10; row++) {
        for (var col = 0; col < 10; col++) {
          var square = document.createElement('div');
          square.classList.add('square');
          square.dataset.row = row;
          square.dataset.col = col;
          if (id === '#player-board' && board.getBoard()[row][col] !== '') {
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
  }, {
    key: "hideOverlay",
    value: function hideOverlay() {
      document.querySelector('#overlay').classList.add('hidden');
    }
  }, {
    key: "showOverlay",
    value: function showOverlay() {
      document.querySelector('#overlay').classList.remove('hidden');
    }
  }, {
    key: "showPlayAgain",
    value: function showPlayAgain(winner) {
      document.querySelector('#play-again').classList.remove('hidden');
      var text = winner === 'p' ? 'You won :)' : 'You lost :(';
      document.querySelector('#play-again #result-msg').textContent = text;
    }
  }, {
    key: "hidePlayAgain",
    value: function hidePlayAgain() {
      document.querySelector('#play-again').classList.add('hidden');
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

#player-board, #enemy-board, #place-ships-board {
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

#player-board, #enemy-board, #place-ships-board {
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

#overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
}

.hidden {
    visibility: hidden;
}

#play-again {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    min-height: 100%;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
}

.play-again-wrapper {
    color: var(--font-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-size: 1.5rem;
}

.play-again-wrapper button {
    width: 70%;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 10px;
    background-color: var(--secondary-color);
    border: none;
    color: var(--font-color);
    border-radius: 10px;
}

#place-ships {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    display: flex;
    justify-content: center;
}

.place-ships-wrapper {
    background-color: var(--primary-color);
    margin-top: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
    color: var(--font-color);
    max-height: 800px;
}

button {
    background: none;
    color: var(--font-color);
    border: none;
    cursor: pointer;
}

button:hover{
    color: var(--green);
}

.place-ships-wrapper button {
    font-size: 1.2rem;
}

.place-ships-wrapper .buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.lightbulb svg{
  fill: yellow;
  width: 30px;
}

.instructions {
    display: flex;
    gap: 10px;
    align-items: center;
}

.instructions .bullets {
    display: flex;
    flex-direction: column;
    gap: 10px;
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

    .play-again-wrapper button {
        width: 100%;
    }

    .place-ships-wrapper {
        width: 100%;
        height: 100%;
        margin-top: 0;
    }

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap');\n\n\n@font-face {\n\n    font-family: 'default';\n  \n    src: url('./font/04B_30__.ttf') format('truetype');\n\n    style: normal;\n\n    weight: 600;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    list-style: none;\n    font-family: 'default', sans-serif;\n}\n\n:root {\n    --font-color: rgb(233, 233, 233);\n    --secondary-color: #3d3d3d;\n    --primary-color: #303030;\n    --green: #2bc557;\n    --red: #e23636;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nheader {\n    background-color: var(--secondary-color);\n    color: var(--font-color);\n    display: flex;\n    justify-content: center;\n    padding: 25px;\n    font-size: 1.2rem;\n}\n\n.header-container {\n    align-items: center;\n}\n\n#new-game {\n    padding: 10px 30px;\n    font-size: 1.4rem;\n    color: var(--font-color);\n    border: none;\n    border-radius: 5px;\n    background-color: var(--primary-color);\n    cursor: pointer;\n    transition: transform 200ms ease-in-out;\n}\n\n#new-game:hover {\n    transform: translate(0, -5px);\n}\n\nmain{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    padding-top: 50px;\n    background-color: var(--primary-color)\n}\n\n.main-container, .header-container {\n    width: 1000px;\n    display: flex;\n}\n\n.header-container {\n    justify-content: space-between;\n\n}\n\n.main-container {\n    justify-content: center;\n    gap: 20px;\n    color: var(--font-color);\n    height: 100%;\n}\n\n\n\n.board {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    grid-template-rows: 20px 1fr;\n    gap: 8px;\n}\n\n.board .columns {\n    grid-row: 1/2;\n    grid-column: 2/3;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.board .rows {\n    \n    grid-column: 1/2;\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n#player-board, #enemy-board, #place-ships-board {\n    border: 4px #002c66 solid;\n    grid-column: 2/3;\n    grid-row: 2/3;\n}\n\n#game-caption {\n    border: 2px black solid;\n}\n\n#game-caption {\n    padding: 15px;\n    width: 200px;\n    text-align: center;\n}\n\n#player-caption, #enemy-caption {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 1.2rem;\n    padding-top: 10px;\n}\n\n#player-caption, #player-caption>hr {\n    color: var(--green);\n}\n\n#enemy-caption, #enemy-caption>hr {\n    color: var(--red);\n}\n\nhr {\n    width: 100%;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.square {\n    height: 2.5rem;\n    width: 2.5rem;\n    font-size: 2.5rem;\n    \n}\n\n#enemy-board .square, #player-board .square {\n    text-align: center;\n    position: relative;\n    cursor: default;\n}\n\n#enemy-board .empty {\n    cursor: crosshair;\n}\n\n#enemy-board .empty:hover{\n    background-color: rgb(87, 52, 180);\n}\n\n#enemy-board .miss span, #player-board .miss span{\n    font-size: 4rem;\n    position: absolute;\n    left: 5px;\n}\n\n.empty {\n    background-color: #2389da;\n\n}\n\n.ship {\n    background-color: #808080;\n}\n\n.ship-hit {\n    background-color: #e23636;\n}\n\n.miss {\n    background-color: #2389da;\n}\n\n#player-board, #enemy-board, #place-ships-board {\n    background-color: #002c66;\n    display: grid;\n    gap: 5px 5px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.caption-wrapper {\n    display: flex;\n    align-items: center;\n}\n\n#overlay {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 2;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n#play-again {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    min-height: 100%;\n    z-index: 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.play-again-wrapper {\n    color: var(--font-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    font-size: 1.5rem;\n}\n\n.play-again-wrapper button {\n    width: 70%;\n    font-size: 1.2rem;\n    cursor: pointer;\n    padding: 10px;\n    background-color: var(--secondary-color);\n    border: none;\n    color: var(--font-color);\n    border-radius: 10px;\n}\n\n#place-ships {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 3;\n    display: flex;\n    justify-content: center;\n}\n\n.place-ships-wrapper {\n    background-color: var(--primary-color);\n    margin-top: 10px;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    padding: 0 10px;\n    color: var(--font-color);\n    max-height: 800px;\n}\n\nbutton {\n    background: none;\n    color: var(--font-color);\n    border: none;\n    cursor: pointer;\n}\n\nbutton:hover{\n    color: var(--green);\n}\n\n.place-ships-wrapper button {\n    font-size: 1.2rem;\n}\n\n.place-ships-wrapper .buttons {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n\n.lightbulb svg{\n  fill: yellow;\n  width: 30px;\n}\n\n.instructions {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n\n.instructions .bullets {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n@keyframes blinking-red {\n    0% {\n      color: #FFF;\n      border-color: #FFF;\n    }\n    100% {\n        color: var(--red);\n        border-color: var(--red);\n    }\n}\n\n.red-blink {\n    animation: blinking-red 1s infinite;\n}\n\n@keyframes blinking-green {\n    0% {\n      color: #FFF;\n      border-color: #FFF;\n    }\n    100% {\n        color: var(--green);\n        border-color: var(--green);\n    }\n}\n\n.green-blink {\n    animation: blinking-green 1s infinite;\n}\n\n@media only screen and (max-width: 1000px) {\n\n    .main-container, .header-container {\n        width: 100%;\n    }\n\n    .square {\n        height: 1.8rem;\n        width: 1.8rem;\n        font-size: 1.8rem;\n    }\n\n    main {\n        padding-top: 10px;\n    }\n\n    .main-container {\n        flex-direction: column;\n        align-items: center;\n        gap: 15px;\n    }\n\n    #enemy-board .miss span, #player-board .miss span{\n        font-size: 2.2rem;\n        position: absolute;\n        bottom: -10px;\n    }\n    \n}\n\n@media only screen and (max-width: 500px) {\n    * {\n        font-size: 1rem;\n    }\n\n    .columns span, .rows span{\n        font-size: 0.8rem;\n    }\n\n    .board {\n        gap: 2px;\n    }\n\n    .square {\n        height: 1rem;\n        width: 1rem;\n        font-size: 1rem;\n\n    }\n\n    #new-game {\n        padding: 5px 20px;\n        font-size: 0.9rem;\n    }\n\n    #enemy-board .miss span,  #player-board .miss span{\n        font-size: 2rem;\n        position: static;\n    }\n\n    .play-again-wrapper button {\n        width: 100%;\n    }\n\n    .place-ships-wrapper {\n        width: 100%;\n        height: 100%;\n        margin-top: 0;\n    }\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQzNDO0VBQ0w7RUFBQ3hCLFlBQUEsQ0FBQXNCLFVBQUE7SUFBQXJCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1QixXQUFBLEVBQWE7TUFDVCxJQUFJLENBQUNELFNBQVMsR0FBRyxDQUNiLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVB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QUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDM0M7TUFDRCxJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO0lBQ25CO0VBQUM7SUFBQXBELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFzRCxVQUFVWixNQUFNLEVBQUUxQixHQUFHLEVBQUVDLEdBQUcsRUFBRXNDLFdBQVcsRUFBRTtNQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDTCxLQUFLLENBQUNsQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVkrQiw2Q0FBSSxDQUFDLEVBQUU7UUFDekMsSUFBTVEsT0FBTyxHQUFHLElBQUlSLDZDQUFJLENBQUNOLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUNTLEtBQUssQ0FBQ00sSUFBSSxDQUFDRCxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDTixLQUFLLENBQUNsQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLEdBQUd1QyxPQUFPO1FBQzlCLElBQUlELFdBQVcsS0FBSyxHQUFHLEVBQUU7VUFDckIsS0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdoQixNQUFNLEVBQUVnQixDQUFDLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUNSLEtBQUssQ0FBQ2xDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEdBQUd5QyxDQUFDLENBQUMsR0FBR0YsT0FBTztVQUN0QztRQUNKLENBQUMsTUFBTTtVQUNILEtBQUssSUFBSUUsRUFBQyxHQUFHLENBQUMsRUFBRUEsRUFBQyxHQUFHaEIsTUFBTSxFQUFFZ0IsRUFBQyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDUixLQUFLLENBQUNsQyxHQUFHLEdBQUcwQyxFQUFDLENBQUMsQ0FBQ3pDLEdBQUcsQ0FBQyxHQUFHdUMsT0FBTztVQUN0QztRQUNKO01BQ0o7SUFDSjtFQUFDO0lBQUF6RCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMkQsb0JBQW9CakIsTUFBTSxFQUFFMUIsR0FBRyxFQUFFQyxHQUFHLEVBQUVzQyxXQUFXLEVBQUU7TUFDL0MsSUFBSUEsV0FBVyxLQUFLLEdBQUcsRUFBRTtRQUNyQjtRQUNBO1FBQ0EsSUFBSXRDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDaUMsS0FBSyxDQUFDbEMsR0FBRyxDQUFDLENBQUNDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLO1FBQzVELEtBQUssSUFBSXlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2hCLE1BQU0sRUFBRWdCLENBQUMsRUFBRSxFQUFFO1VBQzdCO1VBQ0EsSUFBSTFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDa0MsS0FBSyxDQUFDbEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxHQUFHLEdBQUd5QyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLO1VBQ2hFO1VBQ0EsSUFBSTFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDa0MsS0FBSyxDQUFDbEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxHQUFHLEdBQUd5QyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLO1FBQ3BFO1FBQ0E7UUFDQSxJQUFLekMsR0FBRyxHQUFHeUIsTUFBTSxHQUFJLEVBQUUsSUFBSSxJQUFJLENBQUNRLEtBQUssQ0FBQ2xDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEdBQUd5QixNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLO01BQ2pGLENBQUMsTUFBTTtRQUNIO1FBQ0E7UUFDQSxJQUFJMUIsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNrQyxLQUFLLENBQUNsQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUs7UUFDNUQsS0FBSyxJQUFJeUMsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxHQUFHaEIsTUFBTSxFQUFFZ0IsR0FBQyxFQUFFLEVBQUU7VUFDN0I7VUFDQSxJQUFJekMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNpQyxLQUFLLENBQUNsQyxHQUFHLEdBQUcwQyxHQUFDLENBQUMsQ0FBQ3pDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLO1VBQ2hFO1VBQ0EsSUFBSUEsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNpQyxLQUFLLENBQUNsQyxHQUFHLEdBQUcwQyxHQUFDLENBQUMsQ0FBQ3pDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLO1FBQ3BFO1FBQ0E7UUFDQSxJQUFLRCxHQUFHLEdBQUcwQixNQUFNLEdBQUksRUFBRSxJQUFJLElBQUksQ0FBQ1EsS0FBSyxDQUFDbEMsR0FBRyxHQUFHMEIsTUFBTSxDQUFDLENBQUN6QixHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLO01BQ2pGO01BQ0EsT0FBTyxJQUFJO0lBQ2Y7RUFBQztJQUFBbEIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTRELG1CQUFBLEVBQXFCO01BQUEsSUFBQUMsS0FBQTtNQUNqQixJQUFNQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQzVDLElBQU1DLFlBQVksR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7TUFDL0JELFdBQVcsQ0FBQ3JELE9BQU8sQ0FBQyxVQUFDaUMsTUFBTSxFQUFLO1FBQzVCLElBQUlzQixTQUFTO1FBQ2IsSUFBSUMsU0FBUztRQUNiLElBQUlDLFlBQVk7UUFDaEIsT0FBTyxJQUFJLEVBQUU7VUFDVEYsU0FBUyxHQUFHbkIsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7VUFDMUNrQixTQUFTLEdBQUdwQixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztVQUMxQ21CLFlBQVksR0FBR0gsWUFBWSxDQUFDbEIsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztVQUMxRCxJQUFJbUIsWUFBWSxLQUFLLEdBQUcsSUFBS0YsU0FBUyxHQUFHdEIsTUFBTSxHQUFHLENBQUMsR0FBSSxDQUFDLEVBQUU7VUFDMUQsSUFBSXdCLFlBQVksS0FBSyxHQUFHLElBQUtELFNBQVMsR0FBR3ZCLE1BQU0sR0FBRyxDQUFDLEdBQUksQ0FBQyxFQUFFO1VBQzFELElBQUttQixLQUFJLENBQUNsQixXQUFXLENBQUNxQixTQUFTLEVBQUVDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFDL0NKLEtBQUksQ0FBQ0YsbUJBQW1CLENBQUNqQixNQUFNLEVBQUVzQixTQUFTLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEVBQUU7WUFDckU7VUFDSjtRQUNKO1FBQ0FMLEtBQUksQ0FBQ1AsU0FBUyxDQUFDWixNQUFNLEVBQUVzQixTQUFTLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxDQUFDO01BQzlELENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQW5FLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEyQyxZQUFZM0IsR0FBRyxFQUFFQyxHQUFHLEVBQUU7TUFDbEIsT0FBTyxJQUFJLENBQUNpQyxLQUFLLENBQUNsQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDO0lBQy9CO0VBQUM7SUFBQWxCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtRSxjQUFjbkQsR0FBRyxFQUFFQyxHQUFHLEVBQUU7TUFDcEIsSUFBSSxJQUFJLENBQUNpQyxLQUFLLENBQUNsQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVkrQiw2Q0FBSSxFQUFFO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUNFLEtBQUssQ0FBQ2xDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQzJCLE1BQU0sQ0FBQyxDQUFDLEVBQUU7VUFDaEMsSUFBSSxDQUFDTSxLQUFLLENBQUNsQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNtRCxHQUFHLENBQUMsQ0FBQztRQUM5QjtNQUNKLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ2xDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDMUMsSUFBSSxDQUFDaUMsS0FBSyxDQUFDbEMsR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxHQUFHLFFBQVE7TUFDbkM7SUFDSjtFQUFDO0lBQUFsQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBcUUsa0JBQUEsRUFBb0I7TUFDaEIsT0FBTyxJQUFJLENBQUNsQixLQUFLLENBQUNtQixNQUFNLENBQUMsVUFBQ0MsS0FBSyxFQUFFQyxJQUFJLEVBQUs7UUFDdEMsSUFBSSxDQUFDQSxJQUFJLENBQUM1QixNQUFNLENBQUMsQ0FBQyxFQUFFO1VBQ2hCMkIsS0FBSyxJQUFJLENBQUM7UUFDZDtRQUNBLE9BQU9BLEtBQUs7TUFDaEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNUO0VBQUM7SUFBQXhFLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5RSxXQUFBLEVBQWE7TUFDVCxLQUFLLElBQUlmLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNQLEtBQUssQ0FBQ1QsTUFBTSxFQUFFZ0IsQ0FBQyxFQUFFLEVBQUU7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQ1AsS0FBSyxDQUFDTyxDQUFDLENBQUMsQ0FBQ2QsTUFBTSxDQUFDLENBQUMsRUFBRTtVQUN6QixPQUFPLEtBQUs7UUFDaEI7TUFDSjtNQUNBLE9BQU8sSUFBSTtJQUNmO0VBQUM7RUFBQSxPQUFBSyxTQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSTJCO0FBQ007QUFDUjtBQUFBLElBRVR2RCxRQUFRO0VBQUEsU0FBQUEsU0FBQTtJQUFBRyxlQUFBLE9BQUFILFFBQUE7RUFBQTtFQUFBSSxZQUFBLENBQUFKLFFBQUE7SUFBQUssR0FBQTtJQUFBQyxLQUFBLEVBT3pCLFNBQUFrQixVQUFBLEVBQW1CO01BQ2Z4QixRQUFRLENBQUMyQixNQUFNLENBQUNnQyxVQUFVLENBQUMsQ0FBQztNQUM1QjNELFFBQVEsQ0FBQ2lGLEtBQUssQ0FBQ3RCLFVBQVUsQ0FBQyxDQUFDO01BQzNCM0QsUUFBUSxDQUFDa0YsT0FBTyxDQUFDckQsVUFBVSxDQUFDLENBQUM7TUFDN0I3QixRQUFRLENBQUMyQixNQUFNLENBQUN1QyxrQkFBa0IsQ0FBQyxDQUFDO01BQ3BDbEUsUUFBUSxDQUFDaUYsS0FBSyxDQUFDZixrQkFBa0IsQ0FBQyxDQUFDO01BQ25DakUsa0RBQUksQ0FBQ2tGLG1CQUFtQixDQUFDLElBQUksQ0FBQ3hELE1BQU0sQ0FBQytCLFFBQVEsQ0FBQyxDQUFDLENBQUM7TUFDaER6RCxrREFBSSxDQUFDbUYsa0JBQWtCLENBQUMsSUFBSSxDQUFDSCxLQUFLLENBQUN2QixRQUFRLENBQUMsQ0FBQyxDQUFDO01BQzlDekQsa0RBQUksQ0FBQ29GLDBCQUEwQixDQUFDLElBQUksQ0FBQ0osS0FBSyxDQUFDTixpQkFBaUIsQ0FBQyxDQUFDLENBQUM7TUFDL0QxRSxrREFBSSxDQUFDcUYsMkJBQTJCLENBQUMsSUFBSSxDQUFDM0QsTUFBTSxDQUFDZ0QsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO01BQ2pFMUUsa0RBQUksQ0FBQ3NGLGlCQUFpQixDQUFDLENBQUM7TUFDeEJ0RixrREFBSSxDQUFDdUYsV0FBVyxDQUFDLENBQUM7TUFDbEJ2RixrREFBSSxDQUFDd0YsYUFBYSxDQUFDLENBQUM7SUFDeEI7RUFBQztJQUFBcEYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWMsZ0JBQXVCRSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtNQUM3QixJQUFNc0IsU0FBUyxHQUFHN0MsUUFBUSxDQUFDMkIsTUFBTSxDQUFDbUIsUUFBUSxDQUFDeEIsR0FBRyxFQUFFQyxHQUFHLEVBQUV2QixRQUFRLENBQUNpRixLQUFLLENBQUN2QixRQUFRLENBQUMsQ0FBQyxDQUFDO01BQy9FekQsa0RBQUksQ0FBQ3lGLHVCQUF1QixDQUFDcEUsR0FBRyxFQUFFQyxHQUFHLEVBQUVzQixTQUFTLENBQUM7TUFDakQ1QyxrREFBSSxDQUFDb0YsMEJBQTBCLENBQUMsSUFBSSxDQUFDSixLQUFLLENBQUNOLGlCQUFpQixDQUFDLENBQUMsQ0FBQztNQUMvRCxJQUFJM0UsUUFBUSxDQUFDaUYsS0FBSyxDQUFDRixVQUFVLENBQUMsQ0FBQyxFQUFFO1FBQzdCOUUsa0RBQUksQ0FBQzBGLGdCQUFnQixDQUFDLENBQUM7UUFDdkIxRixrREFBSSxDQUFDMkYsV0FBVyxDQUFDLENBQUM7UUFDbEIzRixrREFBSSxDQUFDNEYsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUN2QjtNQUNKO01BQ0EsSUFBSSxDQUFDaEQsU0FBUyxFQUFFO1FBQ1o1QyxrREFBSSxDQUFDNkYsZ0JBQWdCLENBQUMsQ0FBQztRQUN2QkMsVUFBVSxDQUFDL0YsUUFBUSxDQUFDZ0csY0FBYyxFQUFFLEdBQUcsQ0FBQztNQUM1QztJQUNKO0VBQUM7SUFBQTNGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEwRixlQUFBLEVBQXdCO01BQ3BCLE9BQU8sSUFBSSxFQUFFO1FBQ1QsSUFBQUMscUJBQUEsR0FBNEJqRyxRQUFRLENBQUNrRixPQUFPLENBQUNwRCxNQUFNLENBQUM5QixRQUFRLENBQUMyQixNQUFNLENBQUMrQixRQUFRLENBQUMsQ0FBQyxDQUFDO1VBQUF3QyxzQkFBQSxHQUFBL0QsY0FBQSxDQUFBOEQscUJBQUE7VUFBMUUzRSxHQUFHLEdBQUE0RSxzQkFBQTtVQUFFM0UsR0FBRyxHQUFBMkUsc0JBQUE7VUFBRXJELFNBQVMsR0FBQXFELHNCQUFBO1FBQ3hCakcsa0RBQUksQ0FBQ2tHLHNCQUFzQixDQUFDN0UsR0FBRyxFQUFFQyxHQUFHLEVBQUVzQixTQUFTLENBQUM7UUFDaEQ1QyxrREFBSSxDQUFDcUYsMkJBQTJCLENBQUN0RixRQUFRLENBQUMyQixNQUFNLENBQUNnRCxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSTNFLFFBQVEsQ0FBQzJCLE1BQU0sQ0FBQ29ELFVBQVUsQ0FBQyxDQUFDLEVBQUU7VUFDOUI5RSxrREFBSSxDQUFDbUcsZUFBZSxDQUFDLENBQUM7VUFDdEJuRyxrREFBSSxDQUFDMkYsV0FBVyxDQUFDLENBQUM7VUFDbEIzRixrREFBSSxDQUFDNEYsYUFBYSxDQUFDLEdBQUcsQ0FBQztVQUN2QjtRQUNKO1FBQ0EsSUFBSSxDQUFDaEQsU0FBUyxFQUFFO1VBQ1o1QyxrREFBSSxDQUFDc0YsaUJBQWlCLENBQUMsQ0FBQztVQUN4QjtRQUNKO01BQ0o7SUFDSjtFQUFDO0VBQUEsT0FBQXZGLFFBQUE7QUFBQTtBQUFBcUcsZUFBQSxDQXREZ0JyRyxRQUFRLFlBQ1QsSUFBSWdGLCtDQUFNLENBQUMsQ0FBQztBQUFBcUIsZUFBQSxDQURYckcsUUFBUSxXQUdWLElBQUlnRiwrQ0FBTSxDQUFDLENBQUM7QUFBQXFCLGVBQUEsQ0FIVnJHLFFBQVEsYUFLUixJQUFJMEIsbURBQVUsQ0FMZDFCLFFBQVEsQ0FLWWlGLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUWDtBQUNWO0FBQUEsSUFFTEQsTUFBTTtFQUN2QixTQUFBQSxPQUFBLEVBQWM7SUFBQTdFLGVBQUEsT0FBQTZFLE1BQUE7SUFDVixJQUFJLENBQUN4QixLQUFLLEdBQUcsSUFBSUQsa0RBQVMsQ0FBQyxDQUFDO0VBQ2hDO0VBQUNuRCxZQUFBLENBQUE0RSxNQUFBO0lBQUEzRSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBb0QsU0FBQSxFQUFXO01BQ1AsT0FBTyxJQUFJLENBQUNGLEtBQUs7SUFDckI7RUFBQztJQUFBbkQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXFELFdBQUEsRUFBYTtNQUNULElBQUksQ0FBQ0gsS0FBSyxDQUFDRyxVQUFVLENBQUMsQ0FBQztJQUMzQjtFQUFDO0lBQUF0RCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBZ0csV0FBV0MsUUFBUSxFQUFFO01BQ2pCLEtBQUssSUFBSXZDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3VDLFFBQVEsQ0FBQ3ZELE1BQU0sRUFBRWdCLENBQUMsRUFBRSxFQUFFO1FBQUEsSUFBQXdDLFdBQUE7UUFDdEMsQ0FBQUEsV0FBQSxPQUFJLENBQUNoRCxLQUFLLEVBQUNJLFNBQVMsQ0FBQTZDLEtBQUEsQ0FBQUQsV0FBQSxFQUFBRSxrQkFBQSxDQUFJSCxRQUFRLENBQUN2QyxDQUFDLENBQUMsRUFBQztNQUN4QztJQUNKO0VBQUM7SUFBQTNELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE0RCxtQkFBQSxFQUFxQjtNQUNqQixJQUFJLENBQUNWLEtBQUssQ0FBQ1Usa0JBQWtCLENBQUMsQ0FBQztJQUNuQztFQUFDO0lBQUE3RCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBd0MsU0FBU3hCLEdBQUcsRUFBRUMsR0FBRyxFQUFFUSxVQUFVLEVBQUU7TUFDM0JBLFVBQVUsQ0FBQzBDLGFBQWEsQ0FBQ25ELEdBQUcsRUFBRUMsR0FBRyxDQUFDO01BQ2xDLElBQUlRLFVBQVUsQ0FBQ2tCLFdBQVcsQ0FBQzNCLEdBQUcsRUFBRUMsR0FBRyxDQUFDLFlBQVkrQiw2Q0FBSSxFQUFFO1FBQ2xELE9BQU8sSUFBSTtNQUNmO01BQ0EsT0FBTyxLQUFLO0lBQ2hCO0VBQUM7SUFBQWpELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFxRSxrQkFBQSxFQUFvQjtNQUNoQixPQUFPLElBQUksQ0FBQ25CLEtBQUssQ0FBQ21CLGlCQUFpQixDQUFDLENBQUM7SUFDekM7RUFBQztJQUFBdEUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXlFLFdBQUEsRUFBYTtNQUNULE9BQU8sSUFBSSxDQUFDdkIsS0FBSyxDQUFDdUIsVUFBVSxDQUFDLENBQUM7SUFDbEM7RUFBQztFQUFBLE9BQUFDLE1BQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3hDZ0IxQixJQUFJLGdCQUFBbEQsWUFBQSxDQUNyQixTQUFBa0QsS0FBWU4sTUFBTSxFQUFFO0VBQUEsSUFBQW1CLEtBQUE7RUFBQWhFLGVBQUEsT0FBQW1ELElBQUE7RUFBQStDLGVBQUEsY0FLZDtJQUFBLE9BQU0sRUFBRWxDLEtBQUksQ0FBQ3dDLFFBQVE7RUFBQTtFQUFBTixlQUFBLGlCQUVsQjtJQUFBLE9BQU1sQyxLQUFJLENBQUN3QyxRQUFRLElBQUl4QyxLQUFJLENBQUNuQixNQUFNO0VBQUE7RUFOdkMsSUFBSSxDQUFDQSxNQUFNLEdBQUdBLE1BQU07RUFDcEIsSUFBSSxDQUFDMkQsUUFBUSxHQUFHLENBQUM7QUFDckIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKc0M7QUFDVjtBQUFBLElBRVoxRyxJQUFJO0VBQUEsU0FBQUEsS0FBQTtJQUFBRSxlQUFBLE9BQUFGLElBQUE7RUFBQTtFQUFBRyxZQUFBLENBQUFILElBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBQ3JCLFNBQUFFLGNBQXFCb0csRUFBRSxFQUFnQjtNQUFBLElBQWRwRCxLQUFLLEdBQUFxRCxTQUFBLENBQUE3RCxNQUFBLFFBQUE2RCxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHLElBQUk7TUFDakNwRyxRQUFRLENBQUNDLGFBQWEsQ0FBQ2tHLEVBQUUsQ0FBQyxDQUFDRyxTQUFTLEdBQUcsRUFBRTtNQUN6QyxLQUFLLElBQUl6RixHQUFHLEdBQUcsQ0FBQyxFQUFFQSxHQUFHLEdBQUcsRUFBRSxFQUFFQSxHQUFHLEVBQUUsRUFBRTtRQUMvQixLQUFLLElBQUlDLEdBQUcsR0FBRyxDQUFDLEVBQUVBLEdBQUcsR0FBRyxFQUFFLEVBQUVBLEdBQUcsRUFBRSxFQUFFO1VBQy9CLElBQU1QLE1BQU0sR0FBR1AsUUFBUSxDQUFDdUcsYUFBYSxDQUFDLEtBQUssQ0FBQztVQUM1Q2hHLE1BQU0sQ0FBQ2lHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztVQUM5QmxHLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7VUFDeEJOLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDRSxHQUFHLEdBQUdBLEdBQUc7VUFDeEIsSUFBSXFGLEVBQUUsS0FBSyxlQUFlLElBQUlwRCxLQUFLLENBQUNFLFFBQVEsQ0FBQyxDQUFDLENBQUNwQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzdEUCxNQUFNLENBQUNpRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7VUFDaEMsQ0FBQyxNQUFNO1lBQ0hsRyxNQUFNLENBQUNpRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7VUFDakM7VUFDQXpHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDa0csRUFBRSxDQUFDLENBQUNPLFdBQVcsQ0FBQ25HLE1BQU0sQ0FBQztRQUNsRDtNQUNKO0lBQ0o7RUFBQztJQUFBWCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNkUsb0JBQTJCM0IsS0FBSyxFQUFFO01BQzlCdkQsSUFBSSxDQUFDTyxhQUFhLENBQUMsZUFBZSxFQUFFZ0QsS0FBSyxDQUFDO0lBQzlDO0VBQUM7SUFBQW5ELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE4RSxtQkFBMEI1QixLQUFLLEVBQUU7TUFDN0J2RCxJQUFJLENBQUNPLGFBQWEsQ0FBQyxjQUFjLEVBQUVnRCxLQUFLLENBQUM7SUFDN0M7RUFBQztJQUFBbkQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQStFLDJCQUFrQytCLE1BQU0sRUFBRTtNQUN0QzNHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdDQUFnQyxDQUFDLENBQUNTLFdBQVcsR0FBR2lHLE1BQU07SUFDakY7RUFBQztJQUFBL0csR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWdGLDRCQUFtQzhCLE1BQU0sRUFBRTtNQUN2QzNHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlDQUFpQyxDQUFDLENBQUNTLFdBQVcsR0FBR2lHLE1BQU07SUFDbEY7RUFBQztJQUFBL0csR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQStHLFdBQWtCL0YsR0FBRyxFQUFFQyxHQUFHLEVBQUVxRixFQUFFLEVBQUU7TUFDNUIsSUFBSVUsTUFBTTtNQUNWN0csUUFBUSxDQUFDSyxnQkFBZ0IsSUFBQXlHLE1BQUEsQ0FBSVgsRUFBRSxhQUFVLENBQUMsQ0FBQzdGLE9BQU8sQ0FBQyxVQUFDQyxNQUFNLEVBQUs7UUFDM0QsSUFBSUEsTUFBTSxDQUFDSyxPQUFPLENBQUNDLEdBQUcsS0FBS0EsR0FBRyxJQUFJTixNQUFNLENBQUNLLE9BQU8sQ0FBQ0UsR0FBRyxLQUFLQSxHQUFHLEVBQUU7VUFDMUQrRixNQUFNLEdBQUd0RyxNQUFNO1FBQ25CO01BQ0osQ0FBQyxDQUFDO01BQ0YsT0FBT3NHLE1BQU07SUFDakI7RUFBQztJQUFBakgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW9GLHdCQUErQnBFLEdBQUcsRUFBRUMsR0FBRyxFQUFFc0IsU0FBUyxFQUFFO01BQ2hELElBQU03QixNQUFNLEdBQUcsSUFBSSxDQUFDcUcsVUFBVSxDQUFDL0YsR0FBRyxFQUFFQyxHQUFHLEVBQUUsY0FBYyxDQUFDO01BQ3hELElBQUlzQixTQUFTLEVBQUU7UUFDWDdCLE1BQU0sQ0FBQ2lHLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNoQ3hHLE1BQU0sQ0FBQ2lHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUNoQ2xHLE1BQU0sQ0FBQytGLFNBQVMsR0FBRyxnQkFBZ0I7TUFDdkMsQ0FBQyxNQUFNO1FBQ0gvRixNQUFNLENBQUMrRixTQUFTLEdBQUcsZ0JBQWdCO1FBQ25DL0YsTUFBTSxDQUFDaUcsU0FBUyxDQUFDTyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2hDeEcsTUFBTSxDQUFDaUcsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ2hDO0lBQ0o7RUFBQztJQUFBN0csR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTZGLHVCQUE4QjdFLEdBQUcsRUFBRUMsR0FBRyxFQUFFc0IsU0FBUyxFQUFFO01BQy9DLElBQU03QixNQUFNLEdBQUcsSUFBSSxDQUFDcUcsVUFBVSxDQUFDL0YsR0FBRyxDQUFDbUcsUUFBUSxDQUFDLENBQUMsRUFBRWxHLEdBQUcsQ0FBQ2tHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDO01BQy9FLElBQUk1RSxTQUFTLEVBQUU7UUFDWDdCLE1BQU0sQ0FBQ2lHLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMvQnhHLE1BQU0sQ0FBQ2lHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUNoQ2xHLE1BQU0sQ0FBQytGLFNBQVMsR0FBRyxnQkFBZ0I7TUFDdkMsQ0FBQyxNQUFNO1FBQ0gvRixNQUFNLENBQUMrRixTQUFTLEdBQUcsZ0JBQWdCO1FBQ25DL0YsTUFBTSxDQUFDaUcsU0FBUyxDQUFDTyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2hDeEcsTUFBTSxDQUFDaUcsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ2hDO0lBQ0o7RUFBQztJQUFBN0csR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW9ILGVBQUEsRUFBd0I7TUFDcEIsSUFBTUMsT0FBTyxHQUFHbEgsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO01BQ3ZEaUgsT0FBTyxDQUFDVixTQUFTLENBQUNPLE1BQU0sQ0FBQyxhQUFhLENBQUM7TUFDdkNHLE9BQU8sQ0FBQ1YsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQ3RDO0VBQUM7SUFBQTdHLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFzSCxpQkFBQSxFQUEwQjtNQUN0QixJQUFNRCxPQUFPLEdBQUdsSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7TUFDdkRpSCxPQUFPLENBQUNWLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLFdBQVcsQ0FBQztNQUNyQ0csT0FBTyxDQUFDVixTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDeEM7RUFBQztJQUFBN0csR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlGLGtCQUFBLEVBQTJCO01BQ3ZCdEYsSUFBSSxDQUFDMkgsZ0JBQWdCLENBQUMsQ0FBQztNQUN2Qm5ILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDUyxXQUFXLEdBQUcsWUFBWTtJQUN0RTtFQUFDO0lBQUFkLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF3RixpQkFBQSxFQUEwQjtNQUN0QjdGLElBQUksQ0FBQ3lILGNBQWMsQ0FBQyxDQUFDO01BQ3JCakgsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUNTLFdBQVcsR0FBRyxnQkFBZ0I7SUFDMUU7RUFBQztJQUFBZCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBcUYsaUJBQUEsRUFBMEI7TUFDdEIxRixJQUFJLENBQUMySCxnQkFBZ0IsQ0FBQyxDQUFDO01BQ3ZCbkgsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUNTLFdBQVcsR0FBRyxXQUFXO0lBQ3JFO0VBQUM7SUFBQWQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThGLGdCQUFBLEVBQXlCO01BQ3JCbkcsSUFBSSxDQUFDeUgsY0FBYyxDQUFDLENBQUM7TUFDckJqSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ1MsV0FBVyxHQUFHLGFBQWE7SUFDdkU7RUFBQztJQUFBZCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBa0YsWUFBQSxFQUFxQjtNQUNqQi9FLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDdUcsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQzlEO0VBQUM7SUFBQTdHLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFzRixZQUFBLEVBQXFCO01BQ2pCbkYsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUN1RyxTQUFTLENBQUNPLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDakU7RUFBQztJQUFBbkgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXVGLGNBQXFCZ0MsTUFBTSxFQUFFO01BQ3pCcEgsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUN1RyxTQUFTLENBQUNPLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDaEUsSUFBTU0sSUFBSSxHQUFHRCxNQUFNLEtBQUssR0FBRyxHQUFHLFlBQVksR0FBRyxhQUFhO01BQzFEcEgsUUFBUSxDQUFDQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQ1MsV0FBVyxHQUFHMkcsSUFBSTtJQUN4RTtFQUFDO0lBQUF6SCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbUYsY0FBQSxFQUF1QjtNQUNuQmhGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDdUcsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ2pFO0VBQUM7RUFBQSxPQUFBakgsSUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSEw7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsK0dBQStHLElBQUksSUFBSSxrQkFBa0I7QUFDekkseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQzs7QUFFbEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLE9BQU8saUZBQWlGLGFBQWEsY0FBYyxZQUFZLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FB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Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBaUQ7QUFDNUI7QUFFckJDLDhEQUFVLENBQUNLLG9CQUFvQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWwvZW5lbXlMb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL2dhbWVwbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWwvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWwvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXcvdmlldy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZXBsYXkgZnJvbSAnLi4vbW9kZWwvZ2FtZXBsYXknO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi4vdmlldy92aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBWaWV3LmdlbmVyYXRlQm9hcmQoJyNwbGFjZS1zaGlwcy1ib2FyZCcpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctZ2FtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgQ29udHJvbGxlci5zdGFydE5ld0dhbWUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXktYWdhaW4tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBDb250cm9sbGVyLnN0YXJ0TmV3R2FtZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXR0YWNoU3F1YXJlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNlbmVteS1ib2FyZCAuc3F1YXJlJykuZm9yRWFjaCgoc3F1YXJlKSA9PiBbXG4gICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgQ29udHJvbGxlci5wbGF5ZXJNYWtlc01vdmUoZS50YXJnZXQuZGF0YXNldC5yb3csIGUudGFyZ2V0LmRhdGFzZXQuY29sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHN0YXJ0TmV3R2FtZSgpIHtcbiAgICAgICAgR2FtZXBsYXkuc3RhcnRHYW1lKCk7XG4gICAgICAgIENvbnRyb2xsZXIuYXR0YWNoU3F1YXJlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGxheWVyTWFrZXNNb3ZlKHJvdywgY29sKSB7XG4gICAgICAgIEdhbWVwbGF5LnBsYXllck1ha2VzTW92ZShyb3csIGNvbCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXlMb2dpYyB7XG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLm1vdmVzRG9uZSA9IFtcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgY2xlYXJNb3ZlcygpIHtcbiAgICAgICAgdGhpcy5tb3Zlc0RvbmUgPSBbXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGF0dGFjayhlbmVteUJvYXJkKSB7XG4gICAgICAgIGxldCByb3cgPSBudWxsO1xuICAgICAgICBsZXQgY29sID0gbnVsbDtcblxuICAgICAgICBsZXQgc2hpcExvY2F0aW9uID0gdGhpcy5maW5kU2hpcChlbmVteUJvYXJkKTtcblxuICAgICAgICBpZiAoc2hpcExvY2F0aW9uKSB7XG4gICAgICAgICAgICBsZXQgW3NoaXBSb3csIHNoaXBDb2xdID0gc2hpcExvY2F0aW9uO1xuICAgICAgICAgICAgbGV0IG1vdmUgPSB0aGlzLmNhbGN1bGF0ZU1vdmUoc2hpcFJvdywgc2hpcENvbCk7XG4gICAgICAgICAgICBbcm93LCBjb2xdID0gbW92ZSB8fCB0aGlzLmdldFJhbmRvbU1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFtyb3csIGNvbF0gPSB0aGlzLmdldFJhbmRvbU1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1N1Y2Nlc3MgPSB0aGlzLnBsYXllci5tYWtlTW92ZShyb3csIGNvbCwgZW5lbXlCb2FyZCk7XG4gICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZXNEb25lW3Jvd11bY29sXSA9ICdzaGlwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW92ZXNEb25lW3Jvd11bY29sXSA9ICdtaXNzJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3JvdywgY29sLCBpc1N1Y2Nlc3NdO1xuICAgIH1cblxuICAgIGlzTW92ZURvbmVCZWZvcmUocm93LCBjb2wpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZXNEb25lW3Jvd11bY29sXSAhPT0gJyc7XG4gICAgfVxuXG4gICAgZmluZFNoaXAoZW5lbXlCb2FyZCkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLm1vdmVzRG9uZS5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLm1vdmVzRG9uZS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW92ZXNEb25lW3Jvd11bY29sXSA9PT0gJ3NoaXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZW5lbXlCb2FyZC5nZXRQb3NpdGlvbihyb3csIGNvbCkuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbcm93LCBjb2xdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldFJhbmRvbU1vdmUoKSB7XG4gICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmlzTW92ZURvbmVCZWZvcmUocm93LCBjb2wpKSB7XG4gICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF07XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlTW92ZShyb3csIGNvbCkge1xuICAgICAgICBsZXQgbW92ZSA9IG51bGw7XG4gICAgICAgIC8vIGNoZWNrIGxlZnRcbiAgICAgICAgaWYgKGNvbCA+IDAgJiYgIXRoaXMuaXNNb3ZlRG9uZUJlZm9yZShyb3csIGNvbCAtIDEpKSB7XG4gICAgICAgICAgICBtb3ZlID0gW3JvdywgY29sIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgcmlnaHRcbiAgICAgICAgaWYgKGNvbCA8IDkgJiYgIXRoaXMuaXNNb3ZlRG9uZUJlZm9yZShyb3csIGNvbCArIDEpKSB7XG4gICAgICAgICAgICBtb3ZlID0gW3JvdywgY29sICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgdXBcbiAgICAgICAgaWYgKHJvdyA+IDAgJiYgIXRoaXMuaXNNb3ZlRG9uZUJlZm9yZShyb3cgLSAxLCBjb2wpKSB7XG4gICAgICAgICAgICBtb3ZlID0gW3JvdyAtIDEsIGNvbF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgZG93blxuICAgICAgICBpZiAocm93IDwgOSAmJiAhdGhpcy5pc01vdmVEb25lQmVmb3JlKHJvdyArIDEsIGNvbCkpIHtcbiAgICAgICAgICAgIG1vdmUgPSBbcm93ICsgMSwgY29sXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgfVxuXG4gICAgZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgIH1cblxuICAgIGNsZWFyQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKGxlbmd0aCwgcm93LCBjb2wsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGlmICghKHRoaXMuYm9hcmRbcm93XVtjb2xdIGluc3RhbmNlb2YgU2hpcCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBuZXdTaGlwO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2wgKyBpXSA9IG5ld1NoaXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93ICsgaV1bY29sXSA9IG5ld1NoaXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9lc05vdEhhdmVBZGpTaGlwcyhsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbikge1xuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgICAgLy8gZm9yIGhvcml6b250YWwgc2hpcFxuICAgICAgICAgICAgLy8gY2hlY2sgbGVmdFxuICAgICAgICAgICAgaWYgKGNvbCA+IDAgJiYgdGhpcy5ib2FyZFtyb3ddW2NvbCAtIDFdICE9PSAnJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFib3ZlXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA+IDAgJiYgdGhpcy5ib2FyZFtyb3cgLSAxXVtjb2wgKyBpXSAhPT0gJycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBiZWxsb3dcbiAgICAgICAgICAgICAgICBpZiAocm93IDwgOSAmJiB0aGlzLmJvYXJkW3JvdyArIDFdW2NvbCArIGldICE9PSAnJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2hlY2sgcmlnaHRcbiAgICAgICAgICAgIGlmICgoY29sICsgbGVuZ3RoKSA8IDEwICYmIHRoaXMuYm9hcmRbcm93XVtjb2wgKyBsZW5ndGhdICE9PSAnJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZm9yIHZlcnRpY2FsIHNoaXBcbiAgICAgICAgICAgIC8vIGNoZWNrIGFib3ZlXG4gICAgICAgICAgICBpZiAocm93ID4gMCAmJiB0aGlzLmJvYXJkW3JvdyAtIDFdW2NvbF0gIT09ICcnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgbGVmdFxuICAgICAgICAgICAgICAgIGlmIChjb2wgPiAwICYmIHRoaXMuYm9hcmRbcm93ICsgaV1bY29sIC0gMV0gIT09ICcnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgcmlnaHRcbiAgICAgICAgICAgICAgICBpZiAoY29sIDwgOSAmJiB0aGlzLmJvYXJkW3JvdyArIGldW2NvbCArIDFdICE9PSAnJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2hlY2sgYmVsbG93XG4gICAgICAgICAgICBpZiAoKHJvdyArIGxlbmd0aCkgPCAxMCAmJiB0aGlzLmJvYXJkW3JvdyArIGxlbmd0aF1bY29sXSAhPT0gJycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXBzUmFuZG9tbHkoKSB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzQsIDMsIDMsIDIsIDIsIDEsIDEsIDFdO1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbnMgPSBbJ2gnLCAndiddO1xuICAgICAgICBzaGlwTGVuZ3Rocy5mb3JFYWNoKChsZW5ndGgpID0+IHtcbiAgICAgICAgICAgIGxldCByYW5kb21Sb3c7XG4gICAgICAgICAgICBsZXQgcmFuZG9tQ29sO1xuICAgICAgICAgICAgbGV0IHJhbmRvbU9yaWVudDtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIHJhbmRvbUNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICByYW5kb21PcmllbnQgPSBvcmllbnRhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildO1xuICAgICAgICAgICAgICAgIGlmIChyYW5kb21PcmllbnQgPT09ICd2JyAmJiAocmFuZG9tUm93ICsgbGVuZ3RoIC0gMSkgPiA5KSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tT3JpZW50ID09PSAnaCcgJiYgKHJhbmRvbUNvbCArIGxlbmd0aCAtIDEpID4gOSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLmdldFBvc2l0aW9uKHJhbmRvbVJvdywgcmFuZG9tQ29sKSA9PT0gJycpXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5kb2VzTm90SGF2ZUFkalNoaXBzKGxlbmd0aCwgcmFuZG9tUm93LCByYW5kb21Db2wsIHJhbmRvbU9yaWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXAobGVuZ3RoLCByYW5kb21Sb3csIHJhbmRvbUNvbCwgcmFuZG9tT3JpZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24ocm93LCBjb2wpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuICAgIH1cblxuICAgIHJlY2lldmVBdHRhY2socm93LCBjb2wpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmJvYXJkW3Jvd11bY29sXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLmhpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdICE9PSAnbWlzc2VkJykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSAnbWlzc2VkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFJlbWFpbmluZ1NoaXBzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwcy5yZWR1Y2UoKHRvdGFsLCBzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICB0b3RhbCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBpc0dhbWVPdmVyKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaGlwc1tpXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVmlldyBmcm9tICcuLi92aWV3L3ZpZXcnO1xuaW1wb3J0IEVuZW15TG9naWMgZnJvbSAnLi9lbmVteUxvZ2ljJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lcGxheSB7XG4gICAgc3RhdGljIHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcblxuICAgIHN0YXRpYyBlbmVteSA9IG5ldyBQbGF5ZXIoKTtcblxuICAgIHN0YXRpYyBlbmVteUFJID0gbmV3IEVuZW15TG9naWModGhpcy5lbmVteSk7XG5cbiAgICBzdGF0aWMgc3RhcnRHYW1lKCkge1xuICAgICAgICBHYW1lcGxheS5wbGF5ZXIuY2xlYXJCb2FyZCgpO1xuICAgICAgICBHYW1lcGxheS5lbmVteS5jbGVhckJvYXJkKCk7XG4gICAgICAgIEdhbWVwbGF5LmVuZW15QUkuY2xlYXJNb3ZlcygpO1xuICAgICAgICBHYW1lcGxheS5wbGF5ZXIucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgICAgIEdhbWVwbGF5LmVuZW15LnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgICAgICBWaWV3LmdlbmVyYXRlUGxheWVyQm9hcmQodGhpcy5wbGF5ZXIuZ2V0Qm9hcmQoKSk7XG4gICAgICAgIFZpZXcuZ2VuZXJhdGVFbmVteUJvYXJkKHRoaXMuZW5lbXkuZ2V0Qm9hcmQoKSk7XG4gICAgICAgIFZpZXcuZGlzcGxheVJlbWFpbmluZ0VuZW15U2hpcHModGhpcy5lbmVteS5nZXRSZW1haW5pbmdTaGlwcygpKTtcbiAgICAgICAgVmlldy5kaXNwbGF5UmVtYWluaW5nUGxheWVyU2hpcHModGhpcy5wbGF5ZXIuZ2V0UmVtYWluaW5nU2hpcHMoKSk7XG4gICAgICAgIFZpZXcuZGlzcGxheVBsYXllclR1cm4oKTtcbiAgICAgICAgVmlldy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICBWaWV3LmhpZGVQbGF5QWdhaW4oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGxheWVyTWFrZXNNb3ZlKHJvdywgY29sKSB7XG4gICAgICAgIGNvbnN0IGlzU3VjY2VzcyA9IEdhbWVwbGF5LnBsYXllci5tYWtlTW92ZShyb3csIGNvbCwgR2FtZXBsYXkuZW5lbXkuZ2V0Qm9hcmQoKSk7XG4gICAgICAgIFZpZXcuZGlzcGxheVBsYXllck1vdmVSZXN1bHQocm93LCBjb2wsIGlzU3VjY2Vzcyk7XG4gICAgICAgIFZpZXcuZGlzcGxheVJlbWFpbmluZ0VuZW15U2hpcHModGhpcy5lbmVteS5nZXRSZW1haW5pbmdTaGlwcygpKTtcbiAgICAgICAgaWYgKEdhbWVwbGF5LmVuZW15LmlzR2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgVmlldy5kaXNwbGF5UGxheWVyV2luKCk7XG4gICAgICAgICAgICBWaWV3LnNob3dPdmVybGF5KCk7XG4gICAgICAgICAgICBWaWV3LnNob3dQbGF5QWdhaW4oJ3AnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzU3VjY2Vzcykge1xuICAgICAgICAgICAgVmlldy5kaXNwbGF5RW5lbXlUdXJuKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KEdhbWVwbGF5LmVuZW15TWFrZXNNb3ZlLCA1MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGVuZW15TWFrZXNNb3ZlKCkge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbCwgaXNTdWNjZXNzXSA9IEdhbWVwbGF5LmVuZW15QUkuYXR0YWNrKEdhbWVwbGF5LnBsYXllci5nZXRCb2FyZCgpKTtcbiAgICAgICAgICAgIFZpZXcuZGlzcGxheUVuZW15TW92ZVJlc3VsdChyb3csIGNvbCwgaXNTdWNjZXNzKTtcbiAgICAgICAgICAgIFZpZXcuZGlzcGxheVJlbWFpbmluZ1BsYXllclNoaXBzKEdhbWVwbGF5LnBsYXllci5nZXRSZW1haW5pbmdTaGlwcygpKTtcbiAgICAgICAgICAgIGlmIChHYW1lcGxheS5wbGF5ZXIuaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICAgICAgVmlldy5kaXNwbGF5RW5lbXlXaW4oKTtcbiAgICAgICAgICAgICAgICBWaWV3LnNob3dPdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgVmlldy5zaG93UGxheUFnYWluKCdlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBWaWV3LmRpc3BsYXlQbGF5ZXJUdXJuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgfVxuXG4gICAgZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgIH1cblxuICAgIGNsZWFyQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuY2xlYXJCb2FyZCgpO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcHMoY29vcmRBcnIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5wbGFjZVNoaXAoLi4uY29vcmRBcnJbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xuICAgICAgICB0aGlzLmJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgIH1cblxuICAgIG1ha2VNb3ZlKHJvdywgY29sLCBlbmVteUJvYXJkKSB7XG4gICAgICAgIGVuZW15Qm9hcmQucmVjaWV2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgICAgIGlmIChlbmVteUJvYXJkLmdldFBvc2l0aW9uKHJvdywgY29sKSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRSZW1haW5pbmdTaGlwcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0UmVtYWluaW5nU2hpcHMoKTtcbiAgICB9XG5cbiAgICBpc0dhbWVPdmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5pc0dhbWVPdmVyKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLnRpbWVzSGl0ID0gMDtcbiAgICB9XG5cbiAgICBoaXQgPSAoKSA9PiArK3RoaXMudGltZXNIaXQ7XG5cbiAgICBpc1N1bmsgPSAoKSA9PiB0aGlzLnRpbWVzSGl0ID49IHRoaXMubGVuZ3RoO1xufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuLi9tb2RlbC9nYW1lYm9hcmQnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi4vbW9kZWwvc2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICAgIHN0YXRpYyBnZW5lcmF0ZUJvYXJkKGlkLCBib2FyZCA9IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LnJvdyA9IHJvdztcbiAgICAgICAgICAgICAgICBzcXVhcmUuZGF0YXNldC5jb2wgPSBjb2w7XG4gICAgICAgICAgICAgICAgaWYgKGlkID09PSAnI3BsYXllci1ib2FyZCcgJiYgYm9hcmQuZ2V0Qm9hcmQoKVtyb3ddW2NvbF0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2VuZXJhdGVQbGF5ZXJCb2FyZChib2FyZCkge1xuICAgICAgICBWaWV3LmdlbmVyYXRlQm9hcmQoJyNwbGF5ZXItYm9hcmQnLCBib2FyZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlRW5lbXlCb2FyZChib2FyZCkge1xuICAgICAgICBWaWV3LmdlbmVyYXRlQm9hcmQoJyNlbmVteS1ib2FyZCcsIGJvYXJkKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheVJlbWFpbmluZ0VuZW15U2hpcHMoYW1vdW50KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmVteS1jYXB0aW9uIC51bnNpbmtlZC1zaGlwcycpLnRleHRDb250ZW50ID0gYW1vdW50O1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5UmVtYWluaW5nUGxheWVyU2hpcHMoYW1vdW50KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItY2FwdGlvbiAudW5zaW5rZWQtc2hpcHMnKS50ZXh0Q29udGVudCA9IGFtb3VudDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmluZFNxdWFyZShyb3csIGNvbCwgaWQpIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtpZH0gLnNxdWFyZWApLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNxdWFyZS5kYXRhc2V0LnJvdyA9PT0gcm93ICYmIHNxdWFyZS5kYXRhc2V0LmNvbCA9PT0gY29sKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gc3F1YXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheVBsYXllck1vdmVSZXN1bHQocm93LCBjb2wsIGlzU3VjY2Vzcykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSB0aGlzLmZpbmRTcXVhcmUocm93LCBjb2wsICcjZW5lbXktYm9hcmQnKTtcbiAgICAgICAgaWYgKGlzU3VjY2Vzcykge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1oaXQnKTtcbiAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSAnPHNwYW4+WDwvc3Bhbj4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9ICc8c3Bhbj4qPC9zcGFuPic7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheUVuZW15TW92ZVJlc3VsdChyb3csIGNvbCwgaXNTdWNjZXNzKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuZmluZFNxdWFyZShyb3cudG9TdHJpbmcoKSwgY29sLnRvU3RyaW5nKCksICcjcGxheWVyLWJvYXJkJyk7XG4gICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1oaXQnKTtcbiAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSAnPHNwYW4+WDwvc3Bhbj4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9ICc8c3Bhbj4qPC9zcGFuPic7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUmVkQmxpbmtpbmcoKSB7XG4gICAgICAgIGNvbnN0IGNhcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1jYXB0aW9uJyk7XG4gICAgICAgIGNhcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnZ3JlZW4tYmxpbmsnKTtcbiAgICAgICAgY2FwdGlvbi5jbGFzc0xpc3QuYWRkKCdyZWQtYmxpbmsnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkR3JlZW5CbGlua2luZygpIHtcbiAgICAgICAgY29uc3QgY2FwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLWNhcHRpb24nKTtcbiAgICAgICAgY2FwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZWQtYmxpbmsnKTtcbiAgICAgICAgY2FwdGlvbi5jbGFzc0xpc3QuYWRkKCdncmVlbi1ibGluaycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5UGxheWVyVHVybigpIHtcbiAgICAgICAgVmlldy5hZGRHcmVlbkJsaW5raW5nKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLWNhcHRpb24nKS50ZXh0Q29udGVudCA9ICdZb3VyIFR1cm4hJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheUVuZW15VHVybigpIHtcbiAgICAgICAgVmlldy5hZGRSZWRCbGlua2luZygpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1jYXB0aW9uJykudGV4dENvbnRlbnQgPSAnRW5lbXlcXCdzIFR1cm4hJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheVBsYXllcldpbigpIHtcbiAgICAgICAgVmlldy5hZGRHcmVlbkJsaW5raW5nKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLWNhcHRpb24nKS50ZXh0Q29udGVudCA9ICdZb3VyIFdvbiEnO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5RW5lbXlXaW4oKSB7XG4gICAgICAgIFZpZXcuYWRkUmVkQmxpbmtpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtY2FwdGlvbicpLnRleHRDb250ZW50ID0gJ1lvdSBMb3N0Li4uJztcbiAgICB9XG5cbiAgICBzdGF0aWMgaGlkZU92ZXJsYXkoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5JykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dPdmVybGF5KCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzaG93UGxheUFnYWluKHdpbm5lcikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheS1hZ2FpbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gd2lubmVyID09PSAncCcgPyAnWW91IHdvbiA6KScgOiAnWW91IGxvc3QgOignO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheS1hZ2FpbiAjcmVzdWx0LW1zZycpLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGlkZVBsYXlBZ2FpbigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXktYWdhaW4nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250LzA0Ql8zMF9fLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuXG4gICAgZm9udC1mYW1pbHk6ICdkZWZhdWx0JztcbiAgXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuXG4gICAgc3R5bGU6IG5vcm1hbDtcblxuICAgIHdlaWdodDogNjAwO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdkZWZhdWx0Jywgc2Fucy1zZXJpZjtcbn1cblxuOnJvb3Qge1xuICAgIC0tZm9udC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjM2QzZDNkO1xuICAgIC0tcHJpbWFyeS1jb2xvcjogIzMwMzAzMDtcbiAgICAtLWdyZWVuOiAjMmJjNTU3O1xuICAgIC0tcmVkOiAjZTIzNjM2O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI25ldy1nYW1lIHtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuI25ldy1nYW1lOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNXB4KTtcbn1cblxubWFpbntcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcilcbn1cblxuLm1haW4tY29udGFpbmVyLCAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggMWZyO1xuICAgIGdhcDogOHB4O1xufVxuXG4uYm9hcmQgLmNvbHVtbnMge1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib2FyZCAucm93cyB7XG4gICAgXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQsICNwbGFjZS1zaGlwcy1ib2FyZCB7XG4gICAgYm9yZGVyOiA0cHggIzAwMmM2NiBzb2xpZDtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgIGdyaWQtcm93OiAyLzM7XG59XG5cbiNnYW1lLWNhcHRpb24ge1xuICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xufVxuXG4jZ2FtZS1jYXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwbGF5ZXItY2FwdGlvbiwgI2VuZW15LWNhcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4jcGxheWVyLWNhcHRpb24sICNwbGF5ZXItY2FwdGlvbj5ociB7XG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcbn1cblxuI2VuZW15LWNhcHRpb24sICNlbmVteS1jYXB0aW9uPmhyIHtcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcbn1cblxuaHIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5zcXVhcmUge1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgXG59XG5cbiNlbmVteS1ib2FyZCAuc3F1YXJlLCAjcGxheWVyLWJvYXJkIC5zcXVhcmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4jZW5lbXktYm9hcmQgLmVtcHR5IHtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuI2VuZW15LWJvYXJkIC5lbXB0eTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDUyLCAxODApO1xufVxuXG4jZW5lbXktYm9hcmQgLm1pc3Mgc3BhbiwgI3BsYXllci1ib2FyZCAubWlzcyBzcGFue1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNXB4O1xufVxuXG4uZW1wdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzg5ZGE7XG5cbn1cblxuLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XG59XG5cbi5zaGlwLWhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMzYzNjtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzg5ZGE7XG59XG5cbiNwbGF5ZXItYm9hcmQsICNlbmVteS1ib2FyZCwgI3BsYWNlLXNoaXBzLWJvYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYzY2O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiA1cHggNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uY2FwdGlvbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNvdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmhpZGRlbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4jcGxheS1hZ2FpbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxheS1hZ2Fpbi13cmFwcGVyIHtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucGxheS1hZ2Fpbi13cmFwcGVyIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI3BsYWNlLXNoaXBzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wbGFjZS1zaGlwcy13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xufVxuXG4ucGxhY2Utc2hpcHMtd3JhcHBlciBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ucGxhY2Utc2hpcHMtd3JhcHBlciAuYnV0dG9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmxpZ2h0YnVsYiBzdmd7XG4gIGZpbGw6IHllbGxvdztcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5pbnN0cnVjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnN0cnVjdGlvbnMgLmJ1bGxldHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmtpbmctcmVkIHtcbiAgICAwJSB7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGRjtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XG4gICAgfVxufVxuXG4ucmVkLWJsaW5rIHtcbiAgICBhbmltYXRpb246IGJsaW5raW5nLXJlZCAxcyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGlua2luZy1ncmVlbiB7XG4gICAgMCUge1xuICAgICAgY29sb3I6ICNGRkY7XG4gICAgICBib3JkZXItY29sb3I6ICNGRkY7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgICB9XG59XG5cbi5ncmVlbi1ibGluayB7XG4gICAgYW5pbWF0aW9uOiBibGlua2luZy1ncmVlbiAxcyBpbmZpbml0ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcblxuICAgIC5tYWluLWNvbnRhaW5lciwgLmhlYWRlci1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuc3F1YXJlIHtcbiAgICAgICAgaGVpZ2h0OiAxLjhyZW07XG4gICAgICAgIHdpZHRoOiAxLjhyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIH1cblxuICAgIG1haW4ge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDE1cHg7XG4gICAgfVxuXG4gICAgI2VuZW15LWJvYXJkIC5taXNzIHNwYW4sICNwbGF5ZXItYm9hcmQgLm1pc3Mgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMTBweDtcbiAgICB9XG4gICAgXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAqIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC5jb2x1bW5zIHNwYW4sIC5yb3dzIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cblxuICAgIC5ib2FyZCB7XG4gICAgICAgIGdhcDogMnB4O1xuICAgIH1cblxuICAgIC5zcXVhcmUge1xuICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICB9XG5cbiAgICAjbmV3LWdhbWUge1xuICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuXG4gICAgI2VuZW15LWJvYXJkIC5taXNzIHNwYW4sICAjcGxheWVyLWJvYXJkIC5taXNzIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB9XG5cbiAgICAucGxheS1hZ2Fpbi13cmFwcGVyIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5wbGFjZS1zaGlwcy13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7O0lBRUksc0JBQXNCOztJQUV0QiwrREFBa0Q7O0lBRWxELGFBQWE7O0lBRWIsV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQywwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCOztBQUVsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLFlBQVk7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Q3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSTtNQUNFLFdBQVc7TUFDWCxrQkFBa0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJO01BQ0UsV0FBVztNQUNYLGtCQUFrQjtJQUNwQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBOztJQUVJO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksY0FBYztRQUNkLGFBQWE7UUFDYixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsYUFBYTtJQUNqQjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTs7SUFFbkI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzUwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuQGZvbnQtZmFjZSB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnZGVmYXVsdCc7XFxuICBcXG4gICAgc3JjOiB1cmwoJy4vZm9udC8wNEJfMzBfXy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuXFxuICAgIHN0eWxlOiBub3JtYWw7XFxuXFxuICAgIHdlaWdodDogNjAwO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ2RlZmF1bHQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZm9udC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzNkM2QzZDtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMzAzMDMwO1xcbiAgICAtLWdyZWVuOiAjMmJjNTU3O1xcbiAgICAtLXJlZDogI2UyMzYzNjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3LWdhbWUge1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNuZXctZ2FtZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01cHgpO1xcbn1cXG5cXG5tYWlue1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpXFxufVxcblxcbi5tYWluLWNvbnRhaW5lciwgLmhlYWRlci1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjBweCAxZnI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uYm9hcmQgLmNvbHVtbnMge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIC5yb3dzIHtcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQsICNwbGFjZS1zaGlwcy1ib2FyZCB7XFxuICAgIGJvcmRlcjogNHB4ICMwMDJjNjYgc29saWQ7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbiNnYW1lLWNhcHRpb24ge1xcbiAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcXG59XFxuXFxuI2dhbWUtY2FwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLWNhcHRpb24sICNlbmVteS1jYXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4jcGxheWVyLWNhcHRpb24sICNwbGF5ZXItY2FwdGlvbj5ociB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbiNlbmVteS1jYXB0aW9uLCAjZW5lbXktY2FwdGlvbj5ociB7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG5ociB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgXFxufVxcblxcbiNlbmVteS1ib2FyZCAuc3F1YXJlLCAjcGxheWVyLWJvYXJkIC5zcXVhcmUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4jZW5lbXktYm9hcmQgLmVtcHR5IHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbiNlbmVteS1ib2FyZCAuZW1wdHk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgNTIsIDE4MCk7XFxufVxcblxcbiNlbmVteS1ib2FyZCAubWlzcyBzcGFuLCAjcGxheWVyLWJvYXJkIC5taXNzIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1cHg7XFxufVxcblxcbi5lbXB0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzg5ZGE7XFxuXFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcXG59XFxuXFxuLnNoaXAtaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMzYzNjtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM4OWRhO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQsICNwbGFjZS1zaGlwcy1ib2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJjNjY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4IDVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uY2FwdGlvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jcGxheS1hZ2FpbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5LWFnYWluLXdyYXBwZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5wbGF5LWFnYWluLXdyYXBwZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNwbGFjZS1zaGlwcyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlLXNoaXBzLXdyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi5wbGFjZS1zaGlwcy13cmFwcGVyIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucGxhY2Utc2hpcHMtd3JhcHBlciAuYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmxpZ2h0YnVsYiBzdmd7XFxuICBmaWxsOiB5ZWxsb3c7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluc3RydWN0aW9ucyAuYnVsbGV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuQGtleWZyYW1lcyBibGlua2luZy1yZWQge1xcbiAgICAwJSB7XFxuICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjRkZGO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZCk7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIH1cXG59XFxuXFxuLnJlZC1ibGluayB7XFxuICAgIGFuaW1hdGlvbjogYmxpbmtpbmctcmVkIDFzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5raW5nLWdyZWVuIHtcXG4gICAgMCUge1xcbiAgICAgIGNvbG9yOiAjRkZGO1xcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGRjtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgfVxcbn1cXG5cXG4uZ3JlZW4tYmxpbmsge1xcbiAgICBhbmltYXRpb246IGJsaW5raW5nLWdyZWVuIDFzIGluZmluaXRlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcblxcbiAgICAubWFpbi1jb250YWluZXIsIC5oZWFkZXItY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5zcXVhcmUge1xcbiAgICAgICAgaGVpZ2h0OiAxLjhyZW07XFxuICAgICAgICB3aWR0aDogMS44cmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIH1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgI2VuZW15LWJvYXJkIC5taXNzIHNwYW4sICNwbGF5ZXItYm9hcmQgLm1pc3Mgc3BhbntcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAtMTBweDtcXG4gICAgfVxcbiAgICBcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAqIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcblxcbiAgICAuY29sdW1ucyBzcGFuLCAucm93cyBzcGFue1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkIHtcXG4gICAgICAgIGdhcDogMnB4O1xcbiAgICB9XFxuXFxuICAgIC5zcXVhcmUge1xcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgIH1cXG5cXG4gICAgI25ldy1nYW1lIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIH1cXG5cXG4gICAgI2VuZW15LWJvYXJkIC5taXNzIHNwYW4sICAjcGxheWVyLWJvYXJkIC5taXNzIHNwYW57XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWFnYWluLXdyYXBwZXIgYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5wbGFjZS1zaGlwcy13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL2NvbnRyb2xsZXInO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbkNvbnRyb2xsZXIuYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcbiJdLCJuYW1lcyI6WyJHYW1lcGxheSIsIlZpZXciLCJDb250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJhdHRhY2hFdmVudExpc3RlbmVycyIsImdlbmVyYXRlQm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnROZXdHYW1lIiwiYXR0YWNoU3F1YXJlRXZlbnRMaXN0ZW5lcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNxdWFyZSIsImUiLCJ0YXJnZXQiLCJ0ZXh0Q29udGVudCIsInBsYXllck1ha2VzTW92ZSIsImRhdGFzZXQiLCJyb3ciLCJjb2wiLCJzdGFydEdhbWUiLCJkZWZhdWx0IiwiRW5lbXlMb2dpYyIsInBsYXllciIsIm1vdmVzRG9uZSIsImNsZWFyTW92ZXMiLCJhdHRhY2siLCJlbmVteUJvYXJkIiwic2hpcExvY2F0aW9uIiwiZmluZFNoaXAiLCJfc2hpcExvY2F0aW9uIiwiX3NsaWNlZFRvQXJyYXkiLCJzaGlwUm93Iiwic2hpcENvbCIsIm1vdmUiLCJjYWxjdWxhdGVNb3ZlIiwiX3JlZiIsImdldFJhbmRvbU1vdmUiLCJfcmVmMiIsIl90aGlzJGdldFJhbmRvbU1vdmUiLCJfdGhpcyRnZXRSYW5kb21Nb3ZlMiIsImlzU3VjY2VzcyIsIm1ha2VNb3ZlIiwiaXNNb3ZlRG9uZUJlZm9yZSIsImxlbmd0aCIsImdldFBvc2l0aW9uIiwiaXNTdW5rIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiU2hpcCIsIkdhbWVib2FyZCIsImJvYXJkIiwic2hpcHMiLCJnZXRCb2FyZCIsImNsZWFyQm9hcmQiLCJwbGFjZVNoaXAiLCJvcmllbnRhdGlvbiIsIm5ld1NoaXAiLCJwdXNoIiwiaSIsImRvZXNOb3RIYXZlQWRqU2hpcHMiLCJwbGFjZVNoaXBzUmFuZG9tbHkiLCJfdGhpcyIsInNoaXBMZW5ndGhzIiwib3JpZW50YXRpb25zIiwicmFuZG9tUm93IiwicmFuZG9tQ29sIiwicmFuZG9tT3JpZW50IiwicmVjaWV2ZUF0dGFjayIsImhpdCIsImdldFJlbWFpbmluZ1NoaXBzIiwicmVkdWNlIiwidG90YWwiLCJzaGlwIiwiaXNHYW1lT3ZlciIsIlBsYXllciIsImVuZW15IiwiZW5lbXlBSSIsImdlbmVyYXRlUGxheWVyQm9hcmQiLCJnZW5lcmF0ZUVuZW15Qm9hcmQiLCJkaXNwbGF5UmVtYWluaW5nRW5lbXlTaGlwcyIsImRpc3BsYXlSZW1haW5pbmdQbGF5ZXJTaGlwcyIsImRpc3BsYXlQbGF5ZXJUdXJuIiwiaGlkZU92ZXJsYXkiLCJoaWRlUGxheUFnYWluIiwiZGlzcGxheVBsYXllck1vdmVSZXN1bHQiLCJkaXNwbGF5UGxheWVyV2luIiwic2hvd092ZXJsYXkiLCJzaG93UGxheUFnYWluIiwiZGlzcGxheUVuZW15VHVybiIsInNldFRpbWVvdXQiLCJlbmVteU1ha2VzTW92ZSIsIl9HYW1lcGxheSRlbmVteUFJJGF0dCIsIl9HYW1lcGxheSRlbmVteUFJJGF0dDIiLCJkaXNwbGF5RW5lbXlNb3ZlUmVzdWx0IiwiZGlzcGxheUVuZW15V2luIiwiX2RlZmluZVByb3BlcnR5IiwicGxhY2VTaGlwcyIsImNvb3JkQXJyIiwiX3RoaXMkYm9hcmQiLCJhcHBseSIsIl90b0NvbnN1bWFibGVBcnJheSIsInRpbWVzSGl0IiwiaWQiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJpbm5lckhUTUwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJhbW91bnQiLCJmaW5kU3F1YXJlIiwicmVzdWx0IiwiY29uY2F0IiwicmVtb3ZlIiwidG9TdHJpbmciLCJhZGRSZWRCbGlua2luZyIsImNhcHRpb24iLCJhZGRHcmVlbkJsaW5raW5nIiwid2lubmVyIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=