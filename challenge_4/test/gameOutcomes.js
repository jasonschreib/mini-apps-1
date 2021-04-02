const chai = require('chai');
const expect = chai.expect;

// const {testForTie, testForWin} = require('../client/src/app.jsx');

const {testForTie, testForWin} = require('./functionsToTest.js');

let gameBoard = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
let currentPlayer = null;

describe('WinCases', () => {
  describe('HorizontalWin', () => {
    before(() => {
      currentPlayer = 1;
      gameBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ];
    });
    it ('should return true for horizontal win', () => {
      console.log('curr', currentPlayer);
      expect(testForWin(gameBoard, currentPlayer)).to.equal(true);
    });
  });
  describe('VerticalWin', () => {
    before(() => {
      gameBoard = [
        [2, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0]
      ];
      currentPlayer = 2;
    });
    it ('should return true for vertical win', () => {
      expect(testForWin(gameBoard, currentPlayer)).to.equal(true);
    });
  });
  describe('DiagonalWin', () => {
    before(() => {
      gameBoard = [
        [2, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ];
      currentPlayer = 2;
    });
    it ('should return true for a diagonal win', () => {
      expect(testForWin(gameBoard,currentPlayer)).to.equal(true);
    });
  });
});
describe('TieCase', () => {
  describe('NoTie', () => {
    before (() => {
      gameBoard = [
        [2, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ];
      currentPlayer = 2;
    });
    it ('should not result in a tie', () => {
      expect(testForTie(gameBoard, currentPlayer)).to.equal(false);
    });
  });
  describe('Tie', () => {
    before (() => {
      currentPlayer = 1;
      gameBoard = [
        [1, 1, 1, 2, 2, 2, 1],
        [2, 2, 2, 1, 1, 1, 2],
        [1, 1, 1, 2, 2, 2, 1],
        [2, 2, 2, 1, 1, 1, 2],
        [2, 1, 2, 1, 2, 1, 1],
        [2, 1, 2, 1, 2, 1, 2]
      ];
    });
    it ('should return true for a tie', () => {
      expect(testForTie(gameBoard, currentPlayer)).to.equal(true);
    });
  });
});