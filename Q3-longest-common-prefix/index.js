var longestCommonPrefix = function (strs) {
    // Loop through first word
    // Add letter to the commonPrefix
    // Check all words
    // If pass -> Continue the loop
    // If not pass -> remove last letter from common prefix then return it

    if (strs.length === 1) {
        return strs[0];
    }

    let firstWord = strs[0];
    let commonPrefix = [];

    for (let i = 0; i < firstWord.length; i++) {
        let currentChar = firstWord[i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== currentChar) {
                return commonPrefix.join("");
            }
        }
        commonPrefix.push(currentChar);
    }

    return commonPrefix.join("");
};