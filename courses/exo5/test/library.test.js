const { getBooks } = require("../library");

describe("the getBooks function", () => {
    it.todo("should return an array of objects");
})

describe("the getgetBookById function", () => {
    it.todo("should return a specified book by it's id");
    it.todo("should return an empty object if book doesn't exist");
})

describe("the addBook function", () => {
    it.todo("should insert a new book in book list");
    it.todo("should return true if insertion is successful");
    it.todo("should throw a new error if a parameter is not set");
})

describe("the deleteBookById function", () => {
    it.todo("should remove a book from the book list");
    it.todo("should return true if the book was correctly removed");
    it.todo("should throw a new error if the specified book doesn't exist");
})