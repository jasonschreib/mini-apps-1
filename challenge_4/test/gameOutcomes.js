const chai = require('chai');
const expect = chai.expect;

const gameResult = require('../client/src/app.jsx');

describe('WinCases', () => {
  describe('HorizontalWin', () => {
    before(() => {
      const gameBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]
    });
    it ('should return true for horizontal win' () => {
      expect(gameResult.testForWin(gameBoard)).to.equal(true);
    });
  });
  describe('VerticalWin', () => {
    before(() => {
      const gameBoard = [
        [2, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0]
      ]
    });
    it ('should return true for vertical win', () => {
      expect(gameResult.testForWin(gameBoard)).to.equal(true);
    });
  });
  describe('DiagonalWin', () => {
    before(() => {
      const gameBoard = [
        [2, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]
    });
    it ('should return true for a diagonal win', () => {
      expect(gameResult.testForWin(gameBoard)).to.equal(true);
    });
  });
});
describe('TieCase', () => {
  describe('NoTie', () => {
    before (() => {
      const gameBoard = [
        [2, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]
    });
    it ('should not result in a tie', () => {
      expect(gameResult.testForTie(gameBoard)).to.equal(false);
    });
  });
  describe('Tie', () => {
    before (() => {
      const gameBoard = [
        [1, 2, 1, 2, 1, 2, 1],
        [2, 1, 2, 1, 2, 1, 2],
        [1, 2, 1, 2, 1, 2, 1],
        [2, 1, 2, 1, 2, 1, 2],
        [1, 2, 1, 2, 1, 2, 1],
        [2, 1, 2, 1, 2, 1, 2]
      ]
    });
    it ('should return true for a tie', () => {
      expect(gameResult.testForTie(gameBoard)).to.equal(true);
    });
  });
});