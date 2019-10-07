module.exports = function removeSpaces(string) {
    if (typeof string !== "string") throw new TypeError(`Expected String, ${typeof string} given`);
    return string.replace(/\s/g, "");
};