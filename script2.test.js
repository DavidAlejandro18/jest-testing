const findNames = require('./script2');

const mockDB = [
    "Kamron Rhodes",
    "Angelina Frank",
    "Bailee Larsen",
    "Joel Merritt",
    "Mina Ho",
    "Lily Hodge",
    "Alisha Solomon",
    "Frank Ho",
    "Cassidy Holder",
    "Mina Norman",
    "Lily Blair",
    "Adalyn Strong",
    "Lily Norman",
    "Minari Hiroko",
    "John Li",
    "May Li"
];

describe("Function that finds the names which match the search term in database", () => {
    it("Expected search result", () => {
        expect(findNames("Dylan", mockDB)).toEqual([]); // Not exist Dylan
        expect(findNames("Frank", mockDB)).toEqual(["Angelina Frank", "Frank Ho"]); // Exist Frank
    });

    it("This should handle null or undefined as input", () => {
        expect(findNames(null, mockDB)).toEqual([]);
        expect(findNames(undefined, mockDB)).toEqual([]);
    });

    it("Should not return more than 3 matches", () => {
        expect(findNames('Li', mockDB).length).toEqual(5);
    })

    it("The search is case sensitive", () => {
        expect(findNames('li', mockDB)).toEqual(["Angelina Frank", "Alisha Solomon"])
    })
});