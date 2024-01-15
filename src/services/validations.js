// TODO: Refactor validation function to follow the defined validations rules
const validation = (gamertag) => {
    const length = gamertag.length >= 8;
    const hasSpecialCharacter = /[&$!è§à_]/.test(gamertag);
    const hasANumber = /[0-9]/.test(gamertag);
    return length && hasSpecialCharacter && hasANumber;
};

exports.isValid = validation;
