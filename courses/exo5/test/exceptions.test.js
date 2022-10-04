const { callThrowException, customSum, complexSum } = require("../exceptions");

describe("the callThrowException function", () => {
    it("throws a new error when called", () => {
        expect(() => callThrowException()).toThrow('You cannot execute this function');
    });
})

describe("the customSum function", () => {
    it("should sum up two positive numbers", () => {
        expect(customSum(6, 4)).toEqual(10);
        expect(() => customSum(2, -1)).toThrow('This sum works only with positives numbers');
    });
})

describe("the complexSum function", () => {
    it("should sum up two positive numbers", () => {
        expect(complexSum(7, 3)).toEqual(10);
    });
    it("should return an error when a parameter is a negative number", () => {
        expect(() => complexSum(8, -2)).toThrow('This sum works only with positives numbers');
    });
    it("should return an error if the 2nd parameter is strictly lesser that the first one", () => {
        expect(() => complexSum(1, 5)).toThrow('This sum works only if 2nd arg < 1st arg');
    });
})