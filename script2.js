const findNames = (term, db) => {
    const matches = db.filter(names => {
        return names.includes(term);
    });

    return matches.lendth > 3 ? matches.slice(0, 3) : matches;
}

const functionNoTested = (term) => {
    return `Hello ${term}`;
}

module.exports = findNames;