const { expect } = require("chai");
const { add, multiply } = require("../utils.js");

describe("Utils", () => {
  describe("Add", () => {
    it("Adds 2 of the same number", () => {
      const result = add(1, 1);
      expect(result).to.equal(2);
    });

    it("Adds 2 different numbers", () => {
      const result = add(1, 2);
      expect(result).to.equal(3);
    });

    it("Adds a positive and a negative number", () => {
      const result = add(1, -1);
      expect(result).to.equal(0);
    });

    it("Adds 2 negative numbers", () => {
      const result = add(-1, -1);
      expect(result).to.equal(-2);
    });
  });

  describe("Multiply", () => {
    it("Multiplies 2 of the same number", () => {
      const result = multiply(2, 2);
      expect(result).to.equal(4);
    });

    it("Multiplies 2 different numbers", () => {
      const result = multiply(2, 4);
      expect(result).to.equal(8);
    });

    it("Does multiply 2 negative numbers", () => {
      const result = multiply(-2, -2);
      expect(result).to.equal(4);
    });

    it("Also multiples a negative and positive number", () => {
      const result = multiply(-2, 6);
      expect(result).to.equal(-12);
    });
  });
});
