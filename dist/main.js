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

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap');\n\n\n@font-face {\n\n    font-family: 'default';\n  \n    src: url('./font/04B_30__.ttf') format('truetype');\n\n    style: normal;\n\n    weight: 600;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    list-style: none;\n    font-family: 'default', sans-serif;\n}\n\n:root {\n    --font-color: rgb(233, 233, 233);\n    --secondary-color: #3d3d3d;\n    --primary-color: #303030;\n    --green: #2bc557;\n    --red: #e23636;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nheader {\n    background-color: var(--secondary-color);\n    color: var(--font-color);\n    display: flex;\n    justify-content: center;\n    padding: 25px;\n    font-size: 1.2rem;\n}\n\n.header-container {\n    align-items: center;\n}\n\n#new-game {\n    padding: 10px 30px;\n    font-size: 1.4rem;\n    color: var(--font-color);\n    border: none;\n    border-radius: 5px;\n    background-color: var(--primary-color);\n    cursor: pointer;\n    transition: transform 200ms ease-in-out;\n}\n\n#new-game:hover {\n    transform: translate(0, -5px);\n}\n\nmain{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    padding-top: 50px;\n    background-color: var(--primary-color)\n}\n\n.main-container, .header-container {\n    width: 1000px;\n    display: flex;\n}\n\n.header-container {\n    justify-content: space-between;\n\n}\n\n.main-container {\n    justify-content: center;\n    gap: 20px;\n    color: var(--font-color);\n    height: 100%;\n}\n\n\n\n.board {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    grid-template-rows: 20px 1fr;\n    gap: 8px;\n}\n\n.board .columns {\n    grid-row: 1/2;\n    grid-column: 2/3;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.board .rows {\n    \n    grid-column: 1/2;\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n#player-board, #enemy-board, #place-ships-board {\n    border: 4px #002c66 solid;\n    grid-column: 2/3;\n    grid-row: 2/3;\n}\n\n#game-caption {\n    border: 2px black solid;\n}\n\n#game-caption {\n    padding: 15px;\n    width: 200px;\n    text-align: center;\n}\n\n#player-caption, #enemy-caption {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 1.2rem;\n    padding-top: 10px;\n}\n\n#player-caption, #player-caption>hr {\n    color: var(--green);\n}\n\n#enemy-caption, #enemy-caption>hr {\n    color: var(--red);\n}\n\nhr {\n    width: 100%;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.square {\n    height: 2.5rem;\n    width: 2.5rem;\n    font-size: 2.5rem;\n    \n}\n\n#enemy-board .square, #player-board .square {\n    text-align: center;\n    position: relative;\n    cursor: default;\n}\n\n#enemy-board .empty {\n    cursor: crosshair;\n}\n\n#enemy-board .empty:hover{\n    background-color: rgb(87, 52, 180);\n}\n\n#enemy-board .miss span, #player-board .miss span{\n    font-size: 4rem;\n    position: absolute;\n    left: 5px;\n}\n\n.empty {\n    background-color: #2389da;\n\n}\n\n.ship {\n    background-color: #808080;\n}\n\n.ship-hit {\n    background-color: #e23636;\n}\n\n.miss {\n    background-color: #2389da;\n}\n\n#player-board, #enemy-board, #place-ships-board {\n    background-color: #002c66;\n    display: grid;\n    gap: 5px 5px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.caption-wrapper {\n    display: flex;\n    align-items: center;\n}\n\n#overlay {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 2;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n#play-again {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    min-height: 100%;\n    z-index: 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.play-again-wrapper {\n    color: var(--font-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    font-size: 1.5rem;\n}\n\n.play-again-wrapper button {\n    width: 70%;\n    font-size: 1.2rem;\n    cursor: pointer;\n    padding: 10px;\n    background-color: var(--secondary-color);\n    border: none;\n    color: var(--font-color);\n    border-radius: 10px;\n}\n\n#place-ships {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 3;\n    display: flex;\n    justify-content: center;\n}\n\n.place-ships-wrapper {\n    background-color: var(--primary-color);\n    margin-top: 10px;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    padding: 0 10px;\n    color: var(--font-color);\n    max-height: 800px;\n}\n\nbutton {\n    background: none;\n    color: var(--font-color);\n    border: none;\n    cursor: pointer;\n}\n\nbutton:hover{\n    color: var(--green);\n}\n\n.place-ships-wrapper button {\n    font-size: 1.2rem;\n}\n\n.place-ships-wrapper .buttons {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n\n.lightbulb svg{\n  fill: yellow;\n  width: 30px;\n}\n\n.instructions {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n\n.instructions .bullets {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#place-ships-board .empty {\n    cursor: pointer;\n}\n\n#place-ships-board .empty:hover {\n    background-color: rgb(87, 52, 180);\n\n}\n\n@keyframes blinking-red {\n    0% {\n      color: #FFF;\n      border-color: #FFF;\n    }\n    100% {\n        color: var(--red);\n        border-color: var(--red);\n    }\n}\n\n.red-blink {\n    animation: blinking-red 1s infinite;\n}\n\n@keyframes blinking-green {\n    0% {\n      color: #FFF;\n      border-color: #FFF;\n    }\n    100% {\n        color: var(--green);\n        border-color: var(--green);\n    }\n}\n\n.green-blink {\n    animation: blinking-green 1s infinite;\n}\n\n@media only screen and (max-width: 1000px) {\n\n    .main-container, .header-container {\n        width: 100%;\n    }\n\n    .square {\n        height: 1.8rem;\n        width: 1.8rem;\n        font-size: 1.8rem;\n    }\n\n    main {\n        padding-top: 10px;\n    }\n\n    .main-container {\n        flex-direction: column;\n        align-items: center;\n        gap: 15px;\n    }\n\n    #enemy-board .miss span, #player-board .miss span{\n        font-size: 2.2rem;\n        position: absolute;\n        bottom: -10px;\n    }\n    \n}\n\n@media only screen and (max-width: 500px) {\n    * {\n        font-size: 1rem;\n    }\n\n    .columns span, .rows span{\n        font-size: 0.8rem;\n    }\n\n    .board {\n        gap: 2px;\n    }\n\n    .square {\n        height: 1rem;\n        width: 1rem;\n        font-size: 1rem;\n\n    }\n\n    #new-game {\n        padding: 5px 20px;\n        font-size: 0.9rem;\n    }\n\n    #enemy-board .miss span,  #player-board .miss span{\n        font-size: 2rem;\n        position: static;\n    }\n\n    .play-again-wrapper button {\n        width: 100%;\n    }\n\n    .place-ships-wrapper {\n        width: 100%;\n        height: 100%;\n        margin-top: 0;\n    }\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDM0M7RUFDTDtFQUFDdEQsWUFBQSxDQUFBb0QsVUFBQTtJQUFBbkQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXFELFdBQUEsRUFBYTtNQUNULElBQUksQ0FBQ0QsU0FBUyxHQUFHLENBQ2IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDM0M7SUFDTDtFQUFDO0lBQUFyRCxHQUFBO0lBQUFDLEtBQUEs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LEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxF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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxPQUFPLGlGQUFpRixhQUFhLGNBQWMsWUFBWSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZ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V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBaUQ7QUFDNUI7QUFFckJDLDhEQUFVLENBQUNLLG9CQUFvQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWwvZW5lbXlMb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVsL2dhbWVwbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWwvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWwvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXcvdmlldy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZXBsYXkgZnJvbSAnLi4vbW9kZWwvZ2FtZXBsYXknO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi4vdmlldy92aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIG9yaWVudGF0aW9uID0gJ2gnO1xuXG4gICAgc3RhdGljIHNoaXBMZW5ndGhzID0gWzQsIDMsIDMsIDIsIDIsIDEsIDEsIDFdO1xuXG4gICAgc3RhdGljIHNoaXBJbmRleCA9IDA7XG5cbiAgICBzdGF0aWMgc2hpcHNQbGFjZWQgPSBbXTtcblxuICAgIHN0YXRpYyBwbGFjZWRSYW5kb21seSA9IGZhbHNlO1xuXG4gICAgc3RhdGljIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBWaWV3LmdlbmVyYXRlQm9hcmQoJyNwbGFjZS1zaGlwcy1ib2FyZCcpO1xuICAgICAgICBWaWV3LmhpZGVNYWluQ29udGFpbmVyKCk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1nYW1lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBWaWV3LnNob3dQbGFjZVNoaXBzKCk7XG4gICAgICAgICAgICBWaWV3LnNob3dPdmVybGF5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5LWFnYWluLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgVmlldy5zaG93UGxhY2VTaGlwcygpO1xuICAgICAgICAgICAgVmlldy5oaWRlUGxheUFnYWluKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3RhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUm90YXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UGxhY2VTaGlwc0JvYXJkKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxhY2VkUmFuZG9tbHkgfHwgKHRoaXMuc2hpcHNQbGFjZWQubGVuZ3RoID09PSA4KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnROZXdHYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5kb20nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQbGFjZVNoaXBzQm9hcmQoKTtcbiAgICAgICAgICAgIEdhbWVwbGF5LmNyZWF0ZVJhbmRvbUJvYXJkKCk7XG4gICAgICAgICAgICB0aGlzLnBsYWNlZFJhbmRvbWx5ID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hdHRhY2hQbGFjZVNoaXBTcXVhcmVMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXR0YWNoU3F1YXJlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNlbmVteS1ib2FyZCAuc3F1YXJlJykuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJNYWtlc01vdmUoZS50YXJnZXQuZGF0YXNldC5yb3csIGUudGFyZ2V0LmRhdGFzZXQuY29sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGF0dGFjaFBsYWNlU2hpcFNxdWFyZUxpc3RlbmVycygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYWNlLXNoaXBzLWJvYXJkIC5zcXVhcmUnKS5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHsgcm93IH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgICAgICAgICAgIGxldCB7IGNvbCB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFNoaXBMZW5ndGggPSB0aGlzLnNoaXBMZW5ndGhzW3RoaXMuc2hpcEluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwSW5kZXggPCB0aGlzLnNoaXBMZW5ndGhzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzU2hpcFBsYWNlbWVudFZhbGlkKGN1cnJlbnRTaGlwTGVuZ3RoLCBOdW1iZXIocm93KSwgTnVtYmVyKGNvbCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwKHJvdywgY29sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHN0YXJ0TmV3R2FtZSgpIHtcbiAgICAgICAgR2FtZXBsYXkuc3RhcnRHYW1lKHRoaXMuc2hpcHNQbGFjZWQpO1xuICAgICAgICB0aGlzLmF0dGFjaFNxdWFyZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMucmVzZXRQbGFjZVNoaXBzQm9hcmQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGxheWVyTWFrZXNNb3ZlKHJvdywgY29sKSB7XG4gICAgICAgIEdhbWVwbGF5LnBsYXllck1ha2VzTW92ZShyb3csIGNvbCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHBsYWNlU2hpcChyb3csIGNvbCkge1xuICAgICAgICBWaWV3LnBsYWNlU2hpcCh0aGlzLnNoaXBMZW5ndGhzW3RoaXMuc2hpcEluZGV4XSwgcm93LCBjb2wsIHRoaXMub3JpZW50YXRpb24pO1xuICAgICAgICB0aGlzLnNoaXBzUGxhY2VkLnB1c2goW3RoaXMuc2hpcExlbmd0aHNbdGhpcy5zaGlwSW5kZXhdLFxuICAgICAgICAgICAgTnVtYmVyKHJvdyksIE51bWJlcihjb2wpLCB0aGlzLm9yaWVudGF0aW9uXSk7XG4gICAgICAgIHRoaXMuc2hpcEluZGV4ICs9IDE7XG4gICAgICAgIFZpZXcuY2hhbmdlTmV4dFNoaXBNc2codGhpcy5zaGlwTGVuZ3Roc1t0aGlzLnNoaXBJbmRleF0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBjaGFuZ2VSb3RhdGlvbigpIHtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IHRoaXMub3JpZW50YXRpb24gPT09ICdoJyA/ICd2JyA6ICdoJztcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVzZXRQbGFjZVNoaXBzQm9hcmQoKSB7XG4gICAgICAgIFZpZXcuZ2VuZXJhdGVCb2FyZCgnI3BsYWNlLXNoaXBzLWJvYXJkJyk7XG4gICAgICAgIFZpZXcuY2hhbmdlTmV4dFNoaXBNc2codGhpcy5zaGlwTGVuZ3Roc1swXSk7XG4gICAgICAgIHRoaXMuYXR0YWNoUGxhY2VTaGlwU3F1YXJlTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuc2hpcHNQbGFjZWQgPSBbXTtcbiAgICAgICAgdGhpcy5zaGlwSW5kZXggPSAwO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gJ2gnO1xuICAgICAgICB0aGlzLnBsYWNlZFJhbmRvbWx5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGRvZXNTcXVhcmVIYXNTaGlwKHJvdywgY29sKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IFZpZXcuZmluZFNxdWFyZShTdHJpbmcocm93KSwgU3RyaW5nKGNvbCksICcjcGxhY2Utc2hpcHMtYm9hcmQnKTtcbiAgICAgICAgcmV0dXJuIHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNTaGlwUGxhY2VtZW50VmFsaWQobGVuZ3RoLCByb3csIGNvbCkge1xuICAgICAgICAvLyBjaGVjayBpZiBzaGlwIGlzIG91dCBvZiBib3VuZHNcbiAgICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICd2JyAmJiAocm93ICsgbGVuZ3RoIC0gMSkgPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAnaCcgJiYgKGNvbCArIGxlbmd0aCAtIDEpID4gOSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vIGNoZWNrIGZvciBhZGphY2VudCBzaGlwc1xuICAgICAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAvLyBmb3IgaG9yaXpvbnRhbCBzaGlwXG4gICAgICAgICAgICAvLyBjaGVjayBsZWZ0XG4gICAgICAgICAgICBpZiAoY29sID4gMCAmJiB0aGlzLmRvZXNTcXVhcmVIYXNTaGlwKHJvdywgY29sIC0gMSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhYm92ZVxuICAgICAgICAgICAgICAgIGlmIChyb3cgPiAwICYmIHRoaXMuZG9lc1NxdWFyZUhhc1NoaXAocm93IC0gMSwgY29sICsgaSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBiZWxsb3dcbiAgICAgICAgICAgICAgICBpZiAocm93IDwgOSAmJiB0aGlzLmRvZXNTcXVhcmVIYXNTaGlwKHJvdyArIDEsIGNvbCArIGkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjaGVjayByaWdodFxuICAgICAgICAgICAgaWYgKChjb2wgKyBsZW5ndGgpIDwgMTAgJiYgdGhpcy5kb2VzU3F1YXJlSGFzU2hpcChyb3csIGNvbCArIGxlbmd0aCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZvciB2ZXJ0aWNhbCBzaGlwXG4gICAgICAgICAgICAvLyBjaGVjayBhYm92ZVxuICAgICAgICAgICAgaWYgKHJvdyA+IDAgJiYgdGhpcy5kb2VzU3F1YXJlSGFzU2hpcChyb3cgLSAxLCBjb2wpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgbGVmdFxuICAgICAgICAgICAgICAgIGlmIChjb2wgPiAwICYmIHRoaXMuZG9lc1NxdWFyZUhhc1NoaXAocm93ICsgaSwgY29sIC0gMSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayByaWdodFxuICAgICAgICAgICAgICAgIGlmIChjb2wgPCA5ICYmIHRoaXMuZG9lc1NxdWFyZUhhc1NoaXAocm93ICsgaSwgY29sICsgMSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNoZWNrIGJlbGxvd1xuICAgICAgICAgICAgaWYgKChyb3cgKyBsZW5ndGgpIDwgMTAgJiYgdGhpcy5kb2VzU3F1YXJlSGFzU2hpcChyb3cgKyBsZW5ndGgsIGNvbCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15TG9naWMge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5tb3Zlc0RvbmUgPSBbXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGNsZWFyTW92ZXMoKSB7XG4gICAgICAgIHRoaXMubW92ZXNEb25lID0gW1xuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBhdHRhY2soZW5lbXlCb2FyZCkge1xuICAgICAgICBsZXQgcm93ID0gbnVsbDtcbiAgICAgICAgbGV0IGNvbCA9IG51bGw7XG5cbiAgICAgICAgbGV0IHNoaXBMb2NhdGlvbiA9IHRoaXMuZmluZFNoaXAoZW5lbXlCb2FyZCk7XG5cbiAgICAgICAgaWYgKHNoaXBMb2NhdGlvbikge1xuICAgICAgICAgICAgbGV0IFtzaGlwUm93LCBzaGlwQ29sXSA9IHNoaXBMb2NhdGlvbjtcbiAgICAgICAgICAgIGxldCBtb3ZlID0gdGhpcy5jYWxjdWxhdGVNb3ZlKHNoaXBSb3csIHNoaXBDb2wpO1xuICAgICAgICAgICAgW3JvdywgY29sXSA9IG1vdmUgfHwgdGhpcy5nZXRSYW5kb21Nb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBbcm93LCBjb2xdID0gdGhpcy5nZXRSYW5kb21Nb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNTdWNjZXNzID0gdGhpcy5wbGF5ZXIubWFrZU1vdmUocm93LCBjb2wsIGVuZW15Qm9hcmQpO1xuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVzRG9uZVtyb3ddW2NvbF0gPSAnc2hpcCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVzRG9uZVtyb3ddW2NvbF0gPSAnbWlzcyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbCwgaXNTdWNjZXNzXTtcbiAgICB9XG5cbiAgICBpc01vdmVEb25lQmVmb3JlKHJvdywgY29sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVzRG9uZVtyb3ddW2NvbF0gIT09ICcnO1xuICAgIH1cblxuICAgIGZpbmRTaGlwKGVuZW15Qm9hcmQpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5tb3Zlc0RvbmUubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5tb3Zlc0RvbmUubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmVzRG9uZVtyb3ddW2NvbF0gPT09ICdzaGlwJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVuZW15Qm9hcmQuZ2V0UG9zaXRpb24ocm93LCBjb2wpLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21Nb3ZlKCkge1xuICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB3aGlsZSAodGhpcy5pc01vdmVEb25lQmVmb3JlKHJvdywgY29sKSkge1xuICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcm93LCBjb2xdO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZU1vdmUocm93LCBjb2wpIHtcbiAgICAgICAgbGV0IG1vdmUgPSBudWxsO1xuICAgICAgICAvLyBjaGVjayBsZWZ0XG4gICAgICAgIGlmIChjb2wgPiAwICYmICF0aGlzLmlzTW92ZURvbmVCZWZvcmUocm93LCBjb2wgLSAxKSkge1xuICAgICAgICAgICAgbW92ZSA9IFtyb3csIGNvbCAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIHJpZ2h0XG4gICAgICAgIGlmIChjb2wgPCA5ICYmICF0aGlzLmlzTW92ZURvbmVCZWZvcmUocm93LCBjb2wgKyAxKSkge1xuICAgICAgICAgICAgbW92ZSA9IFtyb3csIGNvbCArIDFdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIHVwXG4gICAgICAgIGlmIChyb3cgPiAwICYmICF0aGlzLmlzTW92ZURvbmVCZWZvcmUocm93IC0gMSwgY29sKSkge1xuICAgICAgICAgICAgbW92ZSA9IFtyb3cgLSAxLCBjb2xdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGRvd25cbiAgICAgICAgaWYgKHJvdyA8IDkgJiYgIXRoaXMuaXNNb3ZlRG9uZUJlZm9yZShyb3cgKyAxLCBjb2wpKSB7XG4gICAgICAgICAgICBtb3ZlID0gW3JvdyArIDEsIGNvbF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vdmU7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIH1cblxuICAgIGdldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICB9XG5cbiAgICBjbGVhckJvYXJkKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbikge1xuICAgICAgICBpZiAoISh0aGlzLmJvYXJkW3Jvd11bY29sXSBpbnN0YW5jZW9mIFNoaXApKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gbmV3U2hpcDtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sICsgaV0gPSBuZXdTaGlwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JvdyArIGldW2NvbF0gPSBuZXdTaGlwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvZXNOb3RIYXZlQWRqU2hpcHMobGVuZ3RoLCByb3csIGNvbCwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgIC8vIGZvciBob3Jpem9udGFsIHNoaXBcbiAgICAgICAgICAgIC8vIGNoZWNrIGxlZnRcbiAgICAgICAgICAgIGlmIChjb2wgPiAwICYmIHRoaXMuYm9hcmRbcm93XVtjb2wgLSAxXSAhPT0gJycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhYm92ZVxuICAgICAgICAgICAgICAgIGlmIChyb3cgPiAwICYmIHRoaXMuYm9hcmRbcm93IC0gMV1bY29sICsgaV0gIT09ICcnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYmVsbG93XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IDkgJiYgdGhpcy5ib2FyZFtyb3cgKyAxXVtjb2wgKyBpXSAhPT0gJycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNoZWNrIHJpZ2h0XG4gICAgICAgICAgICBpZiAoKGNvbCArIGxlbmd0aCkgPCAxMCAmJiB0aGlzLmJvYXJkW3Jvd11bY29sICsgbGVuZ3RoXSAhPT0gJycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZvciB2ZXJ0aWNhbCBzaGlwXG4gICAgICAgICAgICAvLyBjaGVjayBhYm92ZVxuICAgICAgICAgICAgaWYgKHJvdyA+IDAgJiYgdGhpcy5ib2FyZFtyb3cgLSAxXVtjb2xdICE9PSAnJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGxlZnRcbiAgICAgICAgICAgICAgICBpZiAoY29sID4gMCAmJiB0aGlzLmJvYXJkW3JvdyArIGldW2NvbCAtIDFdICE9PSAnJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIHJpZ2h0XG4gICAgICAgICAgICAgICAgaWYgKGNvbCA8IDkgJiYgdGhpcy5ib2FyZFtyb3cgKyBpXVtjb2wgKyAxXSAhPT0gJycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNoZWNrIGJlbGxvd1xuICAgICAgICAgICAgaWYgKChyb3cgKyBsZW5ndGgpIDwgMTAgJiYgdGhpcy5ib2FyZFtyb3cgKyBsZW5ndGhdW2NvbF0gIT09ICcnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs0LCAzLCAzLCAyLCAyLCAxLCAxLCAxXTtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb25zID0gWydoJywgJ3YnXTtcbiAgICAgICAgc2hpcExlbmd0aHMuZm9yRWFjaCgobGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tUm93O1xuICAgICAgICAgICAgbGV0IHJhbmRvbUNvbDtcbiAgICAgICAgICAgIGxldCByYW5kb21PcmllbnQ7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICByYW5kb21Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgcmFuZG9tT3JpZW50ID0gb3JpZW50YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tT3JpZW50ID09PSAndicgJiYgKHJhbmRvbVJvdyArIGxlbmd0aCAtIDEpID4gOSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbU9yaWVudCA9PT0gJ2gnICYmIChyYW5kb21Db2wgKyBsZW5ndGggLSAxKSA+IDkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy5nZXRQb3NpdGlvbihyYW5kb21Sb3csIHJhbmRvbUNvbCkgPT09ICcnKVxuICAgICAgICAgICAgICAgICYmIHRoaXMuZG9lc05vdEhhdmVBZGpTaGlwcyhsZW5ndGgsIHJhbmRvbVJvdywgcmFuZG9tQ29sLCByYW5kb21PcmllbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwKGxlbmd0aCwgcmFuZG9tUm93LCByYW5kb21Db2wsIHJhbmRvbU9yaWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKHJvdywgY29sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICB9XG5cbiAgICByZWNpZXZlQXR0YWNrKHJvdywgY29sKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtyb3ddW2NvbF0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS5oaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSAhPT0gJ21pc3NlZCcpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gJ21pc3NlZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSZW1haW5pbmdTaGlwcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHMucmVkdWNlKCh0b3RhbCwgc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b3RhbDtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgaXNHYW1lT3ZlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi4vdmlldy92aWV3JztcbmltcG9ydCBFbmVteUxvZ2ljIGZyb20gJy4vZW5lbXlMb2dpYyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXBsYXkge1xuICAgIHN0YXRpYyBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG5cbiAgICBzdGF0aWMgZW5lbXkgPSBuZXcgUGxheWVyKCk7XG5cbiAgICBzdGF0aWMgZW5lbXlBSSA9IG5ldyBFbmVteUxvZ2ljKEdhbWVwbGF5LmVuZW15KTtcblxuICAgIHN0YXRpYyBzdGFydEdhbWUoc2hpcHMpIHtcbiAgICAgICAgR2FtZXBsYXkuZW5lbXkuY2xlYXJCb2FyZCgpO1xuICAgICAgICBHYW1lcGxheS5lbmVteUFJLmNsZWFyTW92ZXMoKTtcbiAgICAgICAgaWYgKHNoaXBzLmxlbmd0aCA9PT0gOCkge1xuICAgICAgICAgICAgR2FtZXBsYXkucGxheWVyLmNsZWFyQm9hcmQoKTtcbiAgICAgICAgICAgIEdhbWVwbGF5LnBsYXllci5wbGFjZVNoaXBzKHNoaXBzKTtcbiAgICAgICAgfVxuICAgICAgICBHYW1lcGxheS5lbmVteS5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICAgICAgVmlldy5nZW5lcmF0ZVBsYXllckJvYXJkKHRoaXMucGxheWVyLmdldEJvYXJkKCkpO1xuICAgICAgICBWaWV3LmdlbmVyYXRlRW5lbXlCb2FyZCgpO1xuICAgICAgICBWaWV3LmRpc3BsYXlSZW1haW5pbmdFbmVteVNoaXBzKHRoaXMuZW5lbXkuZ2V0UmVtYWluaW5nU2hpcHMoKSk7XG4gICAgICAgIFZpZXcuZGlzcGxheVJlbWFpbmluZ1BsYXllclNoaXBzKHRoaXMucGxheWVyLmdldFJlbWFpbmluZ1NoaXBzKCkpO1xuICAgICAgICBWaWV3LmRpc3BsYXlQbGF5ZXJUdXJuKCk7XG4gICAgICAgIFZpZXcuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgVmlldy5oaWRlUGxheUFnYWluKCk7XG4gICAgICAgIFZpZXcuaGlkZVBsYWNlU2hpcHMoKTtcbiAgICAgICAgVmlldy5zaG93TWFpbkNvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBwbGF5ZXJNYWtlc01vdmUocm93LCBjb2wpIHtcbiAgICAgICAgY29uc3QgaXNTdWNjZXNzID0gR2FtZXBsYXkucGxheWVyLm1ha2VNb3ZlKHJvdywgY29sLCBHYW1lcGxheS5lbmVteS5nZXRCb2FyZCgpKTtcbiAgICAgICAgVmlldy5kaXNwbGF5UGxheWVyTW92ZVJlc3VsdChyb3csIGNvbCwgaXNTdWNjZXNzKTtcbiAgICAgICAgVmlldy5kaXNwbGF5UmVtYWluaW5nRW5lbXlTaGlwcyhHYW1lcGxheS5lbmVteS5nZXRSZW1haW5pbmdTaGlwcygpKTtcbiAgICAgICAgaWYgKEdhbWVwbGF5LmVuZW15LmlzR2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgVmlldy5kaXNwbGF5UGxheWVyV2luKCk7XG4gICAgICAgICAgICBWaWV3LnNob3dPdmVybGF5KCk7XG4gICAgICAgICAgICBWaWV3LnNob3dQbGF5QWdhaW4oJ3AnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzU3VjY2Vzcykge1xuICAgICAgICAgICAgVmlldy5kaXNwbGF5RW5lbXlUdXJuKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KEdhbWVwbGF5LmVuZW15TWFrZXNNb3ZlLCA1MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGVuZW15TWFrZXNNb3ZlKCkge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbCwgaXNTdWNjZXNzXSA9IEdhbWVwbGF5LmVuZW15QUkuYXR0YWNrKEdhbWVwbGF5LnBsYXllci5nZXRCb2FyZCgpKTtcbiAgICAgICAgICAgIFZpZXcuZGlzcGxheUVuZW15TW92ZVJlc3VsdChyb3csIGNvbCwgaXNTdWNjZXNzKTtcbiAgICAgICAgICAgIFZpZXcuZGlzcGxheVJlbWFpbmluZ1BsYXllclNoaXBzKEdhbWVwbGF5LnBsYXllci5nZXRSZW1haW5pbmdTaGlwcygpKTtcbiAgICAgICAgICAgIGlmIChHYW1lcGxheS5wbGF5ZXIuaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICAgICAgVmlldy5kaXNwbGF5RW5lbXlXaW4oKTtcbiAgICAgICAgICAgICAgICBWaWV3LnNob3dPdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgVmlldy5zaG93UGxheUFnYWluKCdlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBWaWV3LmRpc3BsYXlQbGF5ZXJUdXJuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlUmFuZG9tQm9hcmQoKSB7XG4gICAgICAgIEdhbWVwbGF5LnBsYXllci5jbGVhckJvYXJkKCk7XG4gICAgICAgIEdhbWVwbGF5LnBsYXllci5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICAgICAgVmlldy5nZW5lcmF0ZUJvYXJkKCcjcGxhY2Utc2hpcHMtYm9hcmQnLCBHYW1lcGxheS5wbGF5ZXIuZ2V0Qm9hcmQoKSk7XG4gICAgICAgIFZpZXcuY2hhbmdlTmV4dFNoaXBNc2coKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgfVxuXG4gICAgZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgIH1cblxuICAgIGNsZWFyQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuY2xlYXJCb2FyZCgpO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcHMoY29vcmRBcnIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5wbGFjZVNoaXAoLi4uY29vcmRBcnJbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xuICAgICAgICB0aGlzLmJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgIH1cblxuICAgIG1ha2VNb3ZlKHJvdywgY29sLCBlbmVteUJvYXJkKSB7XG4gICAgICAgIGVuZW15Qm9hcmQucmVjaWV2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgICAgIGlmIChlbmVteUJvYXJkLmdldFBvc2l0aW9uKHJvdywgY29sKSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRSZW1haW5pbmdTaGlwcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0UmVtYWluaW5nU2hpcHMoKTtcbiAgICB9XG5cbiAgICBpc0dhbWVPdmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5pc0dhbWVPdmVyKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLnRpbWVzSGl0ID0gMDtcbiAgICB9XG5cbiAgICBoaXQgPSAoKSA9PiArK3RoaXMudGltZXNIaXQ7XG5cbiAgICBpc1N1bmsgPSAoKSA9PiB0aGlzLnRpbWVzSGl0ID49IHRoaXMubGVuZ3RoO1xufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuLi9tb2RlbC9nYW1lYm9hcmQnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi4vbW9kZWwvc2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICAgIHN0YXRpYyBnZW5lcmF0ZUJvYXJkKGlkLCBib2FyZCA9IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LnJvdyA9IHJvdztcbiAgICAgICAgICAgICAgICBzcXVhcmUuZGF0YXNldC5jb2wgPSBjb2w7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkICYmIGJvYXJkLmdldEJvYXJkKClbcm93XVtjb2xdICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKS5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlUGxheWVyQm9hcmQoYm9hcmQpIHtcbiAgICAgICAgVmlldy5nZW5lcmF0ZUJvYXJkKCcjcGxheWVyLWJvYXJkJywgYm9hcmQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZW5lcmF0ZUVuZW15Qm9hcmQoYm9hcmQpIHtcbiAgICAgICAgVmlldy5nZW5lcmF0ZUJvYXJkKCcjZW5lbXktYm9hcmQnLCBib2FyZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlSZW1haW5pbmdFbmVteVNoaXBzKGFtb3VudCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5lbXktY2FwdGlvbiAudW5zaW5rZWQtc2hpcHMnKS50ZXh0Q29udGVudCA9IGFtb3VudDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheVJlbWFpbmluZ1BsYXllclNoaXBzKGFtb3VudCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLWNhcHRpb24gLnVuc2lua2VkLXNoaXBzJykudGV4dENvbnRlbnQgPSBhbW91bnQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpbmRTcXVhcmUocm93LCBjb2wsIGlkKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7aWR9IC5zcXVhcmVgKS5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIGlmIChzcXVhcmUuZGF0YXNldC5yb3cgPT09IHJvdyAmJiBzcXVhcmUuZGF0YXNldC5jb2wgPT09IGNvbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNxdWFyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlQbGF5ZXJNb3ZlUmVzdWx0KHJvdywgY29sLCBpc1N1Y2Nlc3MpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gdGhpcy5maW5kU3F1YXJlKHJvdywgY29sLCAnI2VuZW15LWJvYXJkJyk7XG4gICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtaGl0Jyk7XG4gICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gJzxzcGFuPlg8L3NwYW4+JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSAnPHNwYW4+Kjwvc3Bhbj4nO1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlFbmVteU1vdmVSZXN1bHQocm93LCBjb2wsIGlzU3VjY2Vzcykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSB0aGlzLmZpbmRTcXVhcmUocm93LnRvU3RyaW5nKCksIGNvbC50b1N0cmluZygpLCAnI3BsYXllci1ib2FyZCcpO1xuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtaGl0Jyk7XG4gICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gJzxzcGFuPlg8L3NwYW4+JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSAnPHNwYW4+Kjwvc3Bhbj4nO1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFJlZEJsaW5raW5nKCkge1xuICAgICAgICBjb25zdCBjYXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtY2FwdGlvbicpO1xuICAgICAgICBjYXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2dyZWVuLWJsaW5rJyk7XG4gICAgICAgIGNhcHRpb24uY2xhc3NMaXN0LmFkZCgncmVkLWJsaW5rJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZEdyZWVuQmxpbmtpbmcoKSB7XG4gICAgICAgIGNvbnN0IGNhcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1jYXB0aW9uJyk7XG4gICAgICAgIGNhcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgncmVkLWJsaW5rJyk7XG4gICAgICAgIGNhcHRpb24uY2xhc3NMaXN0LmFkZCgnZ3JlZW4tYmxpbmsnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheVBsYXllclR1cm4oKSB7XG4gICAgICAgIFZpZXcuYWRkR3JlZW5CbGlua2luZygpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1jYXB0aW9uJykudGV4dENvbnRlbnQgPSAnWW91ciBUdXJuISc7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlFbmVteVR1cm4oKSB7XG4gICAgICAgIFZpZXcuYWRkUmVkQmxpbmtpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtY2FwdGlvbicpLnRleHRDb250ZW50ID0gJ0VuZW15XFwncyBUdXJuISc7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlQbGF5ZXJXaW4oKSB7XG4gICAgICAgIFZpZXcuYWRkR3JlZW5CbGlua2luZygpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1jYXB0aW9uJykudGV4dENvbnRlbnQgPSAnWW91ciBXb24hJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheUVuZW15V2luKCkge1xuICAgICAgICBWaWV3LmFkZFJlZEJsaW5raW5nKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLWNhcHRpb24nKS50ZXh0Q29udGVudCA9ICdZb3UgTG9zdC4uLic7XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGVPdmVybGF5KCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzaG93T3ZlcmxheSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd1BsYXlBZ2Fpbih3aW5uZXIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXktYWdhaW4nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IHdpbm5lciA9PT0gJ3AnID8gJ1lvdSB3b24gOiknIDogJ1lvdSBsb3N0IDooJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXktYWdhaW4gI3Jlc3VsdC1tc2cnKS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGVQbGF5QWdhaW4oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5LWFnYWluJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHBsYWNlU2hpcChsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc3F1YXJlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgICAgICAgIHNxdWFyZSA9IHRoaXMuZmluZFNxdWFyZShyb3csIFN0cmluZyhOdW1iZXIoY29sKSArIGkpLCAnI3BsYWNlLXNoaXBzLWJvYXJkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZSA9IHRoaXMuZmluZFNxdWFyZShTdHJpbmcoTnVtYmVyKHJvdykgKyBpKSwgY29sLCAnI3BsYWNlLXNoaXBzLWJvYXJkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY2hhbmdlTmV4dFNoaXBNc2cobGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IG1zZyA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gJ0FsbCBzaGlwcyBwbGFjZWQhJ1xuICAgICAgICAgICAgOiBgUGxhY2UgeW91ciAke2xlbmd0aH0gc3F1YXJlIGxvbmcgc2hpcGA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwLWRlc2MnKS50ZXh0Q29udGVudCA9IG1zZztcbiAgICB9XG5cbiAgICBzdGF0aWMgaGlkZVBsYWNlU2hpcHMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZS1zaGlwcycpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzaG93UGxhY2VTaGlwcygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLXNoaXBzJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGVNYWluQ29udGFpbmVyKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd01haW5Db250YWluZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvMDRCXzMwX18udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzUwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG5cbiAgICBmb250LWZhbWlseTogJ2RlZmF1bHQnO1xuICBcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cbiAgICBzdHlsZTogbm9ybWFsO1xuXG4gICAgd2VpZ2h0OiA2MDA7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250LWZhbWlseTogJ2RlZmF1bHQnLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gICAgLS1mb250LWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMzZDNkM2Q7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMzAzMDMwO1xuICAgIC0tZ3JlZW46ICMyYmM1NTc7XG4gICAgLS1yZWQ6ICNlMjM2MzY7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbmV3LWdhbWUge1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4jbmV3LWdhbWU6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01cHgpO1xufVxuXG5tYWlue1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKVxufVxuXG4ubWFpbi1jb250YWluZXIsIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuXG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjBweCAxZnI7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5ib2FyZCAuY29sdW1ucyB7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvYXJkIC5yb3dzIHtcbiAgICBcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNwbGF5ZXItYm9hcmQsICNlbmVteS1ib2FyZCwgI3BsYWNlLXNoaXBzLWJvYXJkIHtcbiAgICBib3JkZXI6IDRweCAjMDAyYzY2IHNvbGlkO1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgZ3JpZC1yb3c6IDIvMztcbn1cblxuI2dhbWUtY2FwdGlvbiB7XG4gICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XG59XG5cbiNnYW1lLWNhcHRpb24ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3BsYXllci1jYXB0aW9uLCAjZW5lbXktY2FwdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbiNwbGF5ZXItY2FwdGlvbiwgI3BsYXllci1jYXB0aW9uPmhyIHtcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xufVxuXG4jZW5lbXktY2FwdGlvbiwgI2VuZW15LWNhcHRpb24+aHIge1xuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xufVxuXG5ociB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnNxdWFyZSB7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBcbn1cblxuI2VuZW15LWJvYXJkIC5zcXVhcmUsICNwbGF5ZXItYm9hcmQgLnNxdWFyZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbiNlbmVteS1ib2FyZCAuZW1wdHkge1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuXG4jZW5lbXktYm9hcmQgLmVtcHR5OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgNTIsIDE4MCk7XG59XG5cbiNlbmVteS1ib2FyZCAubWlzcyBzcGFuLCAjcGxheWVyLWJvYXJkIC5taXNzIHNwYW57XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1cHg7XG59XG5cbi5lbXB0eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzODlkYTtcblxufVxuXG4uc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcbn1cblxuLnNoaXAtaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIzNjM2O1xufVxuXG4ubWlzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzODlkYTtcbn1cblxuI3BsYXllci1ib2FyZCwgI2VuZW15LWJvYXJkLCAjcGxhY2Utc2hpcHMtYm9hcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJjNjY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDVweCA1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5jYXB0aW9uLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI292ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uaGlkZGVuIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNwbGF5LWFnYWluIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wbGF5LWFnYWluLXdyYXBwZXIge1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5wbGF5LWFnYWluLXdyYXBwZXIgYnV0dG9uIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jcGxhY2Utc2hpcHMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBsYWNlLXNoaXBzLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgbWF4LWhlaWdodDogODAwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XG59XG5cbi5wbGFjZS1zaGlwcy13cmFwcGVyIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5wbGFjZS1zaGlwcy13cmFwcGVyIC5idXR0b25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ubGlnaHRidWxiIHN2Z3tcbiAgZmlsbDogeWVsbG93O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmluc3RydWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmluc3RydWN0aW9ucyAuYnVsbGV0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuI3BsYWNlLXNoaXBzLWJvYXJkIC5lbXB0eSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcGxhY2Utc2hpcHMtYm9hcmQgLmVtcHR5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDUyLCAxODApO1xuXG59XG5cbkBrZXlmcmFtZXMgYmxpbmtpbmctcmVkIHtcbiAgICAwJSB7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGRjtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XG4gICAgfVxufVxuXG4ucmVkLWJsaW5rIHtcbiAgICBhbmltYXRpb246IGJsaW5raW5nLXJlZCAxcyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGlua2luZy1ncmVlbiB7XG4gICAgMCUge1xuICAgICAgY29sb3I6ICNGRkY7XG4gICAgICBib3JkZXItY29sb3I6ICNGRkY7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgICB9XG59XG5cbi5ncmVlbi1ibGluayB7XG4gICAgYW5pbWF0aW9uOiBibGlua2luZy1ncmVlbiAxcyBpbmZpbml0ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcblxuICAgIC5tYWluLWNvbnRhaW5lciwgLmhlYWRlci1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuc3F1YXJlIHtcbiAgICAgICAgaGVpZ2h0OiAxLjhyZW07XG4gICAgICAgIHdpZHRoOiAxLjhyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIH1cblxuICAgIG1haW4ge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDE1cHg7XG4gICAgfVxuXG4gICAgI2VuZW15LWJvYXJkIC5taXNzIHNwYW4sICNwbGF5ZXItYm9hcmQgLm1pc3Mgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMTBweDtcbiAgICB9XG4gICAgXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAqIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC5jb2x1bW5zIHNwYW4sIC5yb3dzIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cblxuICAgIC5ib2FyZCB7XG4gICAgICAgIGdhcDogMnB4O1xuICAgIH1cblxuICAgIC5zcXVhcmUge1xuICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICB9XG5cbiAgICAjbmV3LWdhbWUge1xuICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuXG4gICAgI2VuZW15LWJvYXJkIC5taXNzIHNwYW4sICAjcGxheWVyLWJvYXJkIC5taXNzIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB9XG5cbiAgICAucGxheS1hZ2Fpbi13cmFwcGVyIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5wbGFjZS1zaGlwcy13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7O0lBRUksc0JBQXNCOztJQUV0QiwrREFBa0Q7O0lBRWxELGFBQWE7O0lBRWIsV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQywwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJ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bUI7UUFDbkIsU0FBUztJQUNiOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixhQUFhO0lBQ2pCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlOztJQUVuQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG5AZm9udC1mYWNlIHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdkZWZhdWx0JztcXG4gIFxcbiAgICBzcmM6IHVybCgnLi9mb250LzA0Ql8zMF9fLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG5cXG4gICAgc3R5bGU6IG5vcm1hbDtcXG5cXG4gICAgd2VpZ2h0OiA2MDA7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnZGVmYXVsdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1mb250LWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjM2QzZDNkO1xcbiAgICAtLXByaW1hcnktY29sb3I6ICMzMDMwMzA7XFxuICAgIC0tZ3JlZW46ICMyYmM1NTc7XFxuICAgIC0tcmVkOiAjZTIzNjM2O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuZXctZ2FtZSB7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI25ldy1nYW1lOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTVweCk7XFxufVxcblxcbm1haW57XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcilcXG59XFxuXFxuLm1haW4tY29udGFpbmVyLCAuaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IDFmcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5ib2FyZCAuY29sdW1ucyB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQgLnJvd3Mge1xcbiAgICBcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsICNlbmVteS1ib2FyZCwgI3BsYWNlLXNoaXBzLWJvYXJkIHtcXG4gICAgYm9yZGVyOiA0cHggIzAwMmM2NiBzb2xpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuI2dhbWUtY2FwdGlvbiB7XFxuICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4jZ2FtZS1jYXB0aW9uIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXItY2FwdGlvbiwgI2VuZW15LWNhcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbiNwbGF5ZXItY2FwdGlvbiwgI3BsYXllci1jYXB0aW9uPmhyIHtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuI2VuZW15LWNhcHRpb24sICNlbmVteS1jYXB0aW9uPmhyIHtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbmhyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBcXG59XFxuXFxuI2VuZW15LWJvYXJkIC5zcXVhcmUsICNwbGF5ZXItYm9hcmQgLnNxdWFyZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbiNlbmVteS1ib2FyZCAuZW1wdHkge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuI2VuZW15LWJvYXJkIC5lbXB0eTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA1MiwgMTgwKTtcXG59XFxuXFxuI2VuZW15LWJvYXJkIC5taXNzIHNwYW4sICNwbGF5ZXItYm9hcmQgLm1pc3Mgc3BhbntcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDVweDtcXG59XFxuXFxuLmVtcHR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzODlkYTtcXG5cXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xcbn1cXG5cXG4uc2hpcC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIzNjM2O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzg5ZGE7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsICNlbmVteS1ib2FyZCwgI3BsYWNlLXNoaXBzLWJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmM2NjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1cHggNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5jYXB0aW9uLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNwbGF5LWFnYWluIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXktYWdhaW4td3JhcHBlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnBsYXktYWdhaW4td3JhcHBlciBidXR0b24ge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3BsYWNlLXNoaXBzIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGxhY2Utc2hpcHMtd3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgbWF4LWhlaWdodDogODAwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnBsYWNlLXNoaXBzLXdyYXBwZXIgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wbGFjZS1zaGlwcy13cmFwcGVyIC5idXR0b25zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubGlnaHRidWxiIHN2Z3tcXG4gIGZpbGw6IHllbGxvdztcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zIC5idWxsZXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jcGxhY2Utc2hpcHMtYm9hcmQgLmVtcHR5IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcGxhY2Utc2hpcHMtYm9hcmQgLmVtcHR5OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA1MiwgMTgwKTtcXG5cXG59XFxuXFxuQGtleWZyYW1lcyBibGlua2luZy1yZWQge1xcbiAgICAwJSB7XFxuICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjRkZGO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZCk7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIH1cXG59XFxuXFxuLnJlZC1ibGluayB7XFxuICAgIGFuaW1hdGlvbjogYmxpbmtpbmctcmVkIDFzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5raW5nLWdyZWVuIHtcXG4gICAgMCUge1xcbiAgICAgIGNvbG9yOiAjRkZGO1xcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGRjtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgfVxcbn1cXG5cXG4uZ3JlZW4tYmxpbmsge1xcbiAgICBhbmltYXRpb246IGJsaW5raW5nLWdyZWVuIDFzIGluZmluaXRlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcblxcbiAgICAubWFpbi1jb250YWluZXIsIC5oZWFkZXItY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5zcXVhcmUge1xcbiAgICAgICAgaGVpZ2h0OiAxLjhyZW07XFxuICAgICAgICB3aWR0aDogMS44cmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIH1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgI2VuZW15LWJvYXJkIC5taXNzIHNwYW4sICNwbGF5ZXItYm9hcmQgLm1pc3Mgc3BhbntcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAtMTBweDtcXG4gICAgfVxcbiAgICBcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAqIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcblxcbiAgICAuY29sdW1ucyBzcGFuLCAucm93cyBzcGFue1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkIHtcXG4gICAgICAgIGdhcDogMnB4O1xcbiAgICB9XFxuXFxuICAgIC5zcXVhcmUge1xcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgIH1cXG5cXG4gICAgI25ldy1nYW1lIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIH1cXG5cXG4gICAgI2VuZW15LWJvYXJkIC5taXNzIHNwYW4sICAjcGxheWVyLWJvYXJkIC5taXNzIHNwYW57XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWFnYWluLXdyYXBwZXIgYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5wbGFjZS1zaGlwcy13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL2NvbnRyb2xsZXInO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbkNvbnRyb2xsZXIuYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcbiJdLCJuYW1lcyI6WyJHYW1lcGxheSIsIlZpZXciLCJDb250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJhdHRhY2hFdmVudExpc3RlbmVycyIsIl90aGlzIiwiZ2VuZXJhdGVCb2FyZCIsImhpZGVNYWluQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dQbGFjZVNoaXBzIiwic2hvd092ZXJsYXkiLCJoaWRlUGxheUFnYWluIiwiY2hhbmdlUm90YXRpb24iLCJyZXNldFBsYWNlU2hpcHNCb2FyZCIsInBsYWNlZFJhbmRvbWx5Iiwic2hpcHNQbGFjZWQiLCJsZW5ndGgiLCJzdGFydE5ld0dhbWUiLCJjcmVhdGVSYW5kb21Cb2FyZCIsImF0dGFjaFBsYWNlU2hpcFNxdWFyZUxpc3RlbmVycyIsImF0dGFjaFNxdWFyZUV2ZW50TGlzdGVuZXJzIiwiX3RoaXMyIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzcXVhcmUiLCJlIiwidGFyZ2V0IiwidGV4dENvbnRlbnQiLCJwbGF5ZXJNYWtlc01vdmUiLCJkYXRhc2V0Iiwicm93IiwiY29sIiwiX3RoaXMzIiwiY3VycmVudFNoaXBMZW5ndGgiLCJzaGlwTGVuZ3RocyIsInNoaXBJbmRleCIsImlzU2hpcFBsYWNlbWVudFZhbGlkIiwiTnVtYmVyIiwicGxhY2VTaGlwIiwic3RhcnRHYW1lIiwib3JpZW50YXRpb24iLCJwdXNoIiwiY2hhbmdlTmV4dFNoaXBNc2ciLCJkb2VzU3F1YXJlSGFzU2hpcCIsImZpbmRTcXVhcmUiLCJTdHJpbmciLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImkiLCJfZGVmaW5lUHJvcGVydHkiLCJkZWZhdWx0IiwiRW5lbXlMb2dpYyIsInBsYXllciIsIm1vdmVzRG9uZSIsImNsZWFyTW92ZXMiLCJhdHRhY2siLCJlbmVteUJvYXJkIiwic2hpcExvY2F0aW9uIiwiZmluZFNoaXAiLCJfc2hpcExvY2F0aW9uIiwiX3NsaWNlZFRvQXJyYXkiLCJzaGlwUm93Iiwic2hpcENvbCIsIm1vdmUiLCJjYWxjdWxhdGVNb3ZlIiwiX3JlZiIsImdldFJhbmRvbU1vdmUiLCJfcmVmMiIsIl90aGlzJGdldFJhbmRvbU1vdmUiLCJfdGhpcyRnZXRSYW5kb21Nb3ZlMiIsImlzU3VjY2VzcyIsIm1ha2VNb3ZlIiwiaXNNb3ZlRG9uZUJlZm9yZSIsImdldFBvc2l0aW9uIiwiaXNTdW5rIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiU2hpcCIsIkdhbWVib2FyZCIsImJvYXJkIiwic2hpcHMiLCJnZXRCb2FyZCIsImNsZWFyQm9hcmQiLCJuZXdTaGlwIiwiZG9lc05vdEhhdmVBZGpTaGlwcyIsInBsYWNlU2hpcHNSYW5kb21seSIsIm9yaWVudGF0aW9ucyIsInJhbmRvbVJvdyIsInJhbmRvbUNvbCIsInJhbmRvbU9yaWVudCIsInJlY2lldmVBdHRhY2siLCJoaXQiLCJnZXRSZW1haW5pbmdTaGlwcyIsInJlZHVjZSIsInRvdGFsIiwic2hpcCIsImlzR2FtZU92ZXIiLCJQbGF5ZXIiLCJlbmVteSIsImVuZW15QUkiLCJwbGFjZVNoaXBzIiwiZ2VuZXJhdGVQbGF5ZXJCb2FyZCIsImdlbmVyYXRlRW5lbXlCb2FyZCIsImRpc3BsYXlSZW1haW5pbmdFbmVteVNoaXBzIiwiZGlzcGxheVJlbWFpbmluZ1BsYXllclNoaXBzIiwiZGlzcGxheVBsYXllclR1cm4iLCJoaWRlT3ZlcmxheSIsImhpZGVQbGFjZVNoaXBzIiwic2hvd01haW5Db250YWluZXIiLCJkaXNwbGF5UGxheWVyTW92ZVJlc3VsdCIsImRpc3BsYXlQbGF5ZXJXaW4iLCJzaG93UGxheUFnYWluIiwiZGlzcGxheUVuZW15VHVybiIsInNldFRpbWVvdXQiLCJlbmVteU1ha2VzTW92ZSIsIl9HYW1lcGxheSRlbmVteUFJJGF0dCIsIl9HYW1lcGxheSRlbmVteUFJJGF0dDIiLCJkaXNwbGF5RW5lbXlNb3ZlUmVzdWx0IiwiZGlzcGxheUVuZW15V2luIiwiY29vcmRBcnIiLCJfdGhpcyRib2FyZCIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidGltZXNIaXQiLCJpZCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImlubmVySFRNTCIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImFtb3VudCIsInJlc3VsdCIsImNvbmNhdCIsInJlbW92ZSIsInRvU3RyaW5nIiwiYWRkUmVkQmxpbmtpbmciLCJjYXB0aW9uIiwiYWRkR3JlZW5CbGlua2luZyIsIndpbm5lciIsInRleHQiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9