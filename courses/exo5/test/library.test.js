const { getBooks, getBookById, addBook, deleteBookById } = require("../library");

describe("the getBooks function", () => {
    it("should return an array of objects", () => {
        expect(getBooks()).toBeInstanceOf(Array);
    });
})

describe("the getgetBookById function", () => {
    it("should return a specified book by it's id", () => {
        expect(getBookById(0)).toBeUndefined();
        expect(getBookById(1).id).toEqual(1);
    });
})

describe("the addBook function", () => {
    it("should insert a new book in book list", () => {
        const books = getBooks();
        expect(books.find(o => o.id === 4)).toBeUndefined();

        expect(addBook(4, "La Guerre des Clans", 7)).toBeTruthy();
        expect(getBookById(4).note).toEqual(7);
    });
    it("should throw a new error if a parameter is not set", () => {
        expect(() => addBook()).toThrow('All parameters are required');
        expect(() => addBook(8)).toThrow('All parameters are required');
    });
})

describe("the deleteBookById function", () => {
    it("should remove a book from the book list", () => {
        expect(getBooks()[0].id).toEqual(1);
        expect(deleteBookById(1)).toBeTruthy();
        expect(getBookById(1)).toBeUndefined();
    });
    it("should throw a new error if the specified book doesn't exist", () => {
        expect(() => deleteBookById(0)).toThrow('Book not found');
    });
})