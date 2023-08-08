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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }
  _createClass(Controller, null, [{
    key: "attachEventListeners",
    value: function attachEventListeners() {
      var _this = this;
      _view_view__WEBPACK_IMPORTED_MODULE_1__["default"].generateBoard('#place-ships-board');
      _view_view__WEBPACK_IMPORTED_MODULE_1__["default"].hideMainContainer();
      document.querySelector('#new-game').addEventListener('click', function () {
        _view_view__WEBPACK_IMPORTED_MODULE_1__["default"].showPlaceShips();
        _view_view__WEBPACK_IMPORTED_MODULE_1__["default"].showOverlay();
      });
      document.querySelector('#play-again-btn').addEventListener('click', function () {
        _view_view__WEBPACK_IMPORTED_MODULE_1__["default"].showPlaceShips();
        _view_view__WEBPACK_IMPORTED_MODULE_1__["default"].hidePlayAgain();
      });
      document.querySelector('#rotate').addEventListener('click', function () {
        _this.changeRotation();
      });
      document.querySelector('#reset').addEventListener('click', function () {
        _this.resetPlaceShipsBoard();
      });
      document.querySelector('#start').addEventListener('click', function () {
        if (_this.placedRandomly || _this.shipsPlaced.length === 8) {
          _this.startNewGame();
        }
      });
      document.querySelector('#random').addEventListener('click', function () {
        _this.resetPlaceShipsBoard();
        _model_gameplay__WEBPACK_IMPORTED_MODULE_0__["default"].createRandomBoard();
        _this.placedRandomly = true;
      });
      this.attachPlaceShipSquareListeners();
    }
  }, {
    key: "attachSquareEventListeners",
    value: function attachSquareEventListeners() {
      var _this2 = this;
      document.querySelectorAll('#enemy-board .square').forEach(function (square) {
        square.addEventListener('click', function (e) {
          if (e.target.textContent === '') {
            _this2.playerMakesMove(e.target.dataset.row, e.target.dataset.col);
          }
        });
      });
    }
  }, {
    key: "attachPlaceShipSquareListeners",
    value: function attachPlaceShipSquareListeners() {
      var _this3 = this;
      document.querySelectorAll('#place-ships-board .square').forEach(function (square) {
        square.addEventListener('click', function (e) {
          var row = e.target.dataset.row;
          var col = e.target.dataset.col;
          var currentShipLength = _this3.shipLengths[_this3.shipIndex];
          if (_this3.shipIndex < _this3.shipLengths.length && _this3.isShipPlacementValid(currentShipLength, Number(row), Number(col))) {
            _this3.placeShip(row, col);
          }
        });
      });
    }
  }, {
    key: "startNewGame",
    value: function startNewGame() {
      _model_gameplay__WEBPACK_IMPORTED_MODULE_0__["default"].startGame(this.shipsPlaced);
      this.attachSquareEventListeners();
      this.resetPlaceShipsBoard();
    }
  }, {
    key: "playerMakesMove",
    value: function playerMakesMove(row, col) {
      _model_gameplay__WEBPACK_IMPORTED_MODULE_0__["default"].playerMakesMove(row, col);
    }
  }, {
    key: "placeShip",
    value: function placeShip(row, col) {
      _view_view__WEBPACK_IMPORTED_MODULE_1__["default"].placeShip(this.shipLengths[this.shipIndex], row, col, this.orientation);
      this.shipsPlaced.push([this.shipLengths[this.shipIndex], Number(row), Number(col), this.orientation]);
      this.shipIndex += 1;
      _view_view__WEBPACK_IMPORTED_MODULE_1__["default"].changeNextShipMsg(this.shipLengths[this.shipIndex]);
    }
  }, {
    key: "changeRotation",
    value: function changeRotation() {
      this.orientation = this.orientation === 'h' ? 'v' : 'h';
    }
  }, {
    key: "resetPlaceShipsBoard",
    value: function resetPlaceShipsBoard() {
      _view_view__WEBPACK_IMPORTED_MODULE_1__["default"].generateBoard('#place-ships-board');
      _view_view__WEBPACK_IMPORTED_MODULE_1__["default"].changeNextShipMsg(this.shipLengths[0]);
      this.attachPlaceShipSquareListeners();
      this.shipsPlaced = [];
      this.shipIndex = 0;
      this.orientation = 'h';
      this.placedRandomly = false;
    }
  }, {
    key: "doesSquareHasShip",
    value: function doesSquareHasShip(row, col) {
      var square = _view_view__WEBPACK_IMPORTED_MODULE_1__["default"].findSquare(String(row), String(col), '#place-ships-board');
      return square.classList.contains('ship');
    }
  }, {
    key: "isShipPlacementValid",
    value: function isShipPlacementValid(length, row, col) {
      // check if ship is out of bounds
      if (this.orientation === 'v' && row + length - 1 > 9) return false;
      if (this.orientation === 'h' && col + length - 1 > 9) return false;

      // check for adjacent ships
      if (this.orientation === 'h') {
        // for horizontal ship
        // check left
        if (col > 0 && this.doesSquareHasShip(row, col - 1)) return false;
        for (var i = 0; i < length; i++) {
          // check above
          if (row > 0 && this.doesSquareHasShip(row - 1, col + i)) return false;
          // check bellow
          if (row < 9 && this.doesSquareHasShip(row + 1, col + i)) return false;
        }
        // check right
        if (col + length < 10 && this.doesSquareHasShip(row, col + length)) return false;
      } else {
        // for vertical ship
        // check above
        if (row > 0 && this.doesSquareHasShip(row - 1, col)) return false;
        for (var _i = 0; _i < length; _i++) {
          // check left
          if (col > 0 && this.doesSquareHasShip(row + _i, col - 1)) return false;
          // check right
          if (col < 9 && this.doesSquareHasShip(row + _i, col + 1)) return false;
        }
        // check bellow
        if (row + length < 10 && this.doesSquareHasShip(row + length, col)) return false;
      }
      return true;
    }
  }]);
  return Controller;
}();
_defineProperty(Controller, "orientation", 'h');
_defineProperty(Controller, "shipLengths", [4, 3, 3, 2, 2, 1, 1, 1]);
_defineProperty(Controller, "shipIndex", 0);
_defineProperty(Controller, "shipsPlaced", []);
_defineProperty(Controller, "placedRandomly", false);


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
    value: function startGame(ships) {
      Gameplay.enemy.clearBoard();
      Gameplay.enemyAI.clearMoves();
      if (ships.length === 8) {
        Gameplay.player.clearBoard();
        Gameplay.player.placeShips(ships);
      }
      Gameplay.enemy.placeShipsRandomly();
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].generatePlayerBoard(this.player.getBoard());
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].generateEnemyBoard();
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayRemainingEnemyShips(this.enemy.getRemainingShips());
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayRemainingPlayerShips(this.player.getRemainingShips());
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayPlayerTurn();
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].hideOverlay();
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].hidePlayAgain();
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].hidePlaceShips();
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].showMainContainer();
    }
  }, {
    key: "playerMakesMove",
    value: function playerMakesMove(row, col) {
      var isSuccess = Gameplay.player.makeMove(row, col, Gameplay.enemy.getBoard());
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayPlayerMoveResult(row, col, isSuccess);
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].displayRemainingEnemyShips(Gameplay.enemy.getRemainingShips());
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
  }, {
    key: "createRandomBoard",
    value: function createRandomBoard() {
      Gameplay.player.clearBoard();
      Gameplay.player.placeShipsRandomly();
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].generateBoard('#place-ships-board', Gameplay.player.getBoard());
      _view_view__WEBPACK_IMPORTED_MODULE_0__["default"].changeNextShipMsg();
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
          if (board && board.getBoard()[row][col] !== '') {
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
  }, {
    key: "placeShip",
    value: function placeShip(length, row, col, orientation) {
      var square;
      for (var i = 0; i < length; i++) {
        if (orientation === 'h') {
          square = this.findSquare(row, String(Number(col) + i), '#place-ships-board');
        } else {
          square = this.findSquare(String(Number(row) + i), col, '#place-ships-board');
        }
        square.classList.add('ship');
        square.classList.remove('empty');
      }
    }
  }, {
    key: "changeNextShipMsg",
    value: function changeNextShipMsg(length) {
      var msg = length === undefined ? 'All ships placed!' : "Place your ".concat(length, " square long ship");
      document.querySelector('#ship-desc').textContent = msg;
    }
  }, {
    key: "hidePlaceShips",
    value: function hidePlaceShips() {
      document.querySelector('#place-ships').classList.add('hidden');
    }
  }, {
    key: "showPlaceShips",
    value: function showPlaceShips() {
      document.querySelector('#place-ships').classList.remove('hidden');
    }
  }, {
    key: "hideMainContainer",
    value: function hideMainContainer() {
      document.querySelector('.main-container').classList.add('hidden');
    }
  }, {
    key: "showMainContainer",
    value: function showMainContainer() {
      document.querySelector('.main-container').classList.remove('hidden');
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

#place-ships-board .empty {
    cursor: pointer;
}

#place-ships-board .empty:hover {
    background-color: rgb(87, 52, 180);

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

    .main-container {
        flex-direction: column;
        align-items: center;
        gap: 25px;
        padding-bottom: 20px;
    }

    #enemy-board .miss span, #player-board .miss span{
        font-size: 4.2rem;
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
        height: 1.8rem;
        width: 1.8rem;
        font-size: 1.6rem;
    }

    #new-game {
        padding: 5px 20px;
        font-size: 0.9rem;
    }

    #enemy-board .miss span,  #player-board .miss span{
        font-size: 3rem;
        }

    .play-again-wrapper button {
        width: 100%;
    }

    .place-ships-wrapper {
        width: 100%;
        height: 100%;
        margin-top: 0;
    }

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap');\n\n\n@font-face {\n\n    font-family: 'default';\n  \n    src: url('./font/04B_30__.ttf') format('truetype');\n\n    style: normal;\n\n    weight: 600;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    list-style: none;\n    font-family: 'default', sans-serif;\n}\n\n:root {\n    --font-color: rgb(233, 233, 233);\n    --secondary-color: #3d3d3d;\n    --primary-color: #303030;\n    --green: #2bc557;\n    --red: #e23636;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nheader {\n    background-color: var(--secondary-color);\n    color: var(--font-color);\n    display: flex;\n    justify-content: center;\n    padding: 25px;\n    font-size: 1.2rem;\n}\n\n.header-container {\n    align-items: center;\n}\n\n#new-game {\n    padding: 10px 30px;\n    font-size: 1.4rem;\n    color: var(--font-color);\n    border: none;\n    border-radius: 5px;\n    background-color: var(--primary-color);\n    cursor: pointer;\n    transition: transform 200ms ease-in-out;\n}\n\n#new-game:hover {\n    transform: translate(0, -5px);\n}\n\nmain{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    padding-top: 50px;\n    background-color: var(--primary-color)\n}\n\n.main-container, .header-container {\n    width: 1000px;\n    display: flex;\n}\n\n.header-container {\n    justify-content: space-between;\n\n}\n\n.main-container {\n    justify-content: center;\n    gap: 20px;\n    color: var(--font-color);\n    height: 100%;\n}\n\n\n\n.board {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    grid-template-rows: 20px 1fr;\n    gap: 8px;\n}\n\n.board .columns {\n    grid-row: 1/2;\n    grid-column: 2/3;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.board .rows {\n    \n    grid-column: 1/2;\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n#player-board, #enemy-board, #place-ships-board {\n    border: 4px #002c66 solid;\n    grid-column: 2/3;\n    grid-row: 2/3;\n}\n\n#game-caption {\n    border: 2px black solid;\n}\n\n#game-caption {\n    padding: 15px;\n    width: 200px;\n    text-align: center;\n}\n\n#player-caption, #enemy-caption {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 1.2rem;\n    padding-top: 10px;\n}\n\n#player-caption, #player-caption>hr {\n    color: var(--green);\n}\n\n#enemy-caption, #enemy-caption>hr {\n    color: var(--red);\n}\n\nhr {\n    width: 100%;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.square {\n    height: 2.5rem;\n    width: 2.5rem;\n    font-size: 2.5rem;\n    \n}\n\n#enemy-board .square, #player-board .square {\n    text-align: center;\n    position: relative;\n    cursor: default;\n}\n\n#enemy-board .empty {\n    cursor: crosshair;\n}\n\n#enemy-board .empty:hover{\n    background-color: rgb(87, 52, 180);\n}\n\n#enemy-board .miss span, #player-board .miss span{\n    font-size: 4rem;\n    position: absolute;\n    left: 5px;\n}\n\n.empty {\n    background-color: #2389da;\n\n}\n\n.ship {\n    background-color: #808080;\n}\n\n.ship-hit {\n    background-color: #e23636;\n}\n\n.miss {\n    background-color: #2389da;\n}\n\n#player-board, #enemy-board, #place-ships-board {\n    background-color: #002c66;\n    display: grid;\n    gap: 5px 5px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.caption-wrapper {\n    display: flex;\n    align-items: center;\n}\n\n#overlay {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 2;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n#play-again {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    min-height: 100%;\n    z-index: 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.play-again-wrapper {\n    color: var(--font-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    font-size: 1.5rem;\n}\n\n.play-again-wrapper button {\n    width: 70%;\n    font-size: 1.2rem;\n    cursor: pointer;\n    padding: 10px;\n    background-color: var(--secondary-color);\n    border: none;\n    color: var(--font-color);\n    border-radius: 10px;\n}\n\n#place-ships {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 3;\n    display: flex;\n    justify-content: center;\n}\n\n.place-ships-wrapper {\n    background-color: var(--primary-color);\n    margin-top: 10px;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    padding: 0 10px;\n    color: var(--font-color);\n    max-height: 800px;\n}\n\nbutton {\n    background: none;\n    color: var(--font-color);\n    border: none;\n    cursor: pointer;\n}\n\nbutton:hover{\n    color: var(--green);\n}\n\n.place-ships-wrapper button {\n    font-size: 1.2rem;\n}\n\n.place-ships-wrapper .buttons {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n\n.lightbulb svg{\n  fill: yellow;\n  width: 30px;\n}\n\n.instructions {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n\n.instructions .bullets {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#place-ships-board .empty {\n    cursor: pointer;\n}\n\n#place-ships-board .empty:hover {\n    background-color: rgb(87, 52, 180);\n\n}\n\n@keyframes blinking-red {\n    0% {\n      color: #FFF;\n      border-color: #FFF;\n    }\n    100% {\n        color: var(--red);\n        border-color: var(--red);\n    }\n}\n\n.red-blink {\n    animation: blinking-red 1s infinite;\n}\n\n@keyframes blinking-green {\n    0% {\n      color: #FFF;\n      border-color: #FFF;\n    }\n    100% {\n        color: var(--green);\n        border-color: var(--green);\n    }\n}\n\n.green-blink {\n    animation: blinking-green 1s infinite;\n}\n\n@media only screen and (max-width: 1000px) {\n\n    .main-container, .header-container {\n        width: 100%;\n    }\n\n    .main-container {\n        flex-direction: column;\n        align-items: center;\n        gap: 25px;\n        padding-bottom: 20px;\n    }\n\n    #enemy-board .miss span, #player-board .miss span{\n        font-size: 4.2rem;\n    }\n    \n}\n\n@media only screen and (max-width: 500px) {\n    * {\n        font-size: 1rem;\n    }\n\n    .columns span, .rows span{\n        font-size: 0.8rem;\n    }\n\n    .board {\n        gap: 2px;\n    }\n\n    .square {\n        height: 1.8rem;\n        width: 1.8rem;\n        font-size: 1.6rem;\n    }\n\n    #new-game {\n        padding: 5px 20px;\n        font-size: 0.9rem;\n    }\n\n    #enemy-board .miss span,  #player-board .miss span{\n        font-size: 3rem;\n        }\n\n    .play-again-wrapper button {\n        width: 100%;\n    }\n\n    .place-ships-wrapper {\n        width: 100%;\n        height: 100%;\n        margin-top: 0;\n    }\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNUO0FBQUEsSUFFWEUsVUFBVTtFQUFBLFNBQUFBLFdBQUE7SUFBQUMsZUFBQSxPQUFBRCxVQUFBO0VBQUE7RUFBQUUsWUFBQSxDQUFBRixVQUFBO0lBQUFHLEdBQUE7SUFBQUMsS0FBQSxFQVczQixTQUFBQyxxQkFBQSxFQUE4QjtNQUFBLElBQUFDLEtBQUE7TUFDMUJQLGtEQUFJLENBQUNRLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4Q1Isa0RBQUksQ0FBQ1MsaUJBQWlCLENBQUMsQ0FBQztNQUV4QkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ2hFWixrREFBSSxDQUFDYSxjQUFjLENBQUMsQ0FBQztRQUNyQmIsa0RBQUksQ0FBQ2MsV0FBVyxDQUFDLENBQUM7TUFDdEIsQ0FBQyxDQUFDO01BRUZKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ3RFWixrREFBSSxDQUFDYSxjQUFjLENBQUMsQ0FBQztRQUNyQmIsa0RBQUksQ0FBQ2UsYUFBYSxDQUFDLENBQUM7TUFDeEIsQ0FBQyxDQUFDO01BRUZMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUM5REwsS0FBSSxDQUFDUyxjQUFjLENBQUMsQ0FBQztNQUN6QixDQUFDLENBQUM7TUFFRk4sUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQzdETCxLQUFJLENBQUNVLG9CQUFvQixDQUFDLENBQUM7TUFDL0IsQ0FBQyxDQUFDO01BRUZQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUM3RCxJQUFJTCxLQUFJLENBQUNXLGNBQWMsSUFBS1gsS0FBSSxDQUFDWSxXQUFXLENBQUNDLE1BQU0sS0FBSyxDQUFFLEVBQUU7VUFDeERiLEtBQUksQ0FBQ2MsWUFBWSxDQUFDLENBQUM7UUFDdkI7TUFDSixDQUFDLENBQUM7TUFFRlgsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQzlETCxLQUFJLENBQUNVLG9CQUFvQixDQUFDLENBQUM7UUFDM0JsQix1REFBUSxDQUFDdUIsaUJBQWlCLENBQUMsQ0FBQztRQUM1QmYsS0FBSSxDQUFDVyxjQUFjLEdBQUcsSUFBSTtNQUM5QixDQUFDLENBQUM7TUFFRixJQUFJLENBQUNLLDhCQUE4QixDQUFDLENBQUM7SUFDekM7RUFBQztJQUFBbkIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW1CLDJCQUFBLEVBQW9DO01BQUEsSUFBQUMsTUFBQTtNQUNoQ2YsUUFBUSxDQUFDZ0IsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUNDLE1BQU0sRUFBSztRQUNsRUEsTUFBTSxDQUFDaEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNpQixDQUFDLEVBQUs7VUFDcEMsSUFBSUEsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLFdBQVcsS0FBSyxFQUFFLEVBQUU7WUFDN0JOLE1BQUksQ0FBQ08sZUFBZSxDQUFDSCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0csT0FBTyxDQUFDQyxHQUFHLEVBQUVMLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRyxPQUFPLENBQUNFLEdBQUcsQ0FBQztVQUNwRTtRQUNKLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQS9CLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFrQiwrQkFBQSxFQUF3QztNQUFBLElBQUFhLE1BQUE7TUFDcEMxQixRQUFRLENBQUNnQixnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQ0MsTUFBTSxFQUFLO1FBQ3hFQSxNQUFNLENBQUNoQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ2lCLENBQUMsRUFBSztVQUNwQyxJQUFNSyxHQUFHLEdBQUtMLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRyxPQUFPLENBQXhCQyxHQUFHO1VBQ1QsSUFBTUMsR0FBRyxHQUFLTixDQUFDLENBQUNDLE1BQU0sQ0FBQ0csT0FBTyxDQUF4QkUsR0FBRztVQUNULElBQUlFLGlCQUFpQixHQUFHRCxNQUFJLENBQUNFLFdBQVcsQ0FBQ0YsTUFBSSxDQUFDRyxTQUFTLENBQUM7VUFDeEQsSUFBSUgsTUFBSSxDQUFDRyxTQUFTLEdBQUdILE1BQUksQ0FBQ0UsV0FBVyxDQUFDbEIsTUFBTSxJQUNyQ2dCLE1BQUksQ0FBQ0ksb0JBQW9CLENBQUNILGlCQUFpQixFQUFFSSxNQUFNLENBQUNQLEdBQUcsQ0FBQyxFQUFFTyxNQUFNLENBQUNOLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDM0VDLE1BQUksQ0FBQ00sU0FBUyxDQUFDUixHQUFHLEVBQUVDLEdBQUcsQ0FBQztVQUM1QjtRQUNKLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQS9CLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFnQixhQUFBLEVBQXNCO01BQ2xCdEIsdURBQVEsQ0FBQzRDLFNBQVMsQ0FBQyxJQUFJLENBQUN4QixXQUFXLENBQUM7TUFDcEMsSUFBSSxDQUFDSywwQkFBMEIsQ0FBQyxDQUFDO01BQ2pDLElBQUksQ0FBQ1Asb0JBQW9CLENBQUMsQ0FBQztJQUMvQjtFQUFDO0lBQUFiLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEyQixnQkFBdUJFLEdBQUcsRUFBRUMsR0FBRyxFQUFFO01BQzdCcEMsdURBQVEsQ0FBQ2lDLGVBQWUsQ0FBQ0UsR0FBRyxFQUFFQyxHQUFHLENBQUM7SUFDdEM7RUFBQztJQUFBL0IsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXFDLFVBQWlCUixHQUFHLEVBQUVDLEdBQUcsRUFBRTtNQUN2Qm5DLGtEQUFJLENBQUMwQyxTQUFTLENBQUMsSUFBSSxDQUFDSixXQUFXLENBQUMsSUFBSSxDQUFDQyxTQUFTLENBQUMsRUFBRUwsR0FBRyxFQUFFQyxHQUFHLEVBQUUsSUFBSSxDQUFDUyxXQUFXLENBQUM7TUFDNUUsSUFBSSxDQUFDekIsV0FBVyxDQUFDMEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDUCxXQUFXLENBQUMsSUFBSSxDQUFDQyxTQUFTLENBQUMsRUFDbkRFLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDLEVBQUVPLE1BQU0sQ0FBQ04sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDUyxXQUFXLENBQUMsQ0FBQztNQUNoRCxJQUFJLENBQUNMLFNBQVMsSUFBSSxDQUFDO01BQ25CdkMsa0RBQUksQ0FBQzhDLGlCQUFpQixDQUFDLElBQUksQ0FBQ1IsV0FBVyxDQUFDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7SUFDNUQ7RUFBQztJQUFBbkMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVcsZUFBQSxFQUF3QjtNQUNwQixJQUFJLENBQUM0QixXQUFXLEdBQUcsSUFBSSxDQUFDQSxXQUFXLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0lBQzNEO0VBQUM7SUFBQXhDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFZLHFCQUFBLEVBQThCO01BQzFCakIsa0RBQUksQ0FBQ1EsYUFBYSxDQUFDLG9CQUFvQixDQUFDO01BQ3hDUixrREFBSSxDQUFDOEMsaUJBQWlCLENBQUMsSUFBSSxDQUFDUixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDM0MsSUFBSSxDQUFDZiw4QkFBOEIsQ0FBQyxDQUFDO01BQ3JDLElBQUksQ0FBQ0osV0FBVyxHQUFHLEVBQUU7TUFDckIsSUFBSSxDQUFDb0IsU0FBUyxHQUFHLENBQUM7TUFDbEIsSUFBSSxDQUFDSyxXQUFXLEdBQUcsR0FBRztNQUN0QixJQUFJLENBQUMxQixjQUFjLEdBQUcsS0FBSztJQUMvQjtFQUFDO0lBQUFkLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEwQyxrQkFBeUJiLEdBQUcsRUFBRUMsR0FBRyxFQUFFO01BQy9CLElBQU1QLE1BQU0sR0FBRzVCLGtEQUFJLENBQUNnRCxVQUFVLENBQUNDLE1BQU0sQ0FBQ2YsR0FBRyxDQUFDLEVBQUVlLE1BQU0sQ0FBQ2QsR0FBRyxDQUFDLEVBQUUsb0JBQW9CLENBQUM7TUFDOUUsT0FBT1AsTUFBTSxDQUFDc0IsU0FBUyxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzVDO0VBQUM7SUFBQS9DLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtQyxxQkFBNEJwQixNQUFNLEVBQUVjLEdBQUcsRUFBRUMsR0FBRyxFQUFFO01BQzFDO01BQ0EsSUFBSSxJQUFJLENBQUNTLFdBQVcsS0FBSyxHQUFHLElBQUtWLEdBQUcsR0FBR2QsTUFBTSxHQUFHLENBQUMsR0FBSSxDQUFDLEVBQUUsT0FBTyxLQUFLO01BQ3BFLElBQUksSUFBSSxDQUFDd0IsV0FBVyxLQUFLLEdBQUcsSUFBS1QsR0FBRyxHQUFHZixNQUFNLEdBQUcsQ0FBQyxHQUFJLENBQUMsRUFBRSxPQUFPLEtBQUs7O01BRXBFO01BQ0EsSUFBSSxJQUFJLENBQUN3QixXQUFXLEtBQUssR0FBRyxFQUFFO1FBQzFCO1FBQ0E7UUFDQSxJQUFJVCxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQ1ksaUJBQWlCLENBQUNiLEdBQUcsRUFBRUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sS0FBSztRQUNqRSxLQUFLLElBQUlpQixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdoQyxNQUFNLEVBQUVnQyxDQUFDLEVBQUUsRUFBRTtVQUM3QjtVQUNBLElBQUlsQixHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQ2EsaUJBQWlCLENBQUNiLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBR2lCLENBQUMsQ0FBQyxFQUFFLE9BQU8sS0FBSztVQUNyRTtVQUNBLElBQUlsQixHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQ2EsaUJBQWlCLENBQUNiLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBR2lCLENBQUMsQ0FBQyxFQUFFLE9BQU8sS0FBSztRQUN6RTtRQUNBO1FBQ0EsSUFBS2pCLEdBQUcsR0FBR2YsTUFBTSxHQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMyQixpQkFBaUIsQ0FBQ2IsR0FBRyxFQUFFQyxHQUFHLEdBQUdmLE1BQU0sQ0FBQyxFQUFFLE9BQU8sS0FBSztNQUN0RixDQUFDLE1BQU07UUFDSDtRQUNBO1FBQ0EsSUFBSWMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNhLGlCQUFpQixDQUFDYixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxHQUFHLENBQUMsRUFBRSxPQUFPLEtBQUs7UUFDakUsS0FBSyxJQUFJaUIsRUFBQyxHQUFHLENBQUMsRUFBRUEsRUFBQyxHQUFHaEMsTUFBTSxFQUFFZ0MsRUFBQyxFQUFFLEVBQUU7VUFDN0I7VUFDQSxJQUFJakIsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNZLGlCQUFpQixDQUFDYixHQUFHLEdBQUdrQixFQUFDLEVBQUVqQixHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxLQUFLO1VBQ3JFO1VBQ0EsSUFBSUEsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNZLGlCQUFpQixDQUFDYixHQUFHLEdBQUdrQixFQUFDLEVBQUVqQixHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxLQUFLO1FBQ3pFO1FBQ0E7UUFDQSxJQUFLRCxHQUFHLEdBQUdkLE1BQU0sR0FBSSxFQUFFLElBQUksSUFBSSxDQUFDMkIsaUJBQWlCLENBQUNiLEdBQUcsR0FBR2QsTUFBTSxFQUFFZSxHQUFHLENBQUMsRUFBRSxPQUFPLEtBQUs7TUFDdEY7TUFFQSxPQUFPLElBQUk7SUFDZjtFQUFDO0VBQUEsT0FBQWxDLFVBQUE7QUFBQTtBQUFBb0QsZUFBQSxDQTlJZ0JwRCxVQUFVLGlCQUNOLEdBQUc7QUFBQW9ELGVBQUEsQ0FEUHBELFVBQVUsaUJBR04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQUFvRCxlQUFBLENBSDVCcEQsVUFBVSxlQUtSLENBQUM7QUFBQW9ELGVBQUEsQ0FMSHBELFVBQVUsaUJBT04sRUFBRTtBQUFBb0QsZUFBQSxDQVBOcEQsVUFBVSxvQkFTSCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNaWnNELFVBQVU7RUFDM0IsU0FBQUEsV0FBWUMsTUFBTSxFQUFFO0lBQUF0RCxlQUFBLE9BQUFxRCxVQUFBO0lBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLENBQ2IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDM0M7RUFDTDtFQUFDdEQsWUFBQSxDQUFBb0QsVUFBQTtJQUFBbkQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXFELFdBQUEsRUFBYTtNQUNULElBQUksQ0FBQ0QsU0FBUyxHQUFHLENBQ2IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDM0M7SUFDTDtFQUFDO0lBQUFyRCxHQUFBO0lBQUFDLEtBQUEs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LEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxF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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsT0FBTyxpRkFBaUYsYUFBYSxjQUFjLFlBQVksVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxLQUFLLFVB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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQWlEO0FBQzVCO0FBRXJCQyw4REFBVSxDQUFDSyxvQkFBb0IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL2VuZW15TG9naWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbC9nYW1lcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3L3ZpZXcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVwbGF5IGZyb20gJy4uL21vZGVsL2dhbWVwbGF5JztcbmltcG9ydCBWaWV3IGZyb20gJy4uL3ZpZXcvdmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBvcmllbnRhdGlvbiA9ICdoJztcblxuICAgIHN0YXRpYyBzaGlwTGVuZ3RocyA9IFs0LCAzLCAzLCAyLCAyLCAxLCAxLCAxXTtcblxuICAgIHN0YXRpYyBzaGlwSW5kZXggPSAwO1xuXG4gICAgc3RhdGljIHNoaXBzUGxhY2VkID0gW107XG5cbiAgICBzdGF0aWMgcGxhY2VkUmFuZG9tbHkgPSBmYWxzZTtcblxuICAgIHN0YXRpYyBhdHRhY2hFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgVmlldy5nZW5lcmF0ZUJvYXJkKCcjcGxhY2Utc2hpcHMtYm9hcmQnKTtcbiAgICAgICAgVmlldy5oaWRlTWFpbkNvbnRhaW5lcigpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctZ2FtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgVmlldy5zaG93UGxhY2VTaGlwcygpO1xuICAgICAgICAgICAgVmlldy5zaG93T3ZlcmxheSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheS1hZ2Fpbi1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIFZpZXcuc2hvd1BsYWNlU2hpcHMoKTtcbiAgICAgICAgICAgIFZpZXcuaGlkZVBsYXlBZ2FpbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm90YXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVJvdGF0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNldFBsYWNlU2hpcHNCb2FyZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYWNlZFJhbmRvbWx5IHx8ICh0aGlzLnNoaXBzUGxhY2VkLmxlbmd0aCA9PT0gOCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0TmV3R2FtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZG9tJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UGxhY2VTaGlwc0JvYXJkKCk7XG4gICAgICAgICAgICBHYW1lcGxheS5jcmVhdGVSYW5kb21Cb2FyZCgpO1xuICAgICAgICAgICAgdGhpcy5wbGFjZWRSYW5kb21seSA9IHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXR0YWNoUGxhY2VTaGlwU3F1YXJlTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGF0dGFjaFNxdWFyZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZW5lbXktYm9hcmQgLnNxdWFyZScpLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTWFrZXNNb3ZlKGUudGFyZ2V0LmRhdGFzZXQucm93LCBlLnRhcmdldC5kYXRhc2V0LmNvbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBhdHRhY2hQbGFjZVNoaXBTcXVhcmVMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGFjZS1zaGlwcy1ib2FyZCAuc3F1YXJlJykuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7IHJvdyB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgICAgICAgICAgICBsZXQgeyBjb2wgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTaGlwTGVuZ3RoID0gdGhpcy5zaGlwTGVuZ3Roc1t0aGlzLnNoaXBJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcEluZGV4IDwgdGhpcy5zaGlwTGVuZ3Rocy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc1NoaXBQbGFjZW1lbnRWYWxpZChjdXJyZW50U2hpcExlbmd0aCwgTnVtYmVyKHJvdyksIE51bWJlcihjb2wpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlU2hpcChyb3csIGNvbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBzdGFydE5ld0dhbWUoKSB7XG4gICAgICAgIEdhbWVwbGF5LnN0YXJ0R2FtZSh0aGlzLnNoaXBzUGxhY2VkKTtcbiAgICAgICAgdGhpcy5hdHRhY2hTcXVhcmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnJlc2V0UGxhY2VTaGlwc0JvYXJkKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHBsYXllck1ha2VzTW92ZShyb3csIGNvbCkge1xuICAgICAgICBHYW1lcGxheS5wbGF5ZXJNYWtlc01vdmUocm93LCBjb2wpO1xuICAgIH1cblxuICAgIHN0YXRpYyBwbGFjZVNoaXAocm93LCBjb2wpIHtcbiAgICAgICAgVmlldy5wbGFjZVNoaXAodGhpcy5zaGlwTGVuZ3Roc1t0aGlzLnNoaXBJbmRleF0sIHJvdywgY29sLCB0aGlzLm9yaWVudGF0aW9uKTtcbiAgICAgICAgdGhpcy5zaGlwc1BsYWNlZC5wdXNoKFt0aGlzLnNoaXBMZW5ndGhzW3RoaXMuc2hpcEluZGV4XSxcbiAgICAgICAgICAgIE51bWJlcihyb3cpLCBOdW1iZXIoY29sKSwgdGhpcy5vcmllbnRhdGlvbl0pO1xuICAgICAgICB0aGlzLnNoaXBJbmRleCArPSAxO1xuICAgICAgICBWaWV3LmNoYW5nZU5leHRTaGlwTXNnKHRoaXMuc2hpcExlbmd0aHNbdGhpcy5zaGlwSW5kZXhdKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hhbmdlUm90YXRpb24oKSB7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSB0aGlzLm9yaWVudGF0aW9uID09PSAnaCcgPyAndicgOiAnaCc7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlc2V0UGxhY2VTaGlwc0JvYXJkKCkge1xuICAgICAgICBWaWV3LmdlbmVyYXRlQm9hcmQoJyNwbGFjZS1zaGlwcy1ib2FyZCcpO1xuICAgICAgICBWaWV3LmNoYW5nZU5leHRTaGlwTXNnKHRoaXMuc2hpcExlbmd0aHNbMF0pO1xuICAgICAgICB0aGlzLmF0dGFjaFBsYWNlU2hpcFNxdWFyZUxpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnNoaXBzUGxhY2VkID0gW107XG4gICAgICAgIHRoaXMuc2hpcEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9ICdoJztcbiAgICAgICAgdGhpcy5wbGFjZWRSYW5kb21seSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBkb2VzU3F1YXJlSGFzU2hpcChyb3csIGNvbCkge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBWaWV3LmZpbmRTcXVhcmUoU3RyaW5nKHJvdyksIFN0cmluZyhjb2wpLCAnI3BsYWNlLXNoaXBzLWJvYXJkJyk7XG4gICAgICAgIHJldHVybiBzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzU2hpcFBsYWNlbWVudFZhbGlkKGxlbmd0aCwgcm93LCBjb2wpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgc2hpcCBpcyBvdXQgb2YgYm91bmRzXG4gICAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndicgJiYgKHJvdyArIGxlbmd0aCAtIDEpID4gOSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ2gnICYmIChjb2wgKyBsZW5ndGggLSAxKSA+IDkpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvLyBjaGVjayBmb3IgYWRqYWNlbnQgc2hpcHNcbiAgICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgICAgLy8gZm9yIGhvcml6b250YWwgc2hpcFxuICAgICAgICAgICAgLy8gY2hlY2sgbGVmdFxuICAgICAgICAgICAgaWYgKGNvbCA+IDAgJiYgdGhpcy5kb2VzU3F1YXJlSGFzU2hpcChyb3csIGNvbCAtIDEpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYWJvdmVcbiAgICAgICAgICAgICAgICBpZiAocm93ID4gMCAmJiB0aGlzLmRvZXNTcXVhcmVIYXNTaGlwKHJvdyAtIDEsIGNvbCArIGkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYmVsbG93XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IDkgJiYgdGhpcy5kb2VzU3F1YXJlSGFzU2hpcChyb3cgKyAxLCBjb2wgKyBpKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2hlY2sgcmlnaHRcbiAgICAgICAgICAgIGlmICgoY29sICsgbGVuZ3RoKSA8IDEwICYmIHRoaXMuZG9lc1NxdWFyZUhhc1NoaXAocm93LCBjb2wgKyBsZW5ndGgpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmb3IgdmVydGljYWwgc2hpcFxuICAgICAgICAgICAgLy8gY2hlY2sgYWJvdmVcbiAgICAgICAgICAgIGlmIChyb3cgPiAwICYmIHRoaXMuZG9lc1NxdWFyZUhhc1NoaXAocm93IC0gMSwgY29sKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGxlZnRcbiAgICAgICAgICAgICAgICBpZiAoY29sID4gMCAmJiB0aGlzLmRvZXNTcXVhcmVIYXNTaGlwKHJvdyArIGksIGNvbCAtIDEpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgcmlnaHRcbiAgICAgICAgICAgICAgICBpZiAoY29sIDwgOSAmJiB0aGlzLmRvZXNTcXVhcmVIYXNTaGlwKHJvdyArIGksIGNvbCArIDEpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjaGVjayBiZWxsb3dcbiAgICAgICAgICAgIGlmICgocm93ICsgbGVuZ3RoKSA8IDEwICYmIHRoaXMuZG9lc1NxdWFyZUhhc1NoaXAocm93ICsgbGVuZ3RoLCBjb2wpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteUxvZ2ljIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMubW92ZXNEb25lID0gW1xuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBjbGVhck1vdmVzKCkge1xuICAgICAgICB0aGlzLm1vdmVzRG9uZSA9IFtcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgYXR0YWNrKGVuZW15Qm9hcmQpIHtcbiAgICAgICAgbGV0IHJvdyA9IG51bGw7XG4gICAgICAgIGxldCBjb2wgPSBudWxsO1xuXG4gICAgICAgIGxldCBzaGlwTG9jYXRpb24gPSB0aGlzLmZpbmRTaGlwKGVuZW15Qm9hcmQpO1xuXG4gICAgICAgIGlmIChzaGlwTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGxldCBbc2hpcFJvdywgc2hpcENvbF0gPSBzaGlwTG9jYXRpb247XG4gICAgICAgICAgICBsZXQgbW92ZSA9IHRoaXMuY2FsY3VsYXRlTW92ZShzaGlwUm93LCBzaGlwQ29sKTtcbiAgICAgICAgICAgIFtyb3csIGNvbF0gPSBtb3ZlIHx8IHRoaXMuZ2V0UmFuZG9tTW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgW3JvdywgY29sXSA9IHRoaXMuZ2V0UmFuZG9tTW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzU3VjY2VzcyA9IHRoaXMucGxheWVyLm1ha2VNb3ZlKHJvdywgY29sLCBlbmVteUJvYXJkKTtcbiAgICAgICAgaWYgKGlzU3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5tb3Zlc0RvbmVbcm93XVtjb2xdID0gJ3NoaXAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb3Zlc0RvbmVbcm93XVtjb2xdID0gJ21pc3MnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcm93LCBjb2wsIGlzU3VjY2Vzc107XG4gICAgfVxuXG4gICAgaXNNb3ZlRG9uZUJlZm9yZShyb3csIGNvbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3Zlc0RvbmVbcm93XVtjb2xdICE9PSAnJztcbiAgICB9XG5cbiAgICBmaW5kU2hpcChlbmVteUJvYXJkKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMubW92ZXNEb25lLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMubW92ZXNEb25lLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3Zlc0RvbmVbcm93XVtjb2xdID09PSAnc2hpcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbmVteUJvYXJkLmdldFBvc2l0aW9uKHJvdywgY29sKS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtyb3csIGNvbF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tTW92ZSgpIHtcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuaXNNb3ZlRG9uZUJlZm9yZShyb3csIGNvbCkpIHtcbiAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVNb3ZlKHJvdywgY29sKSB7XG4gICAgICAgIGxldCBtb3ZlID0gbnVsbDtcbiAgICAgICAgLy8gY2hlY2sgbGVmdFxuICAgICAgICBpZiAoY29sID4gMCAmJiAhdGhpcy5pc01vdmVEb25lQmVmb3JlKHJvdywgY29sIC0gMSkpIHtcbiAgICAgICAgICAgIG1vdmUgPSBbcm93LCBjb2wgLSAxXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayByaWdodFxuICAgICAgICBpZiAoY29sIDwgOSAmJiAhdGhpcy5pc01vdmVEb25lQmVmb3JlKHJvdywgY29sICsgMSkpIHtcbiAgICAgICAgICAgIG1vdmUgPSBbcm93LCBjb2wgKyAxXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayB1cFxuICAgICAgICBpZiAocm93ID4gMCAmJiAhdGhpcy5pc01vdmVEb25lQmVmb3JlKHJvdyAtIDEsIGNvbCkpIHtcbiAgICAgICAgICAgIG1vdmUgPSBbcm93IC0gMSwgY29sXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBkb3duXG4gICAgICAgIGlmIChyb3cgPCA5ICYmICF0aGlzLmlzTW92ZURvbmVCZWZvcmUocm93ICsgMSwgY29sKSkge1xuICAgICAgICAgICAgbW92ZSA9IFtyb3cgKyAxLCBjb2xdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb3ZlO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgfVxuXG4gICAgY2xlYXJCb2FyZCgpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAobGVuZ3RoLCByb3csIGNvbCwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgaWYgKCEodGhpcy5ib2FyZFtyb3ddW2NvbF0gaW5zdGFuY2VvZiBTaGlwKSkge1xuICAgICAgICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IG5ld1NoaXA7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbCArIGldID0gbmV3U2hpcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3cgKyBpXVtjb2xdID0gbmV3U2hpcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb2VzTm90SGF2ZUFkalNoaXBzKGxlbmd0aCwgcm93LCBjb2wsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAvLyBmb3IgaG9yaXpvbnRhbCBzaGlwXG4gICAgICAgICAgICAvLyBjaGVjayBsZWZ0XG4gICAgICAgICAgICBpZiAoY29sID4gMCAmJiB0aGlzLmJvYXJkW3Jvd11bY29sIC0gMV0gIT09ICcnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYWJvdmVcbiAgICAgICAgICAgICAgICBpZiAocm93ID4gMCAmJiB0aGlzLmJvYXJkW3JvdyAtIDFdW2NvbCArIGldICE9PSAnJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGJlbGxvd1xuICAgICAgICAgICAgICAgIGlmIChyb3cgPCA5ICYmIHRoaXMuYm9hcmRbcm93ICsgMV1bY29sICsgaV0gIT09ICcnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjaGVjayByaWdodFxuICAgICAgICAgICAgaWYgKChjb2wgKyBsZW5ndGgpIDwgMTAgJiYgdGhpcy5ib2FyZFtyb3ddW2NvbCArIGxlbmd0aF0gIT09ICcnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmb3IgdmVydGljYWwgc2hpcFxuICAgICAgICAgICAgLy8gY2hlY2sgYWJvdmVcbiAgICAgICAgICAgIGlmIChyb3cgPiAwICYmIHRoaXMuYm9hcmRbcm93IC0gMV1bY29sXSAhPT0gJycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBsZWZ0XG4gICAgICAgICAgICAgICAgaWYgKGNvbCA+IDAgJiYgdGhpcy5ib2FyZFtyb3cgKyBpXVtjb2wgLSAxXSAhPT0gJycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayByaWdodFxuICAgICAgICAgICAgICAgIGlmIChjb2wgPCA5ICYmIHRoaXMuYm9hcmRbcm93ICsgaV1bY29sICsgMV0gIT09ICcnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjaGVjayBiZWxsb3dcbiAgICAgICAgICAgIGlmICgocm93ICsgbGVuZ3RoKSA8IDEwICYmIHRoaXMuYm9hcmRbcm93ICsgbGVuZ3RoXVtjb2xdICE9PSAnJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNCwgMywgMywgMiwgMiwgMSwgMSwgMV07XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9ucyA9IFsnaCcsICd2J107XG4gICAgICAgIHNoaXBMZW5ndGhzLmZvckVhY2goKGxlbmd0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJhbmRvbVJvdztcbiAgICAgICAgICAgIGxldCByYW5kb21Db2w7XG4gICAgICAgICAgICBsZXQgcmFuZG9tT3JpZW50O1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIHJhbmRvbU9yaWVudCA9IG9yaWVudGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbU9yaWVudCA9PT0gJ3YnICYmIChyYW5kb21Sb3cgKyBsZW5ndGggLSAxKSA+IDkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChyYW5kb21PcmllbnQgPT09ICdoJyAmJiAocmFuZG9tQ29sICsgbGVuZ3RoIC0gMSkgPiA5KSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMuZ2V0UG9zaXRpb24ocmFuZG9tUm93LCByYW5kb21Db2wpID09PSAnJylcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmRvZXNOb3RIYXZlQWRqU2hpcHMobGVuZ3RoLCByYW5kb21Sb3csIHJhbmRvbUNvbCwgcmFuZG9tT3JpZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcChsZW5ndGgsIHJhbmRvbVJvdywgcmFuZG9tQ29sLCByYW5kb21PcmllbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbihyb3csIGNvbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG4gICAgfVxuXG4gICAgcmVjaWV2ZUF0dGFjayhyb3csIGNvbCkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbF0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYm9hcmRbcm93XVtjb2xdLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0uaGl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbF0gIT09ICdtaXNzZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9ICdtaXNzZWQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmVtYWluaW5nU2hpcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzLnJlZHVjZSgodG90YWwsIHNoaXApID0+IHtcbiAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIGlzR2FtZU92ZXIoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCBWaWV3IGZyb20gJy4uL3ZpZXcvdmlldyc7XG5pbXBvcnQgRW5lbXlMb2dpYyBmcm9tICcuL2VuZW15TG9naWMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVwbGF5IHtcbiAgICBzdGF0aWMgcGxheWVyID0gbmV3IFBsYXllcigpO1xuXG4gICAgc3RhdGljIGVuZW15ID0gbmV3IFBsYXllcigpO1xuXG4gICAgc3RhdGljIGVuZW15QUkgPSBuZXcgRW5lbXlMb2dpYyhHYW1lcGxheS5lbmVteSk7XG5cbiAgICBzdGF0aWMgc3RhcnRHYW1lKHNoaXBzKSB7XG4gICAgICAgIEdhbWVwbGF5LmVuZW15LmNsZWFyQm9hcmQoKTtcbiAgICAgICAgR2FtZXBsYXkuZW5lbXlBSS5jbGVhck1vdmVzKCk7XG4gICAgICAgIGlmIChzaGlwcy5sZW5ndGggPT09IDgpIHtcbiAgICAgICAgICAgIEdhbWVwbGF5LnBsYXllci5jbGVhckJvYXJkKCk7XG4gICAgICAgICAgICBHYW1lcGxheS5wbGF5ZXIucGxhY2VTaGlwcyhzaGlwcyk7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZXBsYXkuZW5lbXkucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgICAgIFZpZXcuZ2VuZXJhdGVQbGF5ZXJCb2FyZCh0aGlzLnBsYXllci5nZXRCb2FyZCgpKTtcbiAgICAgICAgVmlldy5nZW5lcmF0ZUVuZW15Qm9hcmQoKTtcbiAgICAgICAgVmlldy5kaXNwbGF5UmVtYWluaW5nRW5lbXlTaGlwcyh0aGlzLmVuZW15LmdldFJlbWFpbmluZ1NoaXBzKCkpO1xuICAgICAgICBWaWV3LmRpc3BsYXlSZW1haW5pbmdQbGF5ZXJTaGlwcyh0aGlzLnBsYXllci5nZXRSZW1haW5pbmdTaGlwcygpKTtcbiAgICAgICAgVmlldy5kaXNwbGF5UGxheWVyVHVybigpO1xuICAgICAgICBWaWV3LmhpZGVPdmVybGF5KCk7XG4gICAgICAgIFZpZXcuaGlkZVBsYXlBZ2FpbigpO1xuICAgICAgICBWaWV3LmhpZGVQbGFjZVNoaXBzKCk7XG4gICAgICAgIFZpZXcuc2hvd01haW5Db250YWluZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGxheWVyTWFrZXNNb3ZlKHJvdywgY29sKSB7XG4gICAgICAgIGNvbnN0IGlzU3VjY2VzcyA9IEdhbWVwbGF5LnBsYXllci5tYWtlTW92ZShyb3csIGNvbCwgR2FtZXBsYXkuZW5lbXkuZ2V0Qm9hcmQoKSk7XG4gICAgICAgIFZpZXcuZGlzcGxheVBsYXllck1vdmVSZXN1bHQocm93LCBjb2wsIGlzU3VjY2Vzcyk7XG4gICAgICAgIFZpZXcuZGlzcGxheVJlbWFpbmluZ0VuZW15U2hpcHMoR2FtZXBsYXkuZW5lbXkuZ2V0UmVtYWluaW5nU2hpcHMoKSk7XG4gICAgICAgIGlmIChHYW1lcGxheS5lbmVteS5pc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIFZpZXcuZGlzcGxheVBsYXllcldpbigpO1xuICAgICAgICAgICAgVmlldy5zaG93T3ZlcmxheSgpO1xuICAgICAgICAgICAgVmlldy5zaG93UGxheUFnYWluKCdwJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgIFZpZXcuZGlzcGxheUVuZW15VHVybigpO1xuICAgICAgICAgICAgc2V0VGltZW91dChHYW1lcGxheS5lbmVteU1ha2VzTW92ZSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBlbmVteU1ha2VzTW92ZSgpIHtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2wsIGlzU3VjY2Vzc10gPSBHYW1lcGxheS5lbmVteUFJLmF0dGFjayhHYW1lcGxheS5wbGF5ZXIuZ2V0Qm9hcmQoKSk7XG4gICAgICAgICAgICBWaWV3LmRpc3BsYXlFbmVteU1vdmVSZXN1bHQocm93LCBjb2wsIGlzU3VjY2Vzcyk7XG4gICAgICAgICAgICBWaWV3LmRpc3BsYXlSZW1haW5pbmdQbGF5ZXJTaGlwcyhHYW1lcGxheS5wbGF5ZXIuZ2V0UmVtYWluaW5nU2hpcHMoKSk7XG4gICAgICAgICAgICBpZiAoR2FtZXBsYXkucGxheWVyLmlzR2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgICAgIFZpZXcuZGlzcGxheUVuZW15V2luKCk7XG4gICAgICAgICAgICAgICAgVmlldy5zaG93T3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgIFZpZXcuc2hvd1BsYXlBZ2FpbignZScpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgVmlldy5kaXNwbGF5UGxheWVyVHVybigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVJhbmRvbUJvYXJkKCkge1xuICAgICAgICBHYW1lcGxheS5wbGF5ZXIuY2xlYXJCb2FyZCgpO1xuICAgICAgICBHYW1lcGxheS5wbGF5ZXIucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgICAgIFZpZXcuZ2VuZXJhdGVCb2FyZCgnI3BsYWNlLXNoaXBzLWJvYXJkJywgR2FtZXBsYXkucGxheWVyLmdldEJvYXJkKCkpO1xuICAgICAgICBWaWV3LmNoYW5nZU5leHRTaGlwTXNnKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIH1cblxuICAgIGdldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICB9XG5cbiAgICBjbGVhckJvYXJkKCkge1xuICAgICAgICB0aGlzLmJvYXJkLmNsZWFyQm9hcmQoKTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXBzKGNvb3JkQXJyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucGxhY2VTaGlwKC4uLmNvb3JkQXJyW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICB9XG5cbiAgICBtYWtlTW92ZShyb3csIGNvbCwgZW5lbXlCb2FyZCkge1xuICAgICAgICBlbmVteUJvYXJkLnJlY2lldmVBdHRhY2socm93LCBjb2wpO1xuICAgICAgICBpZiAoZW5lbXlCb2FyZC5nZXRQb3NpdGlvbihyb3csIGNvbCkgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0UmVtYWluaW5nU2hpcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldFJlbWFpbmluZ1NoaXBzKCk7XG4gICAgfVxuXG4gICAgaXNHYW1lT3ZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuaXNHYW1lT3ZlcigpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy50aW1lc0hpdCA9IDA7XG4gICAgfVxuXG4gICAgaGl0ID0gKCkgPT4gKyt0aGlzLnRpbWVzSGl0O1xuXG4gICAgaXNTdW5rID0gKCkgPT4gdGhpcy50aW1lc0hpdCA+PSB0aGlzLmxlbmd0aDtcbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi4vbW9kZWwvZ2FtZWJvYXJkJztcbmltcG9ydCBTaGlwIGZyb20gJy4uL21vZGVsL3NoaXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgICBzdGF0aWMgZ2VuZXJhdGVCb2FyZChpZCwgYm9hcmQgPSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmRhdGFzZXQuY29sID0gY29sO1xuICAgICAgICAgICAgICAgIGlmIChib2FyZCAmJiBib2FyZC5nZXRCb2FyZCgpW3Jvd11bY29sXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCkuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZW5lcmF0ZVBsYXllckJvYXJkKGJvYXJkKSB7XG4gICAgICAgIFZpZXcuZ2VuZXJhdGVCb2FyZCgnI3BsYXllci1ib2FyZCcsIGJvYXJkKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2VuZXJhdGVFbmVteUJvYXJkKGJvYXJkKSB7XG4gICAgICAgIFZpZXcuZ2VuZXJhdGVCb2FyZCgnI2VuZW15LWJvYXJkJywgYm9hcmQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5UmVtYWluaW5nRW5lbXlTaGlwcyhhbW91bnQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZW15LWNhcHRpb24gLnVuc2lua2VkLXNoaXBzJykudGV4dENvbnRlbnQgPSBhbW91bnQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlSZW1haW5pbmdQbGF5ZXJTaGlwcyhhbW91bnQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci1jYXB0aW9uIC51bnNpbmtlZC1zaGlwcycpLnRleHRDb250ZW50ID0gYW1vdW50O1xuICAgIH1cblxuICAgIHN0YXRpYyBmaW5kU3F1YXJlKHJvdywgY29sLCBpZCkge1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke2lkfSAuc3F1YXJlYCkuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLmRhdGFzZXQucm93ID09PSByb3cgJiYgc3F1YXJlLmRhdGFzZXQuY29sID09PSBjb2wpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBzcXVhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5UGxheWVyTW92ZVJlc3VsdChyb3csIGNvbCwgaXNTdWNjZXNzKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuZmluZFNxdWFyZShyb3csIGNvbCwgJyNlbmVteS1ib2FyZCcpO1xuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwLWhpdCcpO1xuICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9ICc8c3Bhbj5YPC9zcGFuPic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gJzxzcGFuPio8L3NwYW4+JztcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5RW5lbXlNb3ZlUmVzdWx0KHJvdywgY29sLCBpc1N1Y2Nlc3MpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gdGhpcy5maW5kU3F1YXJlKHJvdy50b1N0cmluZygpLCBjb2wudG9TdHJpbmcoKSwgJyNwbGF5ZXItYm9hcmQnKTtcbiAgICAgICAgaWYgKGlzU3VjY2Vzcykge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwLWhpdCcpO1xuICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9ICc8c3Bhbj5YPC9zcGFuPic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gJzxzcGFuPio8L3NwYW4+JztcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRSZWRCbGlua2luZygpIHtcbiAgICAgICAgY29uc3QgY2FwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLWNhcHRpb24nKTtcbiAgICAgICAgY2FwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdncmVlbi1ibGluaycpO1xuICAgICAgICBjYXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3JlZC1ibGluaycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRHcmVlbkJsaW5raW5nKCkge1xuICAgICAgICBjb25zdCBjYXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtY2FwdGlvbicpO1xuICAgICAgICBjYXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZC1ibGluaycpO1xuICAgICAgICBjYXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2dyZWVuLWJsaW5rJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlQbGF5ZXJUdXJuKCkge1xuICAgICAgICBWaWV3LmFkZEdyZWVuQmxpbmtpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtY2FwdGlvbicpLnRleHRDb250ZW50ID0gJ1lvdXIgVHVybiEnO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5RW5lbXlUdXJuKCkge1xuICAgICAgICBWaWV3LmFkZFJlZEJsaW5raW5nKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLWNhcHRpb24nKS50ZXh0Q29udGVudCA9ICdFbmVteVxcJ3MgVHVybiEnO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5UGxheWVyV2luKCkge1xuICAgICAgICBWaWV3LmFkZEdyZWVuQmxpbmtpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtY2FwdGlvbicpLnRleHRDb250ZW50ID0gJ1lvdXIgV29uISc7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlFbmVteVdpbigpIHtcbiAgICAgICAgVmlldy5hZGRSZWRCbGlua2luZygpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1jYXB0aW9uJykudGV4dENvbnRlbnQgPSAnWW91IExvc3QuLi4nO1xuICAgIH1cblxuICAgIHN0YXRpYyBoaWRlT3ZlcmxheSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd092ZXJsYXkoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dQbGF5QWdhaW4od2lubmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5LWFnYWluJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSB3aW5uZXIgPT09ICdwJyA/ICdZb3Ugd29uIDopJyA6ICdZb3UgbG9zdCA6KCc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5LWFnYWluICNyZXN1bHQtbXNnJykudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cblxuICAgIHN0YXRpYyBoaWRlUGxheUFnYWluKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheS1hZ2FpbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIHN0YXRpYyBwbGFjZVNoaXAobGVuZ3RoLCByb3csIGNvbCwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgbGV0IHNxdWFyZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUgPSB0aGlzLmZpbmRTcXVhcmUocm93LCBTdHJpbmcoTnVtYmVyKGNvbCkgKyBpKSwgJyNwbGFjZS1zaGlwcy1ib2FyZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUgPSB0aGlzLmZpbmRTcXVhcmUoU3RyaW5nKE51bWJlcihyb3cpICsgaSksIGNvbCwgJyNwbGFjZS1zaGlwcy1ib2FyZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNoYW5nZU5leHRTaGlwTXNnKGxlbmd0aCkge1xuICAgICAgICBjb25zdCBtc2cgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/ICdBbGwgc2hpcHMgcGxhY2VkISdcbiAgICAgICAgICAgIDogYFBsYWNlIHlvdXIgJHtsZW5ndGh9IHNxdWFyZSBsb25nIHNoaXBgO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcC1kZXNjJykudGV4dENvbnRlbnQgPSBtc2c7XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGVQbGFjZVNoaXBzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhY2Utc2hpcHMnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd1BsYWNlU2hpcHMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZS1zaGlwcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoaWRlTWFpbkNvbnRhaW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dNYWluQ29udGFpbmVyKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250LzA0Ql8zMF9fLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuXG4gICAgZm9udC1mYW1pbHk6ICdkZWZhdWx0JztcbiAgXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuXG4gICAgc3R5bGU6IG5vcm1hbDtcblxuICAgIHdlaWdodDogNjAwO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdkZWZhdWx0Jywgc2Fucy1zZXJpZjtcbn1cblxuOnJvb3Qge1xuICAgIC0tZm9udC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjM2QzZDNkO1xuICAgIC0tcHJpbWFyeS1jb2xvcjogIzMwMzAzMDtcbiAgICAtLWdyZWVuOiAjMmJjNTU3O1xuICAgIC0tcmVkOiAjZTIzNjM2O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI25ldy1nYW1lIHtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuI25ldy1nYW1lOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNXB4KTtcbn1cblxubWFpbntcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcilcbn1cblxuLm1haW4tY29udGFpbmVyLCAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggMWZyO1xuICAgIGdhcDogOHB4O1xufVxuXG4uYm9hcmQgLmNvbHVtbnMge1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib2FyZCAucm93cyB7XG4gICAgXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQsICNwbGFjZS1zaGlwcy1ib2FyZCB7XG4gICAgYm9yZGVyOiA0cHggIzAwMmM2NiBzb2xpZDtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgIGdyaWQtcm93OiAyLzM7XG59XG5cbiNnYW1lLWNhcHRpb24ge1xuICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xufVxuXG4jZ2FtZS1jYXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwbGF5ZXItY2FwdGlvbiwgI2VuZW15LWNhcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4jcGxheWVyLWNhcHRpb24sICNwbGF5ZXItY2FwdGlvbj5ociB7XG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcbn1cblxuI2VuZW15LWNhcHRpb24sICNlbmVteS1jYXB0aW9uPmhyIHtcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcbn1cblxuaHIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5zcXVhcmUge1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgXG59XG5cbiNlbmVteS1ib2FyZCAuc3F1YXJlLCAjcGxheWVyLWJvYXJkIC5zcXVhcmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4jZW5lbXktYm9hcmQgLmVtcHR5IHtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuI2VuZW15LWJvYXJkIC5lbXB0eTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDUyLCAxODApO1xufVxuXG4jZW5lbXktYm9hcmQgLm1pc3Mgc3BhbiwgI3BsYXllci1ib2FyZCAubWlzcyBzcGFue1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNXB4O1xufVxuXG4uZW1wdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzg5ZGE7XG5cbn1cblxuLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XG59XG5cbi5zaGlwLWhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMzYzNjtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzg5ZGE7XG59XG5cbiNwbGF5ZXItYm9hcmQsICNlbmVteS1ib2FyZCwgI3BsYWNlLXNoaXBzLWJvYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYzY2O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiA1cHggNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uY2FwdGlvbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNvdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmhpZGRlbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4jcGxheS1hZ2FpbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxheS1hZ2Fpbi13cmFwcGVyIHtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucGxheS1hZ2Fpbi13cmFwcGVyIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI3BsYWNlLXNoaXBzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wbGFjZS1zaGlwcy13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xufVxuXG4ucGxhY2Utc2hpcHMtd3JhcHBlciBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ucGxhY2Utc2hpcHMtd3JhcHBlciAuYnV0dG9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmxpZ2h0YnVsYiBzdmd7XG4gIGZpbGw6IHllbGxvdztcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5pbnN0cnVjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnN0cnVjdGlvbnMgLmJ1bGxldHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbiNwbGFjZS1zaGlwcy1ib2FyZCAuZW1wdHkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3BsYWNlLXNoaXBzLWJvYXJkIC5lbXB0eTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA1MiwgMTgwKTtcblxufVxuXG5Aa2V5ZnJhbWVzIGJsaW5raW5nLXJlZCB7XG4gICAgMCUge1xuICAgICAgY29sb3I6ICNGRkY7XG4gICAgICBib3JkZXItY29sb3I6ICNGRkY7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBjb2xvcjogdmFyKC0tcmVkKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yZWQpO1xuICAgIH1cbn1cblxuLnJlZC1ibGluayB7XG4gICAgYW5pbWF0aW9uOiBibGlua2luZy1yZWQgMXMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmtpbmctZ3JlZW4ge1xuICAgIDAlIHtcbiAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjRkZGO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7XG4gICAgfVxufVxuXG4uZ3JlZW4tYmxpbmsge1xuICAgIGFuaW1hdGlvbjogYmxpbmtpbmctZ3JlZW4gMXMgaW5maW5pdGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG5cbiAgICAubWFpbi1jb250YWluZXIsIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAyNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAjZW5lbXktYm9hcmQgLm1pc3Mgc3BhbiwgI3BsYXllci1ib2FyZCAubWlzcyBzcGFue1xuICAgICAgICBmb250LXNpemU6IDQuMnJlbTtcbiAgICB9XG4gICAgXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAqIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC5jb2x1bW5zIHNwYW4sIC5yb3dzIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cblxuICAgIC5ib2FyZCB7XG4gICAgICAgIGdhcDogMnB4O1xuICAgIH1cblxuICAgIC5zcXVhcmUge1xuICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcbiAgICAgICAgd2lkdGg6IDEuOHJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgfVxuXG4gICAgI25ldy1nYW1lIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cblxuICAgICNlbmVteS1ib2FyZCAubWlzcyBzcGFuLCAgI3BsYXllci1ib2FyZCAubWlzcyBzcGFue1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIH1cblxuICAgIC5wbGF5LWFnYWluLXdyYXBwZXIgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnBsYWNlLXNoaXBzLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTs7SUFFSSxzQkFBc0I7O0lBRXRCLCtEQUFrRDs7SUFFbEQsYUFBYTs7SUFFYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNq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OztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQ0FBa0M7O0FBRXRDOztBQUVBO0lBQ0k7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSTtNQUNFLFdBQVc7TUFDWCxrQkFBa0I7SUFDcEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQiwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTs7SUFFSTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUztRQUNULG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxhQUFhO1FBQ2IsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7UUFDZjs7SUFFSjtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzUwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuQGZvbnQtZmFjZSB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnZGVmYXVsdCc7XFxuICBcXG4gICAgc3JjOiB1cmwoJy4vZm9udC8wNEJfMzBfXy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuXFxuICAgIHN0eWxlOiBub3JtYWw7XFxuXFxuICAgIHdlaWdodDogNjAwO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ2RlZmF1bHQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZm9udC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzNkM2QzZDtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMzAzMDMwO1xcbiAgICAtLWdyZWVuOiAjMmJjNTU3O1xcbiAgICAtLXJlZDogI2UyMzYzNjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3LWdhbWUge1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNuZXctZ2FtZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01cHgpO1xcbn1cXG5cXG5tYWlue1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpXFxufVxcblxcbi5tYWluLWNvbnRhaW5lciwgLmhlYWRlci1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjBweCAxZnI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uYm9hcmQgLmNvbHVtbnMge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIC5yb3dzIHtcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQsICNwbGFjZS1zaGlwcy1ib2FyZCB7XFxuICAgIGJvcmRlcjogNHB4ICMwMDJjNjYgc29saWQ7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbiNnYW1lLWNhcHRpb24ge1xcbiAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcXG59XFxuXFxuI2dhbWUtY2FwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLWNhcHRpb24sICNlbmVteS1jYXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4jcGxheWVyLWNhcHRpb24sICNwbGF5ZXItY2FwdGlvbj5ociB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbiNlbmVteS1jYXB0aW9uLCAjZW5lbXktY2FwdGlvbj5ociB7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG5ociB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgXFxufVxcblxcbiNlbmVteS1ib2FyZCAuc3F1YXJlLCAjcGxheWVyLWJvYXJkIC5zcXVhcmUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4jZW5lbXktYm9hcmQgLmVtcHR5IHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbiNlbmVteS1ib2FyZCAuZW1wdHk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgNTIsIDE4MCk7XFxufVxcblxcbiNlbmVteS1ib2FyZCAubWlzcyBzcGFuLCAjcGxheWVyLWJvYXJkIC5taXNzIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1cHg7XFxufVxcblxcbi5lbXB0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzg5ZGE7XFxuXFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcXG59XFxuXFxuLnNoaXAtaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMzYzNjtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM4OWRhO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQsICNwbGFjZS1zaGlwcy1ib2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJjNjY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4IDVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uY2FwdGlvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jcGxheS1hZ2FpbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5LWFnYWluLXdyYXBwZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5wbGF5LWFnYWluLXdyYXBwZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNwbGFjZS1zaGlwcyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlLXNoaXBzLXdyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi5wbGFjZS1zaGlwcy13cmFwcGVyIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucGxhY2Utc2hpcHMtd3JhcHBlciAuYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmxpZ2h0YnVsYiBzdmd7XFxuICBmaWxsOiB5ZWxsb3c7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluc3RydWN0aW9ucyAuYnVsbGV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI3BsYWNlLXNoaXBzLWJvYXJkIC5lbXB0eSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3BsYWNlLXNoaXBzLWJvYXJkIC5lbXB0eTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgNTIsIDE4MCk7XFxuXFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmtpbmctcmVkIHtcXG4gICAgMCUge1xcbiAgICAgIGNvbG9yOiAjRkZGO1xcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGRjtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICB9XFxufVxcblxcbi5yZWQtYmxpbmsge1xcbiAgICBhbmltYXRpb246IGJsaW5raW5nLXJlZCAxcyBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBibGlua2luZy1ncmVlbiB7XFxuICAgIDAlIHtcXG4gICAgICBjb2xvcjogI0ZGRjtcXG4gICAgICBib3JkZXItY29sb3I6ICNGRkY7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIH1cXG59XFxuXFxuLmdyZWVuLWJsaW5rIHtcXG4gICAgYW5pbWF0aW9uOiBibGlua2luZy1ncmVlbiAxcyBpbmZpbml0ZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG5cXG4gICAgLm1haW4tY29udGFpbmVyLCAuaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDI1cHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgfVxcblxcbiAgICAjZW5lbXktYm9hcmQgLm1pc3Mgc3BhbiwgI3BsYXllci1ib2FyZCAubWlzcyBzcGFue1xcbiAgICAgICAgZm9udC1zaXplOiA0LjJyZW07XFxuICAgIH1cXG4gICAgXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgKiB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbHVtbnMgc3BhbiwgLnJvd3Mgc3BhbntcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZCB7XFxuICAgICAgICBnYXA6IDJweDtcXG4gICAgfVxcblxcbiAgICAuc3F1YXJlIHtcXG4gICAgICAgIGhlaWdodDogMS44cmVtO1xcbiAgICAgICAgd2lkdGg6IDEuOHJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICB9XFxuXFxuICAgICNuZXctZ2FtZSB7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICB9XFxuXFxuICAgICNlbmVteS1ib2FyZCAubWlzcyBzcGFuLCAgI3BsYXllci1ib2FyZCAubWlzcyBzcGFue1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAucGxheS1hZ2Fpbi13cmFwcGVyIGJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAucGxhY2Utc2hpcHMtd3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci9jb250cm9sbGVyJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5Db250cm9sbGVyLmF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOlsiR2FtZXBsYXkiLCJWaWV3IiwiQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYXR0YWNoRXZlbnRMaXN0ZW5lcnMiLCJfdGhpcyIsImdlbmVyYXRlQm9hcmQiLCJoaWRlTWFpbkNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93UGxhY2VTaGlwcyIsInNob3dPdmVybGF5IiwiaGlkZVBsYXlBZ2FpbiIsImNoYW5nZVJvdGF0aW9uIiwicmVzZXRQbGFjZVNoaXBzQm9hcmQiLCJwbGFjZWRSYW5kb21seSIsInNoaXBzUGxhY2VkIiwibGVuZ3RoIiwic3RhcnROZXdHYW1lIiwiY3JlYXRlUmFuZG9tQm9hcmQiLCJhdHRhY2hQbGFjZVNoaXBTcXVhcmVMaXN0ZW5lcnMiLCJhdHRhY2hTcXVhcmVFdmVudExpc3RlbmVycyIsIl90aGlzMiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic3F1YXJlIiwiZSIsInRhcmdldCIsInRleHRDb250ZW50IiwicGxheWVyTWFrZXNNb3ZlIiwiZGF0YXNldCIsInJvdyIsImNvbCIsIl90aGlzMyIsImN1cnJlbnRTaGlwTGVuZ3RoIiwic2hpcExlbmd0aHMiLCJzaGlwSW5kZXgiLCJpc1NoaXBQbGFjZW1lbnRWYWxpZCIsIk51bWJlciIsInBsYWNlU2hpcCIsInN0YXJ0R2FtZSIsIm9yaWVudGF0aW9uIiwicHVzaCIsImNoYW5nZU5leHRTaGlwTXNnIiwiZG9lc1NxdWFyZUhhc1NoaXAiLCJmaW5kU3F1YXJlIiwiU3RyaW5nIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJpIiwiX2RlZmluZVByb3BlcnR5IiwiZGVmYXVsdCIsIkVuZW15TG9naWMiLCJwbGF5ZXIiLCJtb3Zlc0RvbmUiLCJjbGVhck1vdmVzIiwiYXR0YWNrIiwiZW5lbXlCb2FyZCIsInNoaXBMb2NhdGlvbiIsImZpbmRTaGlwIiwiX3NoaXBMb2NhdGlvbiIsIl9zbGljZWRUb0FycmF5Iiwic2hpcFJvdyIsInNoaXBDb2wiLCJtb3ZlIiwiY2FsY3VsYXRlTW92ZSIsIl9yZWYiLCJnZXRSYW5kb21Nb3ZlIiwiX3JlZjIiLCJfdGhpcyRnZXRSYW5kb21Nb3ZlIiwiX3RoaXMkZ2V0UmFuZG9tTW92ZTIiLCJpc1N1Y2Nlc3MiLCJtYWtlTW92ZSIsImlzTW92ZURvbmVCZWZvcmUiLCJnZXRQb3NpdGlvbiIsImlzU3VuayIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIlNoaXAiLCJHYW1lYm9hcmQiLCJib2FyZCIsInNoaXBzIiwiZ2V0Qm9hcmQiLCJjbGVhckJvYXJkIiwibmV3U2hpcCIsImRvZXNOb3RIYXZlQWRqU2hpcHMiLCJwbGFjZVNoaXBzUmFuZG9tbHkiLCJvcmllbnRhdGlvbnMiLCJyYW5kb21Sb3ciLCJyYW5kb21Db2wiLCJyYW5kb21PcmllbnQiLCJyZWNpZXZlQXR0YWNrIiwiaGl0IiwiZ2V0UmVtYWluaW5nU2hpcHMiLCJyZWR1Y2UiLCJ0b3RhbCIsInNoaXAiLCJpc0dhbWVPdmVyIiwiUGxheWVyIiwiZW5lbXkiLCJlbmVteUFJIiwicGxhY2VTaGlwcyIsImdlbmVyYXRlUGxheWVyQm9hcmQiLCJnZW5lcmF0ZUVuZW15Qm9hcmQiLCJkaXNwbGF5UmVtYWluaW5nRW5lbXlTaGlwcyIsImRpc3BsYXlSZW1haW5pbmdQbGF5ZXJTaGlwcyIsImRpc3BsYXlQbGF5ZXJUdXJuIiwiaGlkZU92ZXJsYXkiLCJoaWRlUGxhY2VTaGlwcyIsInNob3dNYWluQ29udGFpbmVyIiwiZGlzcGxheVBsYXllck1vdmVSZXN1bHQiLCJkaXNwbGF5UGxheWVyV2luIiwic2hvd1BsYXlBZ2FpbiIsImRpc3BsYXlFbmVteVR1cm4iLCJzZXRUaW1lb3V0IiwiZW5lbXlNYWtlc01vdmUiLCJfR2FtZXBsYXkkZW5lbXlBSSRhdHQiLCJfR2FtZXBsYXkkZW5lbXlBSSRhdHQyIiwiZGlzcGxheUVuZW15TW92ZVJlc3VsdCIsImRpc3BsYXlFbmVteVdpbiIsImNvb3JkQXJyIiwiX3RoaXMkYm9hcmQiLCJhcHBseSIsIl90b0NvbnN1bWFibGVBcnJheSIsInRpbWVzSGl0IiwiaWQiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJpbm5lckhUTUwiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJhbW91bnQiLCJyZXN1bHQiLCJjb25jYXQiLCJyZW1vdmUiLCJ0b1N0cmluZyIsImFkZFJlZEJsaW5raW5nIiwiY2FwdGlvbiIsImFkZEdyZWVuQmxpbmtpbmciLCJ3aW5uZXIiLCJ0ZXh0IiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==