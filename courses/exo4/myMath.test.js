const { sum, mult, div } = require("./myMath");

describe("myMath library", () => {
    it("can sum up two numbers", () => {
        expect(sum(0, -1)).toEqual(-1);
        expect(sum(5,  8)).toEqual(5 + 8);
        expect(sum(8,  9)).toEqual(8 + 9);
    })
    it("can multiply two numbers", () => {
        expect(mult(2, 6)).toEqual(2*6);
        expect(mult(0, 8)).toEqual(0);
    })
    it("can divide two numbers", () => {
        expect(div(3, 1)).toEqual(3);
        expect(div(5, 2)).toEqual(5/2);
        expect(div(8, 0)).toBe(Infinity);
    });
})