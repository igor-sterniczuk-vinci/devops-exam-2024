// TODO: Refactor validation function to follow the defined validations rules
const validation = (gamertag) => {
    const length = gamertag.length >= 8
    const hasSpecialCharacter = /[&$!è§à_]/.test(gamertag);
    return length && hasSpecialCharacter;
};

exports.isValid = validation;
